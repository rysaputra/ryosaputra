'use client'
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import { motion, useAnimation, useInView, stagger } from 'framer-motion';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState<string>('');
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true });

  useEffect(() => {
    const menuAnimations = isOpen
      ? {
          nav: { x: 0, opacity: 1 },
          li: { scale: 1, opacity: 1, filter: 'blur(0px)' },
        }
      : {
          nav: { x: '100%', opacity: 0 },
          li: { scale: 0.5, opacity: 0, filter: 'blur(10px)' },
        };

    controls.start({
      x: menuAnimations.nav.x,
      opacity: menuAnimations.nav.opacity,
      transition: { duration: 0.6, ease: [0.08, 0.65, 0.53, 0.96] },
    });

    controls.start({
      scale: menuAnimations.li.scale,
      opacity: menuAnimations.li.opacity,
      filter: menuAnimations.li.filter,
      transition: { delay: 0.1, staggerChildren: 0.05 },
    });
  }, [isOpen, controls]);

  return (
    <nav className="bg-gray-900 text-gray-200 p-4 sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between">
        <Link href={"/"}>
        <h1 className="text-2xl font-bold hover:text-white">Ryo Effendi</h1>
        </Link>
        <div className="hidden lg:flex space-x-4">
          {['', 'About', 'Project', 'Contact'].map((text, index) => (
            <motion.span
              key={index}
              onClick={() => setSelected(text.toLowerCase())}
              whileHover={{ scale: 1.1, color: '#1E90FF' }}
              whileTap={{ scale: 0.9 }}
              className={`relative transition-transform duration-200 ${
                selected === text.toLowerCase() ? 'text-blue-500' : 'pt-2'
              }`}
            >
              <Link href={`/${text.toLowerCase()}`}>
                <span className="relative z-10">{text}</span>
              </Link>
              {selected === text.toLowerCase() && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                  style={{ zIndex: -1 }}
                />
              )}
            </motion.span>
          ))}
          <div className="flex items-center">
            <motion.a
              href="https://github.com/rysaputra"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, color: '#1E90FF' }}
              whileTap={{ scale: 0.9 }}
              className="transition-transform duration-200"
            >
              <FontAwesomeIcon icon={faGithub} size="lg" />
            </motion.a>
          </div>
        </div>
        <div className="lg:hidden flex items-center z-10">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-200 hover:text-blue-500 focus:outline-none"
          >
            <FontAwesomeIcon icon={isOpen ? faTimes : faBars} size="lg" />
          </button>
        </div>
      </div>
      <div
        className={`fixed inset-0 bg-gray-900 bg-opacity-90 transition-transform transform ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        } lg:translate-x-0 lg:hidden`}
        ref={ref}
      >
        <motion.div
          className="flex flex-col text-center items-center justify-center h-full space-y-8"
          initial={{ x: '100%', opacity: 0 }}
          animate={{ x: isOpen ? '0%' : '100%', opacity: isOpen ? 1 : 0 }}
          transition={{ duration: 0.6, ease: [0.08, 0.65, 0.53, 0.96] }}
        >
          <motion.ul
            className="flex flex-col space-y-6 text-xl"
            initial={{ scale: 0.5, opacity: 0, filter: 'blur(10px)' }}
            animate={controls}
          >
            {['', 'About', 'Project', 'Contact'].map((text, index) => (
              <motion.span
                key={index}
                onClick={() => {
                  setSelected(text.toLowerCase());
                  setIsOpen(false); // Close the menu when a link is clicked
                }}
                whileHover={{ scale: 0.5, color: '#1E90FF' }}
                whileTap={{ scale: 0.9 }}
                className={`relative transition-transform duration-200 ${
                  selected === text.toLowerCase() ? 'text-blue-500' : ''
                }`}
              >
                <Link href={`/${text.toLowerCase()}`}>
                  <span className="relative z-10">{text}</span>
                </Link>
                {selected === text.toLowerCase() && (
                  <motion.div
                    layoutId="underline"
                    className="absolute bottom-0 left-0 right-0 h-1 bg-blue-500"
                    style={{ zIndex: -1 }}
                  />
                )}
              </motion.span>
            ))}
          </motion.ul>
          <div className="flex justify-center">
            <motion.a
              href="https://github.com/rysaputra"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 0.5, color: '#1E90FF' }}
              whileTap={{ scale: 0.9 }}
              className="transition-transform duration-200"
            >
              <FontAwesomeIcon icon={faGithub} size="2x" />
            </motion.a>
          </div>
        </motion.div>
      </div>
    </nav>
  );
};

export default Navbar;
