import { createSlice } from '@reduxjs/toolkit';
import { InstructorInitialStateType } from './instructor.interfaces';
import { applyInstructor } from './instructor.actions';

const initialState: InstructorInitialStateType = {
	isLoading: false,
	error: null,
};

export const instructorSlice = createSlice({
	name: 'instructor',
	initialState,
	reducers: {
		clearInstructorError: state => {
			state.error = null;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(applyInstructor.pending, state => {
				state.isLoading = true;
				state.error = null;
			}) // serverga sorov yuborish
			.addCase(applyInstructor.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			}) // serverga sorov muvofaqiyatli tugadi
			.addCase(applyInstructor.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			}); // serverga sorov muvofaqiyatsiz tugari;
	},
});

export const instructorReducer = instructorSlice.reducer;
export const instructorSliceAction = instructorSlice.actions;
