export default function ExecDirectorCard({ director }) {
  const { name, title, image, email, bio } = director

  return (
    <div className="mx-4 my-2 px-4 py-2 text-center">
      <figure className="flex flex-col items-center gap-4">
        <div className="lg:w-96 lg:h-96 w-60 h-60 overflow-hidden">
          <img
            src={image}
            alt={name}
            className="rounded-2xl w-full h-full object-cover object-center"
          />
        </div>

        <p className="text-lg font-light">{bio}</p>

        <a
          href={`mailto:${email}`}
          className="btn btn-outline bg-pink-100 transition-all hover:bg-pink-950 hover:text-white mx-4 my-2 px-8 py-3 rounded-xl duration-750 text-lg"
        >
          Email
        </a>
      </figure>
    </div>
  )
}
