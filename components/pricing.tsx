import {Flex,Stack,HStack,Icon,Box,Text,Heading,Button,StackProps} from '@chakra-ui/react'
import { CheckIcon } from '../public/icon'

export const ListItem=(props:StackProps)=>{
    const { children,...rest }=props;
    return (
        <>
            <HStack {...rest}>
                <Icon as={CheckIcon} w='22px' h='22px'/>
                <Text>{children}</Text>
            </HStack>
        </>
    )
}

export function Pricing(){
    return (
        <>
            <Flex direction={["column","column","row"]} shadow='xl' overflow='hidden' height={['60%','60%','42%']} mt={['-55%','-25%',"-12%"]} width={['90%','90%','70%']} rounded={10} bg='red.200' alignItems="center" justify='center'>
                <Flex direction='column' alignItems="center" p='2' bg='gray.200' justifyContent="center" width={['100%','100%',"40%"]} height='100%' >
                        <Text fontSize={['xl','xl','2xl']} fontWeight='700'>Premium Pro</Text>
                        <Heading pb='2%' fontSize={['2xl','2xl','52px']}>$329</Heading>
                        <Text pb='5%' fontWeight='500'>billed just once</Text>
                        <Button color='white' bg='purple.500' width='70%' _hover={{color:'black',bg:'purple.400'}}>Get Started</Button>
                </Flex>
                <Flex bg='white' pl='8%' direction='column' p='2' justifyContent='center' height='100%' width={['100%','100%',"60%"]}>
                    <Text textAlign='left'>Access these features when you get this pricing package for your business.</Text>
                    <Stack as='ul' spacing='3%' pt='4%'>
                        <ListItem>International calling and messages from API</ListItem>
                        <ListItem>Additional phone numbers</ListItem>
                        <ListItem>Animated messagesvia Zapier</ListItem>
                        <ListItem>24/7 support</ListItem>
                    </Stack>
                </Flex>   
            </Flex>
        </>
    )
}