import React from 'react'

const style={'padding': '20px'}

const TestTable = ({userReservations, handleSortData, handleSortBy, handleSortOrder}) => {
   // const data = [].concat(userReservations);

   // // asc i desc stworzymy zamieniając miejscami 1 oraz -1 w ifach
   // // orderBy stworzymy pobierajac do <EnhancedTableBodyContainer /> lub tutaj do <TestTable /> ze storea daną wobec czego sortujemy czy: id, client, status etc...

   // // a i b reprezentują jeden element i drugi do porównania dla a i b mamy dostęp do wszystkich pól obiektu data
   // const compare = (a, b) => {
   //    const elementA = a.client.trim();
   //    const elementB = b.client.trim();
   //    let comparison = 0;

   //    if(elementA > elementB) comparison = 1
   //    if(elementA < elementB) comparison = -1

   //    return comparison
   // }

   // używamy .sort() na data więc teraz cały obiekt jest przekazany do funkcji compare
   // Później ta funkcja nie będzie tak luźno
   // data.sort(compare)

   return (  
      <>
         <button>Sort By, ale to powinien być select</button>
         <button>Sort Order, ale to powinien być select</button>
         <table>
            <tr>
               <th style={style}>Reservation ID</th>
               <th style={style}>Client</th>
               <th style={style}>Room</th>
               <th style={style}>Status</th>
               <th style={style}>Start Reservation</th>
               <th style={style}>End Reservation</th>
               <th style={style}>Created At Date</th>
            </tr>
            {userReservations.map(reservation => (
               <tr>
                  <td style={style}>{reservation.id}</td>
                  <td style={style}>{reservation.client}</td>
                  <td style={style}>{reservation.room}</td>
                  <td style={style}>{reservation.status}</td>
                  <td style={style}>{reservation.reservationStartDate} {reservation.reservationStartTime}</td>
                  <td style={style}>{reservation.reservationEndDate} {reservation.reservationEndTime}</td>
                  <td style={style}>{reservation.createdAt}</td>
               </tr>
            ))}
         </table>
      </>
   );
}
 
export default TestTable;