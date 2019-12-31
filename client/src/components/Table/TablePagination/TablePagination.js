import React from 'react';
import * as S from './StyledTablePagination';

import icons from '../../../assets/icons';


const TablePagination = ({pageNumbers, currentPage, paginationValue, paginate, handleSetPagination}) => {
   return (  
      <S.Wrapper>
         <S.Select value={paginationValue} onChange={handleSetPagination}>
            <option value={5}>5 / page</option>
            <option value={10}>10 / page</option>
            <option value={20}>20 / page</option>
            <option value={30}>30 / page</option>
            <option value={40}>40 / page</option>
            <option value={50}>50 / page</option>
            <option value={100}>100 / page</option>
         </S.Select>
         <S.Button
            disabled={currentPage === 1 ? true : false}
            onClick={() => paginate(currentPage-1)}
         >
            <S.Img src={icons.arrowLeft} alt=""/>          
         </S.Button>
         {pageNumbers.map(number => (
            <S.Button 
               key={number}
               active_style={currentPage === number ? true : false}
               onClick={() => paginate(number)}
            >
               {number}
            </S.Button>
         ))}
         <S.Button
            disabled={currentPage === pageNumbers.length ? true : false}
            onClick={() => paginate(currentPage+1)}
         >
            <S.Img src={icons.arrowRight} alt=""/> 
         </S.Button>
      </S.Wrapper>
   );
}
 
export default TablePagination;