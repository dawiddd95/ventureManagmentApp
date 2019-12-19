import React from 'react';
import Switch from '@material-ui/core/Switch';
import FormControlLabel from '@material-ui/core/FormControlLabel';

import * as S from './StyledTableActions';
import icons from '../../../assets/icons';

import FadeReveal from '../../Animations/FadeReveal/FadeReveal';

const TableActions = ({
   selectOptions,
   textButton, 
   sortBy, 
   sortOrder, 
   reload, 
   handleReloadData, 
   handleSortOrder, 
   handleSortBy
}) => {
   return (  
      <S.ButtonsWrapper>
         {reload && <FadeReveal
            primaryStyle={false}
            text={'Data Reload Succeed.'}
            success={true} 
         />}
         <S.Button onClick={handleReloadData}>
            <S.Img src={icons.reload} />
            {textButton}
         </S.Button>
         <FormControlLabel
            control={
               <Switch 
                  checked={sortOrder === 'desc'}
                  onChange={() => handleSortOrder(sortOrder)} 
               />
            }
            label={<S.StyledLabel active_style={sortOrder === 'desc'}>Sort Descending</S.StyledLabel>}
         />
         <S.SelectWrapper>
            <S.Label htmlFor='sortBySelect'>SORT BY: </S.Label>
            <S.Select value={sortBy} onChange={handleSortBy} id='sortBySelect'>
               {selectOptions.map((option, index) => (
                  <option key={index} value={option.value}>{option.label}</option>
               ))}
            </S.Select>
         </S.SelectWrapper>
      </S.ButtonsWrapper>
   );
}
 
export default TableActions;