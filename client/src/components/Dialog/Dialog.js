import React from 'react';
import { Mutation } from 'react-apollo';

import * as S from './StyledDialog';
import { DELETE_RESERVATIONS_MUTATION } from '../../graphql/reservation/mutation';
import { USER_RESERVATIONS_QUERY } from '../../graphql/reservation/query';


const Dialog = ({title, text, selected, handleOnCompleted, handleCloseDialog}) => {
   return (  
      <S.Wrapper>
         <S.Dialog>
            <S.Title>
               {title}
            </S.Title>
            <S.Text>
               {text}
               {selected.map(item => <S.Span key={item}>{item}. </S.Span>)}
            </S.Text>
            <S.ButtonsWrapper>
               <Mutation 
                  mutation={DELETE_RESERVATIONS_MUTATION}
                  variables={{id: selected}}
                  refetchQueries={[{query: USER_RESERVATIONS_QUERY}]}   
                  onCompleted={handleOnCompleted}
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