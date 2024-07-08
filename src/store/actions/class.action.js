export const GET_CLASSES = "GET_CLASSES";
export const GET_CLASSES_SUCCESS = "GET_CLASSES_SUCCESS";
export const GET_CLASSES_ERROR = "GET_CLASSES_ERROR";
export const GET_CLASS_BY_ID = "GET_CLASS_BY_ID";
export const GET_CLASS_BY_ID_SUCCESS = "GET_CLASS_BY_ID_SUCCESS";
export const GET_CLASS_BY_ID_ERROR = "GET_CLASS_BY_ID_ERROR";
export const CREATE_CLASS = "CREATE_CLASS";
export const CREATE_CLASS_SUCCESS = "CREATE_CLASS_SUCCESS";
export const CREATE_CLASS_ERROR = "CREATE_CLASS_ERROR";
export const UPDATE_CLASS = "UPDATE_CLASS";
export const UPDATE_CLASS_SUCCESS = "UPDATE_CLASS_SUCCESS";
export const UPDATE_CLASS_ERROR = "UPDATE_CLASS_ERROR";
export const DELETE_CLASS = "DELETE_CLASS";
export const DELETE_CLASS_SUCCESS = "DELETE_CLASS_SUCCESS";
export const DELETE_CLASS_ERROR = "DELETE_CLASS_ERROR";
export const ADD_STUDENT_TO_CLASS = "ADD_STUDENT_TO_CLASS";
export const ADD_STUDENT_TO_CLASS_SUCCESS = "ADD_STUDENT_TO_CLASS_SUCCESS";
export const ADD_STUDENT_TO_CLASS_ERROR = "ADD_STUDENT_TO_CLASS_ERROR";
export const REMOVE_STUDENT_OF_CLASS = "REMOVE_STUDENT_OF_CLASS";
export const REMOVE_STUDENT_OF_CLASS_SUCCESS =
	"REMOVE_STUDENT_OF_CLASS_SUCCESS";
export const REMOVE_STUDENT_OF_CLASS_ERROR = "REMOVE_STUDENT_OF_CLASS_ERROR";

export const GET_ALL_STUDENTS_OF_CLASS = "GET_ALL_STUDENTS_OF_CLASS";
export const GET_ALL_STUDENTS_OF_CLASS_SUCCESS =
	"GET_ALL_STUDENTS_OF_CLASS_SUCCESS";
export const GET_ALL_STUDENTS_OF_CLASS_ERROR =
	"GET_ALL_STUDENTS_OF_CLASS_ERROR";

export const getClasses = () => ({
	type: GET_CLASSES,
});

export const getClassesSuccess = (CLASSES) => ({
	type: GET_CLASSES_SUCCESS,
	payload: CLASSES,
});

export const getClassesError = (error) => ({
	type: GET_CLASSES_ERROR,
	payload: error,
});

export const getClassesById = (ID) => ({
	type: GET_CLASS_BY_ID,
	payload: ID,
});

export const getClassesByIdSuccess = (CLASSITEM) => ({
	type: GET_CLASS_BY_ID_SUCCESS,
	payload: CLASSITEM,
});

export const getClassesByIdError = (error) => ({
	type: GET_CLASS_BY_ID_ERROR,
	payload: error,
});

export const createClass = (CLASSITEM) => ({
	type: CREATE_CLASS,
	payload: CLASSITEM,
});

export const createClassSuccess = (CLASSITEM) => ({
	type: CREATE_CLASS_SUCCESS,
	payload: CLASSITEM,
});

export const createClassError = (error) => ({
	type: CREATE_CLASS_ERROR,
	payload: error,
});

export const updateClass = (CLASSITEM, ID) => ({
	type: UPDATE_CLASS,
	payload: { CLASSITEM, ID },
});

export const updateClassSuccess = (CLASSITEM) => ({
	type: UPDATE_CLASS_SUCCESS,
	payload: CLASSITEM,
});

export const updateClassError = (error) => ({
	type: UPDATE_CLASS_ERROR,
	payload: error,
});

export const deleteClass = (ID) => ({
	type: DELETE_CLASS,
	payload: ID,
});

export const deleteClassSuccess = (CLASSEState) => ({
	type: DELETE_CLASS_SUCCESS,
	payload: CLASSEState,
});

export const deleteClassError = (error) => ({
	type: DELETE_CLASS_ERROR,
	payload: error,
});

export const addStudentToClass = (CLASSID, STUDENTID) => ({
	type: ADD_STUDENT_TO_CLASS,
	payload: { CLASSID, STUDENTID },
});

export const addStudentToClassSuccess = (BOOL) => ({
	type: ADD_STUDENT_TO_CLASS_SUCCESS,
	payload: BOOL,
});

export const addStudentToClassError = (error) => ({
	type: ADD_STUDENT_TO_CLASS_ERROR,
	payload: error,
});

export const removeStudentOfClass = (CLASSID, STUDENTID) => ({
	type: REMOVE_STUDENT_OF_CLASS,
	payload: { CLASSID, STUDENTID },
});

export const removeStudentOfClassSuccess = (CLASSITEM) => ({
	type: REMOVE_STUDENT_OF_CLASS_SUCCESS,
	payload: CLASSITEM,
});

export const removeStudentOfClassError = (error) => ({
	type: REMOVE_STUDENT_OF_CLASS_ERROR,
	payload: error,
});

export const getAllStudentsOfClass = (CLASSID) => ({
	type: GET_ALL_STUDENTS_OF_CLASS,
	payload: CLASSID,
});

export const getAllStudentsOfClassSuccess = (CLASSID, STUDENTS) => ({
	type: GET_ALL_STUDENTS_OF_CLASS_SUCCESS,
	payload: { CLASSID, STUDENTS },
});

export const getAllStudentsOfClassError = (error) => ({
	type: GET_ALL_STUDENTS_OF_CLASS_ERROR,
	payload: error,
});
