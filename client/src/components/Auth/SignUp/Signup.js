import React from 'react';
import {Mutation} from 'react-apollo';

import * as S from './StyledSignup';
import { CREATE_USER_MUTATION } from '../../../graphql/user/mutation';

import FadeReveal from '../../Animations/FadeReveal/FadeReveal';
import SignupSuccess from './SignupSuccess/SignupSuccess';
import Form from './Form/Form';


const Signup = () => {
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
            <Mutation mutation={CREATE_USER_MUTATION}>
               {(mutation, {loading, error, data}) => (
                  <>
                     {(error && isSubmit) && <FadeReveal 
                        primaryStyle={true}
                        text='Cannot sign up to application :( Please try again later.'
                        success={false} 
                     />}
                     {(data && isSubmit)      
                        ?  <SignupSuccess email={data.createUser.email} /> 
                        :  <Form
                              mutation={mutation}
                              loading={loading}
                              handleOnInput={handleOnInput} 
                              handleOnSubmit={handleOnSubmit}
                           />  
                     }
                  </>
               )}
            </Mutation>
         </S.Content>
      </S.Wrapper>
   );
}
 
export default Signup;