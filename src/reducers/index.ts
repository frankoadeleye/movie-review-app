import { combineReducers } from "redux";
import movies from "./movies";
import selectedMovie from "./selectedMovie";
import isLoading from "./isLoading";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

const rootReducer = combineReducers({
  movies,
  selectedMovie,
  isLoading,
});
const persistConfig = {
  key: "netflixy",
  storage,
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export default persistedReducer;
