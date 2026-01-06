export default function Hero({ title, backgroundImage, height = "full" }) {
    const heightClass =
    height === "short"
      ? "h-[33vh]"
      : "min-h-[calc(100vh-64px)]"
  return (
    <div className={`${heightClass} bg-cover bg-center bg-no-repeat bg-fixed relative flex items-center justify-center`}
      style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="absolute inset-0 bg-black/60" />
      <div className="relative text-center my-auto z-20">
        <h1 className="lg:text-9xl text-5xl font-bold text-white">{title}</h1>
      </div>
    </div>

  )
}
