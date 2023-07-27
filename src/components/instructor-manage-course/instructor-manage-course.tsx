import SectionTitle from '@/components/section-title/section-title';
import { Box, Button, Divider, Flex, FormControl, FormLabel, Input, Select, Stack, Textarea } from '@chakra-ui/react';
import { GiSave } from 'react-icons/gi';
import { TagsInput } from 'react-tag-input-component';
import 'react-quill/dist/quill.snow.css';
import { useState } from 'react';
import dynamic from 'next/dynamic';
import { editorModules } from '@/config/editor.config';
import { courseCategory, courseLevel, coursePrice } from '@/config/constants';
import { FileUploader } from 'react-drag-drop-files';
import { Form, Formik, FormikValues } from 'formik';
import TextField from '../text-field/text-field';
import TextAreaField from '../text-area-field/text-area-field';
import SelectField from '../select-field/select-field';
import TagField from '../tag-field/tag-field';

const ReactQuill = dynamic(() => import('react-quill'), { ssr: false });

const InstructorManageCourse = () => {
	const [file, setFile] = useState<File>();
	const handleChange = (file: File) => {
		setFile(file);
	};

	const onSubmit = (formData: FormikValues) => {
		console.log(formData);
	};

	return (
		<>
			<Formik onSubmit={onSubmit} initialValues={{ description: '' }}>
				{formik => (
					<Form>
						<Flex mt={12} gap={4}>
							<Box w={'70%'}>
								<Stack spacing={5}>
									<TextField name='title' label='Title' placeholder='JavaScript from 0 to hero' />
									<TextAreaField name='exerpt' placeholder='Full course about JavaScript' height='150px' label='Exerpt' />

									<Flex gap={4}>
										<TagField
											label='What will students learn in your course?'
											name='learn'
											placeholder='Full project...'
											formik={formik}
										/>

										<TagField label='Requirements' name='requirements' placeholder='Basic JavaScript...' formik={formik} />
									</Flex>
									<Box>
										<FormLabel mb={3}>
											Description{' '}
											<Box as={'span'} color={'red.300'}>
												*
											</Box>
										</FormLabel>
										<ReactQuill
											modules={editorModules}
											onChange={data => formik.setFieldValue('description', data)}
											value={formik.values.description}
										/>
									</Box>
									<Button w={'full'} type='submit' h={14} colorScheme={'facebook'} rightIcon={<GiSave />}>
										Create course
									</Button>
								</Stack>
							</Box>
							<Box w={'30%'}>
								<Stack spacing={5}>
									<SelectField name='level' label='Level' placeholder='-' arrOptions={courseLevel} />
									<SelectField name='category' label='Category' placeholder='-' arrOptions={courseCategory} />
									<SelectField name='price' label='Price' placeholder='-' arrOptions={coursePrice} />

									<TagField label='Course tags' name='tags' placeholder='JavaScript...' formik={formik} />

									<Box>
										<FormLabel>
											Course preview image{' '}
											<Box as={'span'} color={'red.300'}>
												*
											</Box>
										</FormLabel>
										<FileUploader
											handleChange={handleChange}
											name='file'
											types={['JPG', 'PNG', 'GIF']}
											style={{ minWidth: '100%', height: '180px', borderColor: '1px dashed #375896' }}
										/>
									</Box>
								</Stack>
							</Box>
						</Flex>
					</Form>
				)}
			</Formik>
		</>
	);
};

export default InstructorManageCourse;
