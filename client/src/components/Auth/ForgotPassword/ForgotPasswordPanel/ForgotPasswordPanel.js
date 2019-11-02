import React from 'react';

import ForgotPasswordPanelForm from '../ForgotPasswordPanelForm/ForgotPasswordPanelForm';
import FadeReveal from '../../../Animations/FadeReveal/FadeReveal';
import {Mutation} from 'react-apollo';

import {FORGOT_USER_PASSWORD_MUTATION} from '../../../../graphql/user/mutation';

const ForgotPasswordContent = () => {
   const [isSubmit, setIsSubmit] = React.useState(false)

   const handleOnSubmit = () => {
      setIsSubmit(true)
   }

   const handleOnInput= () => {
      setIsSubmit(false)
   }

   return (  
      <div>
         <Mutation mutation={FORGOT_USER_PASSWORD_MUTATION}>
            {(mutation, {loading, error, data}) => (
               <>
                  {(error && isSubmit) && <FadeReveal 
                     text={`Sorry, we don't recognize your credentials`}
                     success={false} 
                  />}
                  {(data && isSubmit) && <FadeReveal 
                     text='Password reset email sent successfully'
                     success={true} 
                  />}
                  <ForgotPasswordPanelForm 
                     mutation={mutation}
                     loading={loading}
                     handleOnInput={handleOnInput} 
                     handleOnSubmit={handleOnSubmit}
                  />
               </>
            )}
         </Mutation>
      </div>
   );
}
 
export default ForgotPasswordContent;