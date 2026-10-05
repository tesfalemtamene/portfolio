import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Experience } from "@/components/sections/experience";
import { Projects } from "@/components/sections/projects";
import { Awards } from "@/components/sections/awards";
import { Leadership } from "@/components/sections/leadership";
import { Education } from "@/components/sections/education";
import { Contact } from "@/components/sections/contact";

export default function Home() {
  return (
    <div className="flex flex-col gap-0">
      <Hero />
      <About />
      <Experience />
      <Projects />
      <Awards />
      <Leadership />
      <Education />
      <Contact />
    </div>
  );
}
