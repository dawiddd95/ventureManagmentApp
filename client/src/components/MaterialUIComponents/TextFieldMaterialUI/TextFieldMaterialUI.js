import React from 'react';
import StyledTextField from './styles';

const TextFieldMaterialUI = ({label, name}) => {
   return (  
      <StyledTextField
        id="outlined-dense"
        margin="dense"
		  variant="outlined"
		  name={name}
      /> 
   );
}
 
export default TextFieldMaterialUI;