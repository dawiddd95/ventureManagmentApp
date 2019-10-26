import React from 'react';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Checkbox from '@material-ui/core/Checkbox';
import TableSortLabel from '@material-ui/core/TableSortLabel';

import StyledTableCell from './StyledEnhancedTableHead';
 
const headCells = [
	{ id: 'reservation', numeric: false, disablePadding: true, label: 'Reservation ID' },
	{ id: 'client', numeric: true, disablePadding: false, label: 'Client' },
	{ id: 'room', numeric: true, disablePadding: false, label: 'Room' },
	{ id: 'status', numeric: false, disablePadding: false, label: 'Status' },
	{ id: 'startReservation', numeric: false, disablePadding: false, label: 'Start Reservation' },
	{ id: 'endReservation', numeric: false, disablePadding: false, label: 'End Reservation' },
	{ id: 'createdAt', numeric: false, disablePadding: false, label: 'Created At Date' },
];
 
const EnhancedTableHead = (props) => {
	const { classes, onSelectAllClick, order, orderBy, numSelected, rowCount, onRequestSort } = props;
	
	const createSortHandler = property => event => {
		onRequestSort(event, property);
	};

	return (
		<TableHead>
			<TableRow>
				<StyledTableCell padding="checkbox">
				<Checkbox
					indeterminate={numSelected > 0 && numSelected < rowCount}
					checked={numSelected === rowCount}
					onChange={onSelectAllClick}
					inputProps={{ 'aria-label': 'select all desserts' }}
				/>
				</StyledTableCell>
				{headCells.map(headCell => (
				<StyledTableCell
					key={headCell.id}
					align='left'
					padding='none'
					sortDirection={orderBy === headCell.id ? order : false}
				>
					<TableSortLabel
						active={orderBy === headCell.id}
						direction={order}
						onClick={createSortHandler(headCell.id)}
					>
						{headCell.label}
						{orderBy === headCell.id ? (
						<span className={classes.visuallyHidden}>
							{order === 'desc' ? 'sorted descending' : 'sorted ascending'}
						</span>
						) : null}
					</TableSortLabel>
				</StyledTableCell>
				))}
			</TableRow>
		</TableHead>
	);
}

export default EnhancedTableHead;