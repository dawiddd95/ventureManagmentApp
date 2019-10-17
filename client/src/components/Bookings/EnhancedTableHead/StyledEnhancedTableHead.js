import {withStyles} from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';

import colors from '../../../assets/colors';

const StyledTableCell = withStyles(theme => ({
   head: {
     backgroundColor: '#F9F9F9',
     color: colors.black85,
   },
   body: {
     fontSize: 14,
   },
}))(TableCell);
 
export default StyledTableCell;