import React from 'react';
import * as S from './StyledLoadingData';
import LoadingSpinner from '../Animations/LoadingSpinner/LoadingSpinner';

const LoadingData = () => {
   return (  
      <S.Wrapper>
         <S.MainContent>
            <S.Box>
               <LoadingSpinner small={false}/>
               <S.P>Loading Data... </S.P>
            </S.Box>
         </S.MainContent>
      </S.Wrapper>
   );
}
 
export default LoadingData;
