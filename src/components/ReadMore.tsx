import { useState } from "react";

export const ReadMore = ({ children }: { children: string }) => {

  const text = children;
  const [isReadMore, setIsReadMore] = useState(true);

  const toggleReadMore = () => {
    setIsReadMore(!isReadMore);
  };

  return (
    <>
      <div className="pb-5">
        <p className="text-start text-sm">
          {isReadMore ? text.slice(0, 100) : text}
          <span
            onClick={toggleReadMore}
            className="font-cnl dark:text-oyellow text-cherryRed cursor-pointer underline"
          >
            {isReadMore ? "...read more" : " ...read less"}
          </span>
        </p>
      </div>
    </>
  )
}