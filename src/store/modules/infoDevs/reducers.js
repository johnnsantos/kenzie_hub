import { Users } from "./types";

const defaultState = { devs: [] };

const reducer = (state = defaultState, action) => {
  const { list, type } = action;
  const { devs } = state;
  switch (type) {
    case Users:
      return { devs: [...devs, ...list] };

    default:
      return state;
  }
};

export default reducer;
