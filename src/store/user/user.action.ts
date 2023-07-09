import { AuthService } from '@/servises/auth.service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthUserResponse, InterfacesEmailAndPassword } from './user.interface';
import { errorCatch } from '@/helper/api.helper';

export const register = createAsyncThunk<AuthUserResponse, InterfacesEmailAndPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const login = createAsyncThunk<AuthUserResponse, InterfacesEmailAndPassword>(
	'auth/login',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.login(email, password);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const logout = createAsyncThunk('auth/logout', () => {
	AuthService.logout();
});

export const sendVerificationCode = createAsyncThunk<'Success', { email: string }>(
	'auth/verification-code',
	async ({ email }, thunkApi) => {
		try {
			const response = await AuthService.sendOtp(email);
			return response.data;
		} catch (error) {
			return thunkApi.rejectWithValue(errorCatch(error));
		}
	}
);

export const checkAuth = createAsyncThunk<AuthUserResponse>('auth/check-auth', async (_, thunkApi) => {
	try {
		const response = await AuthService.getNewTokens();
		return response.data;
	} catch (error) {
		return thunkApi.rejectWithValue(error);
	}
});
