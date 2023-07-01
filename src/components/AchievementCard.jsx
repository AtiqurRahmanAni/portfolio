import React from "react";
import Button from "./Button";

export default function AchievementCard({ image, title, link }) {
  return (
    <>
      <div
        className="min-w-full pb-2 rounded-xl shadow-lg
        border-2 border-gray-200 hover:bg-[#ff7a57]
        transition-colors ease-in-out duration-500"
      >
        <div className="w-full rounded-t-xl">
          <img
            className="object-fit w-full rounded-t-xl max-h-44 md:max-h-60"
            src={"./src/assets/img/" + image}
            alt="cf"
          />
        </div>
        <div className="pt-6">
          <h6 className="text-[1.15rem] text-gray-500 font-semibold">
            {title}
          </h6>
          <Button text="Certificate" link={link} />
        </div>
      </div>
    </>
  );
}
