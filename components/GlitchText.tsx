import React, { useState, useEffect } from 'react';

interface GlitchTextProps {
  text: string;
  className?: string;
  tag?: 'h1' | 'h2' | 'h3' | 'h4' | 'span' | 'p' | 'div';
  triggerOnLoad?: boolean; // If true, automatically decodes on mount
}

// Custom chars reflecting "invisible/cracks/residue" theme
const glitchChars = ".:-~*+";

const GlitchText: React.FC<GlitchTextProps> = ({ 
  text, 
  className = "", 
  tag: Tag = 'span',
  triggerOnLoad = true 
}) => {
  const [displayText, setDisplayText] = useState(text);
  const [isHovering, setIsHovering] = useState(false);
  const [hasLoaded, setHasLoaded] = useState(!triggerOnLoad);

  // Decoding Effect Function
  const playDecodeAnimation = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      setDisplayText(prev => 
        text.split("").map((letter, index) => {
          if (index < iterations) {
            return text[index];
          }
          return glitchChars[Math.floor(Math.random() * glitchChars.length)];
        }).join("")
      );

      if (iterations >= text.length) {
        clearInterval(interval);
      }
      
      iterations += 1 / 2; // Speed of decoding
    }, 40);

    return () => clearInterval(interval);
  };

  // Trigger on Mount
  useEffect(() => {
    if (triggerOnLoad && !hasLoaded) {
      const cleanup = playDecodeAnimation();
      setHasLoaded(true);
      return cleanup;
    }
  }, [triggerOnLoad, hasLoaded, text]);

  // Hover Effect: "The more you try to see, the more it disappears"
  // We add a blur effect via CSS class when hovering
  
  return (
    <Tag 
      className={`${className} inline-block cursor-default transition-all duration-300 
        ${isHovering ? 'animate-vibrate blur-[1px] opacity-70' : 'blur-0 opacity-100'}`}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      {displayText}
    </Tag>
  );
};

export default GlitchText;