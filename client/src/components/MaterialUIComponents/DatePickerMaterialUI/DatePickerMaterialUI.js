import 'date-fns';
import React from 'react';
import DateFnsUtils from '@date-io/date-fns';
import {withStyles} from '@material-ui/core/styles';
import {MuiPickersUtilsProvider, KeyboardDatePicker} from '@material-ui/pickers';
import colors from '../../../assets/colors';

export default function MaterialUIPickers({label, name}) {
  // The first commit of Material-UI
	// const [selectedDate, setSelectedDate] = React.useState(
	// 	new Date().toJSON().slice(0,10).replace(/-/g,'/')
	// );

	// const handleDateChange = date => {
	// 	setSelectedDate(date);
	// };

//   const CSSKeyboardDatePicker = withStyles({
// 		root: {
// 			'& input': {
// 				width: '80px',
// 				color: colors.black85
// 			},
// 			'& label.Mui-focused': {
// 				color: colors.redColor,
// 			},
// 			'& .MuiOutlinedInput-root': {
// 				'& fieldset': {
// 					borderColor: colors.silverColor,
// 				},
// 				'&:hover fieldset': {
// 					borderColor: colors.hoverRedColor,
// 				},
// 				'&.Mui-focused fieldset': {
// 					border: `1px solid ${colors.redColor}`,
// 				},
// 			},
// 		},
// 	})(KeyboardDatePicker);
  

//   return (
// 		<MuiPickersUtilsProvider utils={DateFnsUtils}>
// 			<CSSKeyboardDatePicker
// 				inputVariant="outlined"
// 				format="dd/MM/yyyy"
// 				margin="normal"
// 				id="date-picker-inline"
// 				label={label}
// 				value={selectedDate}
// 				onChange={handleDateChange}
// 				KeyboardButtonProps={{
// 				'aria-label': 'change date',
// 				}}
// 			/>
// 		</MuiPickersUtilsProvider>
//   );

	const [selectedDate, setSelectedDate] = React.useState(new Date('2014-08-18T21:11:54'));

	const handleDateChange = date => {
		setSelectedDate(date);
	};

	return (
		<MuiPickersUtilsProvider utils={DateFnsUtils}>
			<KeyboardDatePicker
				inputVariant="outlined"
				margin="normal"
				id="date-picker-dialog"
				name={name}
				format="MM/dd/yyyy"
				value={selectedDate}
				onChange={handleDateChange}
				KeyboardButtonProps={{
				'aria-label': 'change date',
				}}
			/>
		</MuiPickersUtilsProvider>
	)
}