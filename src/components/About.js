import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
          I am a graduate in Information Technology and Engineering. I have been
          working in a web development company as a WordPress web developer for
          2 year.To restart my career I started learning over the web, and I
          completed a React through Udemy.
        </p>

        <br />

        <p className="text-xl">
         Experience in websites and web applications. Extensive Experience in developing webpages using HTML/HTML5, javaScript,
          React JS, Redux, React hooks. Experience in React JS Framework to build single page appliation. Expertise in using IDE tools such as Visual Studio Code, version control tool such as GIT
        </p>
      </div>
    </div>
  );
};

export default About;
