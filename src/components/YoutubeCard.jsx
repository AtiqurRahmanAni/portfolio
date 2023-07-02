import React from "react";

export default function YoutubeCard({ link }) {
  return (
    <div>
      <iframe
        className="min-w-[17rem] max-w-[23rem] flex-1"
        height="210rem"
        src={link}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        allowFullScreen
      ></iframe>
    </div>
  );
}
