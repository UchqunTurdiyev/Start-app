import { InstructorManageCourse } from '@/components';
import { SubmitValuesInterface } from '@/components/instructor-manage-course/instructor-manage-course.props';
import SectionTitle from '@/components/section-title/section-title';
import { useActions } from '@/hooks/useActions';
import { useTypedSelector } from '@/hooks/useTypedSelector';
import { CourseType } from '@/interfaces/course.interfaces';

import { Divider, useToast } from '@chakra-ui/react';
import { useRouter } from 'next/router';

import 'react-quill/dist/quill.snow.css';

const EditDetailedCoursePageComponent = () => {
	const { course } = useTypedSelector(state => state.instructor);
	const router = useRouter();
	const { editCourse } = useActions();
	const toast = useToast();

	const onSubmit = (data: CourseType) => {
		editCourse({
			...data,
			callback: () => {
				toast({
					title: 'Successfully edited',
					position: 'top-right',
					isClosable: true,
				});
				router.push('/instructor/edit-courses');
			},
		});
	};

	return (
		<>
			<SectionTitle title={`Edit course ${router.query.slug}`} subtitle={''} />
			<Divider mt={5} />
			<InstructorManageCourse titleBtn='Edit course' submitHandler={onSubmit} courseValues={course} />
		</>
	);
};

export default EditDetailedCoursePageComponent;
