import React, { Component, PropTypes } from 'react';
import axios from 'axios';

// https://codepen.io/hartzis/pen/VvNGZP
class ImageUpload extends Component {
  constructor(props) {
    super(props);
    this.state = {file: '',imagePreviewUrl: ''};
  }
  
  _handleSubmit(e) {
    e.preventDefault();
    // TODO: do something with -> this.state.file
    //console.log('handle uploading-', this.state.file);
    let AWS_SIGNURL = 'https://78n3id557f.execute-api.us-east-1.amazonaws.com/api/product/image/signurl';
    let { productId } = this.props;
    console.log('productId:', productId);

    let selectedFile = this.state.file;
    let { name: fileName, type: fileType } = selectedFile;
    axios.post(AWS_SIGNURL,{
      fileName : fileName,
      fileType : fileType
    })
    .then(response => {
        let returnData = response.data.returnData;
        let signedRequest = returnData.signedRequest;
        let url = returnData.url;
        this.setState({
            fileUpload: { success: true, url: url }
        });
        
        //console.log("Recieved a signed request " + signedRequest);
        let options = {
            headers: {
              'Content-Type': fileType
            }
        };
        axios.put(signedRequest, selectedFile, options)
        .then(result => {
            console.log("Response from s3:", result);
            this.setState({
                fileUpload: { success: true, url: url }
            });
        })
        .catch(error => {
            alert("ERROR " + JSON.stringify(error));
        });
    })
    .catch(error => {
        alert("ERROR " + JSON.stringify(error));
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
    let {imagePreviewUrl} = this.state;
    let $imagePreview = null;
    if (imagePreviewUrl) $imagePreview = (<img src={imagePreviewUrl} />);
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
};

export default ImageUpload;