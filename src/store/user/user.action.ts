import { AuthService } from '@/servises/auth/auth.service';
import { createAsyncThunk } from '@reduxjs/toolkit';
import { AuthUserResponse, InterfacesEmailAndPassword } from './user.interface';

export const register = createAsyncThunk<AuthUserResponse, InterfacesEmailAndPassword>(
	'auth/register',
	async ({ email, password }, thunkApi) => {
		try {
			const response = await AuthService.register(email, password);
			return response.data;
		} catch (error) {
			console.log(error);
			return thunkApi.rejectWithValue(error);
		}
	}
);
