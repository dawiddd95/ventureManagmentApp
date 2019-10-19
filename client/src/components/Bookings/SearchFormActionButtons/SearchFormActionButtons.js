import React from 'react';
import * as S from './StyledSearchFormActionButtons';

import icons from '../../../assets/icons';

const SearchFormActionButtons = () => {
   return (  
      <S.ButtonsWrapper>
         <S.ButtonLink to='/user/bookings/new'>
            <S.Img src={icons.add} />
            New
         </S.ButtonLink>
         <S.ButtonLink to='/user/bookings/new'>
            <S.Img src={icons.upload} />
            Import
         </S.ButtonLink>
         <S.FancyButtonLink>
            <S.Img src={icons.audit} />
            Audit Logs
         </S.FancyButtonLink>
         <S.FancyButtonLink>
            <S.Img src={icons.exportToExcel} />
            Export to Excel
         </S.FancyButtonLink>
      </S.ButtonsWrapper>
   );
}
 
export default SearchFormActionButtons;