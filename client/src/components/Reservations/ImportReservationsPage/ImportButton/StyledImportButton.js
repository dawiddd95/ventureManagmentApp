import styled from 'styled-components';
import colors from '../../../../assets/colors';

export const ImportWrapper = styled.div`
   width: 50%;
   height: 150px;
   margin: 30px 0;
   position: relative;
   overflow: hidden;
   border: 1px dashed ${colors.silverColor};
   border-radius: 4px;
   transition: 0.3s;
   
   :hover {
      border: 1px dashed ${colors.redColor};
      transition: .3s;
   }
`

export const ImportButton = styled.button`
   width: 100%;
   height: 100%;
   background-color: #fafafa;
   font-size: 16px;
   font-family: segoe;
   color: ${colors.black85};
   outline: 0;
   border: 0;

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const ImportInput = styled.input`
   width: 100%;
   height: 100%;
   position: absolute;
   left: 0;
   top: 0;
   opacity: 0;
   cursor: pointer;
`

export const Img = styled.img`
   width: 40px;
   height: 40px;
   margin: 0 0 20px 0;
`