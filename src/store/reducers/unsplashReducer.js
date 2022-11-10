import {ERROR_IMAGES, GET_IMAGES, LOADER_IMAGES} from '../types';

const initialState = {
  images: [],
  loading: false,
  error: null,
};
export function unsplashReducer(state = initialState, action) {
  switch (action.type) {
    case GET_IMAGES:
      return {
        ...state,
        images: action.payload,
      };
    case ERROR_IMAGES:
      return {
        ...state,
        error: action.payload,
      };
    case LOADER_IMAGES:
      return {
        ...state,
        loading: action.payload,
      };
    default:
      return state;
  }
}
