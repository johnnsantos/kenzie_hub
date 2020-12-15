import { show } from "./types";

export const changeShow = (display) => {
  console.log(display);
  return {
    type: show,
    display: display,
  };
};
