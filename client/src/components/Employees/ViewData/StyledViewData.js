import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 90%;
   min-height: 100vh;
   height: auto;
   margin: 60px 20px 40px 20px;

   display: flex;
   flex-direction: column;
`

export const Item = styled.div`
   width: 100%;
   padding: 10px;
   color: ${colors.black85};
   font-size: 14px;
   font-family: Nunito;

   display: flex;
`

export const Label = styled.div`
   width: 25%;
   text-align: right;

   display: flex;
   justify-content: flex-end;
   align-items: center;
`

export const Value = styled.div`
   width: 65%;
   margin-left: 10px;
   font-weight: 600;
   text-align: left;
`

export const Active = styled.div`
   padding: 2px 15px;
   position: absolute;
   background-color: ${({active_style}) => active_style ? '#A0D911' : colors.hoverRedColor};
   border: ${({active_style}) => active_style ? '1px solid #6c920b' : '1px solid #c53504'};
   border-radius: 4px;
   color: white;
   
`

export const PrivilegesWrapper = styled.div`
   width: 50%;
   margin: 0 0 0 10px;

   display: flex;
   flex-wrap: wrap;
`

export const Privilege = styled.div`
   margin: 0 5px 0 0;
   padding: 2px 7px;
   background-color: #FAFAFA;
   border: 1px solid ${colors.silverColor};
   border-radius: 4px;
`

export const NoData = styled.span`
   color: ${colors.redColor};
`