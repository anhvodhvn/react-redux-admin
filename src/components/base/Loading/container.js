import React, { PropTypes } from 'react';
//import LoadingSpinner from './LoadingSpinner';
import LoadingIcon from './LoadingIcon';

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

export default Loading;