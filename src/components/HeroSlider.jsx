import { useState } from "react";
import { Images } from "../constants/Images";

const slides = [
  {
    image: "carousel1",
    subtitle: "Women Collection 2026",
    title: "NEW ARRIVALS",
  },
  {
    image: "carousel2",
    subtitle: "Summer Fashion",
    title: "BIG SALE",
  },
  {
    image: "carousel3",
    subtitle: "Accessories",
    title: "TRENDING",
  },
];

export default function HeroSlider() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-[85vh] overflow-hidden">
      <img
        src={Images[slides[current].image]}
        className="w-full h-full object-cover transition-all duration-700"
        alt=""
      />

      <div className="absolute inset-0 bg-black/40" />

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center">
        <p className="text-lg mb-4 tracking-wide">
          {slides[current].subtitle}
        </p>
        <h1 className="text-6xl font-bold mb-8">
          {slides[current].title}
        </h1>
        <button className="bg-white text-black px-8 py-3 rounded-full font-semibold">
          SHOP NOW
        </button>
      </div>

      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-3 h-3 rounded-full ${
              current === index ? "bg-white" : "bg-white/50"
            }`}
          />
        ))}
      </div>

      <button
        onClick={prevSlide}
        className="absolute top-1/2 left-6 -translate-y-1/2 bg-white/50 p-3 rounded-full"
      >
        ‹
      </button>

      <button
        onClick={nextSlide}
        className="absolute top-1/2 right-6 -translate-y-1/2 bg-white/50 p-3 rounded-full"
      >
        ›
      </button>
    </div>
  );
}
