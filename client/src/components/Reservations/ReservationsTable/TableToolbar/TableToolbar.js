import React from 'react';
import Tooltip from '@material-ui/core/Tooltip';
import IconButton from '@material-ui/core/IconButton';
import {Mutation} from 'react-apollo';

import * as S from './StyledTableToolbar';
import icons from '../../../../assets/icons';
import { DELETE_RESERVATIONS_MUTATION } from '../../../../graphql/reservation/mutation';
import { USER_RESERVATIONS_QUERY } from '../../../../graphql/reservation/query';

const TableToolbar = ({selected, clearSelectedAmount}) => {
   return (  
      <S.Wrapper hide={selected.length === 0 ? true : false}>
         <S.SelectedAmount>{selected.length} Selected</S.SelectedAmount>
            <Mutation 
               mutation={DELETE_RESERVATIONS_MUTATION} 
               refetchQueries={[{query: USER_RESERVATIONS_QUERY}]}
               variables={{id: selected}}   
               onCompleted={() => clearSelectedAmount()}
            >
               {mutation => (
                  <Tooltip title="Delete Selected">
                     <IconButton onClick={mutation} aria-label="delete">
                        <S.Img src={icons.bin} />
                     </IconButton>
                  </Tooltip>
               )}
            </Mutation>
      </S.Wrapper>
   );
}
 
export default TableToolbar;