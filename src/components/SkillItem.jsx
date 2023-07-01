import React from "react";

export default function SkillItem({ skillName, skillSet }) {
  return (
    <>
      <p className="text-lg">
        <strong className="text-gray-600">{skillName}: </strong> {skillSet}
      </p>
    </>
  );
}
