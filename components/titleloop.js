import { Image, Heading, Center } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"


const ProfPic = () => 
    (<Center><Image src='/images/profilepic.jpg' borderRadius='full' boxSize='200px' p='5'/></Center>)

const Title = () => 
    (<Heading as="h1" variant="section-title" textAlign='center' >Michael Cabau</Heading>)

let items = [
    {
        id: 0,
        src: <Title/>
    },
    {
        id: 1,
        src: <ProfPic/>
    }
]

const variants = {
    //transition: {default: {repeat: Infinity}},
    initial:{ x: 300, opacity: 0 },
    animate:{ x: 0, opacity: 1 },
    exit:{ x: -300, opacity: 0 }
  }

export default function TitleLoop() {

    return (
    <AnimatePresence>
    {items.map(item => (
        <motion.div
        key={item.id}
        initial='initial'
        animate='animate'
        exit='exit'
        > 
        {item.src}
        </motion.div>
        ))}
  </AnimatePresence>
    )
}