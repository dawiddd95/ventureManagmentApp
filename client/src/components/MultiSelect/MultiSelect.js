import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import colors from '../../assets/colors';

import * as S from './StyledMultiSelect';
import { multiSelectStyles } from './MultiSelectStyles';

const MultiSelect = ({data, handleOnChange}) => {
   return (  
		<S.Wrapper>
			<Select
				defaultValue={[]}
				isMulti
				components={makeAnimated}
				name='access'
				onChange={(value) => handleOnChange(value)}
				options={data}
				theme={theme => ({
					...theme,
					colors: {
					  ...theme.colors,
					  primary: colors.redColorDisabled,
					},
				 })}
				styles={multiSelectStyles}
			/>
		</S.Wrapper>
   );
}
 
export default MultiSelect;
