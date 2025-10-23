import React from "react";
import { CgMenuLeft } from "react-icons/cg";
import { FaRegUser } from "react-icons/fa";
import { CiShoppingCart } from "react-icons/ci";
import { CiHeart } from "react-icons/ci";
export const Nav = () => {
  return (
    <div className="w-[auto] flex items-center justify-between px-10  h-14 bg-[#000000]">
      <div className="text-white">
        
        <span className="text-[20px] mr-8">乃匚</span> ｂｌｏｏｍ X ｃａｒｔ
      </div>
            <input
        type="text"
        placeholder="Search anything here..."
        className="w-80 px-4 py-2 mr-100 rounded-sm bg-gray-100 text-black focus:outline-none"
      />

      <div className="w-30 text-white flex   items-center justify-between   ">
        <FaRegUser className="w-[20px] h-[20px]" />
      <CiHeart className="w-[30px] h-[30px]"  />

       <div className="flex  text-xl"> <CiShoppingCart className="w-[30px] h-[30px]" />0
</div>
       

      </div>
    </div>
  );
};
