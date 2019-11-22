import React from 'react';
import * as S from './StyledImportWarnings';
import icons from '../../../../assets/icons';


const ImportWarnings = ({warnings}) => {
   return (  
      <S.WarningsWrapper>
         {warnings.map(warning => (
            <S.Warning>
               <S.Img src={icons.warning} />
               {warning}
            </S.Warning>
         ))}
      </S.WarningsWrapper>
   );
}
 
export default ImportWarnings;
