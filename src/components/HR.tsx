import { Star } from "../Exports";

export const HR = ({ text }: { text: string }) => {
  return (
    <div className="hr-container relative my-8 mb-24" id="about">
      <div className="bg-main dark:bg-lhtMain w-full h-[1.5px]"></div>
      <div className="hr w-fit absolute right-[11%] bg-lhtMain dark:bg-main  top-[-655%] noiseBG px-2 bg-[url('./src/assets/images/noise.png')] bg-blend-difference ">
        <Star />
        <h1 className="inline-block font-cnl text-main dark:text-lhtMain px-2 hrText">{text}</h1>
        <Star />

      </div>
    </div>
  );
};