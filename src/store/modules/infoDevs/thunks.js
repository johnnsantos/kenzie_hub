import { handleUsers } from "./actions";
import { getUsersList } from "../../../requests";

export const handleUsersThunk = (nextURL, setNextURL) => async (
  dispatch,
  _getState
) => {
  const list = await getUsersList(nextURL);

  if (list.data.length !== 0) {
    setNextURL(list.headers.nexturl);
    dispatch(handleUsers(list.data));
  }
};
