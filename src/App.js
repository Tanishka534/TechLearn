import React from 'react';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';
import LoginSignUp from './components/LoginSignUp';
import HomeScreen from './components/HomeScreen';
import CourseDetails from './components/CourseDetails';

function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path='/' element={<LoginSignUp />} />
            <Route path='/home' element={<HomeScreen />} />
            <Route path='/home/coursedetails' element={<CourseDetails />} />
          </Routes>
        </div>
        {/* <Navbar /> */}
        {/* <LoginSignUp /> */}
        {/* <HomeScreen /> */}
        {/* <CourseDetails /> */}
      </Router>
  );
}

export default App;
