import { createStore } from "redux";
import reducers from "./reducers/index";

const store = createStore(
    reducers,
    {},
    // window.__REDUX_DEVTOOLS_EXTENSION__ && Window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;