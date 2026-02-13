import { Images } from "../../constants/Images";

export default function ProductsCard({ product }) {
  return (
    <div className="group relative overflow-hidden">
      
      <img
        src={Images[product.image]}
        className="w-full h-[420px] object-cover"
        alt={product.name}
      />

      <div className="absolute inset-0 bg-gray-200/60 opacity-0 group-hover:opacity-100 transition" />

      <button className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 bg-black text-white px-6 py-2 text-sm opacity-0 group-hover:opacity-100 group-hover:bottom-6 transition-all">
        ADD TO CART
      </button>

      <div className="mt-4 text-center">
        <h3 className="text-sm">{product.name}</h3>
        <p className="mt-1">${product.price}.00</p>
      </div>

    </div>
  );
}
