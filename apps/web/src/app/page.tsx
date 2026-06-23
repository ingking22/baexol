import { SiteNav } from "@/components/site-nav";
import { Hero } from "@/components/sections/hero";
import { About } from "@/components/sections/about";
import { Work } from "@/components/sections/work";
import { Experience } from "@/components/sections/experience";
import { Stack } from "@/components/sections/stack";
import { Contact, SiteFooter } from "@/components/sections/contact";

export default function Home() {
  return (
    <>
      <SiteNav />
      <main className="flex-1">
        <Hero />
        <About />
        <Work />
        <Experience />
        <Stack />
        <Contact />
      </main>
      <SiteFooter />
    </>
  );
}
