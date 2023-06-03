import { combineReducers } from "redux";
import lesenReduser from "./lesen";

const rootReducer = combineReducers({
    lesen:lesenReduser,
})

export default rootReducer;