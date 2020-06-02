import React, { PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';

const style = {
    'color': 'red'
};

const ErrorMessage = ({ errorMessage }) => (
    <Subheader>
        <div style={style}>{errorMessage}</div>
    </Subheader>
);

ErrorMessage.propTypes = {
    errorMessage: PropTypes.string
};

export default ErrorMessage;