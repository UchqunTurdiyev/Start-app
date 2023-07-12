import {
	checkAuth,
	editProfilePassword,
	login,
	logout,
	register,
	sendVerificationCode,
	verifyVerificationCode,
} from './user.action';
import { InterfacesEmailAndPassword, UserInitialStateType } from './user.interface';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const initialState: UserInitialStateType = {
	user: null,
	isLoading: false,
	error: null,
};

export const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		pendingRegister: (state, action: PayloadAction<InterfacesEmailAndPassword>) => {
			state.user = { email: action.payload.email, password: action.payload.password };
		},
	},
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
			.addCase(sendVerificationCode.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(sendVerificationCode.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(sendVerificationCode.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(verifyVerificationCode.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(verifyVerificationCode.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(verifyVerificationCode.rejected, (state, { payload }) => {
				state.isLoading = false;
				state.error = payload;
			})
			.addCase(editProfilePassword.pending, state => {
				state.isLoading = true;
				state.error = null;
			})
			.addCase(editProfilePassword.fulfilled, state => {
				state.isLoading = false;
				state.error = null;
			})
			.addCase(editProfilePassword.rejected, (state, { payload }) => {
				state.isLoading = false;
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

export const userReducer = userSlice.reducer;
export const userSliceAction = userSlice.actions;
