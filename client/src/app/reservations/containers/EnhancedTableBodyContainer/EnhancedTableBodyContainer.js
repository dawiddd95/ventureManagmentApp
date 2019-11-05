//  Tutaj tylko działania redux to filtrowania, sortowania etc... (W Duck reservations)
import React from 'react';
import {useSelector, useDispatch} from 'react-redux';

import EnhancedTableBody from '../../../../components/Reservations/EnhancedTableBody/EnhancedTableBody';
import TestTable from '../../../../components/Reservations/TestTable/TestTable';


const EnhancedTableBodyContainer = () => {   
   const {userReservations} = useSelector(state => state.fetchedUserReservations.reservations);

   // Tutaj zaczyna już się logika nowego pomysłu
   const dispatch = useDispatch();


   const data = [].concat(userReservations);
   // asc i desc stworzymy zamieniając miejscami 1 oraz -1 w ifach
   // orderBy stworzymy pobierajac do <EnhancedTableBodyContainer /> lub tutaj do <TestTable /> ze storea daną wobec czego sortujemy czy: id, client, status etc...

   // a i b reprezentują jeden element i drugi do porównania dla a i b mamy dostęp do wszystkich pól obiektu data
   const compare = (a, b) => {
      const elementA = typeof a.client === 'string' ? a.client.trim() : a.client;
      const elementB = typeof b.client === 'string' ? b.client.trim() : b.client;
      let comparison = 0;

      if(elementA > elementB) comparison = 1
      if(elementA < elementB) comparison = -1

      return comparison
   }

   const handleSortData = () => {
      data.sort(compare)
   }

   const handleSortBy = (parametr) => {
      console.log('klikniecie na client, id, createdAt etc.. wywoła tę funkcję z argumentem który zostanie tutaj przekazany jako parametr np: client lub id <= nazwy argumentów, a parametr będzie mieć nazwę sortBy')
      console.log('zostanie tutaj zdispatchowana akcja ustawiająca według czego sortujemy, jej wartość będzie dostępna w useSelector, compare będzie sobie pobierał z useSelector to według czego sortujemy i wrzuci to jako .sortBy. w miejsce .client.')

      // zrobić dispatch według czego sortujemy
   }

   const handleSortOrder = (parametr) => {
      console.log('będzie dispatchować kierunek w jakim ma sortować')
      console.log('będzie ustawiać dispatcha na kierunek i wtedy compare też z useSelector pobierze wartosc asc lub desc')
      console.log('od tego będa zależeć comparison zwracane po ifach np: useSelector będzie do zmiennej {sortOrder}')
      console.log(`i wtedy będzie np: comparison = sortOrder === 'asc' ? 1 : -1   a drugi if na odwrót`)

      // zrobić dispatch kierunku sortowania
   }


   // Zatrzymanie przesłania propsu dopóki nie pobrało stanu z reduxa
   return (
      <>
         {userReservations 
            ?  <TestTable 
                  userReservations={data}
                  handleSortData={handleSortData}
                  handleSortBy={handleSortBy}
                  handleSortOrder={handleSortOrder}
               />

            //  ?  <EnhancedTableBody 
            //       userReservations={userReservations}
            //    />
            :  <div>LOADING</div>
         }
      </>
   )
}
 
export default EnhancedTableBodyContainer;