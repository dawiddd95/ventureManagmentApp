import React from 'react';
import * as S from './StyledLoadingPage';
import LoadingDataSpinner from '../Animations/LoadingDataSpinner/LoadingDataSpinner';

const LoadingPage = () => {
   return (  
      <S.Wrapper>
         <S.MainContent>
            <S.Box>
               <LoadingDataSpinner isSmall={false} />
            </S.Box>
         </S.MainContent>
      </S.Wrapper>
   );
}
 
export default LoadingPage;
