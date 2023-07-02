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
    <div
      className="flex justify-center
        items-center flex-col gap-2 md:flex-row md:gap-10"
    >
      <img
        className="max-w-[400px] max-h-[210px] hidden lg:block"
        src={image}
        alt="aust"
      />
      <div className="flex-1 text-center lg:text-start">
        <h6 className="text-lg font-bold text-gray-300 !leading-tight">
          {paperTitle}
        </h6>
        <p className="text-[1.25rem] font-semibold text-gray-300 mt-2">
          <strong>Publication Year:</strong> {publicationYear}
        </p>
        <p className="text-[1.25rem] font-semibold text-gray-300">
          <strong>Conference name:</strong> {conferenceName}
        </p>
        <p className="text-[1.25rem]  font-semibold text-gray-300">
          <strong>Conference location:</strong> {conferenceLocation}
        </p>
        <div className="flex items-center justify-center gap-5 lg:justify-start">
          <p className="text-[1.25rem]  font-semibold text-gray-300">
            <strong>Publisher:&nbsp;</strong>
            <a
              href={link}
              target="_blank"
              className="text-sky-500 text-[1.25rem] font-semibold underline "
            >
              IEEE Xplore
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
