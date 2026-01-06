export default function FileUpload({ label, name, required }) {
  return (
    <div>
      <label className="block text-lg font-medium mb-1">{label}</label>
      <input
        type="file"
        name={name}
        required={required}
        className="w-full border rounded-lg px-3 py-2"
      />
    </div>
  )
}
