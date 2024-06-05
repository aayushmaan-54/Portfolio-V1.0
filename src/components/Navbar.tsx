import { useEffect, useState } from "react";
import { Logo, Sun, Moon, HamBurger } from "../Exports";

interface HeaderProps {
  isDark: boolean | null;
  setIsDark: (value: boolean | null) => void;
}

export const Navbar = ({ isDark, setIsDark }: HeaderProps) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);
  const [rotation, setRotation] = useState(0);

  useEffect(() => {
    const favicon = document.getElementById("favicon")! as HTMLLinkElement;
    favicon.href = `${
      isDark ? "/src/assets/images/Logo.svg" : "/src/assets/images/LogoLight.svg"
    }`;
  }, [isDark]);

  const toggleMenu = () => {
    setMenuIsOpen(prev => !prev);
  };

  useEffect(() => {
    const nav = document.querySelector(".nav")!;
    const body = document.querySelector("body")!;
    const hemMenu = document.querySelector(".hamburger")!;
    const menu = document.querySelector(".menuAll")!;

    if (menuIsOpen) {
      hemMenu.classList.add("hamburgerClose");
      menu.classList.add("menuOpen");
      nav.classList.add("open");
      nav.classList.add("block");
      nav.classList.remove("hidden");
      body.classList.add("max-h-screen", "overflow-hidden");
    } else {
      hemMenu.classList.remove("hamburgerClose");
      menu.classList.remove("menuOpen");
      nav.classList.remove("open");
      nav.classList.remove("block");
      nav.classList.add("hidden");
      body.classList.remove("max-h-screen", "overflow-hidden");
    }
  }, [menuIsOpen]);

  useEffect(() => {
    const links = document.querySelectorAll(".nav .link");
    links.forEach(link => {
      link.addEventListener("click", () => {
        setMenuIsOpen(false);
      });
    });
  }, []);

  const handleClick = () => {
    setRotation(rotation === 0 ? 180 : 0);
    setIsDark(!isDark);
  };

  return (
    <nav className="flex items-center justify-between px-5 pt-2">
      <div className="cursor-pointer">
        <Logo />
      </div>
      <div className="font-cnl">
        <ul className="flex items-center justify-center gap-5">
          <li className="underline underline-offset-4 decoration-4 dark:decoration-[#f5f4ef80] mb-2 dark:hover:decoration-[#f5efef] transition-colors duration-400 cursor-pointer resume decoration-[#2c2b2780] hover:decoration-[#2C2B27]">
            <a href="https://aayushmaan-resume.vercel.app/" target="blank">
              Resume <span className="text-xl text-cherryRed">●</span>
            </a>
          </li>
          <li className="link menu cursor-pointer">
            <a href="#about">About</a>
          </li>
          <li className="link menu cursor-pointer">
            <a href="#skills">Skills</a>
          </li>
          <li className="link menu cursor-pointer">
            <a href="#works">Works</a>
          </li>
          <li className="menu link cursor-pointer">
            <a href="#education">Education</a>
          </li>
          <li className="link menu cursor-pointer">
            <a href="#contact">Contact</a>
          </li>
          <li
            className={`duration-300 transform ${rotation === 180 ? "rotate-180" : ""} cursor-pointer`}
            style={{ animationDuration: "5000ms" }}
            onClick={handleClick}
          >
            {isDark ? <Sun /> : <Moon />}
          </li>
          <div className="menuAll">
            <li onClick={toggleMenu} className="hem cursor-pointer">
              <HamBurger />
            </li>
            <div className="font-nb nav text-white mix-blend-difference">
              <ul>
                <li>
                  <a href="#about" className="cursor-pointer link">
                    About
                  </a>
                </li>
                <li>
                  <a href="#skills" className="cursor-pointer link">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#works" className="cursor-pointer link">
                    Works
                  </a>
                </li>
                <li>
                  <a href="#education" className="cursor-pointer link">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#contact" className="cursor-pointer link">
                    Contact
                  </a>
                </li>
              </ul>
              <div>
                <ol className="text-base flex items-center justify-center gap-5 pt-4">
                  <li>
                    <a href="https://x.com/aayushmaan54" className="socialLink">
                      X
                    </a>
                  </li>
                  <li>
                    <a href="https://www.linkedin.com/in/aayushmaan54/" className="socialLink">
                      LinkedIN
                    </a>
                  </li>
                  <li>
                    <a href="https://github.com/aayushmaan-54" className="socialLink">
                      GitHub
                    </a>
                  </li>
                  <li>
                    <a href="mailto:aayushmaan.soni54@gmail.com" className="socialLink">
                      Gmail
                    </a>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </ul>
      </div>
    </nav>
  );
};