import { action } from './action';

export const actionThunk = () => (dispatch, getState) => {
  const list = [];
  dispatch(action(list));
};
