import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'inferno-redux';
import thunk from 'redux-thunk';
import photoUploaderReducer from './reducers';

import App from './containers/App';

function PhotoUploader() {
  const store = createStore(
    photoUploaderReducer,
    { images: [] },
    applyMiddleware(thunk)
  );

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}

export default PhotoUploader;
