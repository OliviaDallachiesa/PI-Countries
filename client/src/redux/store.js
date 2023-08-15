import { createStore, applyMiddleware, compose } from "redux";
import rootReducer from "./reducer"
import thunkMiddleware from "redux-thunk"


// EL compose sirve para aplicar el middleware
const composeEnhacer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
    rootReducer,
    composeEnhacer(applyMiddleware(thunkMiddleware))
);

export default store;