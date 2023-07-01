import React from "react";

export default function SkillItem({ skillName, skillSet }) {
  return (
    <>
      <p className="text-lg text-gray-300">
        <strong>{skillName}: </strong> {skillSet}
      </p>
    </>
  );
}
