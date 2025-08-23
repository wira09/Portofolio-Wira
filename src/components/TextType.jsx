import React, { useState, useEffect } from 'react';

const TextType = ({ 
  text = ["Text typing effect"], 
  typingSpeed = 1000, 
  pauseDuration = 1000, 
  showCursor = true, 
  cursorCharacter = "|",
  className = "",
  style = {},
  highlightWords = []
}) => {
  const [displayText, setDisplayText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeedState, setTypingSpeedState] = useState(typingSpeed);

  useEffect(() => {
    const handleType = () => {
      const i = loopNum % text.length;
      const fullText = text[i];

      if (isDeleting) {
        // Deleting text
        setDisplayText(fullText.substring(0, currentIndex - 1));
        setCurrentIndex(prev => prev - 1);
        setTypingSpeedState(typingSpeed / 2);
      } else {
        // Typing text
        setDisplayText(fullText.substring(0, currentIndex + 1));
        setCurrentIndex(prev => prev + 1);
        setTypingSpeedState(typingSpeed);
      }

      // Check if word is completed
      if (!isDeleting && currentIndex === fullText.length) {
        // Pause at end of word
        setTimeout(() => setIsDeleting(true), pauseDuration);
      } else if (isDeleting && currentIndex === 0) {
        setIsDeleting(false);
        setLoopNum(prev => prev + 1);
      }
    };

    const timer = setTimeout(handleType, typingSpeedState);
    return () => clearTimeout(timer);
  }, [displayText, currentIndex, isDeleting, loopNum, text, typingSpeed, pauseDuration]);

  // Function to highlight specific words
  const highlightText = (text) => {
    if (highlightWords.length === 0) return text;

    let result = text;
    highlightWords.forEach(word => {
      const regex = new RegExp(`(${word})`, 'gi');
      result = result.replace(regex, '<span class="text-purple-600 font-bold">$1</span>');
    });

    return result;
  };

  // Render text with highlighting
  const renderHighlightedText = () => {
    const highlighted = highlightText(displayText);
    if (highlighted !== displayText) {
      return <span dangerouslySetInnerHTML={{ __html: highlighted }} />;
    }
    return displayText;
  };

  return (
    <h1 
      className={`text-3xl md:text-4xl lg:text-5xl font-bold mb-6 transition-colors duration-300 ${className}`}
      style={style}
    >
      {renderHighlightedText()}
      {showCursor && (
        <span className="animate-pulse text-purple-600">{cursorCharacter}</span>
      )}
    </h1>
  );
};

export default TextType;