export default function QuickLinkCard({ img, text }) {
  return (
    <div className="rounded-xl text-center overflow-hidden shadow-2xl 
    transform transition-transform duration-300 ease-out hover:scale-105">
      <div
        className="relative flex items-center justify-center h-48 bg-cover bg-center"
        style={{ backgroundImage: `url(${img})` }}>
        <div className="absolute inset-0 bg-black/60"></div>
        <div className="relative text-white font-semibold text-xl">
          {text}
        </div>
      </div>
    </div>
  );
}