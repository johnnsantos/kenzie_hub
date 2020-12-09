import { handleUsers } from "./actions";
import { getUsersList } from "../../../requests";

export const handleUsersThunk = (nextURL, setNextURL) => async (
  dispatch,
  _getState
) => {
  const list = await getUsersList(nextURL);
  setNextURL(list.nextUrl);
  dispatch(handleUsers(list.data));
};
