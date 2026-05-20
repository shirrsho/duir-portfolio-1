import { motion } from 'framer-motion';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { Link } from 'react-router-dom';
import { alumni } from '@/data/alumni';
import { ArrowRight } from 'lucide-react';

const featured = alumni[0];

export default function AlumniQuote() {
  return (
    <section style={{
      position: 'relative',
      background: '#0A1535',
      padding: '120px 24px',
      overflow: 'hidden',
    }}>
      {/* Decorative elements */}
      <div style={{
        position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(201,168,76,0.06) 0%, transparent 60%), radial-gradient(circle at 80% 50%, rgba(201,168,76,0.04) 0%, transparent 60%)',
        pointerEvents: 'none',
      }} />

      <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center', position: 'relative', zIndex: 1 }}>
        {/* Large decorative quote mark */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          style={{
            fontFamily: "'Lora', serif",
            fontSize: '180px', lineHeight: 0.8,
            color: 'rgba(201,168,76,0.12)',
            userSelect: 'none',
            marginBottom: '-40px',
          }}
        >
          "
        </motion.div>

        <ScrollReveal delay={0.2}>
          <blockquote style={{
            fontFamily: "'Lora', serif",
            fontStyle: 'italic',
            fontWeight: 500,
            fontSize: 'clamp(1.25rem, 2.5vw, 1.8rem)',
            color: 'rgba(248,247,243,0.92)',
            lineHeight: 1.55,
            margin: '0 0 40px',
          }}>
            {featured.quote}
          </blockquote>
        </ScrollReveal>

        <ScrollReveal delay={0.35}>
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', marginBottom: '56px' }}>
            <div style={{ width: '40px', height: '1.5px', background: '#C9A84C', marginBottom: '16px' }} />
            <span style={{
              fontFamily: "'Lora', serif",
              fontWeight: 700, fontSize: '1.1rem', color: '#F8F7F3',
            }}>
              {featured.name}
            </span>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12.5px',
              color: 'rgba(201,168,76,0.8)', letterSpacing: '0.05em',
            }}>
              {featured.currentRole} · {featured.organization}
            </span>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '12px',
              color: 'rgba(248,247,243,0.4)',
            }}>
              {featured.batch} · {featured.degree}
            </span>
          </div>
        </ScrollReveal>

        <ScrollReveal delay={0.5}>
          <Link to="/alumni" style={{ textDecoration: 'none' }}>
            <motion.span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '13.5px',
                color: '#C9A84C', border: '1.5px solid rgba(201,168,76,0.4)',
                padding: '12px 28px', borderRadius: '6px',
              }}
              whileHover={{ background: '#C9A84C', color: '#0A1535', borderColor: '#C9A84C' }}
              transition={{ duration: 0.2 }}
            >
              Meet our alumni <ArrowRight size={14} />
            </motion.span>
          </Link>
        </ScrollReveal>
      </div>
    </section>
  );
}
