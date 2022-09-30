import Timeline from "../components/timeline"
import PageAnimate from "../components/layouts/pageanimate"
import { Heading, Box, Flex, Divider, Text, useColorModeValue } from "@chakra-ui/react"
import AttributeFooter from "../components/footer"


export default function Experience(router)  {

    const dividerLength = `calc(40px * ${'Experience'.length})`

    return (
        <PageAnimate>
            <Flex position='relative' w = '100%' h='100%' textAlign='center' flexWrap='wrap' overflow='auto' alignItems='center' justifyContent='center' py='6%'>
                <Flex w='100%'  flexWrap='wrap' overflow='auto' alignItems='center' justifyContent='center' fontFamily='snippit'>
                    <Heading w='100%' as="h3" variant="tab-title" id='proj' mb='6' textAlign={'left'}>
                    <Text textAlign='left' lineHeight='1.5em'>Experience</Text>
                    <Divider bg={useColorModeValue('#8bd3dd', '#2cb67d')} w={dividerLength} h='6px' borderRadius='full' orientation='horizontal' />
                    </Heading>
                </Flex>
                
            </Flex>
            <AttributeFooter>© 2022 Brian Cabau. All Rights Reserved. Icons created by IwitoStudio - Flaticon</AttributeFooter>
        </PageAnimate>  )
}