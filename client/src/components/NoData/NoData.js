import React from 'react';

import * as S from './StyledNoData';
import icons from '../../assets/icons';

const NoData = ({filter}) => {
   return (  
      <S.Wrapper>
         <S.Img src={icons.noData} />
         No Data {filter ? `For Search Result.` : '. Add Or Import Some Items.'}
      </S.Wrapper>
   );
}
 
export default NoData;