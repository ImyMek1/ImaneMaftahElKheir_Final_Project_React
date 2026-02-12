import { Images } from "../constants/Images";

export default function ProductCard({ product }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative overflow-hidden bg-gray-100">

        <img
          src={Images[product.image]}
          className="w-full h-[360px] object-cover group-hover:opacity-70 transition"
          alt={product.name}
        />

        <button
          className="
            absolute bottom-[-70px] left-1/2 -translate-x-1/2
            bg-black text-white px-5 py-3 rounded-full transition-all duration-300 hover:bg-red-500 group-hover:bottom-3
          "
        >
          ADD TO CART
        </button>
      </div>

      <div className="mt-4 text-left">
        <h3 className="text-gray-500">{product.name}</h3>
        <p className="text-gray-500 font-semibold">${product.price}.00</p>
      </div>
    </div>
  );
}
