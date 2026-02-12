import Icons from "../constants/Icons";

export default function TopBar() {
  const { GrFacebookOption, FaTwitter, FaPinterestSquare, FaGooglePlusG, FaInstagram } = Icons;

  return (
    <div className="w-full bg-[#f5f5f5] text-gray-400 text-[13px]">
      <div className="mx-auto flex justify-between items-center px-6 py-2">
        
        <div className="flex gap-4">
          <GrFacebookOption size={16} />
          <FaTwitter size={16} />
          <FaPinterestSquare size={16} />
          <FaGooglePlusG size={16} />
          <FaInstagram size={16} />
        </div>

        <p className="text-center">
          Free shipping for standard order over $100
        </p>

        <div className="flex gap-6">
          <span>fashe@example.com</span>
          <span>USD</span>
        </div>
      </div>
    </div>
  );
}


