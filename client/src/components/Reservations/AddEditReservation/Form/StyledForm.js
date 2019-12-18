import styled from 'styled-components';
import {Form, Field, ErrorMessage} from 'formik';

import colors from '../../../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   margin-bottom: 20px;
   
   display: block;
`

export const StyledForm = styled(Form)`
   width: 96%;
   margin: 30px auto 0 auto;

   position: relative;
`

export const FieldWrapper = styled.div`
   width: 70%;
   margin-top: ${props => props.firstField ? '40px' : '0'};
   margin-bottom: 30px;
   color: ${colors.black65};

   display: flex;
   flex-direction: column;
`

export const Col = styled.div`
   width: 100%;
   display: flex;
   justify-content: flex-end;
`

export const StyledErrorMessage = styled(ErrorMessage)`
   margin: 0 0 0 auto;
   font-family: 'segoe';
   font-size: 14px;
   color: ${colors.redColor};
`

export const Label = styled.div`
   height: 40px;
   margin: 0px 10px 0 0;
   font-size: 14px;
   color: ${colors.black85};

   display: flex;
   align-items: center;
`

export const StyledField = styled(Field)`
   width: ${props => props.secondary_styled ? '45%' : '60%'};
   height: 40px;
   margin: ${props => props.secondar_styled ? '0 5px' : '0'};
   padding: 0 0 0 15px;
   border: 0;
   outline: 0;
   background-color: white;
   border: ${props => props.secondary_styled ? 0 : `1px solid ${colors.silverColor}`};   
   border-radius: 5px;
   font-weight: 200;
   font-size: 14px;
   color: rgba(0,0,0,0.65);
   transition: 0.3s;

   &:hover {
      transition: 0.3s;
      border: ${props => props.secondary_styled ? '0' : `1px solid ${colors.redColor}`};
   }

   &:focus {
      border: ${props => props.secondary_styled ? '0' : `1px solid ${colors.redColor}`};
      box-shadow:  ${props => props.secondary_styled ? '0' : '0 0 0 2px rgba(245,34,45,0.2)'};
   }
`

export const PickersWrapper = styled.div`
   width: 60%;
   height: 100%;
   padding: 0 0 0 15px;
   border: 1px solid ${colors.silverColor};   
   border-radius: 5px;
   
   display: flex;
   justify-content: center;
   align-items: center;

   &:hover {
      transition: 0.3s;
      border: 1px solid ${colors.redColor};
   }
`

export const ActiveSelectWrapper = styled.div`
   width: calc(60% + 16.5px);

`

export const StyledFieldTextarea = styled(StyledField)`
   min-width: 60%;
   width: 60%;
   max-width: 60%;
   min-height: 90px;
   max-height: 400px;
   padding: 10px 0 0 15px;
` 

export const ButtonsWrapper = styled.div`
   width: 98%;
   display: flex;
   justify-content: flex-end;
`

export const Button = styled.button`
   height: 32px;
   margin-right: 10px;
   padding: ${props => props.fancy ? '0 20px' : '0 15px'};
   background-color: ${props => props.fancy ? 'white' : colors.redColor};
   border: 0;
   border: ${props => props.fancy ? '1px solid #D9D9D9' : `1px solid ${colors.redColor}`};
   border-radius: 4px;
   text-align: center;
   font-weight: 400;
   font-family: segoe;
   font-size: 14px;
   color: ${props => props.fancy ? colors.black65 : 'white'};
   text-shadow: 0 -1px 0 rgba(0,0,0,0.12);
   box-shadow: ${props => props.fancy ? '0 2px 0 rgba(0,0,0,0.015)' : '0 2px 0 rgba(0,0,0,0.045)'};
   outline: 0;

   cursor: pointer;
   transition: .3s;

   :hover {
      transition: .3s;
      background-color: ${props => props.fancy ? 'white' : colors.hoverRedColor};
      border: 1px solid ${colors.redColor};
      color: ${props => props.fancy ? colors.redColor : 'white'};
   }
`

export const Img = styled.img`
   width: 12px;
   height: 12px;
   margin-right: 7px;
`