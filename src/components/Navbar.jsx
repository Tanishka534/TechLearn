import React, { useEffect, useState } from 'react';
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth, db, logout } from "../authentication/firebase";
import { query, collection, getDocs, where } from "firebase/firestore";

import User from '../assets/image/user.png';

const Navbar = () => {
  const [userImage, setUserImage] = useState(false);
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();

  const fetchUserName = async () => {
    try {
      const q = query(collection(db, "users"), where("uid", "==", user?.uid));
      const doc = await getDocs(q);
      const data = doc.docs[0].data();
      // setName(data.name);
      console.log(data.firstName)
    } catch (err) {
      console.error(err);
      alert("An error occured while fetching user data");
    }
  };

  useEffect(() => {
    if (loading) return;
    if (!user) return navigate("/");
    fetchUserName();
  }, [user, loading]);
  
  return (
    <div className='bg-white'>
        <div className='max-w-[1300px] lg:mx-auto mx-4 flex justify-between'>
            <p className='text-[#215DFF] md:text-3xl text-2xl font-bold my-auto py-4 cursor-pointer' onClick={()=>navigate("/home")}>TechLearn.</p>
            <ul className='flex my-auto gap-4'>
                <li className='my-auto cursor-pointer' onClick={()=>navigate("/home")}>Home</li>
                <img className='w-10 my-auto cursor-pointer' src={User} alt='Profile image' onClick={()=>logout()}/>
                {/* <button>Logout</button> */}
            </ul>
        </div>
    </div>
  )
}

export default Navbar