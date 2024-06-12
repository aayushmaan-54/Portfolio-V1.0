import { FooterStar } from "../Exports";

export const Footer = () => {
  return (
    <aside className="font-cnl none">
      <div className="hr-container relative my-8 mb-24" id="about">
        <div className="bg-main dark:bg-lhtMain w-full h-[1.5px]"></div>
        <div className="hr w-fit absolute right-[45.4%] bg-lhtMain dark:bg-main  top-[-665%] px-2 bg-[url('./src/assets/images/noise.png')] bg-blend-difference ">
          <FooterStar />
        </div>
      </div>

      <div className="flex items-start justify-center gap-[10%] flex-wrap">
        <div>
          <ul className="">
            <li className="underline underline-offset-4 decoration-4 dark:decoration-[#f5f4ef80] mb-2 dark:hover:decoration-[#f5efef] transition-colors duration-400 cursor-pointer resume decoration-[#2c2b2780] hover:decoration-[#2C2B27]">
              <a href="https://drive.google.com/file/d/1hUJgb1pbvDKOmpfpEEVAnSONvp35pkq5/view?usp=sharing" target="blank">Resume <span className="text-xl text-cherryRed">●</span></a>
            </li>
            <li className="cursor-pointer mb-1"><a href="#about">About</a></li>
            <li className="cursor-pointer mb-1"><a href="#skills">Skills</a></li>
            <li className="cursor-pointer mb-1"><a href="#works">Works</a></li>
            <li className="cursor-pointer mb-1"><a href="#education">Education</a></li>
            <li className="cursor-pointer mb-6"><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="cursor-pointer mb-1"><a href="#works">See my work</a></li>
            <li className="cursor-pointer mb-1"><a href="#contact">Hire me</a></li>
          </ul>
        </div>

        <div>
          <ul>
            <li className="cursor-pointer mb-1"><a href="https://github.com/aayushmaan-54" target="blank">GitHub</a></li>
            <li className="cursor-pointer mb-1"><a href="https://x.com/aayushmaan54" target="blank">X</a></li>
            <li className="cursor-pointer mb-1"><a href="https://www.linkedin.com/in/aayushmaan54/" target="blank">LinkedIn</a></li>
            <li className="cursor-pointer mb-1"><a href="mailto:aayushmaan.sooni54@gmail.com" target="blank">G-Mail</a></li>
          </ul>
        </div>
        </div>
        <div className="text-center px-2">
          <p>
            Designed & Built with <i className="fa fa-heart pulse"></i> by Aayushmaan Soni.
          </p>
        </div>
      </aside>
  )
}