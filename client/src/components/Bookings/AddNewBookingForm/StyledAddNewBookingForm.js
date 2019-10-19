import styled from 'styled-components';
import {Formik, Form, Field, ErrorMessage} from 'formik';

import colors from '../../../assets/colors';

export const Wrapper = styled.div`
   width: 100%;
   height: 100%;
   margin-bottom: 20px;
   
   display: block;
`

export const StyledForm = styled(Form)`
   width: 96%;
   height: 100%;
   margin: 30px auto 0 auto;
   border: 1px solid #D9D9D9;
   border-radius: 4px;

   position: relative;
`