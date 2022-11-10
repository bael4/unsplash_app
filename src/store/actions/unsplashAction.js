import {API} from '../../utils/config';
import {ERROR_IMAGES, GET_IMAGES, LOADER_IMAGES} from '../types';

export const loadingImages = bool => ({
  type: LOADER_IMAGES,
  payload: bool,
});
export const errorIamges = error => ({
  type: ERROR_IMAGES,
  payload: error,
});

export const getImages = () => async dispatch => {
  try {
    dispatch(loadingImages(true));

    const request = await fetch(API);
    const response = await request.json();

    dispatch(loadingImages(false));
    dispatch({type: GET_IMAGES, payload: response});
  } catch (e) {
    dispatch(loadingImages(false));
    dispatch(errorIamges(e));
  }
};
