export const selectClassState = (state) => state.classItem;

export const selectClasses = (state) => selectClassState(state).classes;

export const selectIsLoading = (state) => selectClassState(state).isLoading;

export const selectError = (state) => selectClassState(state).error;

export const selectClassById = (state, classId) =>
	selectClasses(state).find((classItem) => classItem.id === classId);
