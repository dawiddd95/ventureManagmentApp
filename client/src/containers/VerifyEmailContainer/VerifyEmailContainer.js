import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

import VerifyEmail from '../../components/Auth/VerifyEmail/VerifyEmail';

const VerifyEmailContainer = ({location}) => {
   const [result, setResult] = React.useState({});
   const parsed = queryString.parse(location);  

   React.useEffect(() => {
      axios.get('/auth/verify', {
         headers: {
            code: parsed.code, 
            key: parsed.key
         }
      })
      .then(res => {
         setResult(res.data);
      })
      .catch(err => console.log(err))
   }, [])


   return (
      <VerifyEmail 
         header={result.header}
         text={result.text}
      /> 
   ) 
}
 
export default VerifyEmailContainer;