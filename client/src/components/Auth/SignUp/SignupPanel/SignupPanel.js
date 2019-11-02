import React from 'react';
import {Mutation} from 'react-apollo';

import SignupUserForm from '../SignupUserForm/SignupUserForm';
import SignupSuccess from '../SignupSuccess/SignupSuccess';
import FadeReveal from '../../../Animations/FadeReveal/FadeReveal';

import {CREATE_USER_MUTATION} from '../../../../graphql/user/mutation';

const SignupPanel = () => {
   const [isSubmit, setIsSubmit] = React.useState(false)

   const handleOnSubmit = () => {
      setIsSubmit(true)
   }

   const handleOnInput= () => {
      setIsSubmit(false)
   }

   return ( 
      <div>
         <Mutation mutation={CREATE_USER_MUTATION}>
            {(mutation, {loading, error, data}) => (
               <>
                  {(error && isSubmit) && <FadeReveal 
                     text='Cannot sign up to application :( Please try again later.'
                     success={false} 
                  />}
                  {(data && isSubmit)      
                     ?  <SignupSuccess email={data.createUser.email} /> 
                     :  <SignupUserForm
                           mutation={mutation}
                           loading={loading}
                           handleOnInput={handleOnInput} 
                           handleOnSubmit={handleOnSubmit}
                        />  
                  }
               </>
            )}
         </Mutation>
      </div> 
   );
}
 
export default SignupPanel;