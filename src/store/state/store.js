import classSlice from "../slicers/class.slice";
import { configureStore } from "@reduxjs/toolkit";

export const store = configureStore({
	reducer: {
		classItem: classSlice,
	},
});
