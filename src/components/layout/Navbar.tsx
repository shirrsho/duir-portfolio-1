import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { to: '/about',    label: 'About' },
  { to: '/faculty',  label: 'Faculty' },
  { to: '/programs', label: 'Programs' },
  { to: '/research', label: 'Research' },
  { to: '/news',     label: 'News & Events' },
  { to: '/alumni',   label: 'Alumni' },
  { to: '/contact',  label: 'Contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <>
      <motion.nav
        animate={scrolled ? 'scrolled' : 'top'}
        variants={{
          top:     { backgroundColor: 'rgba(10,21,53,0)', backdropFilter: 'blur(0px)', borderBottomColor: 'rgba(201,168,76,0)' },
          scrolled:{ backgroundColor: 'rgba(10,21,53,0.92)', backdropFilter: 'blur(20px)', borderBottomColor: 'rgba(201,168,76,0.15)' },
        }}
        transition={{ duration: 0.3 }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 100,
          borderBottom: '1px solid transparent',
        }}
      >
        <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '72px' }}>
          {/* Logo */}
          <Link to="/" style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
            <div style={{
              width: '38px', height: '38px', borderRadius: '8px',
              background: 'linear-gradient(135deg, #0A1535, #172C60)',
              border: '1px solid rgba(201,168,76,0.4)',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              flexShrink: 0,
            }}>
              <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '14px', color: '#C9A84C' }}>IR</span>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', lineHeight: 1.1 }}>
              <span style={{ fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13px', color: '#C9A84C', letterSpacing: '0.05em', textTransform: 'uppercase' }}>Dept. of</span>
              <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '15px', color: '#F8F7F3', letterSpacing: '-0.01em' }}>International Relations</span>
            </div>
          </Link>

          {/* Desktop Nav */}
          <div style={{ display: 'flex', gap: '2px', alignItems: 'center' }} className="hidden-mobile">
            {navLinks.map(({ to, label }) => (
              <NavLink
                key={to}
                to={to}
                style={{ textDecoration: 'none' }}
              >
                {({ isActive }) => (
                  <motion.span
                    style={{
                      display: 'block',
                      padding: '8px 14px',
                      fontFamily: 'Inter, sans-serif',
                      fontSize: '13.5px',
                      fontWeight: 500,
                      color: isActive ? '#C9A84C' : 'rgba(248,247,243,0.85)',
                      borderRadius: '6px',
                      cursor: 'pointer',
                      position: 'relative',
                    }}
                    whileHover={{ color: '#C9A84C', backgroundColor: 'rgba(201,168,76,0.08)' }}
                    transition={{ duration: 0.15 }}
                  >
                    {label}
                    {isActive && (
                      <motion.div
                        layoutId="nav-indicator"
                        style={{
                          position: 'absolute',
                          bottom: '2px',
                          left: '14px',
                          right: '14px',
                          height: '1.5px',
                          background: '#C9A84C',
                          borderRadius: '1px',
                        }}
                        transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                      />
                    )}
                  </motion.span>
                )}
              </NavLink>
            ))}
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', color: '#F8F7F3', display: 'none' }}
            className="show-mobile"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 99,
              background: '#0A1535',
              display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
              gap: '8px',
            }}
          >
            {navLinks.map(({ to, label }, i) => (
              <motion.div
                key={to}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.06, duration: 0.35 }}
              >
                <NavLink
                  to={to}
                  onClick={() => setMenuOpen(false)}
                  style={({ isActive }) => ({
                    display: 'block',
                    padding: '14px 32px',
                    fontFamily: "'Lora', serif",
                    fontSize: '2rem',
                    fontWeight: 700,
                    color: isActive ? '#C9A84C' : 'rgba(248,247,243,0.9)',
                    textDecoration: 'none',
                    textAlign: 'center',
                  })}
                >
                  {label}
                </NavLink>
              </motion.div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: block !important; }
        }
        @media (min-width: 769px) {
          .show-mobile { display: none !important; }
        }
      `}</style>
    </>
  );
}
