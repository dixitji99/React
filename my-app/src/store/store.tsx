import { createStore } from "redux";
import rootReducer from "../reducer/index";

const store=createStore(rootReducer,{},(window as any).__REDUX_DEVTOOLS_EXTENSION__ && (window as any).__REDUX_DEVTOOLS_EXTENSION__());

export default store;