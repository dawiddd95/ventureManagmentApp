import React from 'react';
import * as S from './StyledReservationsSearchForm';
import * as Yup from 'yup';
import {Formik} from 'formik';
import icons from '../../../assets/icons';

const ReservationsSearchForm = () => {
   const handleOnSubmit = values => console.log(values)

   return ( 
      <Formik
         initialValues={{
            id: '',
            client: '',
            room: '',
            status: '',
            reservationStartDate: '',
            reservationStartTime: '',
            reservationEndDate: '',
            reservationEndTime: '',
            createdAtStartDate: '',
            createdAtEndDate: '',
         }}
         // validationSchema NIE JEST SKONCZONE I NIE JEST DOBRZE
         validationSchema={Yup.object().shape({
            id: Yup
               .string(),
            client: Yup
               .string(),
            room: Yup
               .string(),
            status: Yup
               .string(),
            reservationStartDate: Yup
               .string(), 
            reservationEndDate: Yup
               .string(),
            createdAtStartDate: Yup
               .string(),                     
            createdAtEndDate: Yup
               .string(), 
         })}
         onSubmit={values => handleOnSubmit(values)}
         render={props => (
            <S.Wrapper>
               <S.StyledForm onSubmit={props.handleSubmit}>
                  <S.InputsWrapper>
                     <S.Col>
                        <S.Label>Reservation ID:</S.Label> 
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
                        <S.Label>Start Reservation:</S.Label> 
                        <S.PickersWrapper>
                           <S.StyledField 
                              secondaryStyled
                              name='reservationStartDate' 
                              type='date' 
                           />
                           <S.StyledField 
                              secondaryStyled
                              dateTimeStyled
                              name='bookingStartTime' 
                              type='time' 
                           />
                        </S.PickersWrapper>  
                     </S.Col>
                     <S.Col>
                        <S.Label>Created At:</S.Label> 
                        <S.PickersWrapper> 
                           <S.StyledField 
                              secondaryStyled
                              title='Created At Start Date'
                              name='createdAtStartDate' 
                              type='date' 
                           />
                           ~~
                           <S.StyledField 
                              secondaryStyled
                              title='Created At End Date'
                              name='createdAtEndDate' 
                              type='date' 
                           />
                        </S.PickersWrapper>
                     </S.Col>
                     <S.Col lastInput>
                        <S.Label>End Reservation:</S.Label> 
                        <S.PickersWrapper>
                           <S.StyledField 
                              secondaryStyled
                              name='reservationEndDate' 
                              type='date' 
                           />
                           <S.StyledField 
                              secondaryStyled
                              dateTimeStyled
                              name='reservationEndTime' 
                              type='time' 
                           />
                        </S.PickersWrapper>  
                     </S.Col>
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
         )}      
      />   
   );
}
 
export default ReservationsSearchForm;