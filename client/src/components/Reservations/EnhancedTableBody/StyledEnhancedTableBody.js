import {makeStyles} from '@material-ui/core/styles';
import colors from '../../../assets/colors';

const useStyles = makeStyles(theme => ({
   root: {
      width: '100%',
      fontFamily: 'segoe',
      color: colors.black65,
      marginTop: theme.spacing(3), 
      '& .makeStyles-actions-70': {
			margin: '0 100% 0 10px',
      },
   },
   paper: {
      width: '100%',
      marginBottom: theme.spacing(2),
      boxShadow: 'none'
   },
   table: {
      minWidth: 750,
      height: '100%',
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