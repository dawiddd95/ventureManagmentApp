import React from 'react';
import * as S from './StyledBookingsSearchForm';
import icons from '../../../assets/icons';

const BookingsSearchForm = () => {
   return ( 
      <S.Wrapper>
         <S.StyledForm>
            <S.InputsWrapper>
               <S.Col>
                  <S.Label>Booking ID:</S.Label> 
                  <S.StyledField 
                     name='id' 
                     type='text' 
                  />
               </S.Col>
               <S.Col>
                  <S.Label>Client:</S.Label> 
                  <S.StyledField 
                     name='client' 
                     type='text' 
                  />
               </S.Col>
               <S.Col>
                  <S.Label>Room:</S.Label> 
                  <S.StyledField 
                     name='room' 
                     type='text' 
                  />
               </S.Col>
               <S.Col>
                  <S.Label>Status:</S.Label> 
                  <S.StyledField 
                     name='status' 
                     type='text' 
                  />
               </S.Col>
               <S.Col>
                  <S.Label>Booking Start Date:</S.Label> 
                  <S.StyledField 
                     name='bookingStart' 
                     type='date' 
                  />
               </S.Col>
               <S.Col>
                  <S.Label>Created At:</S.Label> 
                  <S.StyledField 
                     rangeValue
                     title='Created At Start Date'
                     name='createdAtStartDate' 
                     type='date' 
                  />
                  ~~
                  <S.StyledField 
                     rangeValue
                     title='Created At End Date'
                     name='createdAtEndDate' 
                     type='date' 
                  />
               </S.Col>
               <S.Col lastInput>
                  <S.Label>Booking End Date:</S.Label> 
                  <S.StyledField 
                     name='bookingEnd' 
                     type='date' 
                  />
               </S.Col>
               
               {/* Zrobic te 2 buttony */}
               <S.ButtonsWrapper>
                  <S.Button type='submit'>
                     <S.Img src={icons.search} />
                     Search
                  </S.Button> 
                  <S.Button type='reset' fancy>
                     <S.Img src={icons.reset} />
                     Reset
                  </S.Button> 
               </S.ButtonsWrapper>
            </S.InputsWrapper>
         </S.StyledForm>
      </S.Wrapper>
   );
}
 
export default BookingsSearchForm;