import React from 'react';

import * as S from './StyledNoData';
import icons from '../../assets/icons';

const NoData = () => {
   return (  
      <S.Wrapper>
         <S.Img src={icons.noData} />
         No Data.
      </S.Wrapper>
   );
}
 
export default NoData;