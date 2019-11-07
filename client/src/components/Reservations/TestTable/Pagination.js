import React from 'react'

const Pagination = ({dataPerPage, totalDataAmount, paginate}) => {
   const pageNumbers = [];

   for (let i = 1; i <= Math.ceil(totalDataAmount / dataPerPage); i++) {
      pageNumbers.push(i);
   }

   return (  
      <div>
         {pageNumbers.map(number => (
            <li key={number} className='page-item'>
               {/* Na kliknięciu numerka wykonają paginate(z numerem tego numerka) */}
               <div onClick={() => paginate(number)}>
                  {number}
               </div>
            </li>
         ))}
      </div>
   );
}
 
export default Pagination;