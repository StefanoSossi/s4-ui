export const selectStudentState = (state) => state.student;

export const selectStudents = (state) => selectStudentState(state).students;

export const selectStudent = (state) => selectStudentState(state).student;

export const selectIsLoading = (state) => selectStudentState(state).isLoading;

export const selectError = (state) => selectStudentState(state).error;

export const selectStudentById = (state, studentId) =>
	selectStudents(state).find((student) => student.id === studentId);
