import React from 'react'
import Agent from '../components/Agent';
import Navbar from '../components/Navbar';

const InterviewCreationPage = () => {
  return (
    <div className="min-h-screen">
    <Navbar />
    <Agent userName={"Umer"} type={"generating"}/>
    </div>
  );
}

export default InterviewCreationPage
