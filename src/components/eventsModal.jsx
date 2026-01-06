export default function EventsModal({ id, title, image, location, date, time, text }) {
  return (
    <dialog id={id} className="modal mx-auto my-auto rounded-lg w-3/4">
      <div className="modal-box">
        <h3 className="font-bold text-pink-700 text-3xl border-b-4 border-b-black mx-4 my-2 p-4">
          {title}
        </h3>

        <div className="mx-4 my-2 px-4 py-2 space-y-4 font-light text-lg leading-relaxed">
            {Array.isArray(text) ? (
                text.map((block, i) => (
                <p key={i}>
                    {block.content.map((part, j) => (
                    <span
                        key={j}
                        className={part.bold ? "font-semibold text-black" : ""}
                    >
                        {part.text}
                    </span>
                    ))}
                </p>
                ))
            ) : (
                <p>{text}</p>
            )}
        </div>

        <form method="dialog">
          <button className="btn bg-pink-200 text-black transition-all hover:bg-pink-950 hover:text-white duration-850 rounded-3xl mx-4 my-2 px-4 py-2">
            Close
          </button>
        </form>
      </div>
    </dialog>
  )
}
