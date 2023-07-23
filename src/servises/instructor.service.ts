import { InstructorApplyBody } from '@/store/instructor/instructor.interfaces';
import { applyInstructor } from './../store/instructor/instructor.actions';
import axios from 'axios';
import { API_URL, getInstructorUrl } from '@/config/api.config';
export const InstructorService = {
	async applyInstructor(body: InstructorApplyBody) {
		const response = await axios.post<'Success'>(`${API_URL}${getInstructorUrl('apply')}`, body);

		return response.data;
	},
};
