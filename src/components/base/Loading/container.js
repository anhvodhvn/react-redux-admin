import React, { PropTypes } from 'react';
import {connect} from 'react-redux';
import LoadingIcon from './form/Icon';
//import LoadingSpinner from './form/Spinner';

const getClassName = function(loading) {
  let className ='loading-panel';
  if (!loading) className += ' hide-it';
  return className;
};

class Loading extends React.Component {
  constructor(props) {
    super(props);
  }
  
  render() {
    let { loading } =  this.props;
    return (
      <div className={getClassName(loading)}>
        <LoadingIcon loading={loading} />
      </div>
    );
  }
}

Loading.propTypes = {
  loading: PropTypes.bool
};

function mapStateToProps(state) {
  return {
      loading: state.loadingReducer.loading
  };
}

export default connect(mapStateToProps, null)(Loading);