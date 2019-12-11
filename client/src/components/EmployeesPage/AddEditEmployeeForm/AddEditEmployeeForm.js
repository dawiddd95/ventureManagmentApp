import React from 'react';
import {Formik} from 'formik';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import * as Yup from 'yup';
import * as S from './StyledAddEditEmployeeForm';

import icons from '../../../assets/icons';
import { privilegesData } from '../../../assets/data/selectData';

import MultiSelect from '../../Selects/MultiSelect/MultiSelect';

const AddEditEmployeeForm = ({mutation,  isEdit, employee}) => {
   const [privileges, setPrivileges] = React.useState(null);
   const [activeSwitch, setActiveSwitch] = React.useState(false)

   const handleOnChangeSwitch = () => {
      setActiveSwitch(!activeSwitch)
   }

   const handleOnChangeSelect = (value) => {
      setPrivileges(value)
   } 

   return ( 
      <Formik
         initialValues={{
            name: !isEdit ? '' : employee.name,
            surname: !isEdit ? '' : employee.surname,
            phone: !isEdit ? '' : employee.phone,
            email: !isEdit ? '' : employee.email,
            active: !isEdit ? false : employee.active,
            employeesAccess: !isEdit ? false : employee.employeesAccess,
            auditAccess: !isEdit ? false : employee.auditAccess,
            clientsAccess: !isEdit ? false : employee.clientsAccess,
            reservationsAccess: !isEdit ? false : employee.reservationsAccess,
            ordersAccess: !isEdit ? false : employee.ordersAccess,
            communicatorAccess: !isEdit ? false : employee.communicatorAccess,
            profileAccess: !isEdit ? false : employee.profileAccess
         }}
         validationSchema={Yup.object().shape({
            name: Yup
               .string()
               .required('Name is required'),
            surname: Yup
               .string()
               .required('Surname is required'),
            phone: Yup
               .string(),
            email: Yup
               .string(),
            active: Yup
               .boolean()
               .required(),
            employeesAccess: Yup
               .boolean()
               .required(),
            auditAccess: Yup
               .boolean()
               .required(),
            clientsAccess: Yup
               .boolean()
               .required(),
            reservationsAccess: Yup
               .boolean()
               .required(),
            ordersAccess: Yup
               .boolean()
               .required(),
            communicatorAccess: Yup
               .boolean()
               .required(),
            profileAccess: Yup
               .boolean()
               .required(),
         })}
         onSubmit={values => {
            if(privileges !== null) {
               privileges.map(privilege => {
                  return values[privilege.value] = true
               })
            }
            const formValues = {...values, active: activeSwitch}

            if(isEdit) values.id = employee.id
            mutation({variables: formValues})
         }}
         render={props => (
            <S.Wrapper>
               <S.StyledForm onSubmit={props.handleSubmit}>
                  <S.FieldWrapper firstField='true'>
                     <S.Col>
                        <S.Label>Name:</S.Label> 
                        <S.StyledField 
                           name='name' 
                           type='text' 
                        />
                     </S.Col>
                     <S.StyledErrorMessage 
                        name='name' 
                        component='p' 
                     />
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Surname:</S.Label> 
                        <S.StyledField 
                           name='surname' 
                           type='text' 
                        />
                     </S.Col>
                     <S.StyledErrorMessage 
                        name='surname' 
                        component='p' 
                     />
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Phone:</S.Label> 
                        <S.StyledField 
                           name='phone' 
                           type='text' 
                        />
                     </S.Col>
                     <S.StyledErrorMessage 
                        name='phone' 
                        component='p' 
                     />
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Email:</S.Label> 
                        <S.StyledField 
                           name='email' 
                           type='text' 
                        />
                     </S.Col>
                     <S.StyledErrorMessage 
                        name='email' 
                        component='p' 
                     />
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col select_style>
                        <S.Label>Privileges:</S.Label> 
                        <MultiSelect
                           second_style={true}
                           data={privilegesData}
                           handleOnChange={handleOnChangeSelect}
                        />
                     </S.Col>
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col switch_style>
                        <S.SwitchWrapper>
                           <FormControlLabel
                              control={
                                 <Switch 
                                    checked={activeSwitch}
                                    onChange={() => handleOnChangeSwitch()} 
                                 />
                              }
                              label={<S.Label active={activeSwitch}>Activate Account</S.Label>}
                           />
                        </S.SwitchWrapper>
                     </S.Col>
                  </S.FieldWrapper> 
                  <S.ButtonsWrapper>
                     <S.Button type='submit'>
                        <S.Img src={icons.save} />
                        Save
                     </S.Button> 
                     <S.Button type='reset' fancy>
                        <S.Img src={icons.reset} />
                        Reset
                     </S.Button> 
                  </S.ButtonsWrapper>
               </S.StyledForm>
            </S.Wrapper>
         )}      
      />   
   );
}
 
export default AddEditEmployeeForm;