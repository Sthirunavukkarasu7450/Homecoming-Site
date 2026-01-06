import BioModal from "./bioModal"

export default function directorCard({ director }) {
  const { id, name, title, image, email, bio } = director

  return (
    <div className="card bg-base-100 shadow-pink-950 shadow-lg rounded-2xl mx-4 my-2 px-4 py-2 text-center">
      <figure className="flex justify-center">
        <div className="lg:w-96 lg:h-96 w-60 h-60 overflow-hidden">
            <img src={image} alt={name} className="rounded-2xl w-full h-full object-cover object-center" />
        </div>
      </figure>

      <div className="card-body py-4 font-light">
        <h2 className="card-title text-2xl font-stretch-semi-expanded">{name}</h2>
        <p className="text-lg text-pink-500">{title}</p>

        <div className="grid grid-cols-1 lg:grid-cols-2">
            <button className="col-span-1 btn btn-outline bg-pink-100 transition-all hover:bg-pink-950 hover:text-white mx-4 my-2 px-4 py-2 rounded-xl duration-750 hover:scale-110" onClick={() => document.getElementById(id).showModal()}>
                Bio 
            </button>
            <a href={`mailto:${email}`} className="col-span-1 btn btn-outline bg-pink-100 transition-all hover:bg-pink-950 hover:text-white mx-4 my-2 px-4 py-2 rounded-xl duration-750 hover:scale-110">Email</a>
        </div>
      </div>

      <BioModal
        id={id}
        name={name}
        bio={bio}
      />
    </div>
  )
}
