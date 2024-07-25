'use client'
import React from 'react'
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Projects = () => {
  // Daftar proyek dengan link dan gambar preview
  const projects = [
    {
      name: 'Project One',
      link: 'https://cafe-khaki-three.vercel.app/',
      preview: '/ss.png', // Path relative untuk gambar dalam folder public
    },
    {
      name: 'Project Two',
      link: 'https://portfolio-tawny-theta-27.vercel.app/',
      preview: '/ryo.png', // Path relative untuk gambar dalam folder public
    },
    // Tambahkan proyek lain sesuai kebutuhan
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-gray-200">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          My Projects
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          A showcase of my work and projects
        </motion.p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="relative group"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3 }}
            >
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                <div className="relative w-full h-60">
                  <Image
                    src={project.preview}
                    alt={project.name}
                    width={500}
                    height={500}
                    objectFit="cover"
                    className="rounded-lg"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg">
                    <p className="text-white text-lg font-bold">{project.name}</p>
                  </div>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
        <div className="flex items-center space-x-6 mt-8">
          <motion.a
            href="https://github.com/rysaputra"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#232323' }}
            whileTap={{ scale: 0.9, color: '#ffff' }}
            className="transition-transform duration-200"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </motion.a>
          {/* Tambahkan ikon atau link sosial media lainnya di sini */}
        </div>
      </main>
    </div>
  )
}

export default Projects
