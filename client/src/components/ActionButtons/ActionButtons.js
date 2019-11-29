import React from 'react';
import * as S from './StyledActionButtons';


const ActionButtons = ({buttonLinks, fancyButton, ExportToExcelComponent}) => {
   return (  
      <S.ButtonsWrapper>
         {buttonLinks.map((link, index) => (
            <S.ButtonLink to={link.to} key={index}>
               <S.Img src={link.icon} />
               {link.name}
            </S.ButtonLink>
         ))}
         <S.FancyButtonLink to={fancyButton.to}>
            <S.Img src={fancyButton.icon} />
            {fancyButton.name}
         </S.FancyButtonLink>
         {ExportToExcelComponent}
      </S.ButtonsWrapper>
   );
}
 
export default ActionButtons;
