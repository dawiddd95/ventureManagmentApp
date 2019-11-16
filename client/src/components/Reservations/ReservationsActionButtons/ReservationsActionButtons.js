import React from 'react';
import * as S from './StyledReservationsActionButtons';

import ReservationsExportToExcelSheet from '../ReservationsExportToExcelSheet/ReservationsExportToExcelSheet';

import icons from '../../../assets/icons';


const ReservationsActionButtons = ({reservations}) => {
   return (  
      <S.ButtonsWrapper>
         <S.ButtonLink to='/user/reservations/new'>
            <S.Img src={icons.add} />
            New
         </S.ButtonLink>
         <S.ButtonLink to='/user/reservations/import'>
            <S.Img src={icons.upload} />
            Import
         </S.ButtonLink>
         <S.FancyButtonLink to='/test'>
            <S.Img src={icons.audit} />
            Audit Logs
         </S.FancyButtonLink>
         <ReservationsExportToExcelSheet 
            reservations={reservations} 
            name='Reservations'
            text='Export to Excel'    
         />
      </S.ButtonsWrapper>
   );
}
 
export default ReservationsActionButtons;