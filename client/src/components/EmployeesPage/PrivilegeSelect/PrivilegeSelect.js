import React from 'react';
import Select from 'react-select';

import * as S from './StyledPrivilegeSelect';

const PrivilegeSelect = ({label}) => {
   const [value, setValue] = React.useState('');

   const handleOnChange = (event) => {
      setValue(event.target.value);
   }

   return (  
         <S.Element>
            <S.ElementLabel>
               {label}:
            </S.ElementLabel>
            <S.Select onChange={handleOnChange}>
               <option value=''></option>
               <option value={true}>Yes</option>
               <option value={false}>No</option>
            </S.Select>
         </S.Element> 
   );
}
 
export default PrivilegeSelect;
