import { showWorks } from "./types";

const defaultState = { displayWork: false };

const DisplayWork = (state = defaultState, action) => {
  const { displayWork, type } = action;
  switch (type) {
    case showWorks:
      return { displayWork: displayWork };

    default:
      return state;
  }
};

export default DisplayWork;
