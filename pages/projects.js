import Timeline from "../components/timeline"
import PageAnimate from "../components/layouts/pageanimate"
import { Heading, Box, Flex, Image } from "@chakra-ui/react"
import AttributeFooter from "../components/footer"
import ProjectBanner from "../components/projectbanner"
import SnippetBio from "../components/snippetbio"



const projects = 
[   
    {
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
    }
]

const ProjectCards = ({projects}) => {

    const projArr =  projects.map(project => {
        return <ProjectBanner key={project.id} href={project.repoLink} summary={project.description}/>

    })

    return projArr


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