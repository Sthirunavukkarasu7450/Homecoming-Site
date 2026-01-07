import { Link } from "react-router-dom"
import directory from "../data/directors/directory"

export default function FormsAndAppsCard({ form }) {
  const { position, open, description, dueDate, dueTime, contact, link} = form

  const execDirector = directory.find(person => person.id === "exec_director")

  return (
    <div className="border border-gray-200 rounded-xl p-6 bg-white shadow-sm flex flex-col justify-between">

      <div>
        <h3 className="text-xl font-bold">
          {position}
          {!open && <span className="ml-2 text-sm font-medium text-red-600">(Closed)</span>}
        </h3>

        <p className="mt-4 text-sm text-gray-600">
          {description} {contact ==="yes" && (<>
          <span className="font-semibold">{execDirector.name}</span> at{" "}
          <a href={`mailto:${execDirector.email}`} className="text-pink-700 hover:underline">
            {execDirector.email}
          </a>
          .
          </>)}
        </p>

        <p className="mt-2 text-sm text-gray-500">
          Due Date: <span className="font-medium">{dueDate} {dueTime}</span>
        </p>
      </div>

      {open && (
        <Link to={form.link} className="mt-6 w-full px-4 py-2 bg-pink-700 text-white text-center rounded-lg hover:bg-pink-800 transition">
          Apply
        </Link>
      )}
    </div>
  )
}
