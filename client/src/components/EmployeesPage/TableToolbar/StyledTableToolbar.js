import styled from 'styled-components';
import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   height: 60px;
   background-color: #FAFAFA;
   display: ${props => props.hide ? 'none' : 'flex'};
   align-items: center;
`

export const SelectedAmount = styled.div`
   margin: 0 20px 0 30px;
   font-weight: 600;
   font-size: 14px;
   font-family: Nunito;
   color: ${colors.black85};
`

export const Img = styled.img`
   width: 20px;
   height: 20px;
   cursor: pointer;
`