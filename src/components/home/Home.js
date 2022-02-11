import React from 'react';
import HomeHeading from '../homeheading/HomeHeading';
import './Home.css';
import Posts from '../posts/Posts';
import Sidebar from '../sidebar/Sidebar';

export default function Home() {
  return (
    <>
    <HomeHeading />
    <div className='home'>
      
     
      <Posts />
      <Sidebar />
      
      </div>
    </>
    
  )
}
