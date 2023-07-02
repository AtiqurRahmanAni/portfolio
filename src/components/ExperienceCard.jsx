import React from "react";

export default function ExperienceCard({
  companyName,
  logo,
  designation,
  duration,
  details,
}) {
  return (
    <>
      <div
        className="rounded-xl hover:bg-sky-700
         transition-colors ease-in-out duration-500
         shadow-lg lg:max-w-[80%] border-2 border-gray-500
      "
      >
        <div className="bg-gray-600 rounded-t-xl max-h-[150px] p-2">
          <h6 className="text-3xl text-gray-300 p-5 font-bold">
            {companyName}
          </h6>
          <div className="w-[125px] bg-white relative top-0 mx-auto p-[5px] rounded-full">
            <img
              className="w-full aspect-square rounded-full"
              src={logo}
              alt="amarischool"
            />
          </div>
        </div>

        <div className="p-8 mt-10">
          <h6
            className="text-xl font-semibold mb-3 text-gray-300
          "
          >
            {designation}
          </h6>
          <p className="text-[1.25rem] font-semibold mb-3 text-gray-300">
            {duration}
          </p>
          <p className="text-gray-300 text-[1.125rem] text-center font-medium">{details}</p>
        </div>
      </div>
    </>
  );
}
