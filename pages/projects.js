import PageAnimate from "../components/layouts/pageanimate"
import { Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon, Heading, Box, Flex } from "@chakra-ui/react"
import AttributeFooter from "../components/footer"




const projects = [{
        id: 'portfolio',
        stack: `JavaScript, React, NextJS`,
        description: `Portfolio Website`,
        repoLink: ''
    },
    {
        id: 'barterup',
        stack: `Php, MySQL`,
        description: `BarterUp: Item Trading Auction`,
        repoLink: ''
    },
    {
        id: 'laser-marker',
        stack: `Python, NumPy, Matplotlib`,
        description: `Laser marking physics simulation of mirror galvanometer.`,
        repoLink: ''
    }]

const ProjectCards = ({projects}) => {

    return (
    
    <Accordion>
        {projects.map(project => {
            return  (<AccordionItem>
            <h2>
            <AccordionButton>
                <Box flex='1' textAlign='left'>
                {project.description}
                </Box>
                <AccordionIcon />
            </AccordionButton>
            </h2>
            <AccordionPanel pb={4}>
                {project.description}
            </AccordionPanel>
        </AccordionItem>)
        })}
    </Accordion>)

}

export default function Projects(router)  {

    return (
        <PageAnimate>
            <Flex position='relative' w = '100%' textAlign='center' flexWrap='wrap' overflow='auto' alignItems='center' justifyContent='space-evenly' py='6%'>
                <Heading  w='100%' as="h3" variant="tab-title" id='proj' mb='10'>
                    Projects
                </Heading>
                {<ProjectCards projects={projects}/>}
            </Flex>
            <AttributeFooter>© 2022 Brian Cabau. All Rights Reserved. Icons created by IwitoStudio - Flaticon</AttributeFooter>
        </PageAnimate>   
    )
}