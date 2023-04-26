import React, {useState} from 'react';
import SectionTitle from "@/components/section-title/section-title";
import {Box, Button, Flex, Grid, HStack, Image, Stack, Text, useColorModeValue} from "@chakra-ui/react";
import {booksCategory} from "@/config/constants";
import {AiFillShopping} from "react-icons/all";

function BooksPageComponent() {
    const [filter, setFilter] = useState<string>('');
    const backgroundColor = useColorModeValue('gray.200', 'gray.900');

    return (
        <>
         <SectionTitle title={'Interesting books'} subtitle={'You like reading, great! This place especially for you'} textAlign={'center'} pt={4} />
          <Flex justify={'center'} mt={5}>
              {booksCategory.map((item, idx) => (
                  <Button key={item.id} colorScheme={'facebook'} variant={filter == item.id ? 'solid' : 'outline'} onClick={() => setFilter(item.id )} borderRadius={0} borderLeftRadius={idx == 0 ? 'md' : 0} borderRightRadius={booksCategory.length - 1 === idx ? 'md' : 0}>{item.label }</Button>
              ))}
          </Flex>

            <Grid gridTemplateColumns={'repeat(3, 1fr)'} rowGap={20} gap={4} mt={5}>
                {data.map(item => (
                    <Box key={item.name} pos={'relative'}>
                        <Image src={item.image} alt={item.name} borderRadius={'lg'} w={'full'} h={'250px'} objectFit={'cover'} />
                        <HStack pos={'absolute'} minH={'100px'} borderRadius={'lg'} shadow={'dark-lg'} bg={backgroundColor} left={2} right={2} bottom={-10} p={2} justify={'space-between'}>
                            <Box>
                                <Text  fontSize={'md'}>{item.name}</Text>
                                <Text fontWeight={"bold"} fontSize={'2xl'}>{item.price.toLocaleString('en-Us', {style: "currency", currency: 'USD'})}</Text>
                            </Box>
                            <Button colorScheme={'facebook'} rightIcon={<AiFillShopping />}>Buy</Button>
                        </HStack>
                    </Box>
                ))}
            </Grid>
        </>
    );
}

export default BooksPageComponent;


const data = [
    {
        name: 'JavaScript - Design Pattern',
        image: 'https://ucarecdn.com/01292099-b782-4b74-a05e-f902be3feecd/',
        category: 'programming',
        price: 10,
    },
    {
        name: 'Proffessional ReactJS',
        image: 'https://e1.pxfuel.com/desktop-wallpaper/595/427/desktop-wallpaper-js-posted-by-samantha-johnson-reactjs.jpg',
        category: 'programming',
        price: 40,
    },
    {
        name: 'HTML CSS - Web',
        image: 'https://t3.ftcdn.net/jpg/04/86/60/44/360_F_486604480_EKKklldKqiwmvAunlEeF4QdI0dfjDojA.jpg',
        category: 'programming',
        price: 15,
    },
    {
        name: 'Backend Programming',
        image: 'http://wbsimms.com/wp-content/uploads/2016/07/NodeJsBackground.png',
        category: 'programming',
        price: 30,
    },

    {
        name: 'Proffessional Photoshop',
        image: 'https://wallpaperaccess.com/full/1533478.jpg',
        category: 'design',
        price: 90,
    },
    {
        name: 'Illustrator',
        image: 'https://images5.alphacoders.com/114/1147598.png',
        category: 'design',
        price: 20,
    },
    {
        name: 'Premier Pro',
        image: 'https://wallpaperaccess.com/full/3539123.jpg',
        category: 'design',
        price: 15,
    },

    {
        name: 'Startup',
        image: 'https://img.freepik.com/free-vector/illustration-startup-business_53876-18154.jpg',
        category: 'business',
        price: 30,
    },
    {
        name: 'Business idea',
        image: 'https://c0.wallpaperflare.com/preview/931/296/849/business-idea-planning-board-business-plan-thumbnail.jpg',
        category: 'business',
        price: 24,
    },
    {
        name: 'Growth your plan',
        image:
            'https://online.stanford.edu/sites/default/files/styles/figure_default/public/you-have-a-business-idea-webinar-hero-image.jpg?itok=OaDnVEt0',
        category: 'business',
        price: 15,
    },

    {
        name: 'The History Of Website',
        image:
            'https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d2ViJTIwd2FsbHBhcGVyfGVufDB8fDB8fA%3D%3D&w=1000&q=80',
        category: 'history',
        price: 30,
    },
    {
        name: 'Internet',
        image: 'https://wallpapercave.com/wp/G2c4FdC.jpg',
        category: 'history',
        price: 54,
    },
    {
        name: 'Difference Web And Web-app',
        image: 'https://wallpapercave.com/wp/wp4312426.jpg',
        category: 'history',
        price: 12,
    },

    {
        name: 'Writing An Essay',
        image:
            'https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8d3JpdGluZyUyMGhhbmR8ZW58MHx8MHx8&w=1000&q=80',
        category: 'writing',
        price: 54,
    },
    {
        name: 'Professional Essay',
        image: 'https://wallpapercave.com/wp/wp7110644.jpg',
        category: 'writing',
        price: 12,
    },
];