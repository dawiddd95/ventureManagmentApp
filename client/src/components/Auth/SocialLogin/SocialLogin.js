import React from 'react';

import * as S from './StyledSocialLogin';
import facebookIcon from '../../../assets/img/facebook.svg';
import googleIcon from '../../../assets/img/google.svg';
import twitterIcon from '../../../assets/img/twitter.svg';


const SocialLogin = () => {
   return (  
      <S.Wrapper>
         <S.Divider>
            <S.Span>
               or
            </S.Span>
         </S.Divider>
         <S.SocialIconsWrapper>
            <S.SocialIcon src={facebookIcon} />
            <S.SocialIcon src={googleIcon} />
            <S.SocialIcon src={twitterIcon} />
         </S.SocialIconsWrapper>
      </S.Wrapper>
   );
}
 
export default SocialLogin;