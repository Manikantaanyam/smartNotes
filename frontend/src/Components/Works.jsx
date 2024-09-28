import React from "react";

const Works = () => {
  return (
    <div className="h-[60vh] mt-10">
      <h1 className="text-3xl font-bold text-center">How it Works</h1>
      <div className="flex">
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
    <div className="w-[33%] flex flex-col justify-center items-center gap-y-2 mt-12">
      <button className="rounded-full bg-black w-12 h-12 text-white font-bold">
        {no}
      </button>
      <h2 className="text-xl font-semibold">{title}</h2>
      <p className="text-gray-500 max-w-[300px] text-center">{description}</p>
    </div>
  );
};

export default Works;
