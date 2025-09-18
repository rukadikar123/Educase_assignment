import React from "react";
import { useNavigate } from "react-router-dom";

function Homepage() {

  let navigate=useNavigate()
  return (
    <>
      <div className="flex flex-col gap-[29px]  pt-[549px] pl-[20px]">
        <div className="flex flex-col gap-[10px] ">
            <h1 className=" text-[28px] h-[33px] w-[231px] text-[#1D2226] font-rubik font-medium">Welcome to PopX</h1>
            <p className=" font-rubik font-normal h-[48px] w-[232px] text-[#1D2226] opacity-65">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        </div>
        <div className="flex flex-col gap-[10px] w-[335px] ">
          <button onClick={()=>navigate("/signup")} className="h-[46px] cursor-pointer  bg-[#6C25FF] rounded-[6px] text-white text-[16px] font-medium">Create Account</button>
          <button onClick={()=>navigate("/login")} className="h-[46px] cursor-pointer   bg-[#6C25FF4B] rounded-[6px] text-[#1D2226] font-rubik text-[16px] font-medium">Already Registered?Login</button>
        </div>
      </div>
    </>
  );
}

export default Homepage;
