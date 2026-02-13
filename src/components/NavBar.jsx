import { Link } from "react-router-dom";
import Icons from "../constants/Icons";

export default function Navbar() {
    const { PiUserCircleLight, AiOutlineShopping } = Icons;
  
  return (
    <div className="w-full bg-white">
      <div className="mx-auto flex justify-between items-center px-6 py-6">
        <h1 className="text-4xl font-bold">
          Fashe<span className="text-[#e65540]">.</span>
        </h1>

        <nav className="hidden md:flex gap-8 text-[15px] text-gray-700">
          <Link to="/" className="text-[#e65540]">Home</Link>
          <a>Shop</a>
          <a>Sale</a>
          <a>Features</a>
          <a>Blog</a>
          <a>About</a>
          <Link to="/contact">Contact</Link>
        </nav>

        <div className="flex items-center gap-6 text-gray-500">
          <Link to="/account">
            <PiUserCircleLight size={30} />
          </Link>
          <AiOutlineShopping size={30} />
        </div>
      </div>
    </div>
  );
}
