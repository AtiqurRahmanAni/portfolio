import { useRef } from "react";
import "./App.css";
import Navbar from "./components/NavBar";
import data from "./data.json";
import SkillItem from "./components/SkillItem";
import EducationItem from "./components/EducationItem";
import ExperienceCard from "./components/ExperienceCard";
import AchievementCard from "./components/AchievementCard";
import ProblemSolvingCard from "./components/ProblemSolvingCard";
import ProjectCard from "./components/ProjectCard";
import PublicationItem from "./components/PublicationItem";
import YoutubeCard from "./components/YoutubeCard";

function App() {
  const skills = data.skills;
  const educations = data.educations;
  const experiences = data.experiences;
  const achievements = data.achievements;
  const problemSolving = data.problemSolving;
  const projects = data.projects;
  const publications = data.publications;
  const aboutMe = data.aboutMe;
  const videos = data.videos;

  const skillSection = useRef(null);
  const educationSection = useRef(null);
  const experienceSection = useRef(null);
  const achievementSection = useRef(null);
  const projectSection = useRef(null);
  const publicationSection = useRef(null);
  const youtubeSection = useRef(null);

  const scrollToSection = (elementRef) => {
    window.scrollTo({
      top: elementRef.current.offsetTop - 50,
      behavior: "smooth",
    });
  };

  return (
    <>
      <Navbar
        scrollToSection={scrollToSection}
        skillSection={skillSection}
        educationSection={educationSection}
        experienceSection={experienceSection}
        achievementSection={achievementSection}
        projectSection={projectSection}
        publicationSection={publicationSection}
        youtubeSection={youtubeSection}
      />

      <div
        className="flex flex-col items-center
      justify-center w-auto h-[94vh] min-h-[650px] 
      border-b-[1px] border-sky-500
      "
      >
        <h4 className="mb-0 text-2xl text-gray-300 font-semibold">
          Hello, I'm
        </h4>
        <h1 className="text-[71px] font-bold text-gray-300">
          Md. Atiqur Rahman
        </h1>
        <p className="text-xl text-gray-300">Junior Software Engineer</p>

        <button
          className="inline-block my-0 mx-[2px]
          bg-sky-500 border-[#ff7a57] text-gray-200 font-semibold
           py-[0.65rem] px-[0.9rem] text-sm rounded-[0.25rem]
          mt-8 hover:text-white transition-colors ease-in-out duration-200"
        >
          <a
            href="https://drive.google.com/file/d/1RjLBWgzDAKAxgwjmSjjsYRFh_1qMPApv/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </button>
      </div>
      <div className="flex flex-col items-center justify-center p-5 mt-5 flex-wrap gap-6 lg:flex-row">
        <div className="border-4 border-gray-500 shadow-xl max-w-[20rem]">
          <img
            className="cover w-full h-full"
            src="./images/avatar.jpg"
            alt="avatar"
          />
        </div>
        <div className="text-center flex-1 lg:text-start">
          <h4 className="mb-0 text-2xl text-gray-300 font-semibold">
            Md. Atiqur Rahman
          </h4>
          <p className="text-xl mt-2 text-gray-300">Junior Software Engineer</p>
          <p className="text-[1.420rem] text-justify text-gray-300 mt-4">
            {aboutMe}
          </p>
        </div>
      </div>

      {/* ---------------Skills Section----------------- */}
      <section className="mt-6 p-8" ref={skillSection}>
        <h6 className="text-4xl font-semibold text-gray-300">Skills</h6>
        <div
          className="p-5 border-2 border-gray-500 mt-4 container mx-auto md:max-w-[80%]
          hover:bg-sky-700 transition-colors ease-in-out duration-300 shadow-lg
        "
        >
          {skills.map((skill, index) => {
            return <SkillItem key={index} {...skill} />;
          })}
        </div>
      </section>

      {/* ---------------Education Section----------------- */}
      <section className="mt-6 p-8" ref={educationSection}>
        <h6 className="text-4xl font-semibold text-gray-300 mb-10">
          Education
        </h6>
        {educations.map((education, index) => {
          return (
            <>
              <EducationItem key={index} {...education} />
              {index < educations.length - 1 && (
                <div className="w-full h-1 bg-gray-500 opacity-[90%] mx-0 my-4"></div>
              )}
            </>
          );
        })}
      </section>

      {/* ---------------Experience Section----------------- */}
      <section className="mt-6 p-8" ref={experienceSection}>
        <h6 className="text-4xl font-semibold text-gray-300 mb-10">
          Experience
        </h6>
        <div className="grid grid-cols-1 gap-4 place-items-center items-stretch md:grid-cols-2">
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} {...experience} />;
          })}
        </div>
      </section>

      {/* ---------------Achievement Section----------------- */}
      <section className="mt-6 p-8" ref={achievementSection}>
        <h6 className="text-4xl font-semibold text-gray-300 mb-10">
          Achievement
        </h6>
        <div
          className="grid grid-cols-1 place-items-center items-stretch gap-5
          md:grid-cols-2 lg:grid-cols-3"
        >
          {achievements.map((achievement, index) => {
            return <AchievementCard key={index} {...achievement} />;
          })}
        </div>
      </section>

      {/* ---------------Problem Solving Section----------------- */}
      <section className="mt-6 p-8" ref={problemSolving}>
        <h6 className="text-4xl font-semibold text-gray-300 mb-10">
          Problem Solving
        </h6>
        <div
          className="grid grid-cols-1 place-items-center items-stretch gap-5
          md:grid-cols-2 lg:grid-cols-3"
        >
          {problemSolving.map((ps, index) => {
            return <ProblemSolvingCard key={index} {...ps} />;
          })}
        </div>
      </section>

      {/* ---------------Projects Section----------------- */}
      <section className="mt-6 p-8" ref={projectSection}>
        <h6 className="text-4xl font-semibold text-gray-300 mb-10">Projects</h6>
        <div className="flex justify-center items-stretch gap-4 flex-wrap">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </section>

      {/* ---------------Publications Section----------------- */}
      <section className="mt-6 p-8" ref={publicationSection}>
        <h6 className="text-4xl font-semibold text-gray-300 mb-10">
          Research & Publications
        </h6>
        {publications.map((publication, index) => {
          return (
            <>
              <PublicationItem key={index} {...publication} />
              {index < publications.length - 1 && (
                <div className="w-full h-1 bg-gray-500 opacity-[90%] mx-0 my-4"></div>
              )}
            </>
          );
        })}
      </section>

      {/* ---------------Youtube Section----------------- */}
      <section className="mt-6 p-8" ref={youtubeSection}>
        <h6 className="text-4xl font-semibold text-gray-300">YouTube</h6>
        <div className="my-6">
          <a
            href="https://youtube.com/@codingwitharduino7558"
            target="_blank"
            className="text-sky-500 text-[1.25rem] font-semibold underline"
          >
            My youTube channel link
          </a>
        </div>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          {videos.map((link, index) => {
            return <YoutubeCard key={index} link={link} />;
          })}
        </div>
      </section>
    </>
  );
}

export default App;
