import React, { useState, useRef, useEffect } from 'react'
import { motion } from 'motion/react';

const ProjectCarousel = ({ projects }) => {

  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);

  return (
    <div className="overflow-hidden cursor-grab active:cursor-grabbing">
      <motion.div
        ref={carousel}
        drag="x"
        dragConstraints={{ right: 0, left: -width }}
        className="flex gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="min-w-[300px] md:min-w-[450px] h-[300px] bg-tech-dark/50 border border-purple-500/30 p-6 rounded-sm relative group overflow-hidden"
            whileHover="hovered"
           >
            <motion.div
              variants={{
                hovered: { scale: 1.1, filter: "blur(4px) brightness(0.4)" }
              }}
              transition={{ duration: 0.4 }}
              className="absolute inset-0 bg-cover bg-center w-full h-full"
              style={{
                backgroundImage: `url(${project.image})`,
                backgroundSize: "contain",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
            </motion.div>

            {/* 2. The Text/Link Overlay */}
            <motion.div
              variants={{
                initial: { opacity: 0, y: 20 },
                hovered: { opacity: 1, y: 0 }
              }}
              initial="initial"
              animate="initial"
              whileHover="hovered"
              className="absolute inset-0 flex flex-col items-center justify-center p-6 text-center z-10"
            >
              <h3 className="text-2xl font-bold text-white uppercase tracking-tighter mb-2">
                {project.title}
              </h3>
              <p className="text-gray-300 text-sm font-mono mb-6">
                {project.description}
              </p>

              <a
                href={project.link} 
                className="border border-purple-500 px-6 py-2 text-xs uppercase tracking-[0.2em] text-white hover:bg-purple-500 hover:text-black transition-colors"
              >
                View Project
              </a>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </div>
  )
}

export default ProjectCarousel