import { useEffect, useRef, useState } from "react";

export default function Carousel({
  items, // [{ id, image, link }]
  arrowClassLeft = "",
  arrowClassRight = "",
  dotClass = "",
  activeDotClass = "",
  autoPlayInterval = 3000,
}) {
  const [slidesPerView, setSlidesPerView] = useState(8);
  const [index, setIndex] = useState(slidesPerView);
  const trackRef = useRef(null);
  const startX = useRef(0);
  const isDragging = useRef(false);
  const autoPlayRef = useRef(null);

  /* ---------------- responsive ---------------- */
  useEffect(() => {
    const updateSlides = () => {
      const w = window.innerWidth;
      if (w < 640) setSlidesPerView(1);
      else if (w < 1024) setSlidesPerView(3);
      else setSlidesPerView(7);
    };

    updateSlides();
    window.addEventListener("resize", updateSlides);
    return () => window.removeEventListener("resize", updateSlides);
  }, []);

  /* ---------------- clone slides (infinite) ---------------- */
  const extendedItems = [
    ...items.slice(-slidesPerView),
    ...items,
    ...items.slice(0, slidesPerView),
  ];

  /* ---------------- navigation ---------------- */
  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  /* ---------------- loop correction ---------------- */
  useEffect(() => {
    if (!trackRef.current) return;

    const handleTransitionEnd = () => {
      if (index >= items.length + slidesPerView) {
        trackRef.current.style.transition = "none";
        setIndex(slidesPerView);
        requestAnimationFrame(() => {
          trackRef.current.style.transition = "transform 300ms ease-out";
        });
      }

      if (index <= slidesPerView - 1) {
        trackRef.current.style.transition = "none";
        setIndex(items.length + slidesPerView - 1);
        requestAnimationFrame(() => {
          trackRef.current.style.transition = "transform 300ms ease-out";
        });
      }
    };

    trackRef.current.addEventListener(
      "transitionend",
      handleTransitionEnd
    );
    return () =>
      trackRef.current?.removeEventListener(
        "transitionend",
        handleTransitionEnd
      );
  }, [index, items.length, slidesPerView]);

  /* ---------------- autoplay ---------------- */
  const startAutoplay = () => {
    stopAutoplay();
    autoPlayRef.current = setInterval(next, autoPlayInterval);
  };

  const stopAutoplay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
  };

  useEffect(() => {
    startAutoplay();
    return stopAutoplay;
  }, [slidesPerView]);

  /* ---------------- swipe ---------------- */
  const onPointerDown = (e) => {
    stopAutoplay();
    isDragging.current = true;
    startX.current = e.clientX;
  };

  const onPointerUp = (e) => {
    if (!isDragging.current) return;

    const delta = e.clientX - startX.current;
    if (delta > 50) prev();
    if (delta < -50) next();

    isDragging.current = false;
    startAutoplay();
  };

  /* ---------------- active center index ---------------- */
  const realIndex =
    ((index - slidesPerView) % items.length + items.length) %
    items.length;

  return (
    <div
      className="relative w-full overflow-hidden"
      onMouseEnter={stopAutoplay}
      onMouseLeave={startAutoplay}
    >
      {/* Left Arrow */}
      <button
        onClick={prev}
        className={`absolute left-0 top-1/2 z-10 -translate-y-1/2 ${arrowClassLeft}`}
      >
        ‹
      </button>

      {/* Right Arrow */}
      <button
        onClick={next}
        className={`absolute right-0 top-1/2 z-10 -translate-y-1/2 ${arrowClassRight}`}
      >
        ›
      </button>

      {/* Track */}
      <div
        ref={trackRef}
        className="flex transition-transform duration-300 ease-out touch-pan-x my-10"
        style={{
          transform: `translateX(-${(100 / slidesPerView) * index}%)`,
        }}
        onPointerDown={onPointerDown}
        onPointerUp={onPointerUp}
        onPointerLeave={onPointerUp}
      >
        {extendedItems.map((sponsor, i) => {
          const isActive = i === index + Math.floor(slidesPerView / 2);

          return (
            <a
              key={`${sponsor.id}-${i}`}
              href={sponsor.link}
              target="_blank"
              rel="noopener noreferrer"
              className="shrink-0 flex items-center justify-center px-4 
              transform transition-transform duration-300 ease-out hover:scale-105"
              style={{ width: `${100 / slidesPerView}%` }}
            >
              <img
                src={sponsor.image}
                alt={sponsor.id}
                className={`max-h-24 object-contain transition-all duration-300 ${
                  isActive
                    ? "scale-110 opacity-100"
                    : "scale-95 opacity-70"
                }`}
              />
            </a>
          );
        })}
      </div>

      {/* Dots */}
      <div className=" flex justify-center gap-2 mt-6 mb-4">
        {items.map((_, i) => (
          <span
            key={i}
            className={`h-2 w-2 rounded-full transition ${
              i === realIndex ? activeDotClass : dotClass
            }`}
          />
        ))}
      </div>
    </div>
  );
}
