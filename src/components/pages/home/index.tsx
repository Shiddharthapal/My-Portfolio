import Hero from "../hero";
import Projects from "../project";
import Skill from "../skill";
import Contact from "../contact";
import About from "../about";
import Resume from "../resume";

export default function Home() {
  console.log("hi");
  return (
    <>
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Resume />
      <Contact />
    </>
  );
}
