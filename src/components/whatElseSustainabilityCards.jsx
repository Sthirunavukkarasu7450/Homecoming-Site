export default function whatElseCard ({ title, text }) {
    return (
        <>
            <div className="rounded-2xl shadow-2xl bg-gray-100 col-span-1 p-4 m-4">
                <div className="font-semibold text-xl border-b-2 border-b-black"><span className="mx-4 my-2">{title}</span></div>
                <div className="text-xl py-2 px-4">{text}</div>
            </div>
        </>
    )
}