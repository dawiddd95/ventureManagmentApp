import React from 'react';
import {useSelector} from 'react-redux';

import ActionButtons from '../../../../components/ActionButtons/ActionButtons';
import ReservationsExportToExcelSheet from '../../../../components/Reservations/ReservationsExportToExcelSheet/ReservationsExportToExcelSheet';

import icons from '../../../../assets/icons';


const ReservationsActionButtonsContainer = () => {
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations);
   const {searchingReservations, filter} = useSelector(state => state.fetchedUserReservations);

   return (
      <ActionButtons 
         buttonLinks={[
            {name: 'New', icon: icons.add, to: '/user/reservations/new'},
            {name: 'Import', icon: icons.upload, to: '/user/reservations/import'}
         ]}
         fancyButton={
            {name: 'Audit Logs', icon: icons.audit, to: '/test'}
         }
         ExportToExcelComponent={<ReservationsExportToExcelSheet
            reservations={filter ? searchingReservations : userReservations} 
            name='Reservations'
            text='Export to Excel'    
         />}
      />
   );
}
 
export default ReservationsActionButtonsContainer;