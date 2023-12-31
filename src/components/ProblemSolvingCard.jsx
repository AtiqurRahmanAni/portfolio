import React from "react";
import Button from "./Button";

export default function ProblemSolvingCard({ image, title, link }) {
  return (
    <>
      <>
        <div
          className="min-w-[18rem] max-w-[25rem] flex-1 pb-2 rounded-xl shadow-lg 
          border-2 border-gray-500 hover:bg-sky-700
          transition-colors ease-in-out duration-500"
        >
          <div className="w-full rounded-t-xl">
            <img
              className="object-fit w-full rounded-t-xl max-h-44 md:max-h-60"
              src={image}
              alt="cf"
            />
          </div>
          <div className="pt-6">
            <h6 className="text-[1.15rem] text-gray-300 font-semibold">
              {title}
            </h6>
            <Button text="Profile" link={link} />
          </div>
        </div>
      </>
    </>
  );
}
