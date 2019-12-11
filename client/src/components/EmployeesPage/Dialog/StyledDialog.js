import styled from 'styled-components';
import colors from '../../../assets/colors';


export const Wrapper = styled.div`
   width: 100%; 
   height: 100%;
   top: 0;
   left: 0;
   position: fixed;
   z-index: 100;
   overflow: auto;
   background-color: rgb(0,0,0); 
   background-color: rgba(0,0,0,0.4);
   
   display: flex;
   justify-content: center;
   align-items: center;
`

export const Dialog = styled.div`
   max-width: 600px;
   width: 60%;
   height: auto;
   background-color: white;
   border-radius: 4px;
   
   display: flex;
   flex-direction: column;
   align-items: flex-start;
`

export const Title = styled.p`
   padding: 30px 20px;
   font-size: 20px;
   font-family: Roboto;
`

export const Text = styled.p`
   padding: 0 20px 30px 20px;
   font-weight: 400;
   font-size: 16px;
   font-family: Roboto;
   color: rgba(0, 0, 0, 0.54);
   font-size: 16px;
   line-height: 1.5;
   letter-spacing: 0.00938em;
   word-wrap: break-word;
`

export const Span = styled.span`
   margin-left: 7px;
   color: ${colors.redColor};
`

export const ButtonsWrapper = styled.div`
   width: 50%;
   margin: 0 20px 10px auto;

   display: flex;
   justify-content: flex-end;
`

export const Button = styled.button`
   margin-left: 10px;
   padding: 8px 10px;
   background-color: white;
   color: #1976d2;
   font-size: 14px;
   font-weight: 500;
   font-family: Roboto;
   border-radius: 4px;
   border: 0;
   outline: 0;
   line-height: 1.75;
   letter-spacing: 0.02857em;
   cursor: pointer;
   transition: .2s;

   &:hover {
      background-color: green;
      background-color: rgba(25, 118, 210, 0.08);
      transition: .2s;
   }
`

