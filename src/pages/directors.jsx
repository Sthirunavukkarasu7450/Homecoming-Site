import Hero from "../components/hero"
import DirectorCard from "../components/directorCard"
import directors from "../data/directors/directors.js"
import directorHeroImg from "../assets/directors_old_main_pic.jpg"
import officers from "../data/directors/officers"
import execDirector from "../data/directors/execDirector"
import ExecDirectorCard from "../components/execDirectorCard"

import pageTitle from "../hooks/pageTitle"

export default function Directors() {
    pageTitle("Directors | Penn State Homecoming")
  return (
    <>
        <Hero
            title="Directors"
            backgroundImage={directorHeroImg}
        />

        <div>
            <div className="text-pink-700 lg:text-6xl text-4xl font-semibold pt-8 py-2 mb-2 text-center">
                About the Executive Committee
            </div>
            <div className="lg:text-xl text-lg mx-auto px-4 py-2 mb-4 text-center font-light">
                The Homecoming Executive Committee (HEC) is composed of an Executive Officer, two Officers, and twelve Directors. Each Officer oversees five to seven Directors, and each Director leads a committee of Captains and Committee Members.
                <br />
                <br />
                Throughout the year, the members of the Homecoming Executive Committee plan and organize all Homecoming events, playing a vital role in the success of Penn State’s Homecoming celebration. Every member of the Executive Committee is a current University Park student.
            </div>
        </div>

        <div className="bg-pink-800 text-white lg:text-6xl text-4xl font-semibold py-6 text-center">
            Meet the Executive Committee
        </div>

        <div className="lg:text-6xl text-4xl text-pink-700 border-y-2 border-y-pink-500 font-bold py-4 mb-2 text-center">
            Executive Director
            <div className="lg:text-4xl text-2xl mt-2 text-pink-700 font-semibold">
                Homecoming 2026
            </div>
        </div>
        <section className="max-w-7xl mx-auto">
            {execDirector.map((director) => (
                <ExecDirectorCard
                key={director.id}
                director={director}
                />
            ))}
        </section>

        <div className="lg:text-6xl text-4xl text-pink-700 border-y-2 border-y-pink-500 font-bold py-4 mt-6 mb-2 text-center">Officers</div>
        <section className="max-w-7xl mx-auto grid gap-6 md:grid-cols-1 lg:grid-cols-2">
            {officers.map((officer) => (
                <DirectorCard
                key={officer.id}
                director={officer}
                />
            ))}
        </section>


        <div className="lg:text-6xl text-4xl text-pink-700 border-y-2 border-y-pink-500 font-bold py-4 mt-6 mb-2 text-center">Directors</div>
        <section className="max-w-7xl mx-auto p-6 grid gap-6 md:grid-cols-1 lg:grid-cols-3">
            {directors.map((director) => (
                <DirectorCard
                key={director.id}
                director={director}
            />
            ))}
        </section>
    </>
  )
}
