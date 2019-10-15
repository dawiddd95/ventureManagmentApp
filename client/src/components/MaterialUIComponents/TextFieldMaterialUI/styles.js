import TextField from '@material-ui/core/TextField';
import {withStyles} from '@material-ui/core/styles';
import colors from '../../../assets/colors';

const StyledTextField = withStyles({
   root: {
      width: '72%',
      marginTop: '30px',
      '& label.Mui-focused': {
         color: colors.redColor,
      },
      '& .MuiOutlinedInput-root': {
         height: '40px',
         paddingTop: '5px',
         '& fieldset': {
            borderColor: colors.silverColor,
         },
         '&:hover fieldset': {
            borderColor: colors.hoverRedColor,
         },
         '&.Mui-focused fieldset': {
            border: `1px solid ${colors.redColor}`,
         },
      },
   },
})(TextField);

export default StyledTextField;