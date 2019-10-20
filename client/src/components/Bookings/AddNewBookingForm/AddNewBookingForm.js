import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as S from './StyledAddNewBookingForm';

import icons from '../../../assets/icons';

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
               .required('Booking start date is required'),
            bookingEnd: Yup
               .string()
               .required('Booking end date is required'),
            notes: Yup
               .string(),
            employeeNotes: Yup
               .string(),
            cancellationNotes: Yup
               .string()
         })}
         onSubmit={values => handleOnSubmit(values)}
         render={props => (
            <S.Wrapper>
               <S.StyledForm onSubmit={props.handleSubmit}>
                  <S.FieldWrapper firstField>
                     <S.Col>
                        <S.Label>Client:</S.Label> 
                        <S.StyledField 
                           name='client' 
                           type='text' 
                        />
                     </S.Col>
                     <S.StyledErrorMessage 
                        name='client' 
                        component='p' 
                     />
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Booking Period:</S.Label> 
                        <S.PickersWrapper> 
                           <S.StyledField 
                              rangeValue
                              left
                              name='bookingStart' 
                              type='datetime-local' 
                           />
                           ~~
                           <S.StyledField 
                              rangeValue
                              right
                              name='bookingEnd' 
                              type='datetime-local' 
                           />
                        </S.PickersWrapper>
                     </S.Col>
                     <S.StyledErrorMessage 
                        name='bookingStart' 
                        component='p' 
                     />
                     <S.StyledErrorMessage 
                        name='bookingEnd' 
                        component='p' 
                     />
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Notes:</S.Label> 
                        <S.StyledFieldTextarea 
                           textarea
                           component='textarea'
                           name='notes' 
                           type='text' 
                        />
                     </S.Col>
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Employee Notes:</S.Label> 
                        <S.StyledFieldTextarea 
                           textarea
                           component='textarea'
                           name='employeeNotes' 
                           type='text' 
                        />
                     </S.Col>
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Room:</S.Label> 
                        <S.StyledField 
                           name='room' 
                           type='text' 
                        />
                     </S.Col>
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Status:</S.Label> 
                        <S.StyledField 
                           name='status' 
                           type='text' 
                        />
                     </S.Col>
                     <S.StyledErrorMessage 
                        name='status' 
                        component='p' 
                     />
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Cancellation Notes:</S.Label> 
                        <S.StyledFieldTextarea 
                           textarea
                           component='textarea'
                           name='cancellationNotes' 
                           type='text' 
                        />
                     </S.Col>
                  </S.FieldWrapper>
                     <S.ButtonsWrapper>
                        <S.Button type='submit'>
                           <S.Img src={icons.save} />
                           Save
                        </S.Button> 
                        <S.Button type='reset' fancy>
                           <S.Img src={icons.reset} />
                           Reset
                        </S.Button> 
                     </S.ButtonsWrapper>
               </S.StyledForm>
            </S.Wrapper>
         )}      
      />   
   );
}
 
export default AddNewBookingForm;