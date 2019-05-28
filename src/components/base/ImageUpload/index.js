import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import { loading } from '../../../actions/loading';
import { uploadProductImage, updateProductImage } from '../../../actions/product';

const uploadImage = function(selectedFile, productId){
  return uploadProductImage(selectedFile)
  .then(function(data) {
    let { url } = data;
    return updateProductImage(productId, url);
  })
  .catch(function(error) {
    alert('ERROR:', JSON.stringify(error));
  });
};

/* https://codepen.io/hartzis/pen/VvNGZP */
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }
  
  _handleSubmitImage() {
    //e.preventDefault();
    let { productId, loading } = this.props;
    let selectedFile = this.state.file;
    loading(() => uploadImage(selectedFile, productId));
  }
  
  _handleImageChange(e) {
    e.preventDefault();

    let reader = new FileReader();
    let file = e.target.files[0];

    reader.onloadend = () => {
      this.setState({
        file: file,
        imagePreviewUrl: reader.result
      });
    };

    reader.readAsDataURL(file);
  }
  
  render() {
    let {imageUrl} = this.props;
    let {imagePreviewUrl} = this.state;

    let $imagePreview = null;
    if (imagePreviewUrl) $imagePreview = (<img src={imagePreviewUrl} />);
    else if (imageUrl && !imagePreviewUrl) $imagePreview = (<img src={imageUrl} />);
    else $imagePreview = (<div className="previewText">Please select an Image for Preview</div>);

    return (
      <div className="file-upload">
        <h5>Image Upload & Preview</h5>
        <div>
          <input className="fileInput" type="file" onChange={(e)=>this._handleImageChange(e)} />
          <button className="submitButton" type="button" onClick={(e)=>this._handleSubmitImage(e)}>Upload Image</button>
        </div>
        <div className="imgPreview">
          {$imagePreview}
        </div>
      </div>
    );
  }
}

ImageUpload.propTypes = {
  productId: PropTypes.string,
  imageUrl: PropTypes.string,
  loading: PropTypes.func
};

const mapDispatchToProps = dispatch => (
  bindActionCreators({
    loading
  }, dispatch)
);

export default connect(null, mapDispatchToProps)(ImageUpload);