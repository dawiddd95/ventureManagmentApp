import React from 'react';
import {Mutation} from 'react-apollo';
import { CREATE_RESERVATION_MUTATION } from '../../../graphql/reservation/mutation';
import { USER_RESERVATIONS_QUERY } from '../../../graphql/reservation/query';
import * as S from './StyledImportButton';
import icons from '../../../assets/icons';

const ImportButton = ({handleImportExcelData}) => {
   return (  
      <S.ImportWrapper>
         <S.ImportButton type='file'>
            <S.Img src={icons.box} />
            Click or drag the file to this area to continue
         </S.ImportButton>
            <Mutation 
               mutation={CREATE_RESERVATION_MUTATION} 
               refetchQueries={[{query: USER_RESERVATIONS_QUERY}]} 
            >
               {mutation => (
                  <S.ImportInput  
                     type='file' 
                     accept='.xls, .xlsx' 
                     onChange={(event) => handleImportExcelData(mutation, event)} 
                  />
               )}
            </Mutation>
      </S.ImportWrapper>
   );
}
 
export default ImportButton;
