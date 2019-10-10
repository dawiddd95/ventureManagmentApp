import React from 'react';
import * as S from './StyledBookings';

import icons from '../../../assets/icons';

import LoadingSpinner from '../../Animations/LoadingSpinner/LoadingSpinner';
import AsideContent from '../../AsideMenu/AsideContent/AsideContent';

const Bookings = ({bookings, visible}) => {
   // return (  
   //    <div>
   //       <LoadingSpinner small={false} />
   //    </div>
   // );
   const [isAllowed, setIsAllowed] = React.useState(false)

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
               
               {/* tabela z paginacja jako 1 oddzielny */}
            </S.BookingsBox>
         </S.MainContent>
      </S.Wrapper>
   )
}
 
export default Bookings;