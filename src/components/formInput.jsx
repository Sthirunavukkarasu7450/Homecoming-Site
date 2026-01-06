export default function FormInput({ label, name, type = "text", required }) {
  return (
    <div>
      <label className="block font-medium mb-1 text-lg">{label}</label>
      <input
        name={name}
        type={type}
        required={required}
        className="w-full border rounded-lg px-3 py-2 focus:ring-2 focus:ring-pink-500 outline-none"
      />
    </div>
  )
}
