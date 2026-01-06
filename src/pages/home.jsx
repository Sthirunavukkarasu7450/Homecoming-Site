import pageTitle from "../hooks/pageTitle"
import Carousel  from "../components/carousel"
import QuickLinkCard from "../components/quickLinkCard"
import QuickEventCard from "../components/quickEventCard"

import sponsorData from "../data/sponsorData"
import quickLinks from "../data/quickLinks"
import quickEvents from "../data/eventQuickCards"
import HeroVideo from "../assets/home/Hero_Video.mp4"
import { Link } from "react-router-dom"

export default function Home() {
  pageTitle("Home | Penn State Homecoming")

  return(
    <>
      <div className="relative h-screen w-full overflow-hidden">
        <video className="absolute top-0 left-0 w-full h-full object-cover"
        src={HeroVideo} autoPlay muted loop playsInline/>
        <div className="absolute inset-0 bg-black/70"></div>
        <div className="relative z-10 flex h-full justify-baseline items-center bottom-15 lg:bottom-10 px-6"> 
          <div className="flex flex-col text-center lg:text-left">
            <div className="text-2xl lg:text-5xl text-white">
              Penn State
            </div>
            <div className="text-5xl lg:text-9xl text-pink-700 font-bold">
              HOMECOMING
            </div>
            <div className="text-xl text-white lg:mr-150">
              Celebrating tradition and instilling pride in all members of the Penn State family 
              through active engagement of students, alumni, faculty and staff across the community.
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 text-center p-8 lg:w-1/3">
              <Link href="/participate" className="block text-white rounded-2xl bg-pink-800 p-4 hover:bg-pink-950 hover:scale-110 transform transition-all duration-700 col-span-1">
                Join The Celebration
              </Link>
              <Link href="/about" className="block border-2 border-white rounded-2xl text-white bg-transparent p-4 hover:scale-110 transform transition-all duration-700 col-span-1">Learn More About Us</Link>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-200">
        <div className="text-4xl lg:text-6xl text-black text-center font-bold px-6 pt-4 pb-2">Our Events</div>
        <div className="grid grid-cols-1 lg:grid-cols-4 mx-4 px-2 py-2 gap-3">
          {quickEvents.map((event) => (
            <QuickEventCard
            key={event.id}
            title={event.title}
            icon={event.icon}
            date={event.date} />
          ))}
        </div>
        <div className="px-8 py-4 flex justify-center">
          <a href="/events" className="inline-flex items-center gap-3 btn btn-outline bg-pink-700 text-white text-xl
              px-6 py-3 rounded-2xl transition-all duration-700 ease-out hover:bg-pink-950 hover:scale-110 group">
            <span>See Our Schedule</span>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
            </svg>
          </a>
        </div>
      </div>

      <div className="bg-white">
        <div className="text-black text-center lg:text-6xl text-4xl font-bold px-4 py-6">
          Theme Reveal
        </div>
        <div className="flex justify-center px-4 py-6">
            THEME REVEAL VIDEO GOES HERE
        </div>
      </div>

      <div className="bg-gray-200 py-6">
        <div className="text-4xl lg:text-6xl text-black text-center font-bold px-6 pb-6">
          Quick Links
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 px-6">
          {quickLinks.map((link) => (
            <QuickLinkCard
              key={link.id}
              img={link.img}
              text={link.text}
            />
          ))}
        </div>
      </div>

      <div className="text-4xl lg:text-6xl text-black text-center font-bold px-6 pt-4">Our Partners</div>
      <section className="w-full">
        <Carousel items={sponsorData}
        arrowClassLeft="text-4xl transition-all hover:text-6xl text-pink-700 px-3"
        arrowClassRight="text-4xl transition-all hover:text-6xl text-pink-700 px-3"
        dotClass="bg-gray-200"
        activeDotClass="bg-pink-700" />
      </section>

      <div class="p-2 lg:px-16 lg:py-8 text-black text-center bg-gray-200">
        <div class="text-4xl lg:text-6xl font-bold pb-4">Acknowledgment of Land</div>
        <div class="text-lg">
          “The Pennsylvania State University campuses are located on the original homelands of the Erie, Haudenosaunee 
          (Seneca, Cayuga, Onondaga, Oneida, Mohawk, and Tuscarora), Lenape (Delaware Nation, Delaware Tribe, Stockbridge-Munsee), 
          Monongahela, Shawnee (Absentee, Eastern, and Oklahoma), Susquehannock, and Wahzhazhe (Osage) Nations. As a land grant 
          institution, we acknowledge and honor the traditional caretakers of these lands and strive to understand and model their 
          responsible stewardship. We also acknowledge the longer history of these lands and our place in that history.”
        </div>
      </div>
    </>
  ) 
}
