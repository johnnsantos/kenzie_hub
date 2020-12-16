import { showWorks } from "./types";

export const changeShowWork = (displayWork) => {
  console.log(displayWork);
  return {
    type: showWorks,
    displayWork: displayWork,
  };
};
