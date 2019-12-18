import React from 'react'
import Fade from 'react-reveal/Fade';

import * as S from './StyledFadeReveal';
import icons from '../../../assets/icons';


const FadeReveal = ({primaryStyle, text, success, showModal}) => {
  	return (  
		<S.Wrapper>
         <Fade left>
            <S.AnimationWrapper primary_style={primaryStyle}>
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