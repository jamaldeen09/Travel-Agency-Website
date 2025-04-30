import React, { useState, useEffect } from 'react';

const Typewriter = ({ text = '', speed = 100 }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [index, setIndex] = useState(0);

  useEffect(() => {
    if (index < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText((prev) => prev + text[index]);
        setIndex(index + 1);
      }, speed);
      return () => clearTimeout(timeout);
    }
  }, [index, text, speed]);

  return (
    <h1 className="text-3xl font-bold text-white whitespace-pre-wrap">
      {displayedText}
      <span className="border-r-2 border-white animate-pulse ml-1" />
    </h1>
  );
};

export default Typewriter;
