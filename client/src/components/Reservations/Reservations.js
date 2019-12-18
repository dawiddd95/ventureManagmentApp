import React from 'react';
import * as S from './StyledReservations';

import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import ReservationsActionButtonsContainer from '../../app/reservations/containers/ReservationsActionButtonsContainer/ReservationsActionButtonsContainer';
import ReservationsSearchFormContainer from '../../app/reservations/containers/ReservationsSearchFormContainer/ReservationsSearchFormContainer';
import ReservationsTableContainer from '../../app/reservations/containers/ReservationsTableContainer/ReservationsTableContainer';


import TableActionsContainer from '../../app/reservations/containers/TableActionsContainer/TableActionsContainer';
import TableToolbarContainer from '../../app/reservations/containers/TableToolbarContainer/TableToolbarContainer';
import TablePaginationContainer from '../../app/reservations/containers/TablePaginationContainer/TablePaginationContainer';


const Reservations = () => {
   return(
      <S.Wrapper>
         <S.MainContent>
            <Breadcrumbs 
               links={[
                  {name: 'Home', to: '/user/reservations'}
               ]}
               navElement='/ Reservations'
            />
            <S.ReservationsBox>
               <S.Header>
                  Reservations
               </S.Header>
               <ReservationsActionButtonsContainer />
               <ReservationsSearchFormContainer />  
               <S.TableWrapper>  
                  <ReservationsTableContainer />

                  <TableActionsContainer />
                  <TableToolbarContainer />
                  {/* ReservationsTableContainer tutaj bedzie */}
                  <TablePaginationContainer />
               </S.TableWrapper>
            </S.ReservationsBox>
         </S.MainContent>
      </S.Wrapper>
   )
}
 
export default Reservations;