import { useState, useEffect } from "react";
import products from "../json/products.json";
import ProductCard from "./ProductCard";

export default function ProductGrid() {
  const perPage = 4;

  
  const pages = [];
  for (let i = 0; i < products.length; i += perPage) {
    pages.push(products.slice(i, i + perPage));
  }

  const sliderPages = [
    pages[pages.length - 1],
    ...pages,
    pages[0],
  ];

  const [index, setIndex] = useState(1);
  const [animate, setAnimate] = useState(true);

  const next = () => setIndex((i) => i + 1);
  const prev = () => setIndex((i) => i - 1);

  useEffect(() => {
    if (index === sliderPages.length - 1) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(1);
      }, 700);
    }

    if (index === 0) {
      setTimeout(() => {
        setAnimate(false);
        setIndex(sliderPages.length - 2);
      }, 700);
    }
  }, [index, sliderPages.length]);

  useEffect(() => {
    if (!animate) {
      requestAnimationFrame(() => setAnimate(true));
    }
  }, [animate]);

  return (
    <section className="max-w-[1400px] mx-auto px-6 py-20 relative overflow-hidden">
      <h2 className="flex justify-center items-center text-4xl font-semibold mb-12">Featured Products</h2>

      <div className="overflow-hidden">

        <div
          className={`flex ${
            animate ? "transition-transform duration-700 ease-in-out" : ""
          }`}
          style={{
            transform: `translateX(-${index * 100}%)`,
          }}
        >
          {sliderPages.map((page, i) => (
            <div key={i} className="min-w-full grid grid-cols-4 gap-8">
              {page.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          ))}
        </div>
      </div>

      <button
        onClick={prev}
        className="absolute top-1/2 left-0 text-4xl text-gray-400 hover:text-black"
      >
        ‹
      </button>

      <button
        onClick={next}
        className="absolute top-1/2 right-0 text-4xl text-gray-400 hover:text-black"
      >
        ›
      </button>
    </section>
  );
}