import React from 'react';

import * as S from './StyledImportErrors';

import icons from '../../../assets/icons';

const ImportErrors = ({errors}) => {
   console.log(errors)

   return (  
      <S.Wrapper>
         {errors.map((error,index) => (
            <S.Error key={index}>
               <S.Img src={icons.danger} />
               <S.Span>In element {error.index}:</S.Span>  
               {error.error}
            </S.Error>
         ))}
      </S.Wrapper>
   );
}
 
export default ImportErrors;