import React from 'react';
import { connect } from 'inferno-redux';
import PhotoImage from '../components/PhotoImage';

function PhotoList({ images }) {
  return (
    <ul className="images">
      {images.map(image => <PhotoImage key={image.id} {...image} />)}
    </ul>
  );
}

function mapStateToProps({ images }) {
  return { images };
}

export default connect(
  mapStateToProps
)(PhotoList);
