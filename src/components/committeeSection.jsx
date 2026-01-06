import { useState } from "react"
import CaptainModal from "./captainModal"

export default function CommitteeSection({ committee, index, captains }) {
  const [open, setOpen] = useState(false)

  const isReversed = index % 2 !== 0
  const isEven = index % 2 === 0

  return (
    <>
      <section
        className={`w-full py-20 px-6 ${
          isEven ? "bg-gray-50" : "bg-pink-50"
        }`}
      >
        <div className="mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div
              className={
                isReversed ? "md:order-2 order-1" : "md:order-1 order-1"
              }
            >
              <h2 className="text-6xl font-bold mb-10 text-center text-pink-800 py-3 border-b-4 border-black">
                {committee.name}
              </h2>
              <p className="text-lg text-gray-700 mb-6 lg:text-left text-center">
                {committee.description} 
                <span className="font-bold">{committee.color}</span>.
              </p>

              <button
                onClick={() => setOpen(true)}
                className="px-6 py-3 bg-pink-700 text-white rounded-lg hover:bg-pink-800 transition
                transform duration-300 ease-out hover:scale-105"
              >
                View Captain Positions
              </button>
            </div>
            <div
              className={
                isReversed ? "md:order-1 order-2" : "md:order-2 order-2"
              }
            >
              <img
                src={committee.image}
                alt={committee.name}
                className="w-full h-full object-cover rounded-2xl shadow-md"
              />
            </div>

          </div>
        </div>
      </section>
      <CaptainModal
        open={open}
        onClose={() => setOpen(false)}
        committeeName={committee.name}
        captains={captains}
      />
    </>
  )
}
