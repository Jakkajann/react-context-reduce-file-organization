import React from "react";
import P from "prop-types";
import { CounterContext } from "./context";
import { reducer } from "./reducer";
import { data } from "./data";

function CounterProvider({ children }) {
  const [counterState, counterDispatch] = React.useReducer(reducer, data);

  return (
    <CounterContext.Provider value={{ counterState, counterDispatch }}>
      {children}
    </CounterContext.Provider>
  );
}

CounterProvider.propTypes = {
  children: P.node.isRequired,
};

export default CounterProvider;
