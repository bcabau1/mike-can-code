import PageAnimate from "../components/layouts/pageanimate"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Divider,AccordionIcon, Heading, Box, Flex, Text, Image, useColorModeValue, Center } from "@chakra-ui/react"
import AttributeFooter from "../components/footer"
import ProjectBanner from "../components/projectbanner"




const projects = [{
        id: 0,
        title: 'MikeCanCode - Developer Portfolio Site',
        stack: `JavaScript, React, NextJS`,
        description: `Portfolio Website`,
        repoLink: 'https://github.com/bcabau1/mike-can-code'
    },
    {
        id: 1,
        title: 'BarterUp - Item Trading Auction',
        stack: `Php, MySQL`,
        description: `BarterUp: Item Trading Auction`,
        repoLink: 'https://github.com/bcabau1/BarterUp'
    },
    {
        id: 2,
        title: 'Laser Marking Physics Simulation - Condensed Matter Laboratory',
        stack: `Python, NumPy, Matplotlib`,
        description: `Laser marking physics simulation of mirror galvanometer.`,
        repoLink: 'https://github.com/bcabau1/Physics-AM-Project'
    },
    {
        id: 3,
        title: 'EZ Car Rentals',
        stack: `Php, MySQL`,
        description: `Laser marking physics simulation of mirror galvanometer.`,
        repoLink: 'https://github.com/bcabau1/Car-Rental-Web-App'
    }
]

const ProjectCards = ({projects}) => {

    return (<Accordion w='100%' defaultIndex={[0]} >
        {projects.map(project => {
            return  (<AccordionItem key={project.id} >
            <h2>
            <AccordionButton borderRadius='md' _expanded={{ bg: useColorModeValue('#fffffe', '#242629'), color: useColorModeValue('#2d333a','#fffffe') }}>
                <Box flex='1' textAlign='left' fontWeight='bold'>
                {project.title}
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Center><ProjectBanner summary={project.description}/></Center>
            </AccordionPanel>
        </AccordionItem>)
        })}
    </Accordion>)
}

export default function Projects(router)  {

    return (
        <PageAnimate>
            <Flex position='relative' w = '100%' h='100%' textAlign='center' flexWrap='wrap' overflow='auto' alignItems='center' justifyContent='center' py='6%'>
                <Flex w='100%'  flexWrap='wrap' overflow='auto' alignItems='center' justifyContent='center' fontFamily='snippit'>
                    <Heading w='100%' as="h3" variant="tab-title" id='proj' mb='6' textAlign={'left'}>
                    <Text textAlign='left' lineHeight='1.5em'>Projects</Text>
                    <Divider bg={useColorModeValue('#8bd3dd', '#2cb67d')} w='calc(300px + 3vw)' h='4px' borderRadius='full' orientation='horizontal' />
                    </Heading>
                    {<ProjectCards projects={projects}/>}
                </Flex>
                
            </Flex>
            <AttributeFooter>© 2022 Brian Cabau. All Rights Reserved. Icons created by IwitoStudio - Flaticon</AttributeFooter>
        </PageAnimate>   
    )
}