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
import {
  TiSocialFacebookCircular,
  TiSocialLinkedinCircular,
  TiSocialGithubCircular,
  TiSocialYoutubeCircular,
} from "react-icons/ti";
import { IconContext } from "react-icons";
import Section from "./components/Section";

function App() {
  const skills = data.skills;
  const educations = data.educations;
  const experiences = data.experiences;
  const achievements = data.achievements;
  const problemSolving = data.problemSolving;
  const projects = data.projects;
  const publications = data.publications;
  const aboutMe = data.aboutMe;
  // const videos = data.videos;

  const skillSectionRef = useRef(null);
  const educationSectionRef = useRef(null);
  const experienceSectionRef = useRef(null);
  const achievementSectionRef = useRef(null);
  const problemSolvingSectionRef = useRef(null);
  const projectSectionRef = useRef(null);
  const publicationSectionRef = useRef(null);
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
        skillSectionRef={skillSectionRef}
        educationSectionRef={educationSectionRef}
        experienceSectionRef={experienceSectionRef}
        achievementSectionRef={achievementSectionRef}
        problemSolvingSectionRef={problemSolvingSectionRef}
        projectSectionRef={projectSectionRef}
        publicationSectionRef={publicationSectionRef}
        // youtubeSection={youtubeSection}
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
           py-[0.65rem] px-[0.9rem] text-base rounded-[0.25rem]
          mt-8 hover:text-white transition-colors ease-in-out duration-200"
        >
          <a
            href="https://drive.google.com/file/d/1RjLBWgzDAKAxgwjmSjjsYRFh_1qMPApv/view?usp=sharing"
            target="_blank"
          >
            Download CV
          </a>
        </button>
        <IconContext.Provider
          value={{ className: "text-sky-500", size: "60px" }}
        >
          <div className="flex justify-center items-center gap-3 mt-8">
            <a
              href="https://www.facebook.com/profile.php?id=100004370326000"
              target="_blank"
            >
              <TiSocialFacebookCircular />
            </a>
            <a
              href="https://www.linkedin.com/in/atiqur-rahman-06b0a41bb"
              target="_blank"
            >
              <TiSocialLinkedinCircular />
            </a>
            <a
              href="https://github.com/AtiqurRahmanAni/AtiqurRahmanAni"
              target="_blank"
            >
              <TiSocialGithubCircular />
            </a>
            <a
              href="https://www.youtube.com/@codingwitharduino7558"
              target="_blank"
            >
              <TiSocialYoutubeCircular />
            </a>
          </div>
        </IconContext.Provider>
        ;
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
          <p className="text-xl mt-2 text-gray-300 font-semibold">
            Junior Software Engineer
          </p>
          <p className="text-[1.4rem] text-center text-gray-300 mt-4 lg:text-justify lg:text-[1.415rem]">
            {aboutMe}
          </p>
        </div>
      </div>

      {/* ---------------Skills Section----------------- */}
      <Section key={1} title={"Skills"} sectionRef={skillSectionRef}>
        <div
          className="p-5 border-2 border-gray-500 mt-4 container mx-auto md:max-w-[80%]
          hover:bg-sky-700 transition-colors ease-in-out duration-300 shadow-lg
        "
        >
          {skills.map((skill, index) => {
            return <SkillItem key={index} {...skill} />;
          })}
        </div>
      </Section>

      {/* ---------------Education Section----------------- */}
      <Section
        key={2}
        title={"Education "}
        sectionRef={educationSectionRef}
        className={
          "[&>div]:py-4 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0 \
          [&>div:last-child]:border-b-0 [&>div]:border-b-4 [&>div]:border-gray-500 \
          [&>div]:border-opacity-90"
        }
      >
        {educations.map((education, index) => {
          return <EducationItem key={index} {...education} />;
        })}
      </Section>

      {/* ---------------Experience Section----------------- */}
      <Section key={3} title={"Experience "} sectionRef={experienceSectionRef}>
        <div className="grid grid-cols-1 gap-4 place-items-center items-stretch md:grid-cols-2">
          {experiences.map((experience, index) => {
            return <ExperienceCard key={index} {...experience} />;
          })}
        </div>
      </Section>

      {/* ---------------Achievement Section----------------- */}
      <Section
        key={4}
        title={"Achievements"}
        sectionRef={achievementSectionRef}
      >
        <div className="flex justify-center items-stretch gap-4 flex-wrap">
          {achievements.map((achievement, index) => {
            return <AchievementCard key={index} {...achievement} />;
          })}
        </div>
      </Section>

      {/* ---------------Problem Solving Section----------------- */}
      <Section
        key={5}
        title={"Problem Solving"}
        sectionRef={problemSolvingSectionRef}
      >
        <div className="flex justify-center items-center gap-4 flex-wrap">
          {problemSolving.map((ps, index) => {
            return <ProblemSolvingCard key={index} {...ps} />;
          })}
        </div>
      </Section>

      {/* ---------------Projects Section----------------- */}
      <Section key={6} title={"Projects"} sectionRef={projectSectionRef}>
        <div className="flex justify-center items-stretch gap-4 flex-wrap">
          {projects.map((project, index) => {
            return <ProjectCard key={index} {...project} />;
          })}
        </div>
      </Section>

      {/* ---------------Publications Section----------------- */}
      <Section
        key={7}
        title={"Research & Publications"}
        sectionRef={publicationSectionRef}
        className={
          "[&>div]:py-4 [&>div:first-child]:pt-0 [&>div:last-child]:pb-0 \
          [&>div:last-child]:border-b-0 [&>div]:border-b-4 [&>div]:border-gray-500 \
          [&>div]:border-opacity-90"
        }
      >
        {publications.map((publication, index) => {
          return <PublicationItem key={index} {...publication} />;
        })}
      </Section>

      {/* ---------------Youtube Section----------------- */}
      {/* <section className="mt-6 p-8" ref={youtubeSection}>
        <h6 className="text-4xl font-semibold text-gray-300">YouTube</h6>
        <div className="my-6">
          <a
            href="https://youtube.com/@codingwitharduino7558"
            target="_blank"
            className="text-sky-500 text-[1.25rem] font-semibold underline"
          >
            My youtube channel link
          </a>
        </div>

        <div className="flex justify-center items-center gap-4 flex-wrap">
          {videos.map((link, index) => {
            return <YoutubeCard key={index} link={link} />;
          })}
        </div>
      </section> */}
    </>
  );
}

export default App;
