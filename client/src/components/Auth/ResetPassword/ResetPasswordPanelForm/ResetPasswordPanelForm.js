import React from 'react';
import {Formik, Form} from 'formik';
import * as Yup from 'yup';
import * as S from './StyledResetPasswordPanelForm';

import icons from '../../../../assets/icons';

const ResetPasswordPanelForm = ({hide, handleOnClick, handleOnSubmit}) => {
   return (  
      <Formik
         initialValues={{
            password: '',
         }}
         validationSchema={Yup.object().shape({
            password: Yup
               .string()
               .min(8, 'Minimum 8 characters')
               .matches(/^(?=.*[A-Z])/, 'Must contain at least one uppercase character')
               .matches(/^(?=.*[0-9])/, 'Must contain at least one numeric character')
               .matches(/^(?=.*[!@#$%^&*()])/, 'Must contain at least one special character')
               .required('Password is required')
         })}
         onSubmit={values => handleOnSubmit(values)}
         render={props => (
            <Form onSubmit={props.handleSubmit}>
               <S.Wrapper>
                  <S.Box>
                     <S.Content>
                        <S.Header>
                           Reset your password
                        </S.Header>
                        <S.Label>
                           New password
                        </S.Label>
                        <S.InputWrapper>
                           <S.StyledField 
                              name='password' 
                              type={hide ? 'password' : 'text'} 
                           />
                           <S.Img src={hide ? icons.hideIcon : icons.viewIcon} onClick={handleOnClick} />
                        </S.InputWrapper>
                        <S.StyledErrorMessage 
                           name='password' 
                           component='p' 
                        />
                        <S.Button type='submit'>
                           SAVE
                        </S.Button>
                     </S.Content>
                  </S.Box>
               </S.Wrapper>
            </Form>
         )}
      />
   );
}
 
export default ResetPasswordPanelForm;