import { CourseType } from '@/interfaces/course.interfaces';
import { withInstructorLayout } from '@/layouts/instructor';
import { EditPageCourseComponent } from '@/page-component';
import { InstructorService } from '@/servises/instructor.service';
import { GetServerSideProps, NextPage } from 'next';

const EditCourses: NextPage = () => {
	return <EditPageCourseComponent />;
};

export default withInstructorLayout(EditCourses);

export const getServerSideProps: GetServerSideProps<CoursesPageType> = async ({ req }) => {
	const courses = await InstructorService.getAllCourses(req.cookies.refresh);

	return {
		props: { courses },
	};
};

interface CoursesPageType extends Record<string, unknown> {
	courses: CourseType[];
}
