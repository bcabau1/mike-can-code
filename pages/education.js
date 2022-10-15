import PageAnimate from "../components/layouts/pageanimate"
import { Heading, Box, Flex, Divider, Text, useColorModeValue } from "@chakra-ui/react"
import AttributeFooter from "../components/footer"


export default function Education()  {

    const dividerLength = `calc((1vw + 20px) * ${'Education'.length})`




    return (
        <PageAnimate title='Education'>
            <Flex position='relative' w = '100%' h='100%' textAlign='center' flexWrap='wrap' overflow='auto' alignItems='center' justifyContent='center' py='6%'>
                <Flex w='100%'  flexWrap='wrap' overflow='auto' alignItems='center' justifyContent='center' fontFamily='snippit'>
                    <Heading w='100%' as="h3" variant="tab-title" id='proj' mb='6' textAlign={'left'}>
                    <Text textAlign='left' lineHeight='1.5em'>Education</Text>
                    <Divider bg={useColorModeValue('#8bd3dd', '#2cb67d')} w={dividerLength} h='calc(3px + .25vw)' borderRadius='full' orientation='horizontal' />
                    </Heading>
                    <Flex minH='400px' w='100%' border='1px solid white' align='center' justify='center'>
                        <Flex w='400px' h='350px' bg='gray' borderRadius='lg' boxShadow='dark-lg' m='4'>

                        </Flex>
                        <Flex w='400px' h='350px' bg='gray' borderRadius='lg' boxShadow='dark-lg' m='4'>

                        </Flex>
                        
                    </Flex>
                </Flex>
                
            </Flex>
            <AttributeFooter>© 2022 Brian Cabau. All Rights Reserved. Icons created by IwitoStudio - Flaticon</AttributeFooter>
        </PageAnimate>   
    )
}