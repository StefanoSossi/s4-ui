import { combineReducers } from "redux";
import classReducer from "../reducers/class.reducer";
import studentReducer from "../reducers/student.reducer";
import { configureStore } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
	class: classReducer,
	student: studentReducer,
});

const store = configureStore({ reducer: rootReducer });

export default store;
