import { Images } from "../constants/Images";

export default function Categories() {
  return (
    <section className="py-20">
      <div className="w-[1200px] mx-auto h-[800px] flex gap-10">

        <div className="w-[365px] flex flex-col gap-10 h-full">

          <div className="relative overflow-hidden">
            <img
              src={Images.card1}
              alt="Dresses"
              className="w-full h-[450px] object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              className="
                absolute bottom-6 left-1/2 -translate-x-1/2
                bg-white/90 px-10 py-3
                text-gray-700
                transition-all duration-300
                hover:bg-[#e65540] hover:text-white
                cursor-pointer
              "
            >
              <h2 className="tracking-widest text-lg font-medium">
                DRESSES
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src={Images.card4}
              alt="Sunglasses"
              className="w-full h-[330px] object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              className="
                absolute bottom-6 left-1/2 -translate-x-1/2
                bg-white/90 px-10 py-3
                text-gray-700
                transition-all duration-300
                hover:bg-[#e65540] hover:text-white
                cursor-pointer
              "
            >
              <h2 className="tracking-widest text-lg font-medium">
                SUNGLASSES
              </h2>
            </div>
          </div>

        </div>

        <div className="w-[365px] flex flex-col gap-9 h-full">

          <div className="relative overflow-hidden">
            <img
              src={Images.card2}
              alt="Watches"
              className="w-full h-[330px] object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              className="
                absolute bottom-6 left-1/2 -translate-x-1/2
                bg-white/90 px-10 py-3
                text-gray-700
                transition-all duration-300
                hover:bg-[#e65540] hover:text-white
                cursor-pointer
              "
            >
              <h2 className="tracking-widest text-lg font-medium">
                WATCHES
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src={Images.card5}
              alt="Footwear"
              className="w-full h-[435px] object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              className="
                absolute bottom-6 left-1/2 -translate-x-1/2
                bg-white/90 px-10 py-3
                text-gray-700
                transition-all duration-300
                hover:bg-[#e65540] hover:text-white
                cursor-pointer
              "
            >
              <h2 className="tracking-widest text-lg font-medium">
                FOOTWEAR
              </h2>
            </div>
          </div>

        </div>

        <div className="w-[365px] flex flex-col gap-7 h-full">

          <div className="relative overflow-hidden">
            <img
              src={Images.card3}
              alt="Bags"
              className="w-full h-[450px] object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              className="
                absolute bottom-6 left-1/2 -translate-x-1/2
                bg-white/90 px-10 py-3
                text-gray-700
                transition-all duration-300
                hover:bg-[#e65540] hover:text-white
                cursor-pointer
              "
            >
              <h2 className="tracking-widest text-lg font-medium">
                BAGS
              </h2>
            </div>
          </div>

          <div className="relative overflow-hidden">
            <img
              src={Images.card6}
              alt="Accessories"
              className="w-full h-[330px] object-cover transition-transform duration-500 hover:scale-110"
            />
            <div
              className="
                absolute bottom-6 left-1/2 -translate-x-1/2
                bg-white/90 px-10 py-3
                text-gray-700
                transition-all duration-300
                hover:bg-[#e65540] hover:text-white
                cursor-pointer
              "
            >
              <h2 className="tracking-widest text-lg font-medium">
                ACCESSORIES
              </h2>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
