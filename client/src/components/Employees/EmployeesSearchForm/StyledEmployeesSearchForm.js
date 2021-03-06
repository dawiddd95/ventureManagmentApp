import styled, {css} from 'styled-components';
import {Form, Field} from 'formik';

import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   margin-bottom: 20px;
   
   display: block;
`

export const StyledForm = styled(Form)`
   width: 96%;
   margin: 30px 20px 0 20px;
   border: 1px solid #D9D9D9;
   border-radius: 4px;

   position: relative;
`

export const InputsWrapper = styled.div`
   width: 98%;
   margin: 20px auto;
   
   display: flex;
   flex-wrap: wrap;
   justify-content: flex-start;
`

export const Col = styled.div`
   width: 49%;
   height: ${props => props.select ? 'auto' : '40px'};
   margin: ${props => props.lastinput ? '20px auto 0 10px' : '20px 0 0 0'};

   display: flex;
   justify-content: flex-end;
   align-items: center;
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
   width: ${props => props.secondarystyled ? '40%' : '72%'};
   height:  ${props => props.secondarystyled ? '38px' : '40px'};
   margin: ${props => props.secondarystyled ? '0 5px' : '0'};
   padding: ${props => props.secondarystyled ? '0 0 0 40px' : '0 0 0 15px'};
   border: 0;
   outline: 0;
   background-color: white;
   border: ${props => props.secondarystyled ? 0 : `1px solid ${colors.silverColor}`};   
   border-radius: 5px;
   font-weight: 200;
   font-size: 14px;
   color: rgba(0,0,0,0.65);
   transition: 0.3s;

   &:hover {
      transition: 0.3s;
      border: ${props => props.secondarystyled ? '0' : `1px solid ${colors.redColor}`};
   }

   &:focus {
      border: ${props => props.secondarystyled ? '0' : `1px solid ${colors.redColor}`};
      box-shadow:  ${props => props.secondarystyled ? '0' : '0 0 0 2px rgba(245,34,45,0.2)'};
   }

   ${props => props.datetimestyled && css `
      padding: 0;
   `}
`

export const PickersWrapper = styled.div`
   width: 75%;
   height: 100%;
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

export const PrivilegesWrapper = styled.div`
   width: 100%;
   height: 100%;
   margin: 40px 10px;
   padding: 0 20px;
   border: 1px solid${colors.silverColor};
   border-radius: 4px;
`

export const Header = styled.div`
   margin: -12px 0 0 20px;
   padding: 0 5px;
   font-size: 14px;
   color: ${colors.black85};
   background-color: white;
   position: absolute;
`

export const PrivilegesSelects = styled.div`
   margin-top: 20px;

   display: flex;
   flex-wrap: wrap;
`

export const ActiveSelectWrapper = styled.div`
   width: 75%;
   height: 100%;
   border: 0;
`

export const ButtonsWrapper = styled.div`
   width: 98%;
   display: flex;
   justify-content: flex-end;
`

export const Button = styled.button`
   height: 32px;
   margin: 20px 10px 0 0;
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