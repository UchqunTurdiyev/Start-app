import { CourseType } from '@/interfaces/course.interfaces';

export interface DraftCourseCardProps {
	item: CourseType;
	status: 'Active' | 'Draft';
}
