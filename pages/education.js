import Timeline from "../components/timeline"
import PageAnimate from "../components/layouts/pageanimate"
import { Heading, Box, Flex } from "@chakra-ui/react"
import AttributeFooter from "../components/footer"


export default function Education(router)  {


    return (
        <PageAnimate>
            <Flex position='relative' w = '100%' h='100%' p='14%' textAlign='center' flexWrap='wrap'
            overflow='auto' alignItems='center' justifyContent='space-evenly' id='ed'>

                <Heading  w='100%' as="h3" variant="banner-title">
                    Education
                </Heading>
                
            </Flex>
            <AttributeFooter>© 2022 Brian Cabau. All Rights Reserved. Icons created by IwitoStudio - Flaticon</AttributeFooter>
        </PageAnimate>   
    )
}