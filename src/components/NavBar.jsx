export default function Navbar({
  scrollToSection,
  skillSection,
  educationSection,
  experienceSection,
  achievementSection,
  projectSection,
  publicationSection,
}) {
  return (
    <>
      <nav className="fixed right-0 top-0 min-w-full z-10">
        <ul
          className="hidden md:flex justify-end text-base gap-5 bg-white py-4 px-10
            text-gray-500 font-semibold
            [&>li:hover]:bg-[#ff7a57]
            [&>li:hover]:text-white
            [&>li]:rounded-lg
            [&>li]:px-4 [&>li]:py-2 [&>li]:transition-color
            [&>li]:duration-300
            [&>li]:ease-in-out
            [&>li]:cursor-pointer"
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

        <div className="lg:hidden flex justify-end fixed right-0 top-0 min-w-full bg-white">
          <span className="p-5 font-MaterialIcons text-4xl">menu</span>
        </div>
      </nav>
    </>
  );
}
