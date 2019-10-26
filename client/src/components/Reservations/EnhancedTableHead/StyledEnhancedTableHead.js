import {withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import colors from '../../../assets/colors';

const StyledTableCell = withStyles(theme => ({
	root: {
		
	},
	head: {
		backgroundColor: colors.hoverRedColor,
		color: colors.black85,
		fontWeight: 600,
		fontSize: '12px',
		color: 'white',
	},
	body: {
		
	},
}))(TableCell);
 
export default StyledTableCell;