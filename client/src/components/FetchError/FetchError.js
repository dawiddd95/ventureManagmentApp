import React from 'react';
import * as S from './StyledFetchError';
import icons from '../../assets/icons';


const FetchError = () => {
   return (  
      <S.Wrapper>
         <S.Img src={icons.fetchError} />
         <S.ErrorText>
            <S.Header>Error</S.Header>
            <S.Text>Failed fetch data from server.</S.Text>
         </S.ErrorText>
      </S.Wrapper>
   );
}
 
export default FetchError;