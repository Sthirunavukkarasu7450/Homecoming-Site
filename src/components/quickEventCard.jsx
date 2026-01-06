export default function QuickEventCard({ id, title, date, icon: Icon }) {
  return (
    <div className="bg-gray-300 shadow-2xl rounded-3xl m-2 p-4">
        <Icon className="h-6 w-6 mx-4 mt-4 fill-pink-700" />
        <div className="text-pink-700 font-semibold text-2xl pt-2 pb-1 px-2">
            {title}
        </div>
        <div className="text-black text-xl px-2 pt-1 pb-4">
            {date}
        </div>
    </div>
  );
}