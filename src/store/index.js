import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import Users from "./modules/infoDevs/reducers";
import User from "./modules/infoUser/reducers";

const reducers = combineReducers({ Users, User });

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
