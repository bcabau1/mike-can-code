import { Box, Container } from "@chakra-ui/layout"
import Card from "./card"


const TimelineElement = ({props, children}) =>  {

    return (
        <Card>
            <Box w='100%' h='100%'>
                    {children}
            </Box> 
        </Card>       
    )
}

const experiences = [
    {
    id: 0, 
    title: 'Software Developer', 
    company: 'General Motors', 
    startDate:'June, 2021', 
    endDate:'May, 2022', 
    description:'',
    skills: ''
    },
    {
    id: 1, 
    title: 'Software Engineer Intern', 
    company: 'Blue Yonder', 
    startDate:'May, 2020', 
    endDate:'August, 2020', 
    description:'',
    skills: ''
    },
    {
    id: 2, 
    title: 'Research Intern (Software Engineering)', 
    company: 'Condensed Matter Laboratory (GSU)', 
    startDate:'May, 2019', 
    endDate:'December, 2020', 
    description:'',
    skills: ''
    },
    {
    id: 3, 
    title: 'Supplemental Instructor', 
    company: 'Georgia State University', 
    startDate:'January, 2019', 
    endDate:'December, 2019', 
    description:'',
    skills: ''
    }]

export default function Timeline()  {
    return (
        <Box minH='400px' w='100%' border='1px solid white'>
            <TimelineElement/>
        </Box>
    )
}