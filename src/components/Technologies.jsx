import { RiReactjsLine } from "react-icons/ri"
import { RiNodejsLine } from "react-icons/ri"
import { IoLogoPython } from "react-icons/io5";
import { FaJsSquare } from "react-icons/fa";
import { FaJava } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMongodb } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";



const Technologies = () => {
    return (
        <div className="border-b border-neutral-800 pb-24">
            <h2 className="my-20 text-center text-4xl">technologies</h2>
            <div className="flex flex-wrap items-center justify-center gap-4">
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiNodejsLine className="text-7xl text-[#68A063]"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJsSquare className="text-7xl text-[#F7DF1E]"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiReactjsLine className="text-7xl text-[#61DAFB]"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <RiTailwindCssFill className="text-7xl text-[#38BDF8]"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <IoLogoPython className="text-7xl text-[#3776AB]"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaJava className="text-7xl text-[#007396]"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <SiMongodb className="text-7xl text-[#47A248]"/>
                </div>
                <div className="rounded-2xl border-4 border-neutral-800 p-4">
                    <FaGitAlt className="text-7xl text-[#F05032]"/>
                </div>
            </div>
        </div>
    )
}

export default Technologies