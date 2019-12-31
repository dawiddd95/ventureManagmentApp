import styled from 'styled-components';

export const TableWrapper = styled.div`
   overflow-x: ${({no_data_style}) => no_data_style ? 'hidden' : 'scroll'}
`

export const Table = styled.table`
   width: ${({no_data_style}) => no_data_style ? '100%' : '1700px'};
   border-collapse: collapse;
   overflow-x: ${({no_data_style}) => no_data_style ? 'hidden' : 'scroll'}
`

export const Thead = styled.thead`
   font-size: 14px;
   background-color: #FAFAFA;
`