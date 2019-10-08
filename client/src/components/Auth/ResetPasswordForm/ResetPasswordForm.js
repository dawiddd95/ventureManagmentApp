import React from 'react';
import {Form} from 'formik';
import * as S from './StyledResetPasswordForm';

import icons from '../../../assets/icons';

const ResetPassword = ({hide, handleOnClick}) => {
   return (  
      <Form>
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
   );
}
 
export default ResetPassword;