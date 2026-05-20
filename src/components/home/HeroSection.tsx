import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Globe } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function HeroSection() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });

  const bgY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const textY = useTransform(scrollYProgress, [0, 1], ['0%', '15%']);
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  const containerVariants = {
    hidden: {},
    show: { transition: { staggerChildren: 0.18, delayChildren: 0.3 } },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    show:  { opacity: 1, y: 0, transition: { duration: 0.75, ease: [0.22, 1, 0.36, 1] } },
  };

  return (
    <section
      ref={ref}
      style={{
        position: 'relative',
        height: '100vh',
        minHeight: '700px',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      {/* Parallax Background */}
      <motion.div
        style={{
          position: 'absolute', inset: '-10% 0',
          backgroundImage: `
            linear-gradient(180deg, rgba(10,21,53,0.75) 0%, rgba(10,21,53,0.60) 50%, rgba(10,21,53,0.88) 100%),
            url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=90')
          `,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          y: bgY,
        }}
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />

      {/* Decorative grid overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: 'linear-gradient(rgba(201,168,76,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,168,76,0.03) 1px, transparent 1px)',
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      {/* Decorative corner elements */}
      <div style={{ position: 'absolute', top: '120px', left: '40px', width: '60px', height: '60px', borderTop: '1px solid rgba(201,168,76,0.3)', borderLeft: '1px solid rgba(201,168,76,0.3)' }} />
      <div style={{ position: 'absolute', top: '120px', right: '40px', width: '60px', height: '60px', borderTop: '1px solid rgba(201,168,76,0.3)', borderRight: '1px solid rgba(201,168,76,0.3)' }} />
      <div style={{ position: 'absolute', bottom: '60px', left: '40px', width: '60px', height: '60px', borderBottom: '1px solid rgba(201,168,76,0.3)', borderLeft: '1px solid rgba(201,168,76,0.3)' }} />
      <div style={{ position: 'absolute', bottom: '60px', right: '40px', width: '60px', height: '60px', borderBottom: '1px solid rgba(201,168,76,0.3)', borderRight: '1px solid rgba(201,168,76,0.3)' }} />

      {/* Content */}
      <motion.div
        style={{ position: 'relative', zIndex: 10, textAlign: 'center', padding: '0 24px', maxWidth: '900px', y: textY, opacity }}
      >
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="show"
          style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0' }}
        >
          {/* Globe icon */}
          <motion.div variants={itemVariants} style={{ marginBottom: '20px' }}>
            <div style={{
              width: '52px', height: '52px', borderRadius: '50%',
              border: '1px solid rgba(201,168,76,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              background: 'rgba(201,168,76,0.08)',
            }}>
              <Globe size={22} color="#C9A84C" />
            </div>
          </motion.div>

          {/* Eyebrow */}
          <motion.div variants={itemVariants}>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
              letterSpacing: '0.28em', textTransform: 'uppercase', color: '#C9A84C',
            }}>
              University of Dhaka · Est. 1947
            </span>
            <div style={{ width: '48px', height: '1.5px', background: '#C9A84C', margin: '14px auto' }} />
          </motion.div>

          {/* Main headline */}
          <motion.h1
            variants={itemVariants}
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 900,
              fontSize: 'clamp(2.2rem, 5.5vw, 4.8rem)',
              color: '#F8F7F3',
              lineHeight: 1.05,
              letterSpacing: '-0.02em',
              margin: '0 0 16px 0',
            }}
          >
            Shaping
            <br />
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Global Minds</em>
          </motion.h1>

          {/* Sub-headline */}
          <motion.h2
            variants={itemVariants}
            style={{
              fontFamily: "'Lora', serif",
              fontWeight: 400,
              fontStyle: 'italic',
              fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
              color: 'rgba(248,247,243,0.75)',
              margin: '0 0 32px 0',
              letterSpacing: '0.01em',
            }}
          >
            Department of International Relations
          </motion.h2>

          {/* Tagline */}
          <motion.p
            variants={itemVariants}
            style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px', fontWeight: 400,
              color: 'rgba(248,247,243,0.55)', marginBottom: '44px',
              maxWidth: '480px', lineHeight: 1.6,
            }}
          >
            Advancing scholarship in global affairs, diplomacy, and international law — from Dhaka to the world.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', justifyContent: 'center' }}
          >
            <Link to="/programs" style={{ textDecoration: 'none' }}>
              <motion.span
                style={{
                  display: 'inline-block', padding: '14px 32px',
                  background: '#C9A84C', color: '#0A1535',
                  fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px',
                  borderRadius: '6px', letterSpacing: '0.02em', cursor: 'pointer',
                }}
                whileHover={{ background: '#DDB96A', y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Explore Programs
              </motion.span>
            </Link>
            <Link to="/faculty" style={{ textDecoration: 'none' }}>
              <motion.span
                style={{
                  display: 'inline-block', padding: '14px 32px',
                  background: 'transparent', color: 'rgba(248,247,243,0.9)',
                  border: '1.5px solid rgba(248,247,243,0.35)',
                  fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '14px',
                  borderRadius: '6px', letterSpacing: '0.02em', cursor: 'pointer',
                }}
                whileHover={{ background: 'rgba(248,247,243,0.08)', borderColor: 'rgba(248,247,243,0.7)', y: -2 }}
                whileTap={{ scale: 0.97 }}
                transition={{ duration: 0.2 }}
              >
                Meet Our Faculty
              </motion.span>
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div
        style={{
          position: 'absolute', bottom: '36px', left: '50%', transform: 'translateX(-50%)',
          display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px',
          color: 'rgba(201,168,76,0.6)',
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', letterSpacing: '0.2em', textTransform: 'uppercase' }}>Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
        >
          <ChevronDown size={18} />
        </motion.div>
      </motion.div>

      {/* Bottom fade to next section */}
      <div style={{
        position: 'absolute', bottom: 0, left: 0, right: 0, height: '180px',
        background: 'linear-gradient(to bottom, transparent, rgba(6,14,28,0.85) 70%, #060C22)',
        pointerEvents: 'none',
      }} />
    </section>
  );
}
