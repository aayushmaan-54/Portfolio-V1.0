import { HR, TimeStamp, Book } from "../Exports";

export const Education = () => {
  return (
    <section id="education">
      <HR text="Education" />
      <ol className="relative border-s-2 dark:border-[#41403D] border-[#99958a]  ml-10">

        <li className="mb-20 ms-6 flex items-center text-lg font-semibold text-gray-900 dark:text-white">
          <span className="absolute mb-1  flex items-center justify-center -start-[1.85rem] bg-[#d3cfc2] dark:bg-[#2E2F2A] border-2 dark:border-[#41403D] border-[#99958a] rounded-xl p-2">
            <Book />
          </span>
        </li>

        <li className="mb-20 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 -start-3">
            <TimeStamp />
          </span>
          <h3 className="flex items-center mb-1 font-semibold dark:text-[#F5F4EF] text-main text-3xl skit">Vidyasthali Public School</h3>
          <time className="block mb-2 text-sm font-normal leading-none font-nb dark:text-[#F5F4EF] text-main educationtext">2020 - 2022</time>
          <p className="mb-4 text-base font-normal font-nb text-bgreen dark:text-oyellow educationtext">Class 10th - 12th, CBSE Boards</p>
        </li>

        <li className="mb-10 ms-6">
          <span className="absolute flex items-center justify-center w-6 h-6 -start-3">
            <TimeStamp />
          </span>
          <h3 className="flex items-baseline mt-4 mb-1 font-semibold dark:text-[#F5F4EF] text-3xl text-main w-[60%] skit">Swami Keshvanand Institute of Technology,
            Management & Gramothan, Jaipur <span className="bg-cherryRed text-bgreen font-medium me-2 px-2.5 py-0.5 rounded ms-2 text-xs highlightTag">Pursuing</span></h3>
          <time className="block mb-2 text-sm font-normal leading-none font-nb dark:text-[#F5F4EF] text-main educationtext">2022 - 2026</time>
          <p className="mb-4 text-base font-normal font-nb text-bgreen dark:text-oyellow educationtext">B.Tech</p>
        </li>
      </ol>

    </section>
  )
}