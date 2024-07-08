import {
	GET_STUDENTS,
	GET_STUDENTS_SUCCESS,
	GET_STUDENTS_ERROR,
	GET_STUDENT_BY_ID,
	GET_STUDENT_BY_ID_SUCCESS,
	GET_STUDENT_BY_ID_ERROR,
	CREATE_STUDENT,
	CREATE_STUDENT_SUCCESS,
	CREATE_STUDENT_ERROR,
	UPDATE_STUDENT,
	UPDATE_STUDENT_SUCCESS,
	UPDATE_STUDENT_ERROR,
	DELETE_STUDENT,
	DELETE_STUDENT_SUCCESS,
	DELETE_STUDENT_ERROR,
	ADD_CLASS_TO_STUDENT,
	ADD_CLASS_TO_STUDENT_SUCCESS,
	ADD_CLASS_TO_STUDENT_ERROR,
	REMOVE_CLASS_TO_STUDENT,
	REMOVE_CLASS_TO_STUDENT_SUCCESS,
	REMOVE_CLASS_TO_STUDENT_ERROR,
} from "../actions/student.action";

const initialState = {
	isLoading: false,
	students: [],
	error: null,
};

const categoryReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_STUDENTS:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case GET_STUDENTS_SUCCESS:
			return {
				...state,
				isLoading: false,
				students: action.payload,
			};
		case GET_STUDENTS_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case GET_STUDENT_BY_ID:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case GET_STUDENT_BY_ID_SUCCESS:
			return {
				...state,
				isLoading: false,
				students: state.students.map((student) =>
					student.id === action.payload.id ? action.payload : student
				),
			};
		case GET_STUDENT_BY_ID_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case CREATE_STUDENT:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case CREATE_STUDENT_SUCCESS:
			return {
				...state,
				isLoading: false,
				students: [...state.students, action.payload],
			};
		case CREATE_STUDENT_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case UPDATE_STUDENT:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case UPDATE_STUDENT_SUCCESS:
			return {
				...state,
				isLoading: false,
				students: state.students.map((student) =>
					student.id === action.payload.id ? action.payload : student
				),
			};
		case UPDATE_STUDENT_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case DELETE_STUDENT:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case DELETE_STUDENT_SUCCESS:
			return {
				...state,
				isLoading: false,
				students: state.students.filter(
					(student) => student.id !== action.payload.id
				),
			};
		case DELETE_STUDENT_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case ADD_CLASS_TO_STUDENT:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case ADD_CLASS_TO_STUDENT_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case ADD_CLASS_TO_STUDENT_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		case REMOVE_CLASS_TO_STUDENT:
			return {
				...state,
				isLoading: true,
				error: null,
			};
		case REMOVE_CLASS_TO_STUDENT_SUCCESS:
			return {
				...state,
				isLoading: false,
			};
		case REMOVE_CLASS_TO_STUDENT_ERROR:
			return {
				...state,
				isLoading: false,
				error: action.payload,
			};

		default:
			return state;
	}
};

export default categoryReducer;
