'use client';

import { useEffect, useState, useRef } from 'react';

interface TypewriterProps {
  words: string[];
  className?: string;
  typeSpeed?: number;
  deleteSpeed?: number;
  delayBetweenWords?: number;
}

export default function Typewriter({ 
  words, 
  className = '', 
  typeSpeed = 100,
  deleteSpeed = 50,
  delayBetweenWords = 2000 
}: TypewriterProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [showCursor, setShowCursor] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleTyping = () => {
      const currentWord = words[currentWordIndex];
      
      if (isDeleting) {
        setCurrentText(prev => prev.slice(0, -1));
        
        if (currentText === '') {
          setIsDeleting(false);
          setCurrentWordIndex(prev => (prev + 1) % words.length);
          timeoutRef.current = setTimeout(handleTyping, 500);
          return;
        }
        
        timeoutRef.current = setTimeout(handleTyping, deleteSpeed);
      } else {
        setCurrentText(currentWord.slice(0, currentText.length + 1));
        
        if (currentText === currentWord) {
          timeoutRef.current = setTimeout(() => setIsDeleting(true), delayBetweenWords);
          return;
        }
        
        timeoutRef.current = setTimeout(handleTyping, typeSpeed);
      }
    };

    timeoutRef.current = setTimeout(handleTyping, typeSpeed);

    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentText, currentWordIndex, isDeleting, words, typeSpeed, deleteSpeed, delayBetweenWords]);

  useEffect(() => {
    const cursorInterval = setInterval(() => {
      setShowCursor(prev => !prev);
    }, 530);

    return () => clearInterval(cursorInterval);
  }, []);

  return (
    <span className={className}>
      {currentText}
      <span className={`${showCursor ? 'opacity-100' : 'opacity-0'} transition-opacity duration-100`}>
        |
      </span>
    </span>
  );
}