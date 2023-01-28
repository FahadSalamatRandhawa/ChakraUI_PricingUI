import {HStack,Icon,Text,StackProps,Flex,Stack} from '@chakra-ui/react'
import { MoneyBackGuaranteeIcon,HassleFreeIcon,MonthlySubscriptionIcon } from '../public/icon';

interface FeatureProps extends StackProps{
    icon:any;
}

function FeatureItem(props:FeatureProps){
    const {icon,children,...res}=props;
    return (
        <HStack {...res} spacing='5%'>
            <Icon as={icon} boxSize={['20px','20px','48px']} />
            <Text fontWeight='500'>{children}</Text>
        </HStack>
    )
}

export function Feature(){
    return (
        <Stack direction={["column","column","row"]} mt={['2%','2%','5%']} spacing={['3%','3%','5%']} >
        <FeatureItem icon={MoneyBackGuaranteeIcon}>30 days money back Guarantee</FeatureItem>
        <FeatureItem icon={HassleFreeIcon}>No setup fees, 100% hastle free</FeatureItem>
        <FeatureItem icon={MonthlySubscriptionIcon}>No monthly subscription pay once and for all</FeatureItem>
        </Stack>
    )
}