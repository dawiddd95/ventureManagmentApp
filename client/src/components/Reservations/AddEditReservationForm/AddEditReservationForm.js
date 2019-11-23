import React from 'react';
import {Formik} from 'formik';
import * as Yup from 'yup';
import * as S from './StyledAddEditReservationForm';

import icons from '../../../assets/icons';

const AddEditReservationForm = ({mutation, isEdit, reservation}) => {
   return ( 
      <Formik
         initialValues={{
            client: !isEdit ? '' : reservation.client,
            room: !isEdit ? '' : reservation.room,
            status: !isEdit ? '' : reservation.status,
            reservationStartDate: !isEdit ? '' : reservation.reservationStartDate,
            reservationStartTime: !isEdit ? '' : reservation.reservationStartTime,
            reservationEndDate: !isEdit ? '' : reservation.reservationEndDate,
            reservationEndTime: !isEdit ? '' : reservation.reservationEndTime,
            notes: !isEdit ? '' : reservation.notes,
            employeeNotes: !isEdit ? '' : reservation.employeeNotes,
            cancellationNotes: !isEdit ? '' : reservation.cancellationNotes
         }}
         validationSchema={Yup.object().shape({
            client: Yup
               .string()
               .required('Client is required'),
            room: Yup
               .string(),
            status: Yup
               .string(),
            reservationStartDate: Yup
               .string()
               .required('Reservation start date is required'),
            reservationStartTime: Yup
               .string()
               .required('Reservation start time is required'),
            reservationEndDate: Yup
               .string()
               .required('Reservation end date is required'),
            reservationEndTime: Yup
               .string()
               .required('Reservation end time is required'),
            notes: Yup
               .string(),
            employeeNotes: Yup
               .string(),
            cancellationNotes: Yup
               .string()
         })}
         onSubmit={values => {
            if(isEdit) values.id = reservation.id
            mutation({variables: values})
         }}
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
                        <S.Label>Start Reservation:</S.Label> 
                        <S.PickersWrapper> 
                           <S.StyledField 
                              secondaryStyled='true'
                              left='true'
                              name='reservationStartDate' 
                              type='date' 
                           />
                           <S.StyledField 
                              secondaryStyled='true'
                              dateTimeStyled='true'
                              name='reservationStartTime' 
                              type='time' 
                           />
                        </S.PickersWrapper>
                     </S.Col>
                     <S.StyledErrorMessage 
                        name='reservationStartDate' 
                        component='p' 
                     />
                     <S.StyledErrorMessage 
                        name='reservationStartTime' 
                        component='p' 
                     />
                  </S.FieldWrapper>
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>End Reservation:</S.Label> 
                        <S.PickersWrapper>
                           <S.StyledField 
                              secondaryStyled='true'
                              right='true'
                              name='reservationEndDate' 
                              type='date' 
                           />
                           <S.StyledField 
                              secondaryStyled='true'
                              dateTimeStyled='true'
                              name='reservationEndTime' 
                              type='time' 
                           />
                        </S.PickersWrapper>
                     </S.Col>
                     <S.StyledErrorMessage 
                        name='reservationEndDate' 
                        component='p' 
                     />
                     <S.StyledErrorMessage 
                        name='reservationEndTime' 
                        component='p' 
                     />
                  </S.FieldWrapper> 
                  <S.FieldWrapper>
                     <S.Col>
                        <S.Label>Notes:</S.Label> 
                        <S.StyledFieldTextarea 
                           textarea='true'
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
 
export default AddEditReservationForm;