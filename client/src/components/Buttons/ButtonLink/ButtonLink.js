import React from 'react';
import * as S from './StyledButtonLink';


const ButtonLink = ({text, icon, to, isFancy}) => {
   return (  
      <S.ButtonLink to={to}  fancy_style={isFancy}>
         <S.Img src={icon} />
         {text}
      </S.ButtonLink>
   );
}
 
export default ButtonLink;