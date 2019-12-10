import React from 'react';
import {Mutation} from 'react-apollo';
import {Redirect} from 'react-router-dom';
import * as S from './StyledAddEditEmployee';

import Breadcrumbs from '../../Breadcrumbs/Breadcrumbs';
import AddEditEmployeeForm from '../AddEditEmployeeForm/AddEditEmployeeForm';

import { CREATE_EMPLOYEE_MUTATION } from '../../../graphql/employee/mutation';
import {UPDATE_RESERVATION_MUTATION} from '../../../graphql/reservation/mutation';
import { USER_EMPLOYEES_QUERY } from '../../../graphql/employee/query';


const AddEditEmployee = ({isEdit, employee}) => {
   return (  
      <S.Wrapper>
         <S.Section>
            <S.MainContent>
               <Breadcrumbs 
                  links={[
                     {name: 'Home', to: '/user/employees'},
                     {name: '/ Employees', to: '/user/employees'},
                     isEdit && {
                        name: `/ ${employee.id}`, 
                        to: {
                           pathname: `/user/reservations/${employee.id}`,
                           state: {employee: employee}
                        }
                     }
                  ]}
                  navElement={!isEdit ? '/ New Employee' : '/ Edit Employee'}
               />
               <S.BookingsBox>
                  <S.Header>
                     {!isEdit ? 'New Employee' : 'Edit Employee'}
                  </S.Header>
                  <Mutation 
                     mutation={!isEdit ? CREATE_EMPLOYEE_MUTATION : UPDATE_RESERVATION_MUTATION} 
                     refetchQueries={[{query: USER_EMPLOYEES_QUERY}]}
                  >
                     {(mutation, {loading, error, data}) => {
                        if(data) {
                           return <Redirect to='/user/employees'/>
                        }
                        
                        return (
                           <>
                              <AddEditEmployeeForm
                                 mutation={mutation}
                                 isEdit={isEdit}
                                 employee={employee}
                              />
                           </>
                        )
                     }}
                  </Mutation>
               </S.BookingsBox>
            </S.MainContent>
         </S.Section>
      </S.Wrapper>
   );
}
 
export default AddEditEmployee;