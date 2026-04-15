import Hero from '@/components/sections/Hero'
import About from '@/components/sections/About'
import CurrentlyWorking from '@/components/sections/CurrentlyWorking'
import Skills from '@/components/sections/Skills'
import Projects from '@/components/sections/Projects'
import Experience from '@/components/sections/Experience'
import Research from '@/components/sections/Research'
import Achievements from '@/components/sections/Achievements'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <>
      <Hero />
      <About />
      <CurrentlyWorking />
      <Skills />
      <Projects />
      <Experience />
      <Research />
      <Achievements />
      <Contact />
    </>
  )
}