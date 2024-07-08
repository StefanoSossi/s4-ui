export const GET_STUDENTS = "GET_STUDENTS";
export const GET_STUDENTS_SUCCESS = "GET_STUDENTS_SUCCESS";
export const GET_STUDENTS_ERROR = "GET_STUDENTS_ERROR";
export const GET_STUDENT_BY_ID = "GET_STUDENT_BY_ID";
export const GET_STUDENT_BY_ID_SUCCESS = "GET_STUDENT_BY_ID_SUCCESS";
export const GET_STUDENT_BY_ID_ERROR = "GET_STUDENT_BY_ID_ERROR";
export const CREATE_STUDENT = "CREATE_STUDENT";
export const CREATE_STUDENT_SUCCESS = "CREATE_STUDENT_SUCCESS";
export const CREATE_STUDENT_ERROR = "CREATE_STUDENT_ERROR";
export const UPDATE_STUDENT = "UPDATE_STUDENT";
export const UPDATE_STUDENT_SUCCESS = "UPDATE_STUDENT_SUCCESS";
export const UPDATE_STUDENT_ERROR = "UPDATE_STUDENT_ERROR";
export const DELETE_STUDENT = "DELETE_STUDENT";
export const DELETE_STUDENT_SUCCESS = "DELETE_STUDENT_SUCCESS";
export const DELETE_STUDENT_ERROR = "DELETE_STUDENT_ERROR";
export const ADD_CLASS_TO_STUDENT = "ADD_CLASS_TO_STUDENT";
export const ADD_CLASS_TO_STUDENT_SUCCESS = "ADD_CLASS_TO_STUDENT_SUCCESS";
export const ADD_CLASS_TO_STUDENT_ERROR = "ADD_CLASS_TO_STUDENT_ERROR";
export const REMOVE_CLASS_TO_STUDENT = "REMOVE_CLASS_TO_STUDENT";
export const REMOVE_CLASS_TO_STUDENT_SUCCESS =
	"REMOVE_CLASS_TO_STUDENT_SUCCESS";
export const REMOVE_CLASS_TO_STUDENT_ERROR = "REMOVE_CLASS_TO_STUDENT_ERROR";

export const getStudents = () => ({
	type: GET_STUDENTS,
});

export const getStudentsSuccess = (STUDENTS) => ({
	type: GET_STUDENTS_SUCCESS,
	payload: STUDENTS,
});

export const getStudentsError = (error) => ({
	type: GET_STUDENTS_ERROR,
	payload: error,
});

export const getStudentsById = (ID) => ({
	type: GET_STUDENT_BY_ID,
	payload: ID,
});

export const getStudentsByIdSuccess = (STUDENT) => ({
	type: GET_STUDENT_BY_ID_SUCCESS,
	payload: STUDENT,
});

export const getStudentsByIdError = (error) => ({
	type: GET_STUDENT_BY_ID_ERROR,
	payload: error,
});

export const createStudent = (STUDENT) => ({
	type: CREATE_STUDENT,
	payload: STUDENT,
});

export const createStudentSuccess = (STUDENT) => ({
	type: CREATE_STUDENT_SUCCESS,
	payload: STUDENT,
});

export const createStudentError = (error) => ({
	type: CREATE_STUDENT_ERROR,
	payload: error,
});

export const updateStudent = (STUDENT, ID) => ({
	type: UPDATE_STUDENT,
	payload: { STUDENT, ID },
});

export const updateStudentSuccess = (STUDENT) => ({
	type: UPDATE_STUDENT_SUCCESS,
	payload: STUDENT,
});

export const updateStudentError = (error) => ({
	type: UPDATE_STUDENT_ERROR,
	payload: error,
});

export const deleteStudent = (ID) => ({
	type: DELETE_STUDENT,
	payload: ID,
});

export const deleteStudentSuccess = (STUDENTState) => ({
	type: DELETE_STUDENT_SUCCESS,
	payload: STUDENTState,
});

export const deleteStudentError = (error) => ({
	type: DELETE_STUDENT_ERROR,
	payload: error,
});

export const addClassToStudent = (STUDENTID, CLASSID) => ({
	type: ADD_CLASS_TO_STUDENT,
	payload: { STUDENTID, CLASSID },
});

export const addClassToStudentSuccess = (BOOL) => ({
	type: ADD_CLASS_TO_STUDENT_SUCCESS,
	payload: BOOL,
});

export const addClassToStudentError = (error) => ({
	type: ADD_CLASS_TO_STUDENT_ERROR,
	payload: error,
});

export const removeClassToStudent = (STUDENTID, CLASSID) => ({
	type: REMOVE_CLASS_TO_STUDENT,
	payload: { STUDENTID, CLASSID },
});

export const removeClassToStudentSuccess = (STUDENT) => ({
	type: REMOVE_CLASS_TO_STUDENT_SUCCESS,
	payload: STUDENT,
});

export const removeClassToStudentError = (error) => ({
	type: REMOVE_CLASS_TO_STUDENT_ERROR,
	payload: error,
});
