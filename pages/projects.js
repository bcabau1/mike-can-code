import PageAnimate from "../components/layouts/pageanimate"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, Divider,AccordionIcon, Heading, Box, Flex, Text, useColorModeValue, Center } from "@chakra-ui/react"
import AttributeFooter from "../components/footer"
import ProjectBanner from "../components/projectbanner"




const projects = [{
        id: 0,
        title: 'Developer Portfolio',
        stack: `react,next,chakra,framer`,
        description: `This is a developer portfolio website (which you are visiting right now!), built using React, NextJS, Chakra UI, and Framer Motion. 
                        I wanted to have a way to showcase my learning, where I have been, and where I'm going in my career; this site is the product of that.`,
        repoLink: 'https://github.com/bcabau1/mike-can-code'
    },
    {
        id: 1,
        title: 'BarterUp, an Item Trading Web App',
        stack: `php,mysql`,
        description: `A web application where users can trade or bid between real-world items among one another. 
                        The product was built using PHP and MySQL. 
                        This project was built for a senior level database course at Georgia State University, and also involved database design for entity relationships.`,
        repoLink: 'https://github.com/bcabau1/BarterUp'
    },
    {
        id: 2,
        title: 'Laser Marking Physics Simulation',
        stack: `python,numpy,labview`,
        description: `A Laser marking physics simulation of a mirror galvanometer using Python and matplotlib, 
                        developed at Georgia State University and advised by Dr. Sidong Lei. 
                        This project demonstrates laser beams on fluctuating mirror angles
                         to produce patterns in micron-scale for laser-scanning systems and printers.`,
        repoLink: 'https://github.com/bcabau1/Physics-AM-Project'
    }
]


const ProjectCards = ({projects}) => {
    return (<Accordion w='100%' defaultIndex={[0]} >
        {projects.map(project => {
            return  (<AccordionItem key={project.id} >
            <h2>
            <AccordionButton borderRadius='md' bg= '#fffffe' color= '#2d333a' _dark={{ bg: '#242629', color: '#fffffe' }}>
                <Box flex='1' textAlign='left'>
                <Heading  w='100%' as="h3" variant="project-title" fontFamily='snippit'>
                {project.title} </Heading>
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                <Center><ProjectBanner project={project}/></Center>
            </AccordionPanel>
        </AccordionItem>)
        })}
    </Accordion>)
}

export default function Projects()  {

    const dividerLength = `calc((1vw + 20px) * ${'Projects'.length})`

    return (
        <PageAnimate title='Projects'>
            <Flex position='relative' w = '100%' h='100%' textAlign='center' flexWrap='wrap' overflow='auto' alignItems='center' justifyContent='center' py='6%'>
                <Flex w='100%'  flexWrap='wrap' overflow='auto' alignItems='center' justifyContent='center' fontFamily='snippit'>
                    <Heading w='100%' as="h3" variant="tab-title" id='proj' mb='6' textAlign={'left'}>
                    <Text textAlign='left' lineHeight='1.5em'>Projects</Text>
                    <Divider bg={useColorModeValue('#8bd3dd', '#2cb67d')} w={dividerLength} h='calc(3px + .25vw)' borderRadius='full' orientation='horizontal' />
                    </Heading>
                    {<ProjectCards projects={projects}/>}
                </Flex>
                
            </Flex>
            <AttributeFooter>© 2022 Brian Cabau. All Rights Reserved. Icons created by IwitoStudio - Flaticon</AttributeFooter>
        </PageAnimate>   
    )
}