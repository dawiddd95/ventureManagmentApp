import React from 'react';
import * as Yup from 'yup';
import Checkbox from '@material-ui/core/Checkbox';
import {Formik} from 'formik';

import * as S from './StyledEmployeesSearchForm';
import icons from '../../../assets/icons';

const EmployeesSearchForm = () => {
   return (  
      <Formik
         initialValues={{
            id: '',
            name: '',
            surname: '',
            phone: '',
            email: '',
            active: '',
            employeesAccess: '',
            auditAccess: '',
            clientsAccess: '',
            reservationsAccess: '',
            ordersAccess: '',
            communicatorAccess: '',
            profileAccess: '',
            createdAt: '',
            updatedAt: ''
         }}
         validationSchema={Yup.object().shape({
            id: Yup
               .string(),
            name: Yup
               .string(),
            surname: Yup
               .string(),
            phone:  Yup
               .string(),
            email:  Yup
               .string(),
            active: Yup
               .boolean(),
            employeesAccess: Yup
               .boolean(),
            auditAccess: Yup
               .boolean(),
            clientsAccess: Yup
               .boolean(),
            reservationsAccess: Yup
               .boolean(),
            ordersAccess: Yup
               .boolean(),
            communicatorAccess: Yup
               .boolean(),
            profileAccess: Yup
               .boolean(),
            createdAtStart: Yup
               .string(),                     
            createdAtEnd: Yup
               .string(), 
         })}
         onSubmit={values => {
            // handleSearchReservations(values)
         }}
         render={props => (
            <S.Wrapper>
               <S.StyledForm onSubmit={props.handleSubmit}>
                  <S.InputsWrapper>
                     <S.Col>
                        <S.Label>Employee ID:</S.Label> 
                        <S.StyledField 
                           name='id' 
                           type='number' 
                        />
                     </S.Col>
                     <S.Col>
                        <S.Label>Name:</S.Label> 
                        <S.StyledField 
                           name='name' 
                           type='text' 
                        />
                     </S.Col>
                     <S.Col>
                        <S.Label>Surname:</S.Label> 
                        <S.StyledField 
                           name='surname' 
                           type='text' 
                        />
                     </S.Col>
                     <S.Col>
                        <S.Label>Phone:</S.Label> 
                        <S.StyledField 
                           name='status' 
                           type='text' 
                        />
                     </S.Col>
                     <S.Col>
                        <S.Label>Email:</S.Label> 
                        <S.StyledField 
                           name='status' 
                           type='text' 
                        />
                     </S.Col>
                     <S.Col>
                        <S.Label>Created At:</S.Label> 
                        <S.PickersWrapper> 
                           <S.StyledField 
                              secondarystyled='true'
                              title='Created At Start Date'
                              name='createdAtStart' 
                              type='date' 
                           />
                           ~~
                           <S.StyledField 
                              secondarystyled='true'
                              title='Created At End Date'
                              name='createdAtEnd' 
                              type='date' 
                           />
                        </S.PickersWrapper>
                     </S.Col>
                     <S.PrivilegesWrapper>
                        <S.Header>
                           Privileges
                        </S.Header>
                        <S.CheckboxWrapper>
                           <S.StyledFormControlLabel
                              control={
                                 <Checkbox
                                    //checked={checked}
                                    //onChange={handleOnChange}
                                    id='employees'
                                 />
                              }
                              label={<S.Label htmlFor='employees'>Have Acess To Employees</S.Label>}
                           />
                           <S.StyledFormControlLabel
                              control={
                                 <Checkbox
                                    //checked={checked}
                                    //onChange={handleOnChange}
                                    id='employees'
                                 />
                              }
                              label={<S.Label htmlFor='employees'>Have Acess To Employees</S.Label>}
                           />
                        </S.CheckboxWrapper>
                     </S.PrivilegesWrapper>
                     <S.ButtonsWrapper>
                        <S.Button type='submit'>
                           <S.Img src={icons.search} />
                           Search
                        </S.Button> 
                        <S.Button type='reset' fancy>
                           <S.Img src={icons.reset} />
                           Reset
                        </S.Button> 
                     </S.ButtonsWrapper>
                  </S.InputsWrapper>
               </S.StyledForm>
            </S.Wrapper>
         )}      
      />   
   );
}
 
export default EmployeesSearchForm;