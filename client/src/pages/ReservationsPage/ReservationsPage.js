import React from 'react';
import * as S from './StyledReservationsPage';
import icons from '../../assets/icons';

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import ButtonLink from '../../components/Buttons/ButtonLink/ButtonLink'
import ReservationsExportContainer from '../../containers/ReservationsExportContainer/ReservationsExportContainer';
import ReservationsSearchFormContainer from '../../containers/ReservationsSearchFormContainer/ReservationsSearchFormContainer';
import ReservationsTableActionsContainer from '../../containers/ReservationsTableActionsContainer/ReservationsTableActionsContainer';
import ReservationsTableToolbarContainer from '../../containers/ReservationsTableToolbarContainer/ReservationsTableToolbarContainer';
import ReservationsTableBodyContainer from '../../containers/ReservationsTableBodyContainer/ReservationsTableBodyContainer';
import ReservationsTablePaginationContainer from '../../containers/ReservationsTablePaginationContainer/ReservationsTablePaginationContainer';


const ReservationsPage = () => {
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
               <S.ButtonsWrapper>
                  <ButtonLink
                     text='New' 
                     icon={icons.add} 
                     to='/user/reservations/new'
                     isFancy={false}
                  />
                  <ButtonLink 
                     text='Import'
                     icon={icons.upload} 
                     to='/user/reservations/import'
                     isFancy={false}
                  />
                  <ButtonLink
                     text='Audit Logs'
                     icon={icons.audit} 
                     to='/test'
                     isFancy={true}
                  />
                  <ReservationsExportContainer />
               </S.ButtonsWrapper>
               <ReservationsSearchFormContainer />  
               <S.TableWrapper>
                  <ReservationsTableActionsContainer />
                  <ReservationsTableToolbarContainer />
                  <ReservationsTableBodyContainer />
                  <ReservationsTablePaginationContainer />
               </S.TableWrapper>
            </S.ReservationsBox>
         </S.MainContent>
      </S.Wrapper>
   )
}
 
export default ReservationsPage;