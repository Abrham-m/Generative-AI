import React, { useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";

const TypewriterEffect = ({ text }) => {
  const ref = useRef(null);

  useEffect(() => {
    new Typewriter(ref.current, {
      strings: text.split(" "),
      autoStart: true,
      loop: false,
    });
  }, [text]);

  return <div ref={ref}></div>;
};

export default TypewriterEffect;
