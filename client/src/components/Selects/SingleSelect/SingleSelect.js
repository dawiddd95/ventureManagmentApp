import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import colors from '../../../assets/colors';

import * as S from './StyledSingleSelect';
import { singleSelectStyles } from './SingleSelectStyles';

const SingleSelect = ({data, defaultValue, isClearable, handleOnChange}) => {
   return (  
      <S.Wrapper>
         <Select
            defaultValue={defaultValue}
            isClearable={isClearable}
            name='singleSelect'
            options={data}
            components={makeAnimated}
            onChange={(value) => handleOnChange(value, false)}
            theme={theme => ({
               ...theme,
					colors: {
                 ...theme.colors,
					  primary: colors.redColorDisabled,
					},
            })}
            styles={singleSelectStyles}
         />
      </S.Wrapper>
   );
}
 
export default SingleSelect;

