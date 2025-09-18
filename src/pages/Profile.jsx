import React from "react";
import { FaCamera } from "react-icons/fa";

function Profile() {
  return (
    <>
      <div className="h-[68px] font-rubik pt-[27px] pl-[15px] bg-[#FFFFFF] shadow-sm ">
        <h1 className="text-[18px] h-[22px] text-[#1D2226] capitalize font-medium">
          Account Settings
        </h1>
      </div>
      <div className="flex flex-col gap-4 border-b-2 border-dotted pb-4 border-gray-300">
        <div className="flex gap-2 mt-[30px]">
          <div className="h-[76px] w-[76px] relative  rounded-full overflow-hidden ">
            <img
              src="https://static.vecteezy.com/system/resources/thumbnails/002/002/403/small/man-with-beard-avatar-character-isolated-icon-free-vector.jpg"
              alt="Profile image"
            />
            <div className=" absolute rounded-full p-1 bg-[#6C25FF] z-50 top-10 cursor-pointer left-14">
              <FaCamera size={10} className=" text-white " />
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <h4 className="text-[15px] w-[73px] h-[18px] font-medium text-[#1D2226]">
              Marry Doe
            </h4>
            <p className="h-[17px] w-[118px] text-[14px]">Marry@Gmail.Com</p>
          </div>
        </div>
        <p className="w-[337px] text-left  h-[63px] text-[13px] font-semibold text-black/70 pl-[20px]">
          Lorem Ipsum Dolor Sit Amet, Consetetur Sadipscing Elitr, Sed Diam
          Nonumy Eirmod Tempor Invidunt Ut Labore Et Dolore Magna Aliquyam Erat,
          Sed Diam
        </p>
      </div>
      <div className="border-gray-300 border-b-2 border-dotted mt-[500px] w-full "></div>
    </>
  );
}

export default Profile;
