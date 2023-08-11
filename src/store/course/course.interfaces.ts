import { SubmitValuesInterface } from '@/components/instructor-manage-course/instructor-manage-course.props';
import { CourseType } from '@/interfaces/course.interfaces';

export interface CourseIntialStateType {
	isLoading: boolean;
	error: string | null | unknown;
}

export interface CourseCreateBodyInterface extends CourseType {
	callback: () => void;
}

export interface DeleteBodyInterface {
	courseId: string;
	callback: () => void;
}
