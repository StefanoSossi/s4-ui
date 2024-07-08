import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
import categoryReducer from "../reducers/class.reducer";
import studentReducer from "../reducers/student.reducer";

const rootReducer = combineReducers({
	category: categoryReducer,
	student: studentReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk));

export default store;
