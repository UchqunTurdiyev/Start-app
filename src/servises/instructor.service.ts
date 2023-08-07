import { $axios } from '@/api/axios';
import { InstructorApplyBody } from '@/store/instructor/instructor.interfaces';
import axios from 'axios';
import { API_URL, getInstructorurl } from '@/config/api.config';
import { CourseType } from '@/interfaces/course.interfaces';
export const InstructorService = {
	async applyInstructor(body: InstructorApplyBody) {
		const response = await axios.post<'Success'>(`${API_URL}${getInstructorurl('apply')}`, body);

		return response.data;
	},

	async getAllCourses(token?: string) {
		const response = await axios.get<CourseType[]>(`${API_URL}${getInstructorurl('course-all')}`, {
			headers: {
				Authorization: `Bearer ${token}`,
			},
		});

		return response.data;
	},

	async getDetailedCourse(slug: string) {
		const response = await $axios.get(`${getInstructorurl(`course/${slug}`)}`);

		return response.data;
	},
};
