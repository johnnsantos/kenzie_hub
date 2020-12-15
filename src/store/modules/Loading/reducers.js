import { show } from "./types";

const defaultState = { Loading: false };

const Loading = (state = defaultState, action) => {
  const { Loading, type } = action;
  switch (type) {
    case show:
      return { Loading: Loading };

    default:
      return state;
  }
};

export default Loading;
