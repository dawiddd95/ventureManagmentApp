import React from 'react';
import axios from 'axios';

import SignupUserForm from '../SignupUserForm/SignupUserForm';
import SignupSuccess from '../SignupSuccess/SignupSuccess';
import FadeReveal from '../../../Animations/FadeReveal/FadeReveal';

const SignupPanel = () => {
   const [state, setState] = React.useState({
      success: false, err: '', email: '', isLoading: false
   });

   const handleOnSubmit = values => {
      setState({...state, isLoading: state.isLoading = true});

      axios.post('/api/auth/signup', values)
      .then(res => {
         const {err, email, success} = res.data;
         setState({
            ...state, 
            success: state.success = success, 
            err: state.err = err,
            email: state.email = email,
            isLoading: state.isLoading = false,
         });
      })
      .catch(() => {
         setState({
            ...state, 
            err: state.err = 'Cannot sign up to application :( Please try again later.',
            isLoading: state.isLoading = false,
         })
      })
   }

   const handleOnInput= () => {
      setState({
         ...state, 
         err: state.err = '',
      });
   }

   return ( 
      <div>
         {state.success 
            ? null 
            : <FadeReveal text={state.err} success={false} />
         }
         {state.success 
            ?  <SignupSuccess email={state.email} /> 
            :  <SignupUserForm
                  isLoading={state.isLoading}
                  handleOnInput={handleOnInput} 
                  handleOnSubmit={handleOnSubmit}
               />  
         }
      </div> 
   );
}
 
export default SignupPanel;