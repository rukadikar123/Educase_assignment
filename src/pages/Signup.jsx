import React from "react";
import { useNavigate } from "react-router-dom";

function Signup() {
  let navigate=useNavigate()

  return (
    <>
      <form /*onSubmit={()=>navigate('/profile')}*/ className="ml-[20px] h-[812px] mt-[40px] flex flex-col gap-[7px] font-rubik font-medium">
        <h1 className="text-[28px]  h-[69px] w-[188px] text-[#1D2226] text-left">
          Create your PopX account
        </h1>
        <div className="mt-4">
          <div className="w-[335px] h-[49] flex flex-col">
            <label className="relative w-fit top-[9px] text-[13px] left-[17px] text-[#6C25FF] bg-white/80">
              Full Name<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter Full Name"
              className="h-[40px] border outline-none border-[#CBCBCB] rounded-[6px] text-sm  pl-[17px]"
            />
          </div>
          <div className="w-[335px] h-[49] flex flex-col">
            <label className="relative w-fit top-[9px] text-[13px] left-[17px] text-[#6C25FF] bg-white/80">
              Phone Number<span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              required
              placeholder="Enter Phone Number"
              className="h-[40px] border outline-none border-[#CBCBCB] rounded-[6px] text-sm  pl-[17px]"
            />
          </div>
          <div className="w-[335px] h-[49] flex flex-col">
            <label className="relative w-fit top-[9px] text-[13px] left-[17px] text-[#6C25FF] bg-white/80">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="Enter Email"
              className="h-[40px] border outline-none border-[#CBCBCB] rounded-[6px] text-sm  pl-[17px]"
            />
          </div>
          <div className="w-[335px] h-[49] flex flex-col">
            <label className="relative w-fit top-[9px] text-[13px] left-[17px] text-[#6C25FF] bg-white/80">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              placeholder="Enter Password"
              className="h-[40px] border outline-none border-[#CBCBCB] rounded-[6px] text-sm  pl-[17px]"
            />
          </div>
          <div className="w-[335px] h-[49] flex flex-col">
            <label className="relative w-fit top-[9px] text-[13px] left-[17px] text-[#6C25FF] bg-white/80 ">
              Company Name
            </label>
            <input
              type="text"
              required
              placeholder="Enter FCompany Name"
              className="h-[40px] border outline-none border-[#CBCBCB] rounded-[6px] text-sm  pl-[17px]"
            />
          </div>
        </div>
        <div className="w-[132px] h-[47px] mt-2">
          <p className="text-[14px] text-[#1D2226]">
            Are you an Agency?<span className="text-red-500">*</span>
          </p>
          <div className="flex items-center gap-2">
            <label className="flex items-center gap-1 text-[14px]">
              <input type="radio" value="yes" required />
              Yes
            </label>
            <label className="flex items-center gap-1 text-[14px]">
              <input type="radio" value="no" />
              No
            </label>
          </div>
        </div>
        <button
          onClick={() => navigate("/profile")}
          className="h-[46px] w-[335px] mt-[230px] cursor-pointer  bg-[#6C25FF] rounded-[6px] text-white text-[16px] font-medium"
        >
          Create Account
        </button>
      </form>
      
    </>
  );
}

export default Signup;
