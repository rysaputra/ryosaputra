'use client'
import React from 'react'
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-gray-200">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          About Us
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          We are passionate about creating stunning and functional web experiences that help you succeed online.
        </motion.p>
        <div className="flex flex-col md:flex-row items-center justify-center gap-8">
          <motion.div
            className="relative w-96 h-96 rounded-full overflow-hidden"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <Image
              src="/ryo1.png" // Ganti dengan path foto
              alt="Profile"
              layout="fill"
              objectFit="cover"
              className="rounded-full"
            />
          </motion.div>
          <div className="flex flex-col items-start text-left max-w-md">
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
            >
              Our Mission
            </motion.h2>
            <motion.p
              className="text-md md:text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1 }}
            >
              Our mission is to empower businesses and entrepreneurs by delivering innovative and tailored web solutions. We aim to create impactful digital experiences that resonate with your audience and drive success.
            </motion.p>
            <motion.h2
              className="text-2xl md:text-3xl font-semibold mb-2"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.2 }}
            >
              Our Expertise
            </motion.h2>
            <motion.p
              className="text-md md:text-lg mb-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut', delay: 1.4 }}
            >
              We specialize in creating custom websites, e-commerce platforms, and digital marketing solutions. Our team is skilled in modern web technologies, design principles, and strategic thinking to help you achieve your goals.
            </motion.p>
          </div>
        </div>
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
  )
}

export default AboutUs
