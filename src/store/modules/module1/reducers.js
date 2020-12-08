import { Type } from './types';

const defaultState = { state: [] };

const reducer = (state = defaultState, action) => {
  const { list, type } = action;

  switch (type) {
    case Type:
      return { state: list };

    default:
      return state;
  }
};

export default reducer;

