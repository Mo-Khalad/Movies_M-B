import React from 'react'
import { Input , MainBtn , ErrorField } from '@/Shared/Components';
import { Link } from '@/Shared/libs';

import Style from '../authentication.module.css'
export const Login = () => {
  return (
    <div className={`${ Style.layer } w-full h-min-[100vh] relative flex justify-center items-center`}>
      <div className='absolute top-0 left-0 bottom-0 right-0 bg-black opacity-40'></div>

      <div className="backdrop-blur-lg flex flex-wrap justify-center items-center z-10 mt-15 px-10 py-5 rounded-md shadow-[0_0_4px_rgba(255,255,255,0.8)] w-[600px] h-8/10 bg-base-100/50">
        <h1 className='text-4xl lg:text-5xl text-main-color py-1 my-5'>welcome back</h1>
        <form className='size-full text-center'>
          <div className='relative mb-6'>
            <Input type='Email' placeholder='Email' className='w-full my-1'/>
            <ErrorField message={'Field is Required'}/>                    
          </div>

          <div className='relative mb-6'>
            <Input type='text' placeholder='password' className='w-full my-1'/>
            <ErrorField message={'Field is Required'}/>          
          </div>

          <div className='flex justify-between'>
               <label className='label text-sm text-gray-400 hover:text-gray-200 cursor-pointer transition-all duration-300'> 
                   <input type="checkbox" defaultChecked className="checkbox checkbox-sm rounded-md" />
                   Remember me 
               </label>
              <a className='text-sm text-gray-400 ms-2 hover:text-gray-200 hover:scale-102 cursor-pointer transition-all duration-300'> Forgot password? </a>
          </div>

          <MainBtn className='bg-main-color text-md w-88'>Sing In</MainBtn>

          <div className="divider">OR</div>
          
          <div className='grid gap-6 w-[50%] m-auto'>
              <button className="btn bg-[#064ca8] text-white border-[#005fd8] round-sm group">
                <svg className='group-hover:me-2 duration-200' aria-label="Facebook logo" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32"><path fill="white" d="M8 12h5V8c0-6 4-7 11-6v5c-4 0-5 0-5 3v2h5l-1 6h-4v12h-6V18H8z"></path></svg>
                Login with Facebook
              </button>

              <button className="group btn bg-white text-black border-[#e5e5e5] rounded-sm">
                <svg className='group-hover:me-2 duration-200'  aria-label="Google logo" width="25" height="25" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg> 
                Login with Google
              </button>
          </div>

          <p className='text-gray-400 text-sm p-3 mt-3 text-center'>
            Already an account? 
            <Link to={'/register'} className='text-blue-400 ms-2'>register</Link>
          </p> 
        </form>
      </div>
    </div>
  )
}
