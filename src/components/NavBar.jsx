import Icons from "../constants/Icons";

export default function Navbar() {
    const { PiUserCircleLight, AiOutlineShopping } = Icons;
  
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex justify-between items-center px-6 py-6">
        <h1 className="text-4xl font-bold">
          Fashe<span className="text-red-500">.</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-[15px] text-gray-700">
          <a className="text-red-500">Home</a>
          <a>Shop</a>
          <a>Sale</a>
          <a>Features</a>
          <a>Blog</a>
          <a>About</a>
          <a>Contact</a>
        </nav>

        <div className="flex items-center gap-6 text-gray-500">
          <PiUserCircleLight size={30} />
          <AiOutlineShopping size={30} />
        </div>
      </div>
    </div>
  );
}
