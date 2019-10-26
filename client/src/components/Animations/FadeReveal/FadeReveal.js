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

{/* <Zoom when={false}>
  <h1>You won't see me, but I will still take space on screen</h1>
</Zoom>

<Zoom when={true}>
  <h1>I will be seen</h1>
</Zoom> */}