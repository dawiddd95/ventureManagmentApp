import React from 'react'
import * as S from './StyledEmployeesPage'
import icons from '../../assets/icons'

import Breadcrumbs from '../../components/Breadcrumbs/Breadcrumbs'
import ButtonLink from '../../components/Buttons/ButtonLink/ButtonLink'
import EmployeesSearchFormContainer from '../../containers/EmployeesSearchFormContainer/EmployeesSearchFormContainer'
import EmployeesTableActionContainer from '../../containers/EmployeesTableActionContainer/EmployeesTableActionContainer'
import EmployeesTableToolbarContainer from '../../containers/EmployeesTableToolbarContainer/EmployeesTableToolbarContainer'
import EmployeesTableBodyContainer from '../../containers/EmployeesTableBodyContainer/EmployeesTableBodyContainer'
import EmployeesTablePaginationContainer from '../../containers/EmployeesTablePaginationContainer/EmployeesTablePaginationContainer'


const EmployeesPage = () => {
   return(
      <S.Wrapper>
         <S.MainContent>
            <Breadcrumbs
               links={[
                  {name: 'Home', to: '/user/employees'}
               ]}
               navElement='/ Employees'
            />
            <S.EmployeesBox>
               <S.Header>
                  Employees
               </S.Header> 
               <S.ButtonsWrapper>
                  <ButtonLink
                     text='New' 
                     icon={icons.add} 
                     to='/user/employees/new'
                     isFancy={false}
                  />
                  <ButtonLink
                     text='Audit Logs'
                     icon={icons.audit} 
                     to='/test'
                     isFancy={true}
                  />
               </S.ButtonsWrapper>
               <EmployeesSearchFormContainer />
               <S.TableWrapper>
                  <EmployeesTableActionContainer />
                  <EmployeesTableToolbarContainer />
                  <EmployeesTableBodyContainer />
                  <EmployeesTablePaginationContainer />
               </S.TableWrapper>
            </S.EmployeesBox>
         </S.MainContent>
      </S.Wrapper>
   )
}
 
export default EmployeesPage;