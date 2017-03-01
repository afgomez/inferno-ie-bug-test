import React, { Component } from 'react';
import { connect } from 'inferno-redux';
import Dropzone from 'react-dropzone';
import PhotoListContainer from './PhotoListContainer';
import randomID from 'utils/randomID';

function addImages(images) {
  return function(dispatch) {
    const preparedImages = images.map(file => ({
      id: randomID(),
      sending: true,
      file,
    }));
    dispatch({ type: 'ADD_IMAGES', images: preparedImages });

    preparedImages.forEach(image => {
      setTimeout(() => {
        dispatch({ type: 'MARK_AS_UPLOADED', id: image.id });
      }, Math.round(Math.random() * 10) * 500);
    });
  };
}

class PhotoDropzone extends Component {

  showDialog() {
    if (this.dropzone) {
      this.dropzone.open();
    }
  }

  render() {
    let content;
    const { images, showDialog, onDropImages } = this.props;

    if (showDialog) {
      this.showDialog();
      this.props.hideDialog();
    }

    if (images.length === 0) {
      content = <div>There are no pictures yet. Drop some here or click the button</div>;
    } else {
      content = <PhotoListContainer />;
    }

    return (
      <Dropzone
        ref={(node) => { this.dropzone = node; }}
        className="dropzone"
        accept="image/*"
        onDrop={acceptedFiles => onDropImages(acceptedFiles)}
        disableClick
        multiple
      >
        {content}
      </Dropzone>
    );
  }
}


function mapStateToProps({ images, showDialog }) {
  return { images, showDialog };
}

function mapDispatchToProps(dispatch) {
  return {
    onDropImages: acceptedImages => dispatch(addImages(acceptedImages)),
    hideDialog: () => dispatch({ type: 'RESET_SHOW_DIALOG' }),
  };
}

const PhotoDropzoneContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(PhotoDropzone);

export default PhotoDropzoneContainer;
