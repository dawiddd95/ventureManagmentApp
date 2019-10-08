import React from 'react'
import Fade from 'react-reveal/Fade';

import * as S from './StyledFadeReveal';
import icons from '../../../assets/icons';


const FadeRevealAnimation = ({text, success}) => {
  	return (  
		<S.Wrapper>
         <Fade left when={text}>
            <S.AnimationWrapper>
					<S.Img src={success ? icons.correctIcon : icons.errorIcon} />
					<S.Text>
						{text}
					</S.Text>
				</S.AnimationWrapper>
         </Fade>
      </S.Wrapper>
  	);
}
 
export default FadeRevealAnimation;