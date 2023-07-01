import React from "react";
import Button from "./Button";

export default function ProjectCard({
  projectName,
  description,
  githubLink,
  youtubeLink,
}) {
  return (
    <>
      <div
        className="min-w-full p-4 rounded-xl shadow-lg 
          border-2 border-gray-200 hover:bg-[#ff7a57]
          transition-colors ease-in-out duration-500"
      >
        <h6
          className="text-xl font-semibold mb-3 mt-2 text-gray-600
          "
        >
          {projectName}
        </h6>
        <p className="text-gray-500 text-[1.125rem] font-medium px-4">
          {description}
        </p>
        <div>
          <Button key={1} text="Github" link={githubLink} />
          <Button key={2} text="Demo video" link={youtubeLink} />
        </div>
      </div>
    </>
  );
}
