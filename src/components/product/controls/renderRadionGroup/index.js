import React, { PropTypes } from 'react';
import { RadioButtonGroup } from 'redux-form-material-ui';

const renderRadioGroup = ({ input, ...rest }) => (
    <RadioButtonGroup
      {...input}
      {...rest}
      valueSelected={input.value}
      onChange={(event, value) => input.onChange(value)}
    />
);

renderRadioGroup.propTypes = {
    input: PropTypes.object,
    rest: PropTypes.object
};

export default renderRadioGroup;