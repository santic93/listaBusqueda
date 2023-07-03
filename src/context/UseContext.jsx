import Context from './Context';
import React, { useReducer } from 'react';
import UseReducer from './UseReducer';

export default function UseContext({ children }) {
  const initialState = {
    search: '',
    active: false,
  };

  const [state, dispatch] = useReducer(UseReducer, initialState);

  const searchInput = (search) => {
    dispatch({ type: 'SEARCH', payload: search });
  };
  const activeSearch = (active) => {
    dispatch({ type: 'ACTIVE', payload: active });
  };

  return (
    <Context.Provider
      value={{
        search: state?.search,
        active: state?.active,
        searchInput,
        activeSearch,
      }}
    >
      {children}
    </Context.Provider>
  );
}
