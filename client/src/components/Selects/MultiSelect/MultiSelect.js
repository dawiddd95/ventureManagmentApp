import React from 'react';
import Select from 'react-select';
import makeAnimated from 'react-select/animated';

import colors from '../../../assets/colors';

import * as S from './StyledMultiSelect';
import { multiSelectStyles } from './MultiSelectStyles';

const MultiSelect = ({second_style, data, defaultValues, handleOnChange}) => {
   return (  
		<S.Wrapper second_style={second_style}>
			<Select
				defaultValue={defaultValues}
				isMulti
				components={makeAnimated}
				name='multiSelect'
				onChange={(value) => handleOnChange(value, true)}
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
