import { RiReactjsLine } from "react-icons/ri"
import { RiNodejsLine } from "react-icons/ri"
import { IoLogoPython } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { motion } from "framer-motion";

const iconVariants = (duration) => ({
    initial: {y: -10},
    animate: {
        y: [10, -10],
        transition: {
            duration: duration,
            ease: "linear",
            repeat: Infinity,
            repeatType: "reverse",
        }
    }
})

const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <motion.h2 
            whileInView={{opacity: 1, y: 0}}
            initial={{opacity: 0, y: -100}}
            transition={{duration: 1.5}}
            className="my-20 text-center text-4xl">technologies
            </motion.h2>
            <motion.div 
            whileInView={{opacity: 1, x: 0}}
            initial={{opacity: 0, x: -100}}
            transition={{duration: 1.5}}
            className="flex flex-wrap items-center justify-center gap-4">
                <motion.div 
                variants={iconVariants(2.5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsLine className="text-7xl text-[#68A063]"/>
                </motion.div>
                <motion.div
                variants={iconVariants(3)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJsSquare className="text-7xl text-[#F7DF1E]"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(5)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-[#61DAFB]"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(2)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-[#38BDF8]"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(6)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoPython className="text-7xl text-[#3776AB]"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(4)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-[#007396]"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(5.75)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-[#47A248]"/>
                </motion.div>
                <motion.div 
                variants={iconVariants(3.75)}
                initial="initial"
                animate="animate"
                className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-[#F05032]"/>
                </motion.div>
            </motion.div>
        </div>
    )
}

export default Technologies