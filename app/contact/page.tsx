'use client'
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

// Menentukan tipe state untuk formulir
interface FormState {
  name: string;
  email: string;
  message: string;
}

const ContactMe: React.FC = () => {
  const [formState, setFormState] = useState<FormState>({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<string>('');

  // Menentukan tipe parameter e sebagai React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormState({ ...formState, [name]: value });
  };

  // Menentukan tipe parameter e sebagai React.FormEvent<HTMLFormElement>
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('Sending...');

    // Simulate sending form data
    setTimeout(() => {
      setStatus('Message sent! I will get back to you soon.');
      setFormState({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-800 text-gray-200">
      <main className="flex-1 flex flex-col items-center justify-center text-center px-4 py-10">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          Contact Me
        </motion.h1>
        <motion.p
          className="text-lg md:text-2xl mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.5 }}
        >
          I’d love to hear from you! Feel free to reach out to me using the form below or through my social media channels.
        </motion.p>
        <motion.div
          className="flex flex-col md:flex-row items-center justify-center gap-8 mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.7 }}
        >
          <a href="mailto:ryosaputraofficial@gmail.com" className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors duration-300">
            <FontAwesomeIcon icon={faEnvelope} size="2x" />
            <span>Email Me</span>
          </a>
          <a href="https://github.com/rysaputra" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors duration-300">
            <FontAwesomeIcon icon={faGithub} size="2x" />
            <span>GitHub</span>
          </a>
          <a href="https://www.linkedin.com/in/ryo-effendi-3bb5422b0/" target="_blank" rel="noopener noreferrer" className="flex items-center space-x-2 text-gray-300 hover:text-gray-100 transition-colors duration-300">
            <FontAwesomeIcon icon={faLinkedin} size="2x" />
            <span>LinkedIn</span>
          </a>
        </motion.div>
        <motion.form
          className="max-w-lg w-full space-y-4 mx-auto"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut', delay: 0.9 }}
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            name="name"
            value={formState.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400"
            required
          />
          <input
            type="email"
            name="email"
            value={formState.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400"
            required
          />
          <textarea
            name="message"
            value={formState.message}
            onChange={handleChange}
            placeholder="Your Message"
            className="w-full p-3 rounded-md bg-gray-700 text-gray-200 placeholder-gray-400"
            required
          />
          <button
            type="submit"
            className="w-full p-3 bg-gray-600 text-gray-200 rounded-md hover:bg-gray-500 transition-colors duration-300"
          >
            Send Message
          </button>
          {status && (
            <p className="text-lg font-semibold text-gray-300 mt-4">{status}</p>
          )}
        </motion.form>
      </main>
    </div>
  );
};

export default ContactMe;
