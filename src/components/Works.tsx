import { HR, GitLink, NPM, ReadMore, Link } from "../Exports";

export const Works = () => {
  return (
    <section id="works">
      <HR text="Works" />
      <div className="flex flex-wrap py-10 items-start justify-center gap-[10%] worksContainer">

        <div className="font-nb w-[300px] mb-14">
          <img src="/images/projects/mausam.png" alt="Project photo" className="w-[300px] grayscale hover:grayscale-0 transition-all duration-500" />
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
          <img src="/images/projects/todo.png" alt="Project photo" className="w-[300px] grayscale hover:grayscale-0 transition-all duration-500" />
          <div className="w-[300px] flex items-center justify-between">
            <h1>ToDo</h1>
            <p className="text-xs">
              <span className="text-[#61DBFB]">React</span>
              <span className="text-[#38bdf8] ml-2">Tailwind</span>
            </p>
          </div>
          <div className="flex items-center justify-start gap-2">
            <a href="https://todo-omega-three.vercel.app/" target="blank"><Link /></a>
            <a href="https://github.com/aayushmaan-54/React-Advanced-ToDo" target="blank"><GitLink /></a>
          </div>
          <ReadMore>
            A Todo app with features for adding, searching, tracking statistics, toggling completed tasks, and managing (edit, cancel, save, delete) todos, with data stored locally.
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
          <img src="/images/projects/quiz.png" alt="Project photo" className="w-[300px] grayscale hover:grayscale-0 transition-all duration-500" />
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

      </div>
    </section>
  )
}