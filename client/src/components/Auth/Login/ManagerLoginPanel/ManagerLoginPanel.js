import React from 'react';
import {Redirect} from 'react-router-dom';
import {Mutation} from 'react-apollo';

import ManagerLoginPanelForm from '../ManagerLoginPanelForm/ManagerLoginPanelForm';

import {LOGIN_USER_MUTATION} from '../../../../graphql/user/mutation';

const ManagerLoginPanel = () => {  
   const [checked, setChecked] = React.useState(false);
   const [submit, setSubmit] = React.useState(false);

   const handleOnInput = () => {
      setSubmit(false)
   }

   const handleOnChange = () => {
      setChecked(!checked)
   }

   const handleOnSubmit = values => {
      setSubmit(true)
      if(checked) localStorage.setItem('user', values.email)
   }

   return (  
      <>
         <Mutation mutation={LOGIN_USER_MUTATION}>
            {(mutation, {loading, error, data}) => {
               if(data) {
                  localStorage.setItem('token', data.loginUser.token);  
                  localStorage.setItem('session', true);
                  return <Redirect to='/user/reservations' />
               }
               
               return (
                  <> 
                     <ManagerLoginPanelForm 
                        mutation={mutation}
                        err={(error && submit) && 'Wrong user or password'}
                        loading={loading}
                        checked={checked}
                        handleOnInput={handleOnInput} 
                        handleOnChange={handleOnChange}
                        handleOnSubmit={handleOnSubmit}   
                     />
                  </>
               )
            }}
         </Mutation>
      </>
   );
}
 
export default ManagerLoginPanel;