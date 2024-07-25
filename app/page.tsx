'use client'
import React from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-gray-200">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4 relative"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Welcome to My Portfolio
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          A showcase of my work and projects
        </motion.p>
        <div className="flex items-center space-x-6 mt-8">
          <motion.a
            href="https://github.com/ryosaputra"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#232323' }}
            whileTap={{ scale: 0.9, color: '#ffff' }}
            className="transition-transform duration-200"
          >
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </motion.a>
          <motion.a
            href="https://www.linkedin.com/in/ryo-effendi-3bb5422b0/"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.2, color: '#0077b5' }}
            whileTap={{ scale: 0.9, color: '#005582' }}
            className="transition-transform duration-200"
          >
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </motion.a>
          {/* Tambahkan ikon atau link sosial media lainnya di sini */}
        </div>
      </main>
    </div>
  );
};

export default page;
