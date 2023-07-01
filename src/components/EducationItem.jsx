import React from "react";

export default function EducationItem({
  institutionName,
  degree,
  result,
  duration,
  location,
  image,
}) {
  return (
    <>
      <div
        className="flex justify-center 
        items-center flex-col gap-2 md:flex-row md:gap-10 md:text-left"
      >
        <img
          className="max-w-[120px] max-h-[150px] "
          src={"src/assets/img/" + image}
          alt="aust"
        />
        <div className="flex-1">
          <h6 className="text-2xl font-semibold text-gray-300">
            {institutionName}
          </h6>
          <p className="text-lg font-medium  mt-2">{degree}</p>
          <p className="text-[1.25rem] font-medium text-gray-300">{result}</p>
          <p className="text-[1.20rem]  font-medium text-gray-300">
            {duration}
          </p>
          <p className="text-[1.20rem] font-medium text-gray-300">{location}</p>
        </div>
      </div>
    </>
  );
}
