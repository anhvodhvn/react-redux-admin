import React, { PropTypes } from 'react';
import SelectField from 'material-ui/SelectField';

const renderSelectField = ({ input, label, meta: { touched, error }, children, ...custom }) => (
    <SelectField  floatingLabelText={label}
                  fullWidth={true}
                  errorText={touched && error}
                  {...input}
                  onChange={(event, index, value) => input.onChange(value)}
                  children={children}
                  {...custom} />
);

renderSelectField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    meta: PropTypes.object
};

export default renderSelectField;