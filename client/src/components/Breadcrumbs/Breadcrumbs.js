import React from 'react';
import * as S from './StyledBreadcrumbs';

const Breadcrumbs = ({links, navElement}) => {
   return (  
      <S.BreadCrumbs>
         {links.map((item, index) => (
            <S.StyledLink key={index} to={item.to}>
               {item.name}
            </S.StyledLink>
         ))}
         {navElement}
      </S.BreadCrumbs>
   );
}
 
export default Breadcrumbs;