export default function PillarsCard ({ image, title, text }) {
    return (
        <>
            <div className="shadow-2xl bg-gray-100 text-black m-8 rounded-3xl">
                <div className="font-semibold text-2xl px-6 py-4 mx-2 flex items-center gap-2 w-full">
                    <img src={image} alt="" className="w-8 h-8 object-contain"/>
                    <span className="border-b-2 border-b-black">{title}</span>
                </div>

                <div className="text-lg px-6 pb-4 pt-1">
                    {text}
                </div>
            </div>
        </>
    )
}