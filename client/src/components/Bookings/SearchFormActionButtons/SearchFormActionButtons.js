import React from 'react';
import * as S from './StyledSearchFormActionButtons';

import icons from '../../../assets/icons';

const SearchFormActionButtons = () => {
   const [isAllowed, setIsAllowed] = React.useState(false)
   
   return (  
      <S.ButtonsWrapper>
         <S.ButtonLink to='/user/bookings/new' allowed>
            <S.Img src={icons.add} />
            New
         </S.ButtonLink>
         <S.ButtonLink to='/user/bookings/new' allowed>
            <S.Img src={icons.upload} />
            Import
         </S.ButtonLink>
         <S.ButtonLink to='/user/bookings/new' allowed={isAllowed}>
            <S.Img src={icons.bin} />
            Delete
         </S.ButtonLink>
         <S.FancyButtonLink allowed>
            <S.Img src={icons.audit} />
            Audit Logs
         </S.FancyButtonLink>
         <S.FancyButtonLink allowed>
            <S.Img src={icons.exportToExcel} />
            Export to Excel
         </S.FancyButtonLink>
      </S.ButtonsWrapper>
   );
}
 
export default SearchFormActionButtons;