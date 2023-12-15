import React, { useState, useEffect } from 'react'
import {Link, useNavigate } from 'react-router-dom';
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, logInWithEmailAndPassword, logout, registerWithEmailAndPassword} from "../authentication/firebase";

import Hero from '../assets/image/Hero.png';

const LoginSignUp = () => {
  const [sign, setSign] = useState(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  useEffect(()=>{
    if(loading){
      //trigger loading screen
      return;
    }
    if(user) navigate("/home");
  }, [user, loading]);

  const handleSignIn = () =>{
    logInWithEmailAndPassword(email, password);
    console.log('Sign In Successful');
  }

  const handleSignUp = () =>{
    registerWithEmailAndPassword(firstName, lastName, email, password);
    console.log('Sign Up Successful');
  }

  return (
    <div className='mt-0 ml-0 bg-[#ffffff]'>
      <p className='text-[#215DFF] text-3xl font-bold ml-6 mt-6'>TechLearn.</p>
      <div className='max-w-[1400px] grid md:grid-cols-2 h-screen mx-auto md:items-center md:mt-0 mt-10'>
        <div className='w-[100%]'>
          {!sign ? <div className='w-[100%] flex flex-col'>
            <div className='w-[80%] mx-auto flex flex-col'>
              <p className='text-2xl font-bold text-[#215DFF] '>Sign In to TechLearn</p>
              <input 
                className='border-2 border-solid border-gray-300 focus:border-1 focus:border-solid focus:border-[#215DFF] h-12 pl-6 rounded-full w-full mt-4 mx-auto text-[16px]' 
                label='Email' 
                name="email"
                onChange={(e)=>setEmail(e.target.value)}  
                placeholder='Email Address' 
                required
                type="email"
                value={email}
              />
              <input  
                className='border-2 border-solid border-gray-300 focus:border-1 focus:border-solid focus:border-[#215DFF] h-12 pl-6 rounded-full w-full mt-4 mx-auto text-[16px]' 
                label='Password' 
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                placeholder='Password' 
                required minlength="8"
                type="password" 
                value={password}
              />
              <button className='mt-4 mx-auto w-full py-4 bg-[#215DFF] font-bold rounded-full text-white' onClick={handleSignIn}>Sign In</button>
              <p className='text-[16px] mx-auto flex mt-6 mb-6'>Do not have an account?<p className='text-[#215DFF] hover:underline' onClick={()=>setSign(true)}>Sign Up</p></p>
            </div> 
          </div>
          : 
          <div className='w-[100%] flex flex-col'>
            <div className='mx-auto w-[80%] flex flex-col'>
              <p className='text-2xl font-bold text-[#215DFF]'>Sign Up for TechLearn</p>
              <div className='justify-between grid grid-cols-2 gap-3 mt-4'> 
                <input 
                  className='border-2 border-solid border-gray-300 focus:border-1 focus:border-solid focus:border-[#215DFF] h-12 pl-6 rounded-full text-[16px]' 
                  placeholder='First Name' 
                  name="firstname"
                  onChange={(e)=>setFirstName(e.target.value)} 
                  required minlength="2"
                  type="text" 
                  value={firstName}
                />
                <input 
                  className='border-2 border-solid border-gray-300 focus:border-1 focus:border-solid focus:border-[#215DFF] h-12 pl-6 rounded-full text-[16px]' 
                  placeholder='Last Name' 
                  name="lastname" 
                  onChange={(e)=>setLastName(e.target.value)}
                  required minlength="2"
                  type="text" 
                  value={lastName}
                />
              </div>
              <input 
                className='border-2 border-solid border-gray-300 focus:border-1 focus:border-solid focus:border-[#215DFF] h-12 pl-6 rounded-full w-[100%] mt-4 mx-auto text-[16px]' 
                name="email" 
                onChange={(e)=>setEmail(e.target.value)}
                placeholder='Email Address' 
                required
                type="email" 
                value={email}
              />
              <input 
                className='border-2 border-solid border-gray-300 focus:border-1 focus:border-solid focus:border-[#215DFF] h-12 pl-6 rounded-full w-[100%] mt-4 mx-auto text-[16px]' 
                placeholder='Password' 
                name="password"
                onChange={(e)=>setPassword(e.target.value)}
                required minlength="8"
                type="password" 
                value={password}
              />
              <button className='mt-4 mx-auto w-[100%] font-bold py-4 bg-[#215DFF] rounded-full text-white' onClick={handleSignUp}>Sign Up</button>
              <p className='text-[16px] mx-auto flex mt-6 mb-6'>Already signed up?<p className='text-[#215DFF] hover:underline' onClick={()=>setSign(false)}>Sign In</p></p>
            </div>
          </div>
          }
        </div>

        <div className='md:my-auto md:px-0 px-10'>
          <img className='mx-auto' src={Hero} alt='Hero Image'/>
        </div>
      </div>
    </div>
  )
}

export default LoginSignUp;