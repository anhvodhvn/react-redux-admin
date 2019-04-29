import React, { PropTypes } from 'react';
import Subheader from 'material-ui/Subheader';

const style = {
    'color': 'red'
};

const renderErrorMessage = ({ errorMessage }) => (
    <Subheader>
        <div style={style}>{errorMessage}</div>
    </Subheader>
);

renderErrorMessage.propTypes = {
    errorMessage: PropTypes.string
};

export default renderErrorMessage;