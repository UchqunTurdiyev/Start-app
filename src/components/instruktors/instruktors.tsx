import React from 'react';
import SectionTitle from "@/components/section-title/section-title";
import {Box, Flex, Grid, GridItem, Heading, HStack, Icon, Image, Stack, Text} from "@chakra-ui/react";
import {FaUserGraduate} from "react-icons/fa";
import {AiOutlinePaperClip} from "react-icons/all";
import Link from "next/link";

const Instruktors = () => {
	return <>
		<SectionTitle title={'Learn from the best instructors'} subtitle={'All our mentor with high experience'} />

		<Grid gap={3} gridTemplateColumns={'repeat(4, 1fr)'} mt={5}>
			{data.map((item, idx) => (
				<GridItem key={idx}>
					<Stack spacing={3}>
						<Image src={item.avatar} alt={item.firstName} borderRadius={'lg'} h={'330px'} objectFit={'cover'} />
						<Heading fontSize={'xl'}>
							{item.firstName} {item.lastName}
						</Heading>
						<Text color={'gray.500'}>{item.job}</Text>
						<HStack opacity={'.6'}>
							<Flex align={'center'} gap={1}>
								<Icon as={FaUserGraduate} />
								<Text>{item.students} students</Text>
							</Flex>
                            <Flex align={'center'} gap={1}>
								<Icon as={AiOutlinePaperClip} />
								{item.courses} courses
							</Flex>
						</HStack>
					</Stack>
				</GridItem>
			))}
 		</Grid>
		<Text textAlign={'center'}>Want to help people learn, grow and achieve more in life? <Box as={"span"} color={'teal'} _hover={{textDecoration: 'underline'}}><Link href={'/become-instructor'}>Become an instructor</Link></Box></Text>
	</>;
};

export default Instruktors;


const data = [
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
	{
		firstName: 'Samar',
		lastName: 'Badrddinov',
		job: 'Software Engineer',
		students: 230,
		courses: 20,
		avatar: 'https://media.graphassets.com/NfxHACAlR4CkvdhnB3gs',
	},
];