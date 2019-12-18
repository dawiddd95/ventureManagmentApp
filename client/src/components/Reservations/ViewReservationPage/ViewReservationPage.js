import React from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './StyledViewReservationPage';
import icons from '../../../assets/icons';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import Dialog from '../../Dialog/Dialog';
import ViewData from './ViewData/ViewData';


const ViewReservationPage = ({data}) => {
   const reservation = data.getUserReservation;

   const [openDialog, setOpenDialog] = React.useState(false) 
   const [completed, setCompleted] = React.useState(false)

   const handleSetIsOpen = () => {
      setOpenDialog(true)
   }

   const handleOnCompleted = () => {
      setCompleted(true)
   }

   const handleCloseDialog = () => {
      setOpenDialog(false)
   }

   return (
      <>
         <S.Wrapper>
            <S.MainContent>
               <Breadcrumbs 
                  links={[
                     {name: 'Home', to: '/user/reservations'},
                     {name: '/ Reservations', to: '/user/reservations'},
                  ]}
                  navElement={`/ ${reservation.id}`}
               />
               <S.ReservationsBox>
                  <S.Header>
                     View Reservation
                  </S.Header>
                  <S.ButtonsWrapper>
                     <S.ButtonLink to={`/user/reservations/${reservation.id}/edit`}>
                        <S.Img src={icons.edit} />
                        Edit
                     </S.ButtonLink>
                     <S.Button onClick={handleSetIsOpen}>
                        <S.Img src={icons.cross} />
                        Delete
                     </S.Button>
                     <S.FancyButtonLink to='/test'>
                        <S.Img src={icons.audit} />
                        Audit Logs
                     </S.FancyButtonLink>
                  </S.ButtonsWrapper>
                  <ViewData 
                     reservation={reservation}
                  />
               </S.ReservationsBox>
            </S.MainContent>
         </S.Wrapper>
         {openDialog && <Dialog
            title='Delete selected items?'
            text='Are you sure you want delete item with id: '
            selected={[reservation.id]}
            handleOnCompleted={handleOnCompleted}
            handleCloseDialog={handleCloseDialog}
         />}
         {completed && <Redirect to='/user/reservations' />}
      </>
   );
}
 
export default ViewReservationPage;