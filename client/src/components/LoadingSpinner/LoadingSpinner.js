import React from 'react';
import * as S from './StyledLoadingSpinner';

const LoadingSpinner = ({small}) => {
   return (  
      <S.Spinner smallSpinner={small}></S.Spinner>
   );
}
 
export default LoadingSpinner;