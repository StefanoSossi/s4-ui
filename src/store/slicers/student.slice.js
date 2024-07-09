import { createSlice } from "@reduxjs/toolkit";
import { createAsyncThunk } from "@reduxjs/toolkit";
import { environment } from "../../environments/environment";
import axios from "axios";

const API_URL = `${environment.S4_API}/api/Students`;
const initialState = {
	isLoading: true,
	classes: [],
	error: null,
};

export const getStudents = createAsyncThunk("class/getStudents", async () => {
	try {
		const response = await axios.get(API_URL);
		console.log("students ", response.data);
		return response.data;
	} catch (error) {
		throw error;
	}
});

export const getStudentById = createAsyncThunk(
	"class/getStudentById",
	async (studentId) => {
		try {
			const response = await axios.get(`${API_URL}/${studentId}`);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

export const createStudent = createAsyncThunk(
	"class/createStudent",
	async (student) => {
		try {
			const response = await axios.post(API_URL, student);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

export const updateStudent = createAsyncThunk(
	"class/updateStudent",
	async ({ studentId, student }) => {
		try {
			const response = await axios.put(`${API_URL}/${studentId}`, student);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

export const deleteStudent = createAsyncThunk(
	"class/deleteStudent",
	async (studentId) => {
		try {
			const response = await axios.delete(`${API_URL}/${studentId}`);
			return studentId;
		} catch (error) {
			throw error;
		}
	}
);

export const addClassToStudent = createAsyncThunk(
	"class/addClassToStudent",
	async ({ studentId, classId }) => {
		try {
			const response = await axios.post(
				`${API_URL}/${studentId}/class/${classId}`
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

export const removeClassToStudent = createAsyncThunk(
	"class/removeClassToStudent",
	async ({ studentId, classId }) => {
		try {
			const response = await axios.delete(
				`${API_URL}/${studentId}/class/${classId}`
			);
			return response.data;
		} catch (error) {
			throw error;
		}
	}
);

const classSlice = createSlice({
	name: "student",
	initialState,
	reducers: {},
	extraReducers: (builder) => {
		builder
			.addCase(getStudents.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getStudents.fulfilled, (state, action) => {
				console.log("action", action.payload.data);
				state.classes = action.payload.data;
				state.isLoading = false;
			})
			.addCase(getStudents.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload.data;
			})
			.addCase(getStudentById.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(getStudentById.fulfilled, (state, action) => {
				state.classes = state.classes.map((student) =>
					student.id === action.payload.data.id ? action.payload.data : student
				);
				state.isLoading = false;
			})
			.addCase(getStudentById.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload.data;
			})
			.addCase(createStudent.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(createStudent.fulfilled, (state, action) => {
				state.classes = [...state.classes, action.payload.data];
				state.isLoading = false;
			})
			.addCase(createStudent.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload.data;
			})
			.addCase(updateStudent.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(updateStudent.fulfilled, (state, action) => {
				state.classes = state.classes.map((student) =>
					student.id === action.payload.data.id ? action.payload.data : student
				);
				state.isLoading = false;
			})
			.addCase(updateStudent.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload.data;
			})
			.addCase(deleteStudent.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(deleteStudent.fulfilled, (state, action) => {
				state.classes = state.classes.filter(
					(student) => student.id !== action.payload.data
				);
				state.isLoading = false;
			})
			.addCase(deleteStudent.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload.data;
			})
			.addCase(addClassToStudent.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(addClassToStudent.fulfilled, (state, action) => {
				state.classes = state.classes.map((student) =>
					student.id === action.payload.data.id ? action.payload.data : student
				);
				state.isLoading = false;
			})
			.addCase(addClassToStudent.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload.data;
			})
			.addCase(removeClassToStudent.pending, (state) => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(removeClassToStudent.fulfilled, (state, action) => {
				state.classes = state.classes.map((student) =>
					student.id === action.payload.data.id ? action.payload.data : student
				);
				state.isLoading = false;
			})
			.addCase(removeClassToStudent.rejected, (state, action) => {
				state.isLoading = false;
				state.error = action.payload.data;
			})
			.addDefaultCase((state, action) => {});
	},
});

export const selectStudentState = (state) => state.student;

export const selectStudents = (state) => selectStudentState(state).classes;

export const selectStudentIsLoading = (state) =>
	selectStudentState(state).isLoading;

export const selectStudentError = (state) => selectStudentState(state).error;

export const selectStudentById = (state, studentId) =>
	selectStudents(state).find((student) => student.id === studentId);

export default classSlice.reducer;
