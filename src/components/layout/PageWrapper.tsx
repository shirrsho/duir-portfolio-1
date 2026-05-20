import { motion } from 'framer-motion';
import type { ReactNode } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';

interface PageWrapperProps {
  children: ReactNode;
  fullWidthHero?: boolean;
}

export default function PageWrapper({ children, fullWidthHero = false }: PageWrapperProps) {
  return (
    // Outer wrapper has NO opacity animation — the curtain handles everything.
    // If the wrapper faded out it would pull the curtain with it, making exit look blue.
    <motion.div style={{ minHeight: '100vh', position: 'relative' }}>
      {/* Black glass curtain — wipes down on exit, pulls up on enter */}
      <motion.div
        initial={{ scaleY: 1, transformOrigin: 'top' }}
        // animate={{
        //   scaleY: 0,
        //   transformOrigin: 'top',
        //   transition: { duration: 0.52, ease: [0.76, 0, 0.24, 1], delay: 0.04 },
        // }}
        // exit={{
        //   scaleY: 1,
        //   transformOrigin: 'bottom',
        //   transition: { duration: 0.44, ease: [0.76, 0, 0.24, 1] },
        // }}
        // style={{
        //   position: 'fixed',
        //   inset: 0,
        //   zIndex: 9999,
        //   background: 'rgba(0, 0, 0, 0.52)',
        //   backdropFilter: 'blur(20px) grayscale(1)',
        //   WebkitBackdropFilter: 'blur(20px) grayscale(1)',
        //   pointerEvents: 'none',
        // }}
      />

      <Navbar />
      <main style={{ paddingTop: fullWidthHero ? 0 : '72px' }}>
        {children}
      </main>
      <Footer />
    </motion.div>
  );
}
