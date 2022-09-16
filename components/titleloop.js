import { Image, Heading, Center } from "@chakra-ui/react"
import { motion, AnimatePresence } from "framer-motion"
import { useState } from "react"


const ProfPic = () => 
    (<Center><Image src='/images/profilepic.jpg' borderRadius='full' boxSize='225px' p='5'/></Center>)

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
    initial:{ x: 0, opacity: 1 },
    animate:{ x: 500, opacity: 0,
        transition: { duration: 1, delay: 3, repeatType: 'loop' }
    },
    exit: { x: -500, opacity: 0}
    //,
    

  }

export default function TitleLoop() {

    const [currentItem, setCurrentItem] = useState(0)

    const animatedobj = 
    <AnimatePresence>
        <motion.div
        key={items[currentItem].id}
        initial='initial'
        animate='animate'
        exit='exit'
        transition='transition'
        variants={variants}
        //onAnimationComplete={() => setCurrentItem(currentItem === 0 ? 1 : 0)}
        > 
        {items[currentItem].src}
        </motion.div>
    </AnimatePresence>
        
        

    return (
        animatedobj
    )
}