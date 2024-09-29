import React from "react";

const Works = () => {
  return (
    <div className=" mt-10 mb-10">
      <h1 className="text-3xl font-bold text-center">How it Works</h1>
      <div className="flex flex-col justify-center items-center md:flex-row">
        <WorksCard
          no={1}
          title={"Start Taking Notes"}
          description={
            "Begin writing your thoughts, ideas, or study notes in smartNotes."
          }
        />
        <WorksCard
          no={2}
          title={"Engage with AI"}
          description={
            "Ask questions, request clarifications, or seek suggestions from our AI assistant."
          }
        />
        <WorksCard
          no={3}
          title={"Enhance Your Notes"}
          description={
            "Incorporate AI-generated insights and suggestions to improve your notes."
          }
        />
      </div>
    </div>
  );
};

const WorksCard = ({ no, title, description }) => {
  return (
    <div className="w-[33%] flex flex-col justify-center items-center gap-y-2 mt-12 ">
      <button className="rounded-full bg-black w-12 h-12 text-white font-bold">
        {no}
      </button>
      <h2 className="text-lg font-semibold min-w-[300px] text-center md:text-xl">
        {title}
      </h2>
      <p className="text-gray-500 min-w-[300px] md:min-w-[100px] text-center">
        {description}
      </p>
    </div>
  );
};

export default Works;
