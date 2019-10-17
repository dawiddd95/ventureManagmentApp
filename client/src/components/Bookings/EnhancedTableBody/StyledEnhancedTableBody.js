import {makeStyles} from '@material-ui/core/styles';
import colors from '../../../assets/colors';

const useStyles = makeStyles(theme => ({
   root: {
      width: '100%',
      fontFamily: 'segoe',
      color: colors.black65,
      marginTop: theme.spacing(3), 
   },
   paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
      border: '1px solid #D9D9D9',
      boxShadow: 'none'
   },
   table: {
      minWidth: 750,
   },
   tableWrapper: {
      overflowX: 'auto',
   },
   visuallyHidden: {
      border: 0,
      clip: 'rect(0 0 0 0)',
      height: 1,
      margin: -1,
      overflow: 'hidden',
      padding: 0,
      position: 'absolute',
      top: 20,
      width: 1,
   },
}));

export default useStyles;