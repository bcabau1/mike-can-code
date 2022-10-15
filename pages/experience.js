import PageAnimate from "../components/layouts/pageanimate"
import { Heading, Flex, Divider, Text, useColorModeValue } from "@chakra-ui/react"
import AttributeFooter from "../components/footer"
import Timeline from "../components/timeline"


export default function Experience()  {

    const dividerLength = `calc((1vw + 20px) * ${'Experience'.length})`

    return (
        <PageAnimate title='Experience'>
            <Flex position='relative' w = '100%' h='100%' flexWrap='wrap' overflow='auto' alignItems='center' py='6%'>
            <Flex w='100%' position='relative' flexWrap='wrap' overflow='auto' alignItems='center' justifyContent='center' fontFamily='snippit'>
                    <Heading w='100%' as="h3" variant="tab-title" id='proj' mb='6' textAlign={'left'}>
                    <Text textAlign='left' lineHeight='1.5em'>Experience</Text>
                    <Divider bg={useColorModeValue('#8bd3dd', '#2cb67d')} w={dividerLength} h='calc(3px + .25vw)' borderRadius='full' orientation='horizontal' />
                    </Heading>
                    <Timeline/>       
                </Flex>         
            </Flex>
            <AttributeFooter>© 2022 Brian Cabau. All Rights Reserved. Icons created by IwitoStudio - Flaticon</AttributeFooter>
        </PageAnimate>  )
}