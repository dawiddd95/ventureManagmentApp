import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import axios from 'axios';

import ForgotPasswordForm from '../ForgotPasswordForm/ForgotPasswordForm';
import FadeReveal from '../../Animations/FadeReveal/FadeReveal';

const ForgotPasswordContent = () => {
   const [state, setState] = React.useState({
      responseText: '', success: false, isLoading: false, submit: false
   });

   const handleOnSubmit = values => {
      setState({...state, isLoading: state.isLoading = true});

      axios.post('/api/auth/forgot-password', values)
      .then(res => {
         const {text, success} = res.data;
         setState({
            ...state, 
            responseText: state.responseText = text,
            success: state.success = success, 
            isLoading: state.isLoading = false,
            submit: state.submit = true
         });
      })
      .catch(err => {
         console.log(err)
         setState({
            ...state, 
            responseText: state.responseText = `Sorry, we don't recognize your credentials`,
            success: state.success = false,
            isLoading: state.isLoading = false,
            submit: state.submit = true
         })
      })
   }

   const handleOnInput= () => {
      setState({
         ...state, responseText: state.responseText = '',
      });
   }

   return (  
      <div>
         {!state.submit 
            ? null 
            : <FadeReveal text={state.responseText} success={state.success} />
         }
         {/* Tutaj odrazu formularz */}
         <Formik
            render={props => <ForgotPasswordForm 
               {...props} 
               state={state}
               handleOnInput={handleOnInput} 
            />}
            initialValues={{
               email: '',
            }}
            validationSchema={Yup.object().shape({
               email: Yup
                  .string()
                  .email()
                  .required('Email is required'),
            })}
            onSubmit={values => handleOnSubmit(values)}
         />
      </div>
   );
}
 
export default ForgotPasswordContent;