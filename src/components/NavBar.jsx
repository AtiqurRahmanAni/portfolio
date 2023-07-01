import { useState } from "react";

export default function Navbar({
  scrollToSection,
  skillSection,
  educationSection,
  experienceSection,
  achievementSection,
  projectSection,
  publicationSection,
}) {
  const [isVisible, setVisible] = useState(true);

  return (
    <>
      <nav className="fixed right-0 top-0 min-w-full z-10">
        <ul
          className={
            (isVisible ? "flex" : "hidden") +
            " justify-end items-center flex-col text-base \
            gap-5 bg-[#131534] py-4 px-10 \
            text-gray-300 font-semibold \
            [&>li:hover]:bg-sky-500 \
            [&>li:hover]:text-white \
            [&>li]:min-w-[80%] \
            [&>li]:rounded-lg \
            [&>li]:px-4 [&>li]:py-2 \
            [&>li]:transition-color \
            [&>li]:duration-300 \
            [&>li]:ease-in-out \
            [&>li]:cursor-pointer \
            lg:flex-row lg:flex \
            lg:[&>li]:min-w-fit"
          }
        >
          <li onClick={() => scrollToSection(skillSection)}>Skills</li>
          <li onClick={() => scrollToSection(educationSection)}>Education</li>
          <li onClick={() => scrollToSection(experienceSection)}>Experience</li>
          <li onClick={() => scrollToSection(achievementSection)}>
            Achievements
          </li>
          <li onClick={() => scrollToSection(projectSection)}>Projects</li>
          <li onClick={() => scrollToSection(publicationSection)}>
            Publications
          </li>
        </ul>

        <span
          className="font-MaterialIcons text-4xl text-gray-200 
          cursor-pointer fixed right-5 top-3 lg:hidden"
          onClick={() => setVisible((state) => !state)}
        >
          {isVisible ? "close" : "menu"}
        </span>
      </nav>
    </>
  );
}
