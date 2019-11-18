import React from 'react';

import * as S from './StyledImportSuccess';
import icons from '../../assets/icons';

const ImportSuccess = ({text, url, link}) => {
   return ( 
      <S.Wrapper>
         <S.Success>
            <S.Img src={icons.correctIcon} />
            {text}
            <S.StyledLink to={url}>Go Back to {link}</S.StyledLink>
         </S.Success>
      </S.Wrapper>
   );
}
 
export default ImportSuccess;