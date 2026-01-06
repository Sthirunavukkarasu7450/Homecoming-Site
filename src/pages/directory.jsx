import Hero from "../components/hero"
import HeroImg from "../assets/general_hero_img.jpg"
import directory from "../data/directors/directory"
import DirectoryTable from "../components/directoryTable"
import pageTitle from "../hooks/pageTitle"

export default function Directory() {
  pageTitle("Directory | Penn State Homecoming")
  return (
    <>
        <Hero
            title="Directory"
            backgroundImage={HeroImg}
            height="short"
        />

        <section className="max-w-7xl mx-auto px-4 py-10">
            <DirectoryTable people={directory} />
        </section>

        
    </>
  )
}
