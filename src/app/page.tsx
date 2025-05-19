import AboutMe from "@/components/AboutMe";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Timeline from "@/components/Timeline";
import Skills from "@/components/Skills";
import Achievements from "@/components/Achievements";
// import Testimonials from "@/components/Testimonials";
// import Blog from "@/components/Blog";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import SplashScreen from "@/components/SplashScreen";

export default function Home() {
  return (
    <div className="flex p-0 m-0 flex-col">
      <SplashScreen />
      <Navbar />
      <Hero />
      <AboutMe />
      <Timeline />
      <Skills />
      <Achievements />
      <Projects />
      {/* <Testimonials /> */}
      {/* <Blog /> */}
      <Contact />
      <Footer />
    </div>
  );
}
