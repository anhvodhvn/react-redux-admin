import React, { Component, PropTypes } from 'react';
import { uploadProductImage, updateProductImage } from '../../../actions/product';

// https://codepen.io/hartzis/pen/VvNGZP
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }
  
  _handleSubmit() {
    //e.preventDefault();
    //TODO: do something with -> this.state.file
    //console.log('handle uploading-', this.state.file);

    let { productId } = this.props;
    let selectedFile = this.state.file;
    return uploadProductImage(selectedFile)
    .then(function(data) {
      let { url } = data;
      return updateProductImage(productId, url);
    })
    .catch(function(error) {
      alert('ERROR:', JSON.stringify(error));
    });
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
          <button className="submitButton" type="button" onClick={(e)=>this._handleSubmit(e)}>Upload Image</button>
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
};

export default ImageUpload;