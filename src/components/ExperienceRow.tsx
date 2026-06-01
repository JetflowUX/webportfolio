import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
interface ExperienceProps {
  year: string;
  role: string;
  company: string;
  location: string;
  details: string[];
  isLast?: boolean;
}
export function ExperienceRow({
  year,
  role,
  company,
  location,
  details,
  isLast
}: ExperienceProps) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div
      className={`group relative py-8 cursor-none hover-target ${!isLast ? 'border-b border-white/10' : ''}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}>
      
      <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-4 md:gap-8 relative z-10">
        <div className="font-mono text-sm text-muted w-32 shrink-0">{year}</div>

        <div className="flex-grow">
          <h3 className="font-serif text-3xl md:text-4xl group-hover:text-accent transition-colors duration-300">
            {role}
          </h3>
          <div className="font-sans text-lg text-foreground/80 mt-1">
            {company}
          </div>
        </div>

        <div className="font-mono text-xs text-muted uppercase tracking-widest text-left md:text-right w-32 shrink-0">
          {location}
        </div>
      </div>

      <AnimatePresence>
        {isHovered &&
        <motion.div
          initial={{
            height: 0,
            opacity: 0
          }}
          animate={{
            height: 'auto',
            opacity: 1
          }}
          exit={{
            height: 0,
            opacity: 0
          }}
          transition={{
            duration: 0.4,
            ease: [0.16, 1, 0.3, 1]
          }}
          className="overflow-hidden">
          
            <div className="pt-6 md:pl-40 pr-8 pb-4">
              <ul className="space-y-3">
                {details.map((detail, idx) =>
              <li
                key={idx}
                className="font-sans text-sm text-muted leading-relaxed flex gap-3">
                
                    <span className="text-accent mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                    <span>{detail}</span>
                  </li>
              )}
              </ul>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}