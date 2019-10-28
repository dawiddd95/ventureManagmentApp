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

const rows = [
	createData('1', 'Tobiasz Konieczny', 147, 'done', '2019.10.18 11:15', '2019.10.21 11:15', '2019.10.12 15:42'),
];
 
function createData(booking, client, room, status, bookingStart, bookingEnd, createdAt) {
	return { booking, client, room, status, bookingStart, bookingEnd, createdAt };
}

function stableSort(array, cmp) {
	const stabilizedThis = array.map((el, index) => [el, index]);
	stabilizedThis.sort((a, b) => {
		const order = cmp(a[0], b[0]);
		if (order !== 0) return order;
		return a[1] - b[1];
	});
	return stabilizedThis.map(el => el[0]);
}
 

function getSorting(order, orderBy) {
	return order === 'desc' ? (a, b) => desc(a, b, orderBy) : (a, b) => -desc(a, b, orderBy);
}

function desc(a, b, orderBy) {
	if (b[orderBy] < a[orderBy]) {
	return -1;
	}
	if (b[orderBy] > a[orderBy]) {
	return 1;
	}
	return 0;
}


const EnhancedTableBody = () => {
	const classes = useStyles();
	const [order, setOrder] = React.useState('asc');
	const [orderBy, setOrderBy] = React.useState('calories');
	const [selected, setSelected] = React.useState([]);
	const [page, setPage] = React.useState(0);
	const [dense, setDense] = React.useState(false);
	const [rowsPerPage, setRowsPerPage] = React.useState(5);
 
   const handleRequestSort = (event, property) => {
     const isDesc = orderBy === property && order === 'desc';
     setOrder(isDesc ? 'asc' : 'desc');
     setOrderBy(property);
   };
 
	const handleSelectAllClick = event => {
		if (event.target.checked) {
			const newSelecteds = rows.map(n => n.name);
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
 
   const handleChangePage = (event, newPage) => {
     setPage(newPage);
   };
 
   const handleChangeRowsPerPage = event => {
     setRowsPerPage(+event.target.value);
     setPage(0);
   };
 
   const isSelected = name => selected.indexOf(name) !== -1;
 
   const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage);
 
   return (
		<div className={classes.root}>
			<Paper className={classes.paper}>
				<EnhancedTableToolbar numSelected={selected.length} />
				<div className={classes.tableWrapper}>
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
							rowCount={rows.length}
						/>
						<TableBody>
							{stableSort(rows, getSorting(order, orderBy))
							.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
							.map((row, index) => {
								const isItemSelected = isSelected(row.name);
								const labelId = `enhanced-table-checkbox-${index}`;
		
								return (
									<TableRow
										key={uuid.v4()}
										hover
										onClick={event => handleClick(event, row.name)}
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
											{row.booking}
										</TableCell>
										<TableCell padding="none">{row.client}</TableCell>
										<TableCell padding="none">{row.room}</TableCell>
										<TableCell padding="none">{row.status}</TableCell>
										<TableCell padding="none">{row.bookingStart}</TableCell>
										<TableCell padding="none">{row.bookingEnd}</TableCell>
										<TableCell padding="none">{row.createdAt}</TableCell>
									</TableRow>
								);
							})}
							{emptyRows > 0 && (
							<TableRow style={{ height: (dense ? 33 : 53) * emptyRows }}>
								<TableCell colSpan={10} />
							</TableRow>
							)}
						</TableBody>
					</Table>
				</div>
				<TablePagination
					rowsPerPageOptions={[5, 10, 25]}
					component="div"
					count={rows.length}
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