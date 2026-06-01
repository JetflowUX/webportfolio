import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
export function CustomCursor() {
  const [mousePosition, setMousePosition] = useState({
    x: 0,
    y: 0
  });
  const [isHovering, setIsHovering] = useState(false);
  useEffect(() => {
    const updateMousePosition = (e: MouseEvent) => {
      setMousePosition({
        x: e.clientX,
        y: e.clientY
      });
    };
    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (
      target.tagName.toLowerCase() === 'a' ||
      target.tagName.toLowerCase() === 'button' ||
      target.closest('a') ||
      target.closest('button') ||
      target.classList.contains('hover-target'))
      {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };
    window.addEventListener('mousemove', updateMousePosition);
    window.addEventListener('mouseover', handleMouseOver);
    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);
  return (
    <>
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[100] h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 0 : 1
        }}
        transition={{
          type: 'tween',
          ease: 'backOut',
          duration: 0.1
        }} />
      
      <motion.div
        className="pointer-events-none fixed left-0 top-0 z-[99] h-10 w-10 -translate-x-1/2 -translate-y-1/2 rounded-full border border-accent mix-blend-difference"
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
          scale: isHovering ? 1.5 : 1,
          backgroundColor: isHovering ?
          'rgba(212, 255, 51, 0.2)' :
          'rgba(212, 255, 51, 0)'
        }}
        transition={{
          type: 'spring',
          stiffness: 150,
          damping: 15,
          mass: 0.5
        }} />
      
    </>);

}