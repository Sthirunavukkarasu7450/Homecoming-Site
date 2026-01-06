export default function DirectoryTable({ people }) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-pink-600 text-white">
            <th className="text-left px-4 py-3">Name</th>
            <th className="text-left px-4 py-3">Title</th>
            <th className="text-left px-4 py-3">Email</th>
          </tr>
        </thead>

        <tbody>
          {people.map((person) => (
            <tr
              key={person.id}
              className="border-b hover:bg-pink-50 transition"
            >
              <td className="px-4 py-3 font-light">{person.name}</td>
              <td className="px-4 py-3 font-extralight">{person.title}</td>
              <td className="px-4 py-3 font-extralight">
                <a href={`mailto:${person.email}`} className="text-pink-600 transition-all duration-600 hover:text-black hover:underline">
                  {person.email}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
