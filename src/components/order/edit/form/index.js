import React, { PropTypes } from 'react';
import { connect } from 'react-redux';
import { reduxForm } from 'redux-form';

import RaisedButton from 'material-ui/RaisedButton';

import styles from '../styles';

let OrderEditForm = (props) => {
    let { handleSubmit, handleCancel, Id } = props;
    return (
        <form onSubmit={handleSubmit}>
            <div>Edit OrderId: { Id } </div>

            <div style={styles.buttons}>
                <RaisedButton label="Cancel" onClick={handleCancel} />
                <RaisedButton label="Save" style={styles.saveButton} type="submit" primary={true} />
            </div>
        </form>
    );
};
  
OrderEditForm.propTypes = {

    handleSubmit: PropTypes.func,
    handleCancel: PropTypes.func,
    Id: PropTypes.string,
};

OrderEditForm = reduxForm({
    form: 'OrderEditForm',
    enableReinitialize: true
})(OrderEditForm);

const mapStateToProps = (props) => ({
    initialValues: { 
        ...props.orderReducer.orderItem
    },
});

export default connect(mapStateToProps)(OrderEditForm);