import { Users } from "./types";

const defaultState = { devs: [] };

const reducer = (state = defaultState, action) => {
  const { list, type } = action;

  switch (type) {
    case Users:
      return { devs: list };

    default:
      return state;
  }
};

export default reducer;
