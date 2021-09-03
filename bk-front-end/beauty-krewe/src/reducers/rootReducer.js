import { combineReducers } from "redux";
import brandReducer from "./brandReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers ({
    brands: brandReducer,
    products: productReducer
  })

  export default rootReducer;