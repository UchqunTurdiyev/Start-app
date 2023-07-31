import SectionTitle from '@/components/section-title/section-title';
import { Divider, useToast } from '@chakra-ui/react';

import 'react-quill/dist/quill.snow.css';
import { InstructorManageCourse } from '@/components';
import { SubmitValuesInterface } from '@/components/instructor-manage-course/instructor-manage-course.props';
import { useActions } from '@/hooks/useActions';
import { useRouter } from 'next/router';

const CreateCourseComponent = () => {
	const { createCourse } = useActions();
	const toast = useToast();
	const router = useRouter();

	const onSubmit = (data: SubmitValuesInterface) => {
		createCourse({
			...data,
			callback: () => {
				toast({
					title: 'Successfully created',
					description: 'You can customize your curriculum for your course',
					position: 'top-right',
					isClosable: true,
				});
				router.push('/instructor/courses');
			},
		});
	};
	return (
		<>
			<SectionTitle title='Create course' subtitle="Note that when you're creating course it will be draft" />
			<Divider mt={5} />
			<InstructorManageCourse titleBtn='Create course' submitHandler={onSubmit} />
		</>
	);
};

export default CreateCourseComponent;
