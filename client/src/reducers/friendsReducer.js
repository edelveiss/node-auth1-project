import {
  FETCH_FRIENDS,
  UPDATE_FRIENDS,
  SET_ERROR,
  GET_POST_FRIENDS,
  UPDATE_POST_FRIENDS,
  SET_POST_ERROR,
  GET_DEL_FRIENDS,
  UPDATE_DEL_FRIENDS,
  SET_DEL_ERROR,
  GET_UPDATE_FRIENDS,
  UPDATE_UPDATE_FRIENDS,
  SET_UPDATE_ERROR,
} from "../actions";

const initialState = {
  friends: [],
  isFetchingData: false,
  isPostingData: false,
  isDelitingData: false,
  isUpdatingData: false,
  error: "",
};

export const friendsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_FRIENDS:
      return {
        ...state,
        isFetchingData: true,
        friends: [],
        error: "",
      };
    case UPDATE_FRIENDS:
      return {
        ...state,
        friends: action.payload,
        isFetchingData: false,
        error: "",
      };
    case SET_ERROR:
      return {
        ...state,
        isFetchingData: false,
        error: action.payload,
      };

    case GET_POST_FRIENDS:
      return {
        ...state,
        isPostingData: true,
        friends: [],
        error: "",
      };
    case UPDATE_POST_FRIENDS:
      return {
        ...state,
        friends: action.payload,
        isPostingData: false,
        error: "",
      };
    case SET_POST_ERROR:
      return {
        ...state,
        isPostingData: false,
        error: action.payload,
      };
    case GET_DEL_FRIENDS:
      return {
        ...state,
        isDelitingData: true,
        friends: [],
        error: "",
      };
    case UPDATE_DEL_FRIENDS:
      return {
        ...state,
        friends: action.payload,
        isDelitingData: false,
        error: "",
      };
    case SET_DEL_ERROR:
      return {
        ...state,
        isDelitingData: false,
        error: action.payload,
      };

    case GET_UPDATE_FRIENDS:
      return {
        ...state,
        isUpdatingData: true,
        friends: [],
        error: "",
      };
    case UPDATE_UPDATE_FRIENDS:
      return {
        ...state,
        friends: action.payload,
        isUpdatingData: false,
        error: "",
      };
    case SET_UPDATE_ERROR:
      return {
        ...state,
        isUpdatingData: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
