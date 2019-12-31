import styled from 'styled-components';
import colors from '../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   margin: 40px 0;

   display: flex;
   justify-content: center;
   align-items: center;
`

export const Img = styled.img`
   width: 50px;
   height: 50px;
`

export const ErrorText = styled.div`
   color: ${colors.black65};

   display: flex;
   flex-direction: column;
`

export const Header = styled.header`
   font-size: 18px;
   font-weight: bold;
`

export const Text = styled.p`
   font-size: 14px;
`