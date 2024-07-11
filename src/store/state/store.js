import classSlice from "../slicers/class.slice";
import { configureStore } from "@reduxjs/toolkit";
import studentSlice from "../slicers/student.slice";

export const store = configureStore({
	reducer: {
		classItem: classSlice,
		student: studentSlice,
	},
});
