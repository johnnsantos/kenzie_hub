import { handleUser } from "./actions";

export const handleUserThunk = (User) => async (dispatch, _getState) => {
  dispatch(handleUser(User));
};
