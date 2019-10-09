import React from 'react';
import * as S from './StyledNavigationItem';

const NavigationItem = ({icon, text, link}) => {
   return (  
      <S.NavigationItem to={link}>
         <S.Icon src={icon} />
         <S.Text>
            {text}
         </S.Text>
      </S.NavigationItem>
   );
}
 
export default NavigationItem;
