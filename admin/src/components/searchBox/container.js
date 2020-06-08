import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import {white, blue500} from 'material-ui/styles/colors';
import IconButton from 'material-ui/IconButton';
import Search from 'material-ui/svg-icons/action/search';

const styles = {
  iconButton: {
    float: 'left',
    paddingTop: 17
  },
  textField: {
    color: white,
    backgroundColor: blue500,
    borderRadius: 2,
    height: 35
  },
  inputStyle: {
    color: white,
    paddingLeft: 5
  },
  hintStyle: {
    height: 16,
    paddingLeft: 5,
    color: white
  }
};

class SearchBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
      keyword: ''
    };
    this.onSearchClick = this.onSearchClick.bind(this);
    this.onTextChange = this.onTextChange.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  onSearch(keyword) {
    if(keyword) console.log(' do search:', keyword);
  }

  onSearchClick() {
    let { keyword } = this.state;
    if(keyword) return this.onSearch(keyword);
  }

  onTextChange(e, value) {
    e.preventDefault();
    this.setState({ keyword: value });
  }

  onKeyDown(e){
    if(e.keyCode == 13){
      let { keyword } = this.state;
      if(keyword) return this.onSearch(keyword);
    }
  }

  render() {
    return (
      <div>
        <IconButton style={styles.iconButton} >
          <Search color={white} onClick={this.onSearchClick}/>
        </IconButton>
        <TextField
          hintText="Search..."
          underlineShow={false}
          fullWidth={true}
          style={styles.textField}
          inputStyle={styles.inputStyle}
          hintStyle={styles.hintStyle}
          onChange={this.onTextChange}
          onKeyDown={this.onKeyDown}
        />
      </div>
    );
  }
}

export default SearchBox;