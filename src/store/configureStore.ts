import { applyMiddleware, compose, createStore } from "redux";
import logger from "redux-logger";
import rootReducer from "../reducers/index";
import api from "../middleware/api";
import DevTools from "../containers/devTools";

const configureStore = (initialState?: any) => {
  const store = createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(logger, api), DevTools.instrument())
  ); //createStore function accept rootReducer as first parameter and initialState as maybe second, and then applymiddleware as third. applymiddleware becomes second when there's no initial state. We are making this initialState a parameter of the configureStore function.
  //in our applyMiddleware function, we added another middleware api, which is a...
  /*
    Hot module replacement, or HMR as it is fondly called refers to a feature where
    instead of reloading your app to view changes made, the changes are instead
    “injected” or “replaced” without the need for a reload.
    This allows you to view changes faster, also, since the app isn’t reloaded, the
    previous state of the application is preserved.
  */
  /* what we are about to perform below is called Hot Module Replacement (HMR), where
     instead of reloading your app to view changes made, the changes are instead
    “injected” or “replaced” without the need for a reload.
    
    */
  if (module.hot) {
    module.hot.accept("../reducers", () => {
      store.replaceReducer(rootReducer);
      /*
        ABOUT THE 'store.replaceReducer()' above: If for some reason you need to dynamically change the reducer used in calculating
        the state of your application, the way to do this is to invoke the
        store.replaceReducer function with the newReducer argument. t
        This may be super useful for code splitting, and hot reloading. Just thought you
        should know about it. 
        NOTE: to use module.hot with typescript, run 'yarn add @types/webpack-env --dev' */
    });
  }
  return store;
};
export default configureStore;
