import React from 'react';
import VerifyEmailContainer from '../../containers/VerifyEmailContainer/VerifyEmailContainer';

const VerifyEmailPage = ({location}) => {
   return <VerifyEmailContainer location={location.search} />
}
 
export default VerifyEmailPage;