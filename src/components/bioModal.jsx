export default function bioModal({ id, name, bio }) {
  return (
    <dialog id={id} className="modal mx-auto my-auto rounded-xl w-2/3">
      <div className="modal-box">
        <h3 className="font-semibold text-3xl border-b-4 border-b-black mx-4 my-2 p-4">{name}</h3>
        <p className="whitespace-pre-line mx-4 my-2 px-4 py-2 font-light">{bio}</p>
        <form method="dialog">
          <button className="btn bg-pink-200 text-black transition-all hover:bg-pink-950 hover:text-white duration-850 rounded-3xl mx-4 my-2 px-4 py-2">Close</button>
        </form>
      </div>
    </dialog>
  )
}
