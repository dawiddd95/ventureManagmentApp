import styled from 'styled-components';
import colors from '../../../assets/colors';


export const Element = styled.div`
   width: 60%;
   height: 40px;
   margin: 20px 0;

   display: flex;
   justify-content: flex-end;
`

export const ElementLabel = styled.label`
   height: 100%;
   height: 100%;
   margin: 0 10px 0 0;
   font-size: 14px;
   color: ${colors.black85};

   display: flex;
   align-items: center;
`

export const Select = styled.select`
   width: 60%;
   padding: 0 0 0 15px;
   outline: 0;
   background-color: white;
   border: 1px solid ${colors.silverColor};
   border-radius: 5px;
   font-weight: 200;
   font-size: 14px;
   color: ${colors.black65};
`