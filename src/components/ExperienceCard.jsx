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
        className="rounded-xl hover:bg-[#ff7a57]
         transition-colors ease-in-out duration-500
         shadow-lg lg:max-w-[80%] border-2 border-gray-200
      "
      >
        <div className="bg-gray-500 rounded-t-xl max-h-[150px] p-2">
          <h6 className="text-3xl text-white p-5 font-bold">{companyName}</h6>
          <div className="w-[125px] bg-white relative top-0 mx-auto p-[5px] rounded-full">
            <img
              className="w-[100%] aspect-square rounded-full"
              src={"/src/assets/img/" + logo}
              alt="amarischool"
            />
          </div>
        </div>

        <div className="p-8 mt-10">
          <h6
            className="text-xl font-semibold mb-3 text-gray-600
          "
          >
            {designation}
          </h6>
          <p className="text-[1.25rem] font-semibold mb-3 text-gray-500">
            {duration}
          </p>
          <p className="text-[1.125rem] font-normal text-gray-600">{details}</p>
        </div>
      </div>
    </>
  );
}
