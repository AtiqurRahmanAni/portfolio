import React from "react";

export default function PublicationItem({
  paperTitle,
  publicationYear,
  conferenceName,
  conferenceLocation,
  link,
  image,
}) {
  return (
    <>
      <div
        className="flex justify-center 
        items-center flex-col gap-2 md:flex-row md:gap-10"
      >
        <img
          className="max-w-[400px] max-h-[210px] hidden lg:block"
          src={`src/assets/img/${image}`}
          alt="aust"
        />
        <div className="flex-1 text-center lg:text-start">
          <h6 className="text-lg font-bold text-gray-500 !leading-tight">
            {paperTitle}
          </h6>
          <p className="text-[1.25rem] font-semibold text-gray-500 mt-2">
            Publication Year: {publicationYear}
          </p>
          <p className="text-[1.25rem] font-semibold text-gray-500">
            Conference name: {conferenceName}
          </p>
          <p className="text-[1.25rem]  font-semibold text-gray-500">
            Conference location: {conferenceLocation}
          </p>
          <div className="flex items-center justify-center gap-5 lg:justify-start">
            <p className="text-[1.25rem]  font-semibold text-gray-500">
              Publisher: IEEE
            </p>
            <a
              href={link}
              target="_blank"
              className="material-symbols-outlined text-gray-500 text-xl"
            >
              link
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
