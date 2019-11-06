import React from 'react'

const style={'padding': '20px'}

const TestTable = ({userReservations, sortBy, handleSortBy, handleSortOrder, handleSelectElement}) => {
   return (  
      <>
         <label htmlFor='sortBySelect'>SORT BY </label>
         <select value={sortBy} onChange={handleSortBy} id='sortBySelect'>
            <option value='id'>Reservation ID</option>
            <option value='client'>Client</option>
            <option value='room'>Room</option>
            <option value='status'>Status</option>
            <option value='reservationStartDate'>Start Reservation Date</option>
            <option value='reservationStartTime'>Start Reservation Time</option>
            <option value='reservationEndDate'>End Reservation Date</option>
            <option value='reservationEndTime'>End Reservation Time</option>
            <option value='createdAt'>Created At Date</option>
         </select>

         {/* Tutaj dwa fancy buttony jak nad formularzem aktywny będzie na czerwono strzałeczki jako ikonki */}
         <button onClick={() => handleSortOrder('asc')}>Asc</button>
         <button onClick={() => handleSortOrder('desc')}>Desc</button>
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
               <tr onClick={() => handleSelectElement(reservation.id)}>
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