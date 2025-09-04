import React from "react";
import { dummyInterviews,interviewCovers } from "../constants";
import { Calendar, Star } from "lucide-react"; // icon lib, can use heroicons too

const YourInterviews = () => {
  return (
    <div className="p-6 bg-[var(--color-background)] text-[var(--color-foreground)] min-h-screen">
      <h2 className="text-2xl font-bold mb-6">Your Interviews</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {dummyInterviews.map((interview) => (
          <div
            key={interview.id}
            className="relative rounded-2xl shadow-lg p-5 bg-[var(--color-herobg)] border border-[var(--color-border)] hover:shadow-xl transition flex flex-col"
          >
            <span className="absolute top-3 right-3 bg-purple-600 text-white text-xs font-semibold px-3 py-1 rounded-full">
              {interview.type}
            </span>

            <div className="flex justify-center mb-4">
              <div className="w-14 h-14 rounded-full bg-blue-500 flex items-center justify-center">
                {/* to do: Make it dynamic */}
                <span className="text-white font-bold text-xl">
                  {interview.role.charAt(0)}
                </span>
              </div>
            </div>

            <h3 className="text-lg font-semibold text-center mb-2">
              {interview.role} Interview
            </h3>

            <div className="flex items-center justify-center gap-4 mb-3 text-sm opacity-80">
              <div className="flex items-center gap-1">
                <Calendar size={16} />{" "}
                {new Date(interview.createdAt).toLocaleDateString("en-US", {
                  month: "short",
                  day: "numeric",
                  year: "numeric",
                })}
              </div>
              <div className="flex items-center gap-1">
                {/* replace with actual score */}
                <Star size={16} /> ---/100
              </div>
            </div>

            <p className="text-sm text-center mb-4 opacity-90">
              You haven’t taken the interview yet. Take it now to improve your
              skills.
            </p>

            <div className="mt-auto flex justify-between items-center text-sm">
              <button className="px-4 py-2 bg-purple-600 text-white text-sm w-full font-medium rounded-lg hover:bg-purple-700 transition">
                View Interview
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default YourInterviews;
