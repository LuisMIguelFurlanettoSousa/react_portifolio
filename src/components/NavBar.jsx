import { FaLinkedin } from "react-icons/fa"
import { FaGithub } from "react-icons/fa"
import { motion } from "framer-motion"

const NavBar = () => {
    return <nav className="mb-20 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <motion.h2  
            initial={{opacity: 0}}
            animate={{opacity: [0 , 1]}}
            transition={{duration: 1.5}}
            className="mx-2 w-10 text-4xl font-serif">LM</motion.h2>
        </div>
        <div className="m-8 flex items-center justify-cenetr gap-4 text-2xl">
            <a href="https://www.linkedin.com/in/luis-miguel-furlanetto-sousa" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
            <a href="https://github.com/LuisMIguelFurlanettoSousa" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
        </div>
    </nav>
}

export default NavBar;