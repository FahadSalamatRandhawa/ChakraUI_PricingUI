import Head from 'next/head'
import { Text,Flex,Heading,Input,Button, useColorMode,useColorModeValue } from '@chakra-ui/react'
import  Header  from '../components/header';
import { Pricing } from '../components/pricing';
import { Feature } from '../components/features';
export default function Home() {
  const {toggleColorMode}=useColorMode();
  const formBackground=useColorModeValue("gray.500","gray.800")
  return (
    <>
      <Head>
        <title>Pricing</title>
      </Head>
       <Flex height='100vh' direction='column' alignItems="center" >
        <Header />
        <Pricing />
        <Feature/>
       </Flex>
    </>
  )
}
