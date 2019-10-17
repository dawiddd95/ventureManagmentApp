import React from 'react';
import * as S from './StyledBookings';

import icons from '../../../assets/icons';

import LoadingSpinner from '../../Animations/LoadingSpinner/LoadingSpinner';
import SearchFormActionButtons from '../SearchFormActionButtons/SearchFormActionButtons';
import BookingsSearchForm from '../BookingsSearchForm/BookingsSearchForm';
import AsideNavigation from '../../AsideMenu/AsideNavigation/AsideNavigation';
import BookingsTable from '../BookingsTable/BookingsTable';

const Bookings = ({bookings, visible}) => {
   // return (  
   //    <div>
   //       <LoadingSpinner small={false} />
   //    </div>
   // );

   return(
      <S.Wrapper>
         {visible ? <AsideNavigation /> : null}
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
               <SearchFormActionButtons />
               <BookingsSearchForm />
               <BookingsTable />
            </S.BookingsBox>
         </S.MainContent>
      </S.Wrapper>
   )
}
 
export default Bookings;




// {
//   "name": "client",
//   "version": "0.1.0",
//   "private": true,
//   "dependencies": {
//     "@date-io/date-fns": "^1.3.11",
//     "@material-ui/core": "^4.5.0",
//     "@material-ui/icons": "^4.4.3",
//     "@material-ui/pickers": "^3.2.6",
//     "antd": "^3.23.6",
//     "axios": "^0.19.0",
//     "bootstrap": "^4.3.1",
//     "date-fns": "^2.0.0-beta.5",
//     "formik": "^1.5.8",
//     "immer": "^3.2.0",
//     "js-cookie": "^2.2.1",
//     "jwt-decode": "^2.2.0",
//     "query-string": "^6.8.2",
//     "rc-datepicker": "^5.0.14",
//     "react": "^16.8.6",
//     "react-bootstrap": "^1.0.0-beta.14",
//     "react-datepicker": "^2.9.6",
//     "react-day-picker": "^7.3.2",
//     "react-dom": "^16.8.6",
//     "react-redux": "^7.1.0",
//     "react-reveal": "^1.2.2",
//     "react-router": "^5.0.1",
//     "react-router-dom": "^5.0.1",
//     "react-scripts": "3.0.1",
//     "redux": "^4.0.4",
//     "redux-devtools-extension": "^2.13.8",
//     "redux-thunk": "^2.3.0",
//     "styled-components": "^4.3.2",
//     "uuid": "^3.3.2",
//     "yup": "^0.27.0"
//   },
//   "scripts": {
//     "start": "react-scripts start",
//     "build": "react-scripts build",
//     "test": "react-scripts test",
//     "eject": "react-scripts eject"
//   },
//   "eslintConfig": {
//     "extends": "react-app"
//   },
//   "browserslist": {
//     "production": [
//       ">0.2%",
//       "not dead",
//       "not op_mini all"
//     ],
//     "development": [
//       "last 1 chrome version",
//       "last 1 firefox version",
//       "last 1 safari version"
//     ]
//   },
//   "proxy": "http://localhost:5000"
// }
