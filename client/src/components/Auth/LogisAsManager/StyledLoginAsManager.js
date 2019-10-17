import styled from 'styled-components';
import {Link} from 'react-router-dom';

import colors from '../../../assets/colors';

export const Content = styled.div`
   width: 500px;
   background-color: white;

   display: flex;
   flex-direction: column;
`

export const StyledLink = styled(Link)`
   margin: 20px auto 0 auto;
   color: ${colors.redColor};
   text-align: center;
   font-size: 16px;
   font-family: segoe;
   text-decoration: none;
   transition: .3s;

   :hover {
      color: rgba(245,34,45,0.8);
      transition: .3s;
   }
`