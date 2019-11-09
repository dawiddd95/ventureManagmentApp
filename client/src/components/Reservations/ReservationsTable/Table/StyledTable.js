import styled, {css} from 'styled-components';
import {Link} from 'react-router-dom';

import colors from '../../../../assets/colors';

export const TableWrapper = styled.div`
   overflow-x: scroll;
`

export const Table = styled.table`
   width: 1700px;
   border-collapse: collapse;
   overflow-x: scroll;
`

export const Thead = styled.thead`
   font-size: 14px;
   background-color: #FAFAFA;
`

export const Th = styled.th`
   width: ${props => props.checkbox ? '50px' : '100px'};
   height: 50px;
   margin: 0; 
   font-weight: 600;
   font-size: 13px;
   font-family: Nunito;
   border: 2px solid #FAFAFA;
   vertical-align: middle;

   label {
      width: 0;
      height: 0;
      margin: 0 40px 0 0;
      padding: 0;
   }
`