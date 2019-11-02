import React from 'react';
import axios from 'axios';
import queryString from 'query-string';
import * as S from './StyledVerifyEmail';

const AuthVerifyEmail = (props) => {
   const [result, setResult] = React.useState({});
   const parsed = queryString.parse(props.location.search);  

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
   }, [parsed.key])

   return (  
      <S.Wrapper>
         <S.Box>
            <S.Header>
               {result.header}
            </S.Header>
            <S.Text>
               {result.text}
            </S.Text>
         </S.Box>
      </S.Wrapper>
   );
}
 
export default AuthVerifyEmail;