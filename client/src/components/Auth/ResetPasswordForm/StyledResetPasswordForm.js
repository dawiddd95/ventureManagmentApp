import styled from 'styled-components';
import {Field, ErrorMessage} from 'formik';

import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   height: auto;
`

export const Box  = styled.div`
   width: 360px;
   height: 300px;
   margin: 40px auto 0 auto;
   box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12); 

   display: flex; 
   flex-direction: column;
`

export const Content = styled.div`
   width: 90%;
   margin: 40px auto 0 auto;
`

export const Header = styled.div`
   margin-bottom: 40px;
   font-weight: normal;
   font-size: 22px; 
   font-family: 'Calibri';
`

export const Label = styled.label`
   margin: 40px 0 10px 0;
   font-size: 13px;
   font-family: 'Calibri';
   color: #757575;
`

export const InputWrapper = styled.div`
   width: 100%;
   height: 60px;

   display: flex;
`

export const StyledField = styled(Field)`
   width: 89%;
   height: 35px;
   border: 0;
   outline: none;
   border-bottom: 1px solid rgba(0,0,0,.12);
   transition: .3s;
   font-weight: normal;
   font-size: 16px;
   color: rgba(0,0,0,.87);

   &:focus {
      transition: .3s;
      border-bottom: 2px solid #3F51B5;
   }
`

export const Img = styled.img`
   width: 30px;
   height: 30px;
   margin: 5px 0 0 auto;
`

export const StyledErrorMessage = styled(ErrorMessage)`
   margin-right: auto;
   margin-left: 5px;
   font-family: 'segoe';
   font-size: 14px;
   color: ${colors.redColor};
`

export const Error = styled.p`
   margin-right: auto;
   margin-left: 5px;
   font-family: 'segoe';
   font-size: 14px;
   color: ${colors.redColor};
`

export const Button = styled.button`
   width: 100%;
   height: 35px;
   margin: 20px auto;
   border: 0;
   outline: 0;
   background-color: #3F51B5;
   box-shadow: 0 2px 2px 0 rgba(0,0,0,.14), 0 3px 1px -2px rgba(0,0,0,.2), 0 1px 5px 0 rgba(0,0,0,.12);
   color: white;
   font-family: 'Calibri';
   font-size: 18px;
   cursor: pointer;
   transition: .3s;

   &:hover {
      transition: .3s;
      background-color: #606fc7;
   }
`