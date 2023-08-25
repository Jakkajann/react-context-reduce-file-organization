import React from "react";
import P from "prop-types";
import { PostsContext } from "./context";
import { reducer } from "./reducer";
import { data } from "./data";

function PostsProvider({ children }) {
  const [postsState, postsDispatch] = React.useReducer(reducer, data);

  return (
    <PostsContext.Provider value={{ postsState, postsDispatch }}>
      {children}
    </PostsContext.Provider>
  );
}

PostsProvider.propTypes = {
  children: P.node.isRequired,
};

export default PostsProvider;
