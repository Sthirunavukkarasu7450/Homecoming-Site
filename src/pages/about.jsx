import pageTitle from "../hooks/pageTitle"
import Hero from "../components/hero"
import heroImg from "../assets/general_hero_img.jpg"
import vintageGamePic from "../assets/about/vintage_game_pic.jpg"
import directorsPic from "../assets/directors_old_main_pic.jpg"
import { Link } from "react-router-dom"



export default function About() {
  pageTitle("About | Penn State Homecoming")
  return (
    <main>
      <Hero backgroundImage={heroImg}
      title={"About"}
      height="short" />

      <div className="text-center p-6 m-6">
        <div className="text-pink-700 lg:text-7xl text-4xl font-bold pb-3">Who We Are</div>
        <div className="text-black text-center text-xl lg:px-12">
          Penn State Homecoming is one of the largest student-run homecoming organizations in the country, 
          which aims to celebrate tradition and instill pride in all members of the Penn State family through 
          active engagement of students, alumni, faculty and staff across the community. Our organization is 
          comprised of many student volunteers who donate their time to creating a multitude of events that 
          make the Homecoming celebration a yearlong event.
          <br />
          <br />
          Students work with their peers, alumni, corporate sponsors, and various other community members 
          to help make Homecoming Week and our other annual events occur. Homecoming maintains lasting relationships 
          with those in and outside of Penn State University to ensure a successful celebration each year.
        </div>
      </div>
      <div className="bg-gray-100 p-6">
        <div className="text-pink-700 lg:text-7xl text-4xl font-bold pb-3 text-center">Our History</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
          <div className="col-span-1 px-4 py-2 lg:ml-18">
            <img src={vintageGamePic} alt="" className="shadow-lg shadow-black" />
          </div>
          <div className="text-black text-xl col-span-1 px-4 py-2 self-center">
            Homecoming has been a tradition at Penn State since our first Homecoming game was played on October 9, 1920, 
            against Dartmouth. Over 100 years later, we continue to celebrate our traditions by participating in and hosting 
            many events each year.
            <br />
            <br />
            What was once known as the Farmers’ High School of Pennsylvania, Penn State University has witnessed name changes, 
            building expansions and immeasurable growth. Yet, despite ongoing change, Penn State Homecoming remains steadfast 
            in creating and upholding pride and tradition amongst those who bleed blue and white.
          </div>
        </div>
      </div>
      <div className="p-6 m-6">
        <div className="text-pink-700 lg:text-7xl text-4xl font-bold pb-3 text-center">Meet The Executive Committee</div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 justify-center">
          <div className="text-black text-xl col-span-1 px-4 py-2 self-center">
            <div className="pb-8">
            Every year after Homecoming Week, a new Homecoming Executive Committee is selected to start preparations 
            for the following year. The Executive Committee works tirelessly to lead, plan, and organize all Homecoming 
            events and internal workings.
            <br />
            <br />
            The Homecoming 2025 Executive Committee was selected November 9, 2025!
            </div>
            <Link to="/about/Directors" className=" bg-pink-700 text-white transition-all hover:bg-pink-950 duration-750 px-8 py-4 rounded-2xl text-lg shadow-md shadow-pink-950 transform hover:scale-110">Meet the Executive Committee</Link>
          </div>
          <div className="col-span-1 px-4 py-2">
            <img src={directorsPic} alt="" className="shadow-lg shadow-black" />
          </div>
        </div>
      </div>
    </main>
  )
}
