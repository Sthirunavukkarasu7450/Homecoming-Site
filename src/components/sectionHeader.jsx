export default function SectionHeader({ title }) {
  return (
    <div className="border-b border-pink-500 pb-2">
      <h2 className="text-3xl font-bold text-gray-900">
        {title}
      </h2>
    </div>
  )
}
