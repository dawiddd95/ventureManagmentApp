import React from 'react';
import * as S from './StyledReservationsActionButtons';

import icons from '../../../assets/icons';

const ReservationsActionButtons = () => {
   return (  
      <S.ButtonsWrapper>
         <S.ButtonLink to='/user/reservations/new'>
            <S.Img src={icons.add} />
            New
         </S.ButtonLink>
         <S.ButtonLink to='/user/reservations/new'>
            <S.Img src={icons.upload} />
            Import
         </S.ButtonLink>
         <S.FancyButtonLink to='/test'>
            <S.Img src={icons.audit} />
            Audit Logs
         </S.FancyButtonLink>
         <S.FancyButtonLink to='/test'>
            <S.Img src={icons.exportToExcel} />
            Export to Excel
         </S.FancyButtonLink>
      </S.ButtonsWrapper>
   );
}
 
export default ReservationsActionButtons;