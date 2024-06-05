import { useState, useRef, useEffect, useCallback } from "react";
import { HR, React, TypeScript, TailwindCSS, SASS, Figma, GitHub, GitLab, Linux, Vim, VSCode, C, Cpp } from "../Exports";

const allTabs = [
  {
    name: "Frontend",
    description: ["React.js", "TypeScript", "Tailwind CSS", "SASS"],
    Logo: [<React key="React" />, <TypeScript key="TypeScript" />, <TailwindCSS key="TailwindCSS" />, <SASS key="SASS" />],
  },
  {
    name: "Tools",
    description: ["Figma", "GitHub", "GitLab", "Linux", "Vim", "VSCode"],
    Logo: [<Figma key="Figma" />, <GitHub key="GitHub" />, <GitLab key="GitLab" />, <Linux key="Linux" />, <Vim key="Vim" />, <VSCode key="VSCode" />],
  },
  {
    name: "Others",
    description: ["C", "C++"],
    Logo: [<C key="C" />, <Cpp key="Cpp" />],
  },
];

export const Skills = () => {
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [activeTabIndex, setActiveTabIndex] = useState<number>(0);
  const [tabUnderlineWidth, setTabUnderlineWidth] = useState(0);
  const [tabUnderlineLeft, setTabUnderlineLeft] = useState(0);

  const setTabPosition = useCallback(() => {
    const currentTab = tabsRef.current[activeTabIndex];
    if (currentTab) {
      setTabUnderlineLeft(currentTab.offsetLeft);
      setTabUnderlineWidth(currentTab.clientWidth);
    }
  }, [activeTabIndex]);

  useEffect(() => {
    const timeoutId = setTimeout(setTabPosition, 0);
    return () => clearTimeout(timeoutId);
  }, [setTabPosition]);

  return (
    <article className="mt-36 pb-16" id="skills">
      <HR text={"Skills"} />
      <div className="flex justify-end mr-20 mb-12 fullTab">
        <div className="inline-flex h-10 rounded-3xl backdrop-blur-sm bg-[#B8B5A9] relative tabs">
          <span
            className="absolute bottom-0 top-0 -z-10 flex overflow-hidden rounded-3xl transition-all duration-300"
            style={{ left: tabUnderlineLeft, width: tabUnderlineWidth }}
          >
            <span className="h-full w-full rounded-3xl bg-cherryRed" />
          </span>
          {allTabs.map((tab, index) => {
            const isActive = activeTabIndex === index;
            return (
              <button
                key={tab.name + index}
                ref={(el) => (tabsRef.current[index] = el)}
                className={`${isActive ? "" : "hover:text-yorange transition-all duration-200"} my-auto cursor-pointer select-none rounded-full px-4 text-center font-light text-bgreen tab`}
                onClick={() => setActiveTabIndex(index)}
              >
                {tab.name}
              </button>
            );
          })}
        </div>
      </div>
      {activeTabIndex !== null && (
        <div className="mt-4 font-nb mx-[10%]">
          <div className="mb-4 flex gap-4 justify-center overflow-x-auto skillScrollbar">
            {allTabs[activeTabIndex].description.map((desc, i) => (
              <div className="flex flex-col items-center min-w-[80px] p-2" key={i}>
                <div className="mb-1 bg-[#d3cfc2] dark:bg-[#2E2F2A] border-2 dark:border-[#41403D] border-[#99958a] rounded-xl p-2">
                  {allTabs[activeTabIndex].Logo[i]}
                </div>
                <span className="dark:text-[#B8B5A9] text-[#99958a] text-sm skillDesc">{desc}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </article>
  );
};