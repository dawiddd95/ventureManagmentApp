import React from 'react';
import {Mutation} from 'react-apollo';

import * as S from './StyledForgotPassword';
import { FORGOT_USER_PASSWORD_MUTATION } from '../../../graphql/user/mutation';

import FadeReveal from '../../Animations/FadeReveal/FadeReveal';
import Form from './Form/Form';

const ForgotPassword = () => {
   const [isSubmit, setIsSubmit] = React.useState(false)

   const handleOnSubmit = () => {
      setIsSubmit(true)
   }

   const handleOnInput= () => {
      setIsSubmit(false)
   }

   return (  
      <S.Wrapper>
         <S.Content>
            <S.Header>
               Venture Managment App
            </S.Header>
            <Mutation mutation={FORGOT_USER_PASSWORD_MUTATION}>
               {(mutation, {loading, error, data}) => (
                  <>
                     {isSubmit && <FadeReveal
                        primaryStyle={true}
                        text={error 
                           ? `Sorry, we don't recognize your credentials`
                           : 'Password reset email sent successfully'
                        }
                        success={error ? false : true}
                     />}
                     <Form
                        mutation={mutation}
                        loading={loading}
                        handleOnInput={handleOnInput} 
                        handleOnSubmit={handleOnSubmit}
                     />
                  </>
               )}
            </Mutation>
            <S.StyledLink to='/auth/login'>
               Cancel
            </S.StyledLink>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default ForgotPassword;