import { useActions } from '@/hooks/useActions';
import { CourseType } from '@/interfaces/course.interfaces';
import { FC, ReactNode, useEffect } from 'react';

interface Props {
	children: ReactNode;
	courses: CourseType[];
	course: CourseType;
}

const InstructorProvider: FC<Props> = ({ children, course, courses }): JSX.Element => {
	const { instructorAllCourses, instructorDetailedCourse } = useActions();

	useEffect(() => {
		if (courses) {
			instructorAllCourses(courses);
		}
		if (course) {
			instructorDetailedCourse(course);
		}
	}, [courses, course]);

	return <>{children}</>;
};

export default InstructorProvider;
