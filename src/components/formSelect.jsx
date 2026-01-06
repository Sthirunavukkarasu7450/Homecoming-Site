const committees = [
  "Alumni Relations",
  "Competition",
  "Court Relations",
  "Event Logistics",
  "Finance",
  "Internal Development",
  "Merchandise",
  "OPPerations",
  "Parade",
  "Public Relations",
  "Technology",
  "University Relations",
]

export default function FormSelect({ label, name, required }) {
  return (
    <div>
      <label className="block text-lg font-medium mb-1">{label}</label>
      <select
        name={name}
        required={required}
        className="w-full border rounded-lg px-3 py-2"
      >
        <option value="">Select a committee</option>
        {committees.map((c) => (
          <option key={c} value={c}>{c}</option>
        ))}
      </select>
    </div>
  )
}
