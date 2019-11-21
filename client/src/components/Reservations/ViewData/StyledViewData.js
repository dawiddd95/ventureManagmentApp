import styled from 'styled-components';
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

export const NoData = styled.span`
   color: ${colors.redColor};
`