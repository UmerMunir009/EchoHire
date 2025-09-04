import React from "react";
import { useAuth } from "./../customHooks/useAuth";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import YourInterviews from "../components/YourInterviews";

const HomePage = () => {
  // const { Logout } = useAuth();
  // const navigate = useNavigate();
  // const handleLogout =async () => {
  //   await Logout();
  //   navigate("/login");
  // };

  return (
    <div className="min-h-screen">
    <Navbar />
    <HeroSection/>
    <YourInterviews/>
    </div>
  );
};

export default HomePage;
