'use client';
import React, { useState, useEffect } from 'react';

const TypingEffect = ({ phrases }) => {
    const [text, setText] = useState('');
    const [isDeleting, setIsDeleting] = useState(false);
    const [loopNum, setLoopNum] = useState(0);
    const [typingSpeed, setTypingSpeed] = useState(100);

  
    useEffect(() => {
        const handleTyping = () => {
          const i = loopNum % phrases.length;
          const fullPhrase = phrases[i];
      
          if (isDeleting) {
            setText(fullPhrase.substring(0, text.length - 1));
            setTypingSpeed(50);
          } else {
            setText(fullPhrase.substring(0, text.length + 1));
            setTypingSpeed(100);
          }
      
          if (!isDeleting && text === fullPhrase) {
            setTimeout(() => setIsDeleting(true), 1000);
          } else if (isDeleting && text === '') {
            setIsDeleting(false);
            setLoopNum(loopNum + 1);
          }
    };
  
      const timer = setTimeout(handleTyping, typingSpeed);
      return () => clearTimeout(timer);
    }, [text, isDeleting, loopNum]); // This effect depends on the text, isDeleting, and loopNum state
  
    return (
      <h1 className=" text-rose-300">{text}<span className="blink">|</span></h1>
    );
  };
  
  export default TypingEffect;