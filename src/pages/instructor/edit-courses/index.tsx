import { withInstructorLayout } from '@/layouts/instructor';
import { EditPageCourseComponent } from '@/page-component';
import { NextPage } from 'next';

const EditCourses: NextPage = () => {
	return <EditPageCourseComponent />;
};

export default withInstructorLayout(EditCourses);
