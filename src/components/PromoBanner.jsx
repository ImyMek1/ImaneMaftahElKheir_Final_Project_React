import { Images } from "../constants/Images";

export default function PromoBanner() {
  return (
    <section className="py-20">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">

          <div className="relative h-[500px] overflow-hidden group">
            <img
              src={Images.bgVideo}
              alt="Lookbook"
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />

            <div className="absolute inset-0 flex flex-col justify-center items-center text-white bg-black/10">
              <p className="text-lg tracking-widest mb-2">
                The Beauty
              </p>

              <h2 className="text-6xl font-bold tracking-widest mb-4">
                LOOKBOOK
              </h2>

              <span className="text-sm tracking-widest border-white pb-1 cursor-pointer">
                VIEW COLLECTION
              </span>
            </div>
          </div>

          <div className="bg-white h-[400px] flex flex-col justify-center items-center px-10">
            <img
              src={Images.shop}
              alt="Product"
              className="w-[420px] object-contain transition-transform duration-500 hover:scale-105"
            />

            <h3 className="text-gray-700 text-lg mb-2 text-center">
              Boxy2 T-Shirt with Roll Sleeve
            </h3>

            <p className="text-xl font-medium mb-8">$20.00</p>

            <div className="flex gap-4">
              <div className="border px-4 py-3 text-center text-sm text-gray-500">
                -2600 <br /> days
              </div>
              <div className="border px-4 py-3 text-center text-sm text-gray-500">
                -17 <br /> hrs
              </div>
              <div className="border px-4 py-3 text-center text-sm text-gray-500">
                -60 <br /> mins
              </div>
              <div className="border px-4 py-3 text-center text-sm text-gray-500">
                -55 <br /> secs
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
