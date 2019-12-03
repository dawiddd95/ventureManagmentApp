import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import colors from '../../../assets/colors';

import * as S from './StyledSingleSelect';
import { singleSelectStyles } from './SingleSelectStyles';

const SingleSelect = ({data, handleOnChange}) => {
   return (  
      <S.Wrapper>
         <Select
            defaultValue=''
            isClearable={true}
            name='active'
            options={data}
            components={makeAnimated}
            onChange={(value) => handleOnChange(value, false)}
            styles={singleSelectStyles}
            theme={theme => ({
					...theme,
					colors: {
					  ...theme.colors,
					  primary: colors.redColorDisabled,
					},
				})}
         />
      </S.Wrapper>
   );
}
 
export default SingleSelect;

