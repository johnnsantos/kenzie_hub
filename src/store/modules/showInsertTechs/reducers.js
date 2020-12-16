import { show } from "./types";

const defaultState = { display: false };

const Display = (state = defaultState, action) => {
  const { display, type } = action;
  switch (type) {
    case show:
      return { display: display };

    default:
      return state;
  }
};

export default Display;
