import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import queryString from 'query-string';

import ResetPasswordForm from '../ResetPasswordForm/ResetPasswordForm';
import ResetPasswordSuccess from '../ResetPasswordSuccess/ResetPasswordSuccess';

const ResetPasswordContent = ({location}) => {
   const [state, setState] = React.useState({
     success: '', hide: true
   });

   const handleOnSubmit = values => {
      const parsed = queryString.parse(location);
      const formValues = {...values, code: parsed.code};

      axios.post('/api/auth/reset-password', formValues)
      .then(res => {
         const {success} = res.data;
         setState({
            ...state, 
            success: state.success = success, 
         });
      })
      .catch(err => console.log(err))
   }

   const handleOnClick = () => {
      setState({
         ...state, 
         hide: !state.hide, 
      });
   }

   return (  
      <div>
         {state.success ? <ResetPasswordSuccess /> : (
            <Formik
               render={props => <ResetPasswordForm 
                  {...props} 
                  hide={state.hide}
                  handleOnClick={handleOnClick}
               />}
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
            />
         )}
      </div>
   );
}
 
export default ResetPasswordContent;