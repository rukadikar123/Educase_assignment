import React from 'react'
import { useNavigate } from 'react-router-dom'

function Login() {
  let navigate=useNavigate()

  return (
    <>
      <div className='flex flex-col gap-[14px] mt-[14px] pl-[20px] font-rubik text-left'>
          <h1 className='h-[69px] w-[188px] text-[28px] font-medium text-[#1D2226]'>Signin to your PopX account</h1>
          <p className='h-[48px] w-[232px] text-[#1D2226] opacity-60 text-[17px] leading-[26px]'>Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
      </div>
      <form /*onSubmit={()=>navigate('/profile')}*/ className='flex flex-col gap-[14px] mt-4 font-rubik px-[20px]' >
               <div className="w-[335px] h-[49] flex flex-col ">
            <label className="relative w-fit top-[9px] text-[13px] left-[17px] text-[#6C25FF] bg-white/80">
              Email<span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              required
              placeholder="Enter Email"
              className="h-[40px] border-[1.5px] outline-none border-[#CBCBCB] rounded-[6px] text-sm  pl-[17px]"
            />
          </div>
          <div className="w-[335px] h-[49] flex flex-col ">
            <label className="relative w-fit top-[9px] text-[13px] left-[17px] text-[#6C25FF] bg-white/80">
              Password<span className="text-red-500">*</span>
            </label>
            <input
              type="password"
              required
              placeholder="Enter Password"
              className="h-[40px] border-[1.5px] outline-none border-[#CBCBCB] rounded-[6px] text-sm  pl-[17px]"
            />
          </div>
          <button onClick={()=>navigate('/profile')} className='w-[335px] h-[46px] bg-[#CBCBCB] rounded-[6px] cursor-pointer text-white font-medium text-[16px]'> 
              Login
          </button>
      </form>
    </>
  )
}

export default Login