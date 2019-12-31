import React from 'react';
import axios from 'axios';
import queryString from 'query-string';

import ResetPasswordPanelContainer from '../ResetPasswordPanelContainer/ResetPasswordPanelContainer';

const ResetPasswordContainer = ({location}) => {
   const [success, setSuccess] = React.useState(true);
   const parsed = queryString.parse(location);

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
      <>
         {success 
            ?  <ResetPasswordPanelContainer location={location} /> 
            :  <div>Link is expired</div>
         }
      </>
   );
}
 
export default ResetPasswordContainer;