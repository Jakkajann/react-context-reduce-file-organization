import React from "react";
import { PostsContext } from "../../contexts/PostsProvider/context";
import { loadPosts } from "../../contexts/PostsProvider/actions";
import { CounterContext } from "../../contexts/CounterProvider/context";
import {
  decrementCounter,
  incrementCounter,
} from "../../contexts/CounterProvider/actions";

function Posts() {
  const isMounted = React.useRef(true);
  const counterContext = React.useContext(CounterContext);
  const postsContext = React.useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;
  const { counterState, counterDispatch } = counterContext;

  //Se não utilizar o strict mode retire a linha isMounted.current = true
  React.useEffect(() => {
    isMounted.current = true;
    console.log(isMounted.current);
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) {
        dispatch();
      }
    });

    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <h3>Counter: {counterState.counter}</h3>
      <button onClick={() => incrementCounter(counterDispatch)}>+</button>
      <button onClick={() => decrementCounter(counterDispatch)}>-</button>
      <h1>Posts</h1>

      {postsState.loading && (
        <p>
          <strong>Carregando Posts...</strong>
        </p>
      )}

      {postsState.posts.map((p) => (
        <p key={p.id}>{p.title}</p>
      ))}
    </div>
  );
}

export default Posts;
