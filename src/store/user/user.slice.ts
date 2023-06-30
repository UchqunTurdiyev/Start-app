import { register } from './user.action';
import { UserInitialStateType } from './user.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UserInitialStateType = {
	user: null,
	isLoading: false,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true;
			}) // serverga sorov yuborish
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
			}) // serverga sorov muvofaqiyatli tugadi
			.addCase(register.rejected, state => {
				state.isLoading = false;
				state.user = null;
			}); // serverga sorov muvofaqiyatsiz tugari
	},
});

export const { reducer } = userSlice;
