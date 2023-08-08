import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { CourseType } from '@/interfaces/course.interfaces';
import { applyInstructor } from './instructor.actions';
import { InstructorIntialStateType } from './instructor.interfaces';

const initialState: InstructorIntialStateType = {
	isLoading: false,
	error: null,
	courses: [],
	course: null,
};

export const instructorSlice = createSlice({
	name: 'instructor',
	initialState,
	reducers: {
		clearInstructorError: state => {
			state.error = null;
		},
		instructorAllCourses: (state, action: PayloadAction<CourseType[]>) => {
			state.courses = action.payload;
		},
		instructorDetailedCourse: (state, action: PayloadAction<CourseType>) => {
			state.course = action.payload;
		},
	},
	extraReducers: builder => {
		builder
			.addCase(applyInstructor.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(applyInstructor.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(applyInstructor.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			});
	},
});

export const instructorReducer = instructorSlice.reducer;
export const instructorSliceAction = instructorSlice.actions;
