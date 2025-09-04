import React, { useEffect } from "react";
import { Mic, Video, Repeat, X } from "lucide-react";
import axiosInstance from '../utils/axios'

const Agent = ({userName,type}) => {
    const messages=[
        "Hi,How are you?",
        "I'm fine.",
        "What do you want to learn today?",
        "I want to learn React.js ",
        "React is old now.Learn modern that is Next Js",
        "OK,then i will go for Next Js.I will go with mixture of Next js and little bit of Node as well"
    ]
    const lastMessage=messages[messages.length-1]

    useEffect(() => {
    const sendMessages = async () => {
      try {
        const res = await axiosInstance.post("/gemini/generate-questions", {
         paragraph: messages
        });
        console.log("Response from backend:", res.data);
      } catch (error) {
        console.error("Error sending messages:", error);
      }
    };

    sendMessages();
  }, [messages]);
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background text-foreground pb-10">
      <h1 className="font-bold text-xl sm:text-3xl">Interview Generation</h1>
      <div className="flex flex-col sm:flex-row gap-6 w-full max-w-4xl px-6 mt-6">
        <div className="flex-1 flex flex-col items-center justify-center bg-foreground/5 rounded-2xl py-10">
          <div className="relative">
            <span className="absolute inline-flex h-full w-full rounded-full bg-violet-500 opacity-75 animate-ping"></span>

            <div className="relative w-20 h-20 rounded-full flex items-center justify-center bg-gradient-to-r from-violet-500 to-violet-700 shadow-lg">
              <Mic className="w-12 h-12 text-white" />
            </div>
          </div>

          <p className="mt-4 text-lg font-medium">AI Interviewer</p>
        </div>

        <div className="flex-1 flex flex-col items-center justify-center bg-foreground/5 rounded-2xl py-10">
          <div className="w-28 h-28 rounded-full overflow-hidden shadow-lg">
            <img
              src="https://randomuser.me/api/portraits/men/32.jpg"
              alt="Adrian"
              className="w-full h-full object-cover"
            />
          </div>
          <p className="mt-4 text-lg font-medium">{userName} (You)</p>
        </div>
      </div>

      <div className="mt-8 w-full max-w-2xl text-center px-5">
        <p key={lastMessage} className="bg-foreground/5 py-3 px-4 rounded-xl text-sm">
         {lastMessage}
        </p>
      </div>

      <div className="flex gap-4 mt-8">
        <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-foreground/10 hover:bg-foreground/20 transition">
          <Repeat className="w-4 h-4" />
          Repeat
        </button>
        <button className="flex items-center text-xs gap-2 px-5 py-2 rounded-full bg-red-600 text-white hover:bg-red-700 transition">
          <X className="w-4 h-4" />
          Leave interview
        </button>
      </div>
    </div>
  );
};

export default Agent;
