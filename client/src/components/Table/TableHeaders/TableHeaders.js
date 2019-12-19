import React from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './StyledTableHeaders';


const TableHeaders = ({headers, checkboxId, checkSelectAll, handleSelectAllElements}) => {
   return (  
      <tr>
         <S.Th>
            <FormControlLabel
               control={<Checkbox
                  id={checkboxId}
                  checked={checkSelectAll}
                  onChange={() => handleSelectAllElements()}
               />}
            />
         </S.Th>
         {headers.map((header, index) => <S.Th key={index}>{header}</S.Th>)}
      </tr>
   );
}
 
export default TableHeaders;
