import React from 'react';
import { connect } from 'inferno-redux';
import PhotoDropzoneContainer from './PhotoDropzoneContainer.js';

function App({ onAddImage }) {
  return (
    <div>
      <PhotoDropzoneContainer />
      <button onClick={(e) => { e.preventDefault(); onAddImage(); }}>Add Images</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    onAddImage: () => dispatch({ type: 'SHOW_DIALOG' })
  };
}

export default connect(
  null,
  mapDispatchToProps
)(App);
