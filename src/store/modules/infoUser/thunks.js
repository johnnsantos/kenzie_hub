import { handleUser } from "./actions";
import { requestUser } from "../../../requests";
import { changeShowLoading } from "../Loading/actions";

export const handleUserThunk = () => async (dispatch, _getState) => {
  const id = () => window.localStorage.getItem("ID");
  const user = await requestUser(id());
  dispatch(changeShowLoading(false));
  dispatch(handleUser(user));
};
