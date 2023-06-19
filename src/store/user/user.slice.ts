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
	extraReducers: builder => {},
});

export const { reducer } = userSlice;
