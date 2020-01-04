import React from 'react';
import { Mutation } from 'react-apollo';

import * as S from './StyledDialog';

import { DELETE_EMPLOYEES_MUTATION } from '../../../graphql/employee/mutation';
import { USER_EMPLOYEES_QUERY } from '../../../graphql/employee/query';


const Dialog = ({title, text, selected, handleOnCompleted, handleCloseDialog}) => {
   const selectedIds = selected.map(item => item)
   return (  
      <S.Wrapper>
         <S.Dialog>
            <S.Title>
               ds
               {title}
            </S.Title>
            <S.Text>
               {text}
               {selected.map(item => <S.Span key={item}>{item}. </S.Span>)}
            </S.Text>
            <S.ButtonsWrapper>
               <Mutation 
                  mutation={DELETE_EMPLOYEES_MUTATION}
                  variables={{id: selected}}
                  refetchQueries={[{query: USER_EMPLOYEES_QUERY}]}   
                  onCompleted={() => handleOnCompleted(selectedIds)}
               >
                  {mutation => (
                     <S.Button onClick={mutation}>
                        AGREE
                     </S.Button>
                  )}
               </Mutation>
               <S.Button onClick={handleCloseDialog}>
                  DISAGREE 
               </S.Button>
            </S.ButtonsWrapper>
         </S.Dialog>
      </S.Wrapper>
   );
}
 
export default Dialog;