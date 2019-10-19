import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as S from './StyledAddNewBookingForm';

const AddNewBookingForm = () => {
   const handleOnSubmit = values => console.log(values)

   return ( 
      <Formik
         initialValues={{
            client: '',
            room: '',
            status: '',
            bookingStart: '',
            bookingEnd: '',
         }}
         validationSchema={Yup.object().shape({
            client: Yup
               .string()
               .required('Client is required'),
            room: Yup
               .string(),
            status: Yup
               .string()
               .required('status is required'),
            bookingStart: Yup
               .string()
               .required('Booking start is required'),
            bookingEnd: Yup
               .string()
               .required('Booking start is required'),
         })}
         onSubmit={values => handleOnSubmit(values)}
         render={props => (
            <S.Wrapper>
               <S.StyledForm onSubmit={props.handleSubmit}>
                  {/* <S.InputsWrapper>
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
                           type='datetime-local' 
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
                           type='datetime-local'  
                        />
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
                  </S.InputsWrapper> */}
               </S.StyledForm>
            </S.Wrapper>
         )}      
      />   
   );
}
 
export default AddNewBookingForm;
