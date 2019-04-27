import React, { PropTypes } from 'react';
import TextField from 'material-ui/TextField';

const renderTextField = ({ input, label, meta: { touched, error }, ...custom }) => (
    <TextField  hintText={label}
                floatingLabelText={label}
                fullWidth={true}
                errorText={touched && error}
                {...input}
                {...custom} />
);

renderTextField.propTypes = {
    input: PropTypes.object,
    label: PropTypes.string,
    meta: PropTypes.object
};

export default renderTextField;