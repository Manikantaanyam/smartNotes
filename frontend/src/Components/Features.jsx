import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="bg-gray-200 pt-5 pb-4 md:h-[60vh]">
      <h1 className="text-center text-3xl font-bold">Key Features</h1>
      <div className="flex flex-col md:flex-row md:justify-center items-center">
        <FeatureCard
          path={
            "m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L6.832 19.82a4.5 4.5 0 0 1-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 0 1 1.13-1.897L16.863 4.487Zm0 0L19.5 7.125"
          }
          title={"Smart Note-Taking"}
          description={
            "Effortlessly capture and organize your thoughts with our intuitive interface."
          }
        />
        <FeatureCard
          path={
            "M2.25 12.76c0 1.6 1.123 2.994 2.707 3.227 1.087.16 2.185.283 3.293.369V21l4.076-4.076a1.526 1.526 0 0 1 1.037-.443 48.282 48.282 0 0 0 5.68-.494c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z"
          }
          title={"AI Communication"}
          description={
            "Engage with AI to clarify concepts, generate ideas, and enhance your notes.."
          }
        />
        <FeatureCard
          path={"m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"}
          title={"Intelligent Suggestions"}
          description={
            "Receive context-aware suggestions to improve your notes and boost productivity."
          }
        />
      </div>
    </div>
  );
};

export default Features;
