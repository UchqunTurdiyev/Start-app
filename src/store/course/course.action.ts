import { createAsyncThunk } from '@reduxjs/toolkit';
import { CourseCreateBodyInterface } from './course.interfaces';
import { CourseService } from '@/servises/course.service';
import { errorCatch } from '@/helper/api.helper';

export const createCourse = createAsyncThunk<'Success', CourseCreateBodyInterface>('course/create', async (body, thunkApi) => {
	try {
		const response = await CourseService.createCourse(body);
		body.callback();
		return response;
	} catch (error) {
		return thunkApi.rejectWithValue(errorCatch(error));
	}
});
