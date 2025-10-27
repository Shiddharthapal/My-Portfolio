import Hero from "../hero";
import Projects from "../project";
import Skill from "../skill";
import Contact from "../contact";
import About from "../about";
import Exprience from "../exprience";

export default function Home() {
  console.log("hi");
  return (
    <div className="bg-[hsl(270,20%,98%)] dark:bg-[hsl(260,29%,10%)]">
      <Hero />
      <About />
      <Skill />
      <Projects />
      <Exprience />
      <Contact />
    </div>
  );
}
