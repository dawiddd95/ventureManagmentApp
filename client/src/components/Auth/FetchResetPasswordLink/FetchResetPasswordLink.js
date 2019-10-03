import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import ResetPasswordContent from '../ResetPasswordContent/ResetPasswordContent';

const FetchResetPasswordLink = (props) => {
   const [success, setSuccess] = React.useState(true);
   const parsed = queryString.parse(props.location.search);

   React.useEffect(() => {
      axios.get('/api/auth/reset-password', {
         headers: {
            code: parsed.code, 
            key: parsed.key
         }
      })
      .then(res => {
         const {success} = res.data;
         setSuccess(success);
      })
      .catch(err => console.log(err))
   }, [])

   return (  
      <div>
         {success ? <ResetPasswordContent
               location={props.location.search}
            /> : <div>Link is expired</div>
         }
      </div>
   );
}
 
export default FetchResetPasswordLink;