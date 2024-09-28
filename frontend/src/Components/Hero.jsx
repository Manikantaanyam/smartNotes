import React from "react";

const Hero = () => {
  return (
    <div className="h-[60vh] flex flex-col items-center justify-center">
      <h1 className="text-5xl font-bold pb-5">Take Smarter Notes with AI</h1>
      <p className="text-gray-600 text-xl max-w-[800px] text-center pb-5">
        smartNotes revolutionizes note-taking by integrating AI communication.
        Enhance your productivity and creativity with intelligent assistance.
      </p>
      <div className="flex gap-x-7">
        <button className="bg-black text-white px-5 py-2 rounded-md ">
          signup
        </button>
        <button className="bg-gray-200 text-black p-3 rounded-md ">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default Hero;
