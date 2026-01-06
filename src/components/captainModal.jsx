import { useEffect } from "react"

export default function CaptainModal({
  open,
  onClose,
  committeeName,
  captains,
}) {
  if (!open) return null

    useEffect(() => {
    if (!open) return

    const handleEsc = (e) => {
      if (e.key === "Escape") {
        onClose()
      }
    }
    window.addEventListener("keydown", handleEsc)
    return () => window.removeEventListener("keydown", handleEsc)
    }, [open, onClose])

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 px-4">
      <div className="bg-white max-w-3xl w-full rounded-2xl shadow-lg max-h-[90vh] overflow-hidden">
        <div className="sticky top-0 z-10 bg-white border-b px-6 py-4 flex items-center justify-between">
            <h2 className="text-2xl font-bold">
            {committeeName} Captain Positions
            </h2>
            <button
                onClick={onClose}
                className="text-2xl text-gray-500 hover:text-gray-800 leading-none"
                aria-label="Close modal"
                >
                ✕
            </button>
        </div>

        <div className="px-6 py-6 overflow-y-auto max-h-[calc(90vh-120px)]">
            <div className="space-y-6">
            {Array.isArray(captains) ? (
                captains.map((captain) => (
                <div key={captain.id}>
                    <h3 className="font-bold text-lg">
                    {captain.title}{" "}
                    <span className="font-normal text-gray-600">
                        ({captain.quantity})
                    </span>
                    </h3>
                    <p className="mt-1 text-gray-700 whitespace-pre-line">
                    {captain.description}
                    </p>
                </div>
                ))
            ) : (
                <p className="text-gray-700">{captains}</p>
            )}
            </div>
        </div>
      </div>
    </div>
  )
}
