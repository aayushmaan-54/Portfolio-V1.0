import { HR, GitLink, NPM, ReadMore, Link } from "../Exports";

export const Works = () => {
  return (
    <section id="works" className="none">
      <HR text="Works" />
      <div className="flex flex-wrap py-10 items-start justify-center gap-[10%] worksContainer">

      <div className="font-nb w-[300px] mb-14">
          <img src="/images/projects/filmi-duniya.webp" alt="Project photo" className="w-[300px] grayscale hover:grayscale-0 transition-all duration-500" />
          <div className="w-[300px] flex items-center justify-between">
            <h1>Filmi Duniya</h1>
            <p className="text-[#007ACC] text-xs">
              <span className="text-[#61DBFB]">React</span>
              <span className="text-[#38bdf8] ml-2">Tailwind</span>
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <a href="https://filmi-duniya.vercel.app/" target="blank"><Link /></a>
            <a href="https://github.com/aayushmaan-54/FilmiDuniya" target="blank"><GitLink /></a>
          </div>
          <ReadMore>
            A movie app where you can watchlist and favorite movies, with all data saved to the TMDB database to prevent any loss. You can access detailed descriptions of movies and information about the cast. Additionally, the app allows you to explore movies by various categories and genres, making it easy to discover new content.
          </ReadMore>
        </div>

        <div className="font-nb w-[300px] mb-14">
          <img src="/images/projects/npm.webp" alt="Project photo" className="w-[300px] grayscale hover:grayscale-0 transition-all duration-500" />
          <div className="w-[300px] flex items-center justify-between">
            <h1>TypeScript Toastify</h1>
            <p className="text-[#007ACC] text-xs">
              <span>TypeScript</span>
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <a href="https://typescript-toastify.vercel.app/" target="blank"><Link /></a>
            <a href="https://github.com/aayushmaan-54/TypeScript-Toastify-Library" target="blank"><GitLink /></a>
            <a href="https://www.npmjs.com/package/typescript-toastify" target="blank"><NPM /></a>
          </div>
          <ReadMore>
            A customizable TypeScript Toastify npm library with over 150+ downloads. Features include configurable position, custom messages, auto-dismissal, close button, progress bar, and pause on hover/focus loss. Supports multiple notification types and themes
          </ReadMore>
        </div>

        <div className="font-nb w-[300px] mb-14">
          <img src="/images/projects/mausam.webp" alt="Project photo" className="w-[300px] grayscale hover:grayscale-0 transition-all duration-500" />
          <div className="w-[300px] flex items-center justify-between">
            <h1>Mausam(मौसम)</h1>
            <p className="text-xs">
              <span className="text-[#61DBFB]">React</span>
              <span className="text-[#38bdf8] ml-2">Tailwind</span>
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <a href="https://mausam-lac.vercel.app/" target="blank"><Link /></a>
            <a href="https://github.com/aayushmaan-54/Mausam" target="blank"><GitLink /></a>
          </div>
          <ReadMore>
            Provides real-time weather updates, including current weather conditions, hourly forecasts, and daily forecasts. Powered by OpenWeatherMap API. Built with React, this app offers a user-friendly interface and responsive design, ensuring a seamless experience across devices.
          </ReadMore>
        </div>

        <div className="font-nb w-[300px] mb-14">
          <img src="/images/projects/quiz.webp" alt="Project photo" className="w-[300px] grayscale hover:grayscale-0 transition-all duration-500" />
          <div className="w-[300px] flex items-center justify-between">
            <h1>Flashcard Quiz App</h1>
            <p className="text-xs">
              <span className="text-[#61DBFB]">React</span>
              <span className="text-[#38bdf8] ml-2">Tailwind</span>
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <a href="https://flash-cards-quiz.vercel.app/" target="blank"><Link /></a>
            <a href="https://github.com/aayushmaan-54/FlashCards-Quiz" target="blank"><GitLink /></a>
          </div>
          <ReadMore>
            Flashcard Quiz App that allows users to choose the number of questions and a variety of categories, and then generates a dynamic quiz based on their choices.
          </ReadMore>
        </div>

        <div className="font-nb w-[300px] mb-14">
          <img src="/images/projects/npm.webp" alt="Project photo" className="w-[300px] grayscale hover:grayscale-0 transition-all duration-500" />
          <div className="w-[300px] flex items-center justify-between">
            <h1>Node kickoff</h1>
            <p className="text-xs">
              <span className="text-[#669b62]">Node.js</span>
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
          <a href="https://www.npmjs.com/package/nodee-kickoff" target="blank"><NPM /></a>
            <a href="https://github.com/aayushmaan-54/nodee-kickoff_NPM" target="blank"><GitLink /></a>
          </div>
          <ReadMore>
            Node KickOff is a powerful CLI tool designed to streamline Node project setup. It allows developers to quickly initialize new Node projects with a curated selection of commonly used packages and configurations. With interactive prompts, Node KickOff guides you through choosing and installing dependencies, automatically handling prod & dev dependency
          </ReadMore>
        </div>

        <div className="font-nb w-[300px] mb-14">
          <img src="/images/projects/npm.webp" alt="Project photo" className="w-[300px] grayscale hover:grayscale-0 transition-all duration-500" />
          <div className="w-[300px] flex items-center justify-between">
            <h1>React kickoff</h1>
            <p className="text-xs">
              <span className="text-[#669b62]">Node.js</span>
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
          <a href="https://www.npmjs.com/package/reactt-kickoff" target="blank"><NPM /></a>
            <a href="https://github.com/aayushmaan-54/reactt-kickoff_NPM" target="blank"><GitLink /></a>
          </div>
          <ReadMore>
            React KickOff is a powerful CLI tool designed to streamline React project setup. It allows developers to quickly initialize new React projects with a curated selection of commonly used packages and configurations. With interactive prompts, ReacttKickOff guides you through choosing and installing dependencies, automatically handling prod & dev dependency
          </ReadMore>
        </div>

      </div>
    </section>
  )
}