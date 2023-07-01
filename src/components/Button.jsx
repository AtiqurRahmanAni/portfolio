import React from "react";

export default function Button({ text, link }) {
  return (
    <button className="bg-sky-500 my-5 mx-2 px-3 py-2 rounded-lg border-2 border-gray-500">
      <a
        className="text-[1.125rem] text-gray-200 font-semibold"
        href={link}
        target="_blank"
      >
        {text}
      </a>
    </button>
  );
}
