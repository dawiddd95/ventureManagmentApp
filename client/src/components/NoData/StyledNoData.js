import styled from 'styled-components';
import colors from '../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   height auto;
   padding: 45px 0;
   color: ${colors.silverColor};
   border-bottom: 1px solid ${colors.silverColor};

   display: flex;
   flex-direction: column;
   justify-content: center;
   align-items: center;
`

export const Img = styled.img`
   width: 50px;
   height: 50px;
   margin: 0 0 20px 0;
`