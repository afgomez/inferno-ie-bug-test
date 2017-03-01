import debug from 'utils/debug';

export default function photoUploaderReducer(state, action) {
  debug(action.type);

  switch (action.type) {
    case 'SHOW_DIALOG':
      return {
        ...state,
        showDialog: true,
      };
    case 'RESET_SHOW_DIALOG':
      return {
        ...state,
        showDialog: false,
      };
    case 'ADD_IMAGES': {
      const images = state.images.concat(action.images);
      return {
        ...state,
        images,
      };
    }
    case 'MARK_AS_UPLOADED': {
      const images = [...state.images];
      const image = images.find(i => i.id === action.id);

      if (image) {
        image.sending = false;
      }

      return { ...state, images };
    }
  }

  return state;
}
