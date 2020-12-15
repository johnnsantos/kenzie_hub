import { show } from "./types";

const defaultState = { loading: false };

const Loading = (state = defaultState, action) => {
  const { loading, type } = action;
  switch (type) {
    case show:
      return { loading: loading };

    default:
      return state;
  }
};

export default Loading;
