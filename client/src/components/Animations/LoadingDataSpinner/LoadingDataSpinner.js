import React from 'react';
import * as S from './StyledLoadingDataSpinner';

const LoadingDataSpinner = ({isSmall}) => {
   return (  
      <S.Wrapper>
         <S.Spinner small_style={isSmall}></S.Spinner>
         <S.P small_style={isSmall}>Loading Data... </S.P>
      </S.Wrapper>
   );
}
 
export default LoadingDataSpinner;