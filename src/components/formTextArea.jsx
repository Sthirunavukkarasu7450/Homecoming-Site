export default function FormTextarea({ label, name, required }) {
  return (
    <div>
      <label className="block text-lg font-medium mb-1">{label}</label>
      <textarea
        name={name}
        rows={4}
        required={required}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 outline-none"
      />
    </div>
  )
}
