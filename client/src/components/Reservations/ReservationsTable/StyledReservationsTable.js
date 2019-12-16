import styled from 'styled-components';

export const TableWrapper = styled.div`
   overflow-x: ${({no_data}) => no_data ? 'hidden' : 'scroll'}
`

export const Table = styled.table`
   width: ${({no_data}) => no_data ? '100%' : '1700px'};
   border-collapse: collapse;
   overflow-x: ${({no_data}) => no_data ? 'hidden' : 'scroll'}
`

export const Thead = styled.thead`
   font-size: 14px;
   background-color: #FAFAFA;
`

export const Th = styled.th`
   width: auto;
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