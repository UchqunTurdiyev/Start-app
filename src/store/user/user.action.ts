// REGISTER
// LOGIN
// LOGOUT
// CHECK AUTH

import { createAsyncThunk } from '@reduxjs/toolkit';

export const register = createAsyncThunk('auth/register', async ({ email, password }, thunkApi) => {});
