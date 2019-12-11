import React from 'react';
import {Redirect} from 'react-router-dom';
import * as S from './StyledViewEmployee';
import icons from '../../../assets/icons';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import Dialog from '../../Dialog/Dialog';
import ViewData from '../ViewData/ViewData';


const ViewEmployee = ({employee}) => {
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
                     {name: 'Home', to: '/user/employees'},
                     {name: '/ Employees', to: '/user/employees'},
                  ]}
                  navElement={`/ ${employee.id}`}
               />
               <S.Box>
                  <S.Header>
                     View Employee
                  </S.Header>
                  <S.ButtonsWrapper>
                     <S.ButtonLink 
                        to={{
                           pathname: `/user/employees/${employee.id}/edit`,
                           state: {employee: employee}
                        }}
                     >
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
                     employee={employee}
                  />
               </S.Box>
            </S.MainContent>
         </S.Wrapper>
         {openDialog && <Dialog
            title='Delete selected items?'
            text='Are you sure you want delete item with id: '
            selected={[employee.id]}
            handleOnCompleted={handleOnCompleted}
            handleCloseDialog={handleCloseDialog}
         />}
         {completed && <Redirect to='/user/employees' />}
      </>
   );
}
 
export default ViewEmployee;