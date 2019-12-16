import colors from '../../../assets/colors';

export const singleSelectStyles = {
   control: styles => ({ 
      ...styles, 
      backgroundColor: 'white', 
      boxShadow: 'none',
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
}