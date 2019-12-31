import React from 'react';
import * as S from './StyledReservationsSearchForm';
import * as Yup from 'yup';
import {Formik, ErrorMessage} from 'formik';

import icons from '../../../assets/icons';
import { statusData } from '../../../assets/data/selectData';

import SingleSelect from '../../Selects/SingleSelect/SingleSelect';


const ReservationsSearchForm = ({handleSearchReservations}) => {
   // To do konetenera
   const [status, setStatus] = React.useState(null);

   const handleOnChange = (value) => {
      setStatus(value)
   } 

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
            createdAtStart: '',
            createdAtEnd: '',
         }}
         validationSchema={Yup.object().shape({
            id: Yup
               .string(),
            client: Yup
               .string(),
            room: Yup
               .string(),
            reservationStartDate: Yup
               .string(), 
            reservationStartTime: Yup
               .string(),
            reservationEndDate: Yup
               .string(),
            reservationEndTime: Yup
               .string(),
            createdAtStart: Yup
               .string(),                     
            createdAtEnd: Yup
               .string(), 
         })}
         // Tutaj powinno wywolac mutacje
         onSubmit={values => {
            const formValues = {...values, status}
            handleSearchReservations(values)
         }}
         render={props => (
            <S.Wrapper>
               <S.StyledForm onSubmit={props.handleSubmit}>
                  <S.InputsWrapper>
                     <S.Col>
                        <S.Label>Reservation ID:</S.Label> 
                        <S.StyledField 
                           name='id' 
                           type='number' 
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
                        <S.ActiveSelectWrapper>
                           <SingleSelect
                              data={statusData}
                              defaultValue=''
                              isClearable={true}
                              handleOnChange={handleOnChange}
                           />
                        </S.ActiveSelectWrapper>
                     </S.Col>
                     <S.Col>
                        <S.Label>Start Reserv. From:</S.Label> 
                        <S.PickersWrapper>
                           <S.StyledField 
                              secondarystyled='true'
                              name='reservationStartDate' 
                              type='date' 
                           />
                           <S.StyledField 
                              secondarystyled='true'
                              datetimestyled='true'
                              name='reservationStartTime' 
                              type='time' 
                           />
                        </S.PickersWrapper>  
                     </S.Col>
                     <S.Col>
                        <S.Label>Created At:</S.Label> 
                        <S.PickersWrapper> 
                           <S.StyledField 
                              secondarystyled='true'
                              title='Created At Start Date'
                              name='createdAtStart' 
                              type='date' 
                           />
                           ~~
                           <S.StyledField 
                              secondarystyled='true'
                              title='Created At End Date'
                              name='createdAtEnd' 
                              type='date' 
                           />
                        </S.PickersWrapper>
                     </S.Col>
                     <S.Col lastinput='true'>
                        <S.Label>Start Reserv. To:</S.Label> 
                        <S.PickersWrapper>
                           <S.StyledField 
                              secondarystyled='true'
                              name='reservationEndDate' 
                              type='date' 
                           />
                           <S.StyledField 
                              secondarystyled='true'
                              datetimestyled='true'
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