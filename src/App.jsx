import NavBar from "./components/NavBar"
import Hero from "./components/Hero"
import About from "./components/about"
import Technologies from "./components/technologies"
import Experience from "./components/experience"
import Projects from "./components/Projects"
import Contact from "./components/Contact"

const App = () => {
  return (
    <div className="relative h-screen w-full bg-slate-950 overflow-x-hidden text-neutral-300 antialiased selection:bg-cyan-300 selection:text-cyan-900">
      <div className="absolute bottom-0 left-[-20%] right-0 top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>
      <div className="fixed top-0 -z-10 h-full w-full"></div>
      <div className="absolute bottom-0 right-[-20%] top-[-10%] h-[500px] w-[500px] rounded-full bg-[radial-gradient(circle_farthest-side,rgba(255,0,182,.15),rgba(255,255,255,0))]"></div>

      <div className="container mx-auto px-8">
      <NavBar />
      <Hero />
      <About />
      < Technologies />
      < Experience />
      < Projects />
      <Contact />
      </div>
      
    </div>
  )
}

export default App