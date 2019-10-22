import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as S from './StyledAddNewBookingForm';

import icons from '../../../assets/icons';

const AddNewBookingForm = ({handleOnSubmit}) => {
   return ( 
      <Formik
         initialValues={{
            client: '',
            room: '',
            status: '',
            bookingStartDate: '',
            bookingStartTime: '',
            bookingEndDate: '',
            bookingEndTime: '',
            notes: '',
            employeeNotes: '',
            cancellationNotes: ''
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
            bookingStartDate: Yup
               .string()
               .required('Booking start date is required'),
            bookingStartTime: Yup
               .string()
               .required('Booking start time is required'),
            bookingEndDate: Yup
               .string()
               .required('Booking end date is required'),
            bookingEndTime: Yup
               .string()
               .required('Booking end time is required'),
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
                  <S.FieldWrapper firstField='true'>
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
                        <S.Label>Booking Start Date:</S.Label> 
                        <S.PickersWrapper> 
                           <S.StyledField 
                              secondaryStyled='true'
                              left='true'
                              name='bookingStartDate' 
                              type='date' 
                           />
                           <S.StyledField 
                              secondaryStyled='true'
                              dateTimeStyled='true'
                              name='bookingStartTime' 
                              type='time' 
                           />
                        </S.PickersWrapper>
                     </S.Col>
                     <S.StyledErrorMessage 
                        name='bookingStartDate' 
                        component='p' 
                     />
                     <S.StyledErrorMessage 
                        name='bookingStartTime' 
                        component='p' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Booking End Date:</S.Label> 
                        <S.PickersWrapper>
                           <S.StyledField 
                              secondaryStyled='true'
                              right='true'
                              name='bookingEndDate' 
                              type='date' 
                           />
                           <S.StyledField 
                              secondaryStyled='true'
                              dateTimeStyled='true'
                              name='bookingEndTime' 
                              type='time' 
                           />
                        </S.PickersWrapper>
                     </S.Col>
                     <S.StyledErrorMessage 
                        name='bookingEndDate' 
                        component='p' 
                     />
                     <S.StyledErrorMessage 
                        name='bookingEndTime' 
                        component='p' 
                     />
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Notes:</S.Label> 
                        <S.StyledFieldTextarea 
                           textarea='true'
                           component='textarea'
                           value={props.notes}
                           name='notes' 
                           type='text' 
                        />
                     </S.Col>
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Employee Notes:</S.Label> 
                        <S.StyledFieldTextarea 
                           textarea='true'
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
                           textarea='true'
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