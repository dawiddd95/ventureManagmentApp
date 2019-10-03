import React from 'react'
import Fade from 'react-reveal/Fade';

import * as S from './StyledFadeReveal'
import correctImg from '../../../assets/img/correct.png'
import errorImg from '../../../assets/img/error.png'


const FadeRevealAnimation = ({text, success}) => {
  	return (  
		<S.Wrapper>
         <Fade left when={text}>
            <S.AnimationWrapper>
					<S.Img src={success ? correctImg : errorImg} />
					<S.Text>
						{text}
					</S.Text>
				</S.AnimationWrapper>
         </Fade>
      </S.Wrapper>
  	);
}
 
export default FadeRevealAnimation;