import { ActionType } from '../constant';

const initialState = {
  getPlaceholderData: [],
  error: '',
  isLoading: false,
  success: null
}

const ApiPlacerholderReducer = (state = initialState, action) => {
  switch (action && action.type) {

    case ActionType.GET_DATA:
      return {
        ...state,
        isLoading: true
      }
    case ActionType.GET_DATA_SUCCESS:
      return {
        ...state,
        error: null,
        isLoading: false,
        getPlaceholderData: action.payload
      }
    case ActionType.GET_DATA_FAILURE:
      return {
        ...state,
        error: action.message,
        isLoading: false,
        success: null
      }

    default:
      return {
        ...state
      }
  }
}

export { ApiPlacerholderReducer }