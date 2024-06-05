import { useEffect, useState } from "react";

type useTyperPropType = {
  words: string[];
  delay: number;
  deleteDelay: number;
};

export const useTyper = ({ words, delay, deleteDelay }: useTyperPropType) => {
  const [letterIndex, setLetterIndex] = useState(0);
  const [wordIndex, setWordIndex] = useState(0);
  const [typingWord, setTypingWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  const startTyping = () => {
    let timeout: ReturnType<typeof setTimeout> | null = null;

    const typeWriter = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        if (letterIndex === 0) {
          setIsDeleting(false);
          setWordIndex((prevWordIndex) => (prevWordIndex + 1) % words.length);
        } else {
          setTypingWord(currentWord.slice(0, letterIndex - 1));
          setLetterIndex(letterIndex - 1);
          timeout = setTimeout(typeWriter, delay);
        }
      } else {
        if (letterIndex === currentWord.length) {
          timeout = setTimeout(() => {
            setIsDeleting(true);
            timeout = setTimeout(typeWriter, delay);
          }, deleteDelay);
        } else {
          setTypingWord(currentWord.slice(0, letterIndex + 1));
          setLetterIndex(letterIndex + 1);
          timeout = setTimeout(typeWriter, delay);
        }
      }
    };

    timeout = setTimeout(typeWriter, delay);

    return () => {
      if (timeout) {
        clearTimeout(timeout);
      }
    };
  };

  useEffect(() => {
    const cleanup = startTyping();
    return cleanup;
  }, [words, delay, deleteDelay]);

  return typingWord;
};
