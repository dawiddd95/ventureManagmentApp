import React from 'react'
import Fade from 'react-reveal/Fade';

import * as S from './StyledFadeReveal';
import icons from '../../../assets/icons';


const FadeReveal = ({text, success, showModal}) => {
  	return (  
		<S.Wrapper>
         <Fade left>
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
 
export default FadeReveal;