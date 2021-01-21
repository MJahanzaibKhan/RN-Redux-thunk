import { ActionType } from '../constant';
import { GetDataMiddleware } from '../middleware';

class PlaceholderDataAction {
  static GetPlaceholderDataAction() {
    return (dispatch) => {
      dispatch({ type: ActionType.GET_DATA });
      return GetDataMiddleware.getPlaceholderMiddleware()
        .then((result) => {
          dispatch({
            type: ActionType.GET_DATA_SUCCESS,
            payload: result
          })
        })
        .catch((error) => {
          return dispatch({
            type: ActionType.GET_DATA_FAILURE,
            payload: error,
            message: 'Failed to fatch data'
          })
        })
    }
  }
}




export { PlaceholderDataAction };
