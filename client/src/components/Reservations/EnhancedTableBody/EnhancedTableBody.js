import React from 'react';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';
import uuid from 'uuid';

import EnhancedTableToolbar from '../EnhancedTableToolbar/EnhancedTableToolbar';
import EnhancedTableHead from '../EnhancedTableHead/EnhancedTableHead';

import useStyles from './StyledEnhancedTableBody';




// Z liniami dodajemy do tabeli reszta będzie widoczna po view
// Dodawanie nowej pozycji i tak musi być w redux

// 1B. Zrobić wyszukiwanie by zwracało tylko niektóre 
// 2. Pozamieniać funkcjonalnosci by wszystko ogarniało jak prędzej
// 3. Refaktoryzacja tego komponentu
const EnhancedTableBody = ({userReservations}) => {
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	// rozroznia id działa
	const [orderBy, setOrderBy] = React.useState('id');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);


	const rows = [
		userReservations.map(currentElement => (
			createData(
				currentElement.id,
				currentElement.client, 
				currentElement.reservationStartDate, 
				currentElement.reservationStartTime, 
				currentElement.reservationEndDate, 
				currentElement.reservationEndTime, 
				currentElement.room, 
				currentElement.status, 
				currentElement.createdAt
			)
		))
	];
	
	function createData(
		id, 
		client, 
		reservationStartDate, 
		reservationStartTime, 
		reservationEndDate, 
		reservationEndTime, 
		room, 
		status, 
		createdAt
	) {
		return { 
			id, 
			client, 
			reservationStartDate, 
			reservationStartTime, 
			reservationEndDate, 
			reservationEndTime, 
			room, 
			status, 
			createdAt 
		};
	}



   const handleRequestSort = (event, property) => {
     const isDesc = orderBy === property && order === 'desc';
     setOrder(isDesc ? 'asc' : 'desc');
     setOrderBy(property);
   };
 
	// To działa
	const handleSelectAllClick = event => {
		if (event.target.checked) {
			const newSelecteds = rows[0].map(n => n.name);
			setSelected(newSelecteds);
			return;
		}
		setSelected([]);
	};
 
   const handleClick = (event, name) => {
		const selectedIndex = selected.indexOf(name);
		let newSelected = [];
	
		if (selectedIndex === -1) {
			newSelected = newSelected.concat(selected, name);
		} else if (selectedIndex === 0) {
			newSelected = newSelected.concat(selected.slice(1));
		} else if (selectedIndex === selected.length - 1) {
			newSelected = newSelected.concat(selected.slice(0, -1));
		} else if (selectedIndex > 0) {
			newSelected = newSelected.concat(
				selected.slice(0, selectedIndex),
				selected.slice(selectedIndex + 1),
			);
		}
 
     	setSelected(newSelected);
   };
 
	// dziala
   const handleChangePage = (event, newPage) => {
     setPage(newPage);
   };
 
   const handleChangeRowsPerPage = event => {
     setRowsPerPage(+event.target.value);
     setPage(0);
   };
 
   const isSelected = name => {
		console.log(selected.indexOf(name))
		return selected.indexOf(name) !== -1;
	}
 
	// dziala
   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows[0].length - page * rowsPerPage);
 

   return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<EnhancedTableToolbar numSelected={selected.length} />
				<div className={classes.tableWrapper}>
					{/* Start Table */}
					<Table
						className={classes.table}
						aria-labelledby="tableTitle"
						size={dense ? 'small' : 'medium'}
						aria-label="enhanced table"
					>
						<EnhancedTableHead
							classes={classes}
							numSelected={selected.length}
							order={order}
							orderBy={orderBy}
							onSelectAllClick={handleSelectAllClick}
							onRequestSort={handleRequestSort}
							rowCount={rows[0].length}
						/>

						{/* Start Table Body */}
						<TableBody>
							{stableSort(rows, getSorting(order, orderBy))
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row, index) => {
								const isItemSelected = isSelected(row.name);
								const labelId = `enhanced-table-checkbox-${index}`;
		
								return (
									<>
										{userReservations.map(row => {
											return (
												<TableRow
													key={uuid.v4()}
													hover
													onClick={event => handleClick(event, row.client)}
													role="checkbox"
													aria-checked={isItemSelected}
													tabIndex={-1}
													selected={isItemSelected}
												>
													<TableCell padding="checkbox">
														<Checkbox
															checked={isItemSelected}
															inputProps={{ 'aria-labelledby': labelId }}
														/>
													</TableCell>			
													<TableCell component="th" id={labelId} scope="row" padding="none">
														{row.id}
													</TableCell>
													<TableCell padding="none">{row.client}</TableCell>
													<TableCell padding="none">{row.room}</TableCell>
													<TableCell padding="none">{row.status}</TableCell>
													<TableCell padding="none">
														{row.reservationStartDate} {row.reservationStartTime}
													</TableCell>
													<TableCell padding="none">
														{row.reservationEndDate} {row.reservationEndTime}
													</TableCell>
													<TableCell padding="none">
														{row.createdAt}
													</TableCell>
												</TableRow>
											)
										})}
									</>
								);
							})}
							{emptyRows > 0 && (
							<TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
								<TableCell colSpan={10} />
							</TableRow>
							)}
						</TableBody>
						{/* End Table Body */}


					</Table>
					{/* End Table */}
				</div>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows[0].length}
					rowsPerPage={rowsPerPage}
					page={page}
					backIconButtonProps={{
						'aria-label': 'previous page',
					}}
					nextIconButtonProps={{
						'aria-label': 'next page',
					}}
					onChangePage={handleChangePage}
					onChangeRowsPerPage={handleChangeRowsPerPage}
				/>
			</Paper>
		</div>
   );
}

export default EnhancedTableBody;