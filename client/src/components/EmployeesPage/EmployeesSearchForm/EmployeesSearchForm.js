import React from 'react';
import * as Yup from 'yup';
import {Formik} from 'formik';

import * as S from './StyledEmployeesSearchForm';
import icons from '../../../assets/icons';
import { privilegesData, activeData } from '../../../assets/data/selectData';

//import PrivilegeSelect from '../PrivilegeSelect/PrivilegeSelect';
import MultiSelect from '../../Selects/MultiSelect/MultiSelect';
import SingleSelect from '../../Selects/SingleSelect/SingleSelect';


const EmployeesSearchForm = ({handleSearchEmployees}) => {
   const [privileges, setPrivileges] = React.useState([]);
   const [active, setActive] = React.useState('');

   const handleOnChange = (value, isMulti) => {
      if(isMulti) setPrivileges(value)
      else if(!isMulti) setActive(value)
   } 

   return (  
      <Formik
         initialValues={{
            id: '',
            name: '',
            surname: '',
            phone: '',
            email: '',
            active: '',
            // employeesAccess: false,
            // auditAccess: false,
            // clientsAccess: false,
            // reservationsAccess: false,
            // ordersAccess: false,
            // communicatorAccess: false,
            // profileAccess: false,
            createdAtStart: '',                 
            createdAtEnd: ''
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
            // employeesAccess: Yup
            //    .boolean(),
            // auditAccess: Yup
            //    .boolean(),
            // clientsAccess: Yup
            //    .boolean(),
            // reservationsAccess: Yup
            //    .boolean(),
            // ordersAccess: Yup
            //    .boolean(),
            // communicatorAccess: Yup
            //    .boolean(),
            // profileAccess: Yup
            //    .boolean(),
            createdAtStart: Yup
               .string(),                     
            createdAtEnd: Yup
               .string(), 
         })}
         onSubmit={values => {
            const formValues = {...values, active}
            const newFormValues = {...formValues, privileges}
            handleSearchEmployees(newFormValues)
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
                           name='phone' 
                           type='text' 
                        />
                     </S.Col>
                     <S.Col>
                        <S.Label>Email:</S.Label> 
                        <S.StyledField 
                           name='email' 
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
                     <S.Col select>
                        <S.Label>Access To:</S.Label> 
                        <MultiSelect 
                           data={privilegesData}
                           handleOnChange={handleOnChange}
                        />
                     </S.Col>
                     <S.Col>
                        <S.Label>Active:</S.Label> 
                        <SingleSelect
                           data={activeData}
                           handleOnChange={handleOnChange}
                        />
                     </S.Col>
                     <S.ButtonsWrapper>
                        <S.Button type='submit'>
                           <S.Img src={icons.search} />
                           Search
                        </S.Button> 
                        <S.Button type='reset' fancy >
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