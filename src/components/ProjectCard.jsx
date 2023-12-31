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
        className="min-w-[17rem] max-w-[23rem] p-4 rounded-xl 
          shadow-lg border-2 border-gray-500 hover:bg-sky-700
          transition-colors ease-in-out duration-500"
      >
        <h6
          className="text-xl font-semibold mb-3 mt-2 text-gray-300
          "
        >
          {projectName}
        </h6>
        <p className="text-gray-300 text-[1.125rem] font-medium px-4">
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
