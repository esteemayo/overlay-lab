'use client';

import { motion } from 'framer-motion';
import { useEffect, useRef } from 'react';

import './SuccessScreen.scss';

const SuccessScreen = () => {
  const headingRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    headingRef.current?.focus()
  }, []);

  return (
    <motion.section
      initial={{ opacity: 0, y: 20, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
      className='success-screen fade-in'
      aria-labelledby='success-screen-heading'
      aria-describedby='success-screen-desc'
      aria-live='polite'
      role='status'
    >
      <div className='success-screen__wrapper'>
        <motion.div
          initial={{ scale: 0, rotate: -20 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{
            type: 'spring',
            stiffness: 260,
            damping: 15,
            delay: 0.15,
          }}
          className='success-screen__wrapper--icon'
          aria-hidden='true'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            role='img'
            aria-hidden='true'
            focusable='false'
            fill='none'
            viewBox='0 0 52 52'
            width='52'
            height='52'
          >
            <motion.circle
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{ duration: 0.5 }}
              cx='26'
              cy='26'
              r='25'
              stroke='#22c55e'
              strokeWidth='2.5'
            />

            <motion.path
              initial={{ pathLength: 0 }}
              animate={{ pathLength: 1 }}
              transition={{
                duration: 0.35,
                delay: 0.45,
              }}
              fill='none'
              d='M14 27L22 35L38 18'
              stroke='#22c55e'
              strokeWidth='3'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </motion.div>

        <motion.h2
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35 }}
          ref={headingRef}
          id='success-screen-heading'
          className='success-screen__wrapper--heading'
          tabIndex={-1}
        >
          Transfer Successful 🎉
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.45 }}
          id='success-screen-desc'
          className='success-screen__wrapper--desc'
        >
          Your transaction was processed successfully.
        </motion.p>
      </div>
    </motion.section>
  );
};

export default SuccessScreen;
