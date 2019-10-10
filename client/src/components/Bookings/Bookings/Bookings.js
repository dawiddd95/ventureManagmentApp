import React from 'react';
import * as S from './StyledBookings';
import * as Yup from 'yup';
import {Formik} from 'formik';

import icons from '../../../assets/icons';

import LoadingSpinner from '../../Animations/LoadingSpinner/LoadingSpinner';
import AsideContent from '../../AsideMenu/AsideContent/AsideContent';
import BookingsSearchForm from '../BookingsSearchForm/BookingsSearchForm';

const Bookings = ({bookings, visible}) => {
   // return (  
   //    <div>
   //       <LoadingSpinner small={false} />
   //    </div>
   // );
   const [isAllowed, setIsAllowed] = React.useState(false)

   const handleOnSubmit = values => console.log(values)

   return(
      <S.Wrapper>
         {visible ? <AsideContent /> : null}
         <S.MainContent>
            <S.BreadCrumbs>
               <S.StyledLink>
                  Home
               </S.StyledLink>
               / Bookings
            </S.BreadCrumbs>
            <S.BookingsBox>
               <S.Header>
                  Bookings
               </S.Header>
               <S.ButtonsWrapper>
                  <S.ButtonLink to='/user/bookings/new' allowed>
                     <S.Img src={icons.add} />
                     New
                  </S.ButtonLink>
                  <S.ButtonLink to='/user/bookings/new' allowed>
                     <S.Img src={icons.upload} />
                     Import
                  </S.ButtonLink>
                  <S.ButtonLink to='/user/bookings/new' allowed={isAllowed}>
                     <S.Img src={icons.bin} />
                     Delete
                  </S.ButtonLink>
                  <S.FancyButtonLink allowed>
                     <S.Img src={icons.audit} />
                     Audit Logs
                  </S.FancyButtonLink>
                  <S.FancyButtonLink allowed>
                     <S.Img src={icons.exportToExcel} />
                     Export to Excel
                  </S.FancyButtonLink>
               </S.ButtonsWrapper>


               {/* Formularz szukania oddzielny komponent */}
               <Formik
                  component={BookingsSearchForm}
                  initialValues={{
                     id: '',
                     owner: '',
                     period: '',
                     totalFeeMin: '',
                     totalFeeMax: '',
                     createdAt: '',
                     room: '',
                     status: '',
                  }}
                  validationSchema={Yup.object().shape({
                     id: Yup
                        .string(),
                     owner: Yup
                        .string(),
                     period: Yup
                        .string(),  
                     totalFeeMin: Yup
                        .number(),
                     totalFeeMax: Yup
                        .number(),
                     createdAt: Yup
                        .string(),                     
                     room: Yup
                        .string(),
                     status: Yup
                        .string(),
                  })}
                  onSubmit={values => handleOnSubmit(values)}      
               />



               {/* tabela z paginacja jako 1 oddzielny */}
            </S.BookingsBox>
         </S.MainContent>
      </S.Wrapper>
   )
}
 
export default Bookings;