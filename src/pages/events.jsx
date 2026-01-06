import pageTitle from "../hooks/pageTitle"
import Hero from "../components/hero"
import EventsCard from "../components/eventsCard"
import EventData from "../data/eventsData"
import heroImg from "../assets/general_hero_img.jpg"

export default function Home() {
  pageTitle("Events | Penn State Homecoming")

  return(
    <>
        <Hero backgroundImage={heroImg}
        height="short"
        title={"Events"} />

        <div className="flex flex-wrap justify-center m-5 gap-6">
            {EventData.map((event) => (
            <div
                key={event.id}
                className="w-full sm:w-[48%] lg:w-[30%]"
                >
                <EventsCard event={event} />
            </div>
            ))}
        </div>
    </>
  ) 
}
