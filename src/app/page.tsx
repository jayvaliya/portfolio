import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";

export default function Home() {
  return <div className="flex p-0 m-0 flex-col">
    <Hero />
    <AboutMe />
    <Projects />

    <div className="text-white bg-black p-0 m-0 text-5xl">Under construction.</div>
  </div>
}
