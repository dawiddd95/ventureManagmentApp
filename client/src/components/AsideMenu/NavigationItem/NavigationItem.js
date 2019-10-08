import React from 'react';
import * as S from './StyledNavigationItem';

const NavigationItem = ({icon, text, link}) => {
   const [active, setActive] = React.useState(false)

   return (  
      <S.NavigationItem to={link} isActive={active} onClick={() => setActive(true)}>
         <S.Icon src={icon} />
         <S.Text>
            {text}
         </S.Text>
      </S.NavigationItem>
   );
}
 
export default NavigationItem;
