import * as types from "./types";

export const reducer = (state, action) => {
  switch (action.type) {
    case types.POST_SUCCESS: {
      return { ...state, posts: action.payload, loading: false };
    }

    case types.POST_LOADING: {
      return { ...state, loading: true };
    }

    default: {
      return { ...state };
    }
  }
};
