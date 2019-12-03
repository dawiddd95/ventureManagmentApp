import colors from '../../../assets/colors';

export const multiSelectStyles = {
   control: styles => ({ 
      ...styles, 
      backgroundColor: 'white', 
      ':hover': {	
         transition: '0.3s',
         border: `1px solid ${colors.redColor}`,
      },
      ':active': {	
         transition: '0.3s',
         border: `1px solid ${colors.redColor}`,
      },
   }),
   option: styles => {
      return {
         ...styles,
         padding: '5px',
         backgroundColor: 'white',
         color: colors.black85,
         cursor: 'default',
         ':hover': { backgroundColor: '#FFF1F0' }
      }
   },
   multiValue: styles => {
      return {
         ...styles,
         backgroundColor: '#fafafa',
         padding: '2px 5px',
         border: `1px solid ${colors.silverColor}`,
         borderRadius: '4px', 
      };
   },
   multiValueRemove: styles => ({
      ...styles,
      color: colors.black85,
      margin: '0 0 0 7px',
      cursor: 'pointer',
      ':hover': {
         backgroundColor: colors.hoverRedColor,
         color: 'white',
      },
   }),
}