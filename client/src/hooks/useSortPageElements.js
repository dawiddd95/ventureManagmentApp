export const useSortPageElements = (tableElements, sortBy, sortOrder, currentPage, pagination) => {
   
   const data = [].concat(tableElements);
   const indexOfLastData = currentPage * pagination;
   const indexOfFirstData = indexOfLastData - pagination;
   const currentData = data.slice(indexOfFirstData, indexOfLastData);

   const compare = (a, b) => {
      const elementA = typeof a[sortBy] === 'string' ? a[sortBy].trim() : a[sortBy];
      const elementB = typeof b[sortBy] === 'string' ? b[sortBy].trim() : b[sortBy];
      let comparison = 0;

      if(elementA > elementB) comparison = sortOrder === 'asc' ? 1 : -1
      if(elementA < elementB) comparison = sortOrder === 'asc' ? -1 : 1

      return comparison
   }

   currentData.sort(compare)

   return currentData
}