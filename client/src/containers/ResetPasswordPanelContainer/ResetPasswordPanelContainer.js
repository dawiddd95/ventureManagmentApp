import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

import ResetPasswordPanelForm from '../../components/Auth/ResetPassword/ResetPasswordPanelForm/ResetPasswordPanelForm';
import ResetPasswordSuccess from '../../components/Auth/ResetPassword/ResetPasswordSuccess/ResetPasswordSuccess';

const ResetPasswordPanelContainer = ({location}) => {
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
         {state.success 
            ?  <ResetPasswordSuccess />
            : (
               <ResetPasswordPanelForm 
                  hide={state.hide}
                  handleOnClick={handleOnClick}
                  handleOnSubmit={handleOnSubmit}
               />
            )
         }
      </div>
   );
}
 
export default ResetPasswordPanelContainer;