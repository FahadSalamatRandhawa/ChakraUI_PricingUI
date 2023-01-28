import { Box,Text,Flex,Heading } from '@chakra-ui/react'
import React from 'react'


export default function Header(){
    return (
        <>
            <Flex direction='column' pl={['2%','2%']} pt='2%' textAlign={['left','left','center']} color='white' height='50%' w='100%' bg='purple.500'>
                <Heading fontSize={["2xl","3xl","5xl"]} fontWeight='extrabold' mb={3}>Sample pricing for your business</Heading>
                <Text fontWeight='medium' fontSize={['lg','lg','2xl']}>Plans that are carefully crafted to suit your business.</Text>      
            </Flex>
        </>
    )
}