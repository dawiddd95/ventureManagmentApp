import React from 'react';
import 'date-fns';
import Grid from '@material-ui/core/Grid';
import DateFnsUtils from '@date-io/date-fns';
import {
  MuiPickersUtilsProvider,
  KeyboardTimePicker,
  KeyboardDatePicker,
} from '@material-ui/pickers';

// Stylowanie komponentów material UI

// 1/4 Importujemy makeStyles
import { makeStyles } from '@material-ui/core/styles';

// 2/4 Tworzymy zmienną useStyles do
const useStyles = makeStyles(theme => ({
	formControl: {
		margin: 0,
		border: '1px solid green',
		root: {
			border: '1px solid red'
		}
	}
}));



const MaterialUIPickers = () => {
	const classes = useStyles();
	// The first commit of Material-UI
	const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

	const handleDateChange = date => {
		setSelectedDate(date);
	};
	
	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
				<KeyboardDatePicker
					disableToolbar
					variant="outlined"
					format="yyyy/MM/dd"
					margin="normal"
					id="date-picker-inline"
					// Wyłączanie underline
					InputProps={{disableUnderline: true, error: false}}
					// label="Date picker inline"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
					classes={{
						root: classes.formControl
					}}
				/>
				{/* <KeyboardDatePicker
					margin="normal"
					id="date-picker-dialog"
					label="Date picker dialog"
					format="MM/dd/yyyy"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change date',
					}}
				/>
				<KeyboardTimePicker
					margin="normal"
					id="time-picker"
					label="Time picker"
					value={selectedDate}
					onChange={handleDateChange}
					KeyboardButtonProps={{
						'aria-label': 'change time',
					}}
				/> */}
		</MuiPickersUtilsProvider>
	);
}

export default MaterialUIPickers;