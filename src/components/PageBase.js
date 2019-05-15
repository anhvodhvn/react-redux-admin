import React, {PropTypes} from 'react';
import Paper from 'material-ui/Paper';
import Divider from 'material-ui/Divider';
import globalStyles from '../styles';

import Loading from './base/loading';
class PageBase extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {title, navigation, children} = this.props;
    return (
      <div>
        <span style={globalStyles.navigation}>{navigation}</span>

        <Paper style={globalStyles.paper}>
          <h3 style={globalStyles.title}>{title}</h3>

          <Divider/>
          {children}

          <div style={globalStyles.clear}/>

        </Paper>

        <Loading />
      </div>
    );
  }
}

PageBase.propTypes = {
  title: PropTypes.string,
  navigation: PropTypes.string,
  children: PropTypes.element
};

export default PageBase;
