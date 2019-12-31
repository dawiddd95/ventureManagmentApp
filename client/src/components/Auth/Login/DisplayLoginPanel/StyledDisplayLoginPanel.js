import styled from 'styled-components';

import {Link} from 'react-router-dom';
import colors from '../../../../assets/colors';

export const StyledLink = styled(Link)`
   margin: 0 auto 10px auto;
   color: ${colors.redColor};
   text-align: center;
   font-size: 16px;
   font-family: segoe;
   text-decoration: none;
   transition: .3s;

   :hover {
      color: rgba(245,34,45,0.4);
      transition: .3s;
   }
`