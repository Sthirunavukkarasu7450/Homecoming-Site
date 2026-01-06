import Hero from "../components/hero"
import pageTitle from "../hooks/pageTitle"
import heroImg from "../assets/general_hero_img.jpg"
import HocoSustainabilityImg from "../assets/HocoSustainability.png"
import PillarsCard from "../components/pillarsCard"
import Pillars from "../data/pillarsOfSustainability"
import HOPEImg from "../assets/about/sustainability/HOPE-Recycle.jpg"
import WhatElse from "../data/whatElseSustainability"
import WhatElseCard from "../components/whatElseSustainabilityCards"

export default function Sustainability() {
  pageTitle("Sustainability | Penn State Homecoming")
  return (
    <>
      <Hero backgroundImage={heroImg}
        title={"Sustainability"}
        height={"short"} />

        <div className="bg-white place-items-center">
          <div className="text-center mx-auto text-pink-700 font-bold text-4xl lg:text-6xl my-6">Our Committment</div>
          <img src={HocoSustainabilityImg} alt="" className="h-[60vh]"/>
          <div className="text-center text-black text-xl mx-auto py-2 px-6 lg:py-6 lg:px-20">
            Penn State Homecoming is committed to increasing our sustainability efforts as an organization 
            and inspiring those involved in Homecoming to take similar action. As an organization, we celebrate 
            Penn State’s traditions while creating our own to preserve the future.
          </div>
        </div>

        <div className="bg-gray-50">
          <div className="text-pink-700 lg:text-7xl text-4xl font-bold pb-3 text-center">Pillars of Sustainability</div>
          <div className="text-black text-xl pb-3 text-center lg:px-18 px-4">
            The three pillars of sustainability are the universal foundation to building a more sustainable community. 
            At Homecoming we are using them as the guidelines to produce our sustainability initiatives.
          </div>
          <div className="bg-gray-50 px-8 py-4 grid grid-cols-1 lg:grid-cols-3 p-8">
            {Pillars.map((pillar) => (
              <PillarsCard
                key={pillar.id}
                image={pillar.image}
                title={pillar.title}
                text={pillar.text}
                />
            ))}
          </div>
        </div>

        <div className="bg-white p-6">
          <div className="text-pink-700 lg:text-7xl text-4xl font-bold pb-3 text-center">HOPE</div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
            <div className="col-span-1 px-4 py-2 flex lg:justify-end justify-center">
              <img src={HOPEImg} alt="" className="shadow-lg shadow-black lg:h-96 mx-12 my-8" />
            </div>
            <div className="text-black text-xl col-span-1 px-4 lg:pr-20 py-2 text-center lg:text-left">
              HOPE stands for Homecoming OPPerations Protecting the Environment. HOPE is our recycling effort 
              that allows your organization or committee to earn points throughout the year by collecting cans 
              (preferably uncrushed) for Homecoming to recycle! HOPE bags can be found in the Homecoming Office 
              (located in HUB 227B) for all organizations, which you will fill up with aluminum cans. When you 
              have a full bag, you will be able to drop them off at a weekly drop-off location. HOPE is one of 
              Homecoming’s efforts in creating more sustainable habits in our environment and organization.
            </div>
          </div>
        </div>

        <div className="bg-gray-50 text-pink-700 lg:text-7xl text-4xl font-bold pb-3 text-center">What Else Are We Doing?</div>
        <div className="bg-gray-50 px-8 py-4 grid-cols-1 lg:grid-cols-2 gap-8">
          {WhatElse.map((whatelse) => (
            <WhatElseCard 
            key={whatelse.id}
            title={whatelse.title}
            text={whatelse.text}
            />
          ))}
        </div>
    </>
  )
}
