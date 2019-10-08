import React from 'react';
import * as S from './StyledSocialLogin';
import icons from '../../../assets/icons';

const SocialLogin = () => {
   return (  
      <S.Wrapper>
         <S.Divider>
            <S.Span>
               or
            </S.Span>
         </S.Divider>
         <S.SocialIconsWrapper>
            <S.SocialIcon src={icons.facebookIcon} />
            <S.SocialIcon src={icons.googleIcon} />
            <S.SocialIcon src={icons.twitterIcon} />
         </S.SocialIconsWrapper>
      </S.Wrapper>
   );
}
 
export default SocialLogin;