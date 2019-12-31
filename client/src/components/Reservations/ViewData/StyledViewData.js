import styled, {css} from 'styled-components';
import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 90%;
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
`

export const Value = styled.div`
   width: 65%;
   margin-left: 10px;
   font-weight: 600;
   text-align: left;
`

export const Status = styled.button`
   height: 22px;
   padding: 0 7px;
   border-radius: 4px;
   color: white;
   font-size: 12px;
   font-family: Arial;
   outline: 0;
   border: 0;

   ${({status_style}) => status_style === 'Cancelled' && css`
      background-color: #FF6D25;
   `}
   ${({status_style}) => status_style === 'Booked' && css`
      background-color: #349DEA;
   `}
   ${({status_style}) => status_style === 'In Progress' && css`
      background-color: #99D57D;
   `}
   ${({status_style}) => status_style === 'Completed' && css`
      background-color: ${colors.disable};
      border: 1px solid ${colors.silverColor};
      color: black;
   `}
`

export const NoData = styled.span`
   color: ${colors.redColor};
`