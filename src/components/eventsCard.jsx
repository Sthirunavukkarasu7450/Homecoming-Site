import EventsModal from "./eventsModal"

export default function EventsCard({ event }) {
  const { id, title, image, location, date, time, text, photosLink } = event

  return (
    <div className="card bg-base-100 shadow-pink-950 shadow-lg rounded-2xl mx-4 my-2 px-4 py-2 text-center">
      <div className="card-body py-4 font-light">
        <h2 className="card-title text-pink-700 font-semibold text-2xl font-stretch-semi-expanded">{title}</h2>
        <div className="text-xl text-black">
            <div className="text-center p-4">
                {date}
                <br />
                {time}
                <br />
                {location}
            </div>
            <figure className="flex justify-center p-4">
                <div className="lg:w-72 lg:h-72 w-60 h-60 overflow-hidden">
                    <img src={image} alt={title} className="rounded-2xl w-full h-full object-cover object-center" />
                </div>
            </figure>
        </div>

        <div className="flex flex-3 justify-center">
            <button className="btn btn-outline w-full bg-pink-100 transition-all hover:bg-pink-950 hover:text-white mx-4 my-2 px-4 py-2 rounded-xl duration-750 hover:scale-110" onClick={() => document.getElementById(id).showModal()}>
                Read More 
            </button>
            {event.photosLink && (
            <a href={event.photosLink} target="_blank" rel="noopener noreferrer"
                className="btn btn-outline w-full bg-pink-100 transition-all hover:bg-pink-950 hover:text-white mx-4 my-2 px-4 py-2 rounded-xl duration-750 hover:scale-110">
                Photos
            </a>
            )}
        </div>
      </div>

      <EventsModal
        id={id}
        title={title}
        image={image}
        location={location}
        date={date}
        time={time}
        text={text}
      />
    </div>
  )
}
