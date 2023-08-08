import { createStore, applyMiddleware, compose} from "redux";
import thunk from "redux-thunk"
import rootReducer from "../reducers/rootReducer";
import {composeWithDevTools} from "redux-devtools-extension"



// export const store = createStore(rootReducer, composeWithDevTools());
export const store = createStore(rootReducer, compose(
    applyMiddleware(
        thunk
    ),
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ && window.__REDUX_DEVTOOLS_EXTENSION__()
));
