import { combineReducers } from "redux";
import cakeReducer from "./Cake/cakeReducer";
import milkReducer from "./Milk/milkReducer";
import useReducer from "./User/userReducer";


 const rootReducer = combineReducers({
   cake: cakeReducer,
   milk: milkReducer,
   users:useReducer,
 });
export default rootReducer;