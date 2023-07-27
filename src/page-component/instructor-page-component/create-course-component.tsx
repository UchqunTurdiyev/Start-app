import SectionTitle from '@/components/section-title/section-title';
import { Divider } from '@chakra-ui/react';

import 'react-quill/dist/quill.snow.css';
import { InstructorManageCourse } from '@/components';

const CreateCourseComponent = () => {
	return (
		<>
			<SectionTitle title='Create course' subtitle="Note that when you're creating course it will be draft" />
			<Divider mt={5} />
			<InstructorManageCourse />
		</>
	);
};

export default CreateCourseComponent;
