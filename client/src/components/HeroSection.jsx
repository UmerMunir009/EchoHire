import React from "react";

const HeroSection = () => {
  return (
<section className="max-w-[90%] mx-auto bg-[var(--color-herobg)] rounded-2xl mt-6 p-6 lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ">
      <div className="space-y-3">
        <h1 className="text-xl sm:text-4xl font-extrabold leading-tight text-[var(--color-foreground)]">
          Real-Time AI <br /> Voice Interview Platform
        </h1>
        <p className="text-xs lg:text-lg text-muted-foreground leading-relaxed max-w-lg">
          Practice for your next big opportunity with real-time AI interviews.
          Get instant feedback and improve your communication skills in a
          realistic environment.
        </p>
        <button className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold px-6 py-3 w-full sm:w-[50%] rounded-xl shadow-lg hover:opacity-90 transition">
          Start an Interview
        </button>
      </div>

      <div className="flex justify-center lg:justify-end">
        <img
          src="/robot.png"
          alt="Interview Illustration"
          className="w-[50%] lg:w-full max-w-md lg:max-w-lg object-contain"
        />
      </div>
    </section>
  );
};

export default HeroSection;
