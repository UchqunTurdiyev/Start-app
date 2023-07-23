import { createAsyncThunk } from '@reduxjs/toolkit';
import { InstructorApplyBody } from './instructor.interfaces';
import { errorCatch } from '@/helper/api.helper';
import { InstructorService } from '@/servises/instructor.service';

export const applyInstructor = createAsyncThunk<'Success', InstructorApplyBody>('instructor/apply', async (body, thunkApi) => {
	try {
		const response = await InstructorService.applyInstructor(body);
		body.callback();
		return response;
	} catch (error) {
		return thunkApi.rejectWithValue(errorCatch(error));
	}
});
