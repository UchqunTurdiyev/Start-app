import { checkAuth, login, logout, register } from './user.action';
import { UserInitialStateType } from './user.interface';
import { createSlice } from '@reduxjs/toolkit';

const initialState: UserInitialStateType = {
	user: null,
	isLoading: false,
	error: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {},
	extraReducers: builder => {
		builder
			.addCase(register.pending, state => {
				state.isLoading = true;
				state.error = null;
			}) // serverga sorov yuborish
			.addCase(register.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
				state.error = null;
			}) // serverga sorov muvofaqiyatli tugadi
			.addCase(register.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.user = null;
				state.error = payload;
			}) // serverga sorov muvofaqiyatsiz tugari
			.addCase(login.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(login.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
				state.error = null;
			})
			.addCase(login.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.user = null;
				state.error = payload;
			})
			.addCase(logout.fulfilled, state => {
				state.isLoading = false;
				state.user = null;
			})
			.addCase(checkAuth.fulfilled, (state, { payload }) => {
				state.isLoading = false;
				state.user = payload.user;
			});
	},
});

export const { reducer } = userSlice;
