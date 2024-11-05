import { About } from "@/components/about"
import { Contact } from "@/components/contact"
import { ProfileHeader } from "@/components/profile-header"
import { Project } from "@/components/project"
import { Work } from "@/components/work"
import { Writings } from "@/components/writings"

export default function Home() {
  return (
    <section className="items-center gap-8 container py-3 md:py-4 space-y-12">
      <ProfileHeader name="Suraj Gupta" username="sujjeee" isActive />
      <About />
      <Work />
      <Writings />
      <Project />
      <Contact />
    </section>
  )
}
