import { FC, useEffect, useState } from "react";

type Props = {
  className: string,
  text: string,
  delay: number // in ms
}

let interval: number;
export const TypeWriter: FC<Props> = ({ className, text, delay }) => {
  const [curText, setCurText] = useState('');
  const [charIndex, setCharIndex] = useState(0);
  
  const reset = () => {
    setCurText('');
    setCharIndex(0);
  }
  
  useEffect(() => {
    reset();
  }, [text])
  
  useEffect(() => {
    const charUpdater = () => {
      if (charIndex >= text.length) {
        clearInterval(interval);
      } else {
        setCurText(prev => prev + text[charIndex]);
        setCharIndex(prev => prev + 1);
      }
    };

    if (text) {
      interval = setInterval(charUpdater, delay)
    }
    return () => {
      clearInterval(interval);
    }
  }, [charIndex, text, delay])
  return <div className={className}>
    {curText}
  </div>
};
