import { useTyper, HR, LinkedIn, X, Gmail, Github, ArrowDown } from "../Exports";

export const Hero = () => {

  return (
    <header id="about">
      <HR text={"About"} />
      <div className="pl-24 heroContainer">
        <div className="pl-8 relative vtContainer">
          <div className="dark:text-oyellow text-bgreen inline absolute whitespace-nowrap left-0 top-full origin-top-left -rotate-90 cursor-vertical-text text-xs vtText">
            Front-End Web Dev
          </div>
          <div>
            <h1 className="font-cnli dark:text-secondary text-[#636258] text-3xl pb-1 heroFirst mb-3">Hello I am,</h1>
            <h1 className="font-cbi dark:text-primary text-main text-6xl name heroSecond pr-4 pb-4">Aayushmaan Soni</h1>
          </div>
          <div className="typer font-cb dark:text-[#DFD8C8] text-[#52514c] text-2xl font-medium heroThird">
            <h1>I build{" "}
              {useTyper({
                words: [
                  "Modern Web Applications",
                  "Responsive Layouts",
                  "pixel-perfect UIs",
                  "things for web",
                ],
                delay: 100,
                deleteDelay: 1500
              })}
            </h1>
            <span className="cursor dark:animate-darkBlink animate-lightBlink text-2xl heroThird">|</span>
          </div>
        </div>
        <div className="flex items-baseline gap-6 pt-6 socialContainer">
          <a className="linkedIN socialCont" href="https://www.linkedin.com/in/aayushmaan54/" target="blank">
            <LinkedIn />
          </a>
          <a className="socialCont group" href="https://x.com/aayushmaan54" target="blank">
            <X />
          </a>
          <a className="socialCont" href="mailto:aayushmaan.soni54@gmail.com" target="blank">
            <Gmail />
          </a>
          <a className="socialCont group" href="https://github.com/aayushmaan-54" target="blank">
            <Github />
          </a>
        </div>
        <div className="flex items-center gap-4 mt-10"> 
          <a className="font-cnl bg-yorange focus:ring-4 focus:outline-none focus:ring-[#994a289c] font-medium h-fit rounded-lg px-6 py-[0.45rem] hover:bg-[#994a28] transition-all ease-in duration-75 btn dark:text-lhtMain text-lhtMain cursor-pointer" href="#works">See my work</a>
          <a className="font-cnl border-2 border-yorange transition-all ease-in duration-75 hover:bg-yorange focus:ring-4 focus:outline-none focus:ring-[#994a289c] rounded-lg px-8 py-[0.4rem] h-fit btn dark:text-lhtMain hover:text-lhtMain cursor-pointer" href="#contact">Hire me</a>
        </div>
        <div className="scrollDown relative flex items-center justify-end -pr-10">
          <p className="font-nb dark:text-oyellow text-bgreen inline origin-top-left cursor-vertical-text rotate-90 whitespace-nowrap absolute">
            Scroll Down <span><ArrowDown /></span>
          </p>
        </div>
      </div >
    </header>
  )
}