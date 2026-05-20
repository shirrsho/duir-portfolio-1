import { motion } from 'framer-motion';
import { Globe, BookOpen, Award, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { programs } from '@/data/programs';

const iconMap: Record<string, React.ElementType> = {
  Globe, BookOpen, Award,
};

const levelColors = {
  undergraduate: { from: '#0A1535', to: '#1E3570' },
  masters:       { from: '#172C60', to: '#0F1D48' },
  phd:           { from: '#060C22', to: '#0A1535' },
};

export default function ProgramsPreview() {
  return (
    <section style={{ padding: '120px 24px', background: '#0A1535' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <SectionLabel centered light>Academic Programs</SectionLabel>
            <h2 style={{
              fontFamily: "'Lora', serif", fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)', color: '#F8F7F3',
              margin: '0 auto', maxWidth: '560px', lineHeight: 1.2,
            }}>
              Pathways to a{' '}
              <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Global Career</em>
            </h2>
          </div>
        </ScrollReveal>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '56px' }}>
          {programs.map((prog, i) => {
            const Icon = iconMap[prog.icon] || Globe;
            const colors = levelColors[prog.level];
            return (
              <ScrollReveal key={prog.id} delay={i * 0.12}>
                <motion.div
                  style={{
                    background: `linear-gradient(145deg, ${colors.from}, ${colors.to})`,
                    border: '1px solid rgba(201,168,76,0.18)',
                    borderRadius: '20px',
                    padding: '40px 32px',
                    height: '100%',
                    display: 'flex', flexDirection: 'column',
                    cursor: 'pointer',
                  }}
                  whileHover={{ borderColor: 'rgba(201,168,76,0.5)', y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Icon + badge */}
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '12px',
                      background: 'rgba(201,168,76,0.15)',
                      border: '1px solid rgba(201,168,76,0.25)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <Icon size={22} color="#C9A84C" />
                    </div>
                    <span style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600,
                      color: '#C9A84C', letterSpacing: '0.1em', textTransform: 'uppercase',
                      padding: '4px 12px', borderRadius: '9999px',
                      background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.2)',
                    }}>
                      {prog.shortTitle}
                    </span>
                  </div>

                  <h3 style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: 700, fontSize: '1.25rem',
                    color: '#F8F7F3', margin: '0 0 12px', lineHeight: 1.25,
                  }}>
                    {prog.level === 'undergraduate' ? 'Bachelor of Social Science' :
                     prog.level === 'masters' ? 'Master of Social Science' : 'Doctor of Philosophy'}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13px',
                    color: 'rgba(248,247,243,0.55)', lineHeight: 1.65,
                    marginBottom: 'auto', flexGrow: 1,
                  }}>
                    {prog.description.slice(0, 140)}…
                  </p>

                  {/* Details */}
                  <div style={{
                    display: 'flex', gap: '20px',
                    borderTop: '1px solid rgba(201,168,76,0.12)',
                    paddingTop: '20px', marginTop: '24px',
                  }}>
                    <div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Duration</div>
                      <div style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '15px', color: '#F8F7F3' }}>{prog.duration}</div>
                    </div>
                    {prog.credits > 0 && (
                      <div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Credits</div>
                        <div style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '15px', color: '#F8F7F3' }}>{prog.credits}</div>
                      </div>
                    )}
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        <ScrollReveal>
          <div style={{ textAlign: 'center' }}>
            <Link to="/programs" style={{ textDecoration: 'none' }}>
              <motion.span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px',
                  color: '#C9A84C', border: '1.5px solid rgba(201,168,76,0.35)',
                  padding: '13px 32px', borderRadius: '6px',
                }}
                whileHover={{ background: '#C9A84C', color: '#0A1535', borderColor: '#C9A84C' }}
                transition={{ duration: 0.2 }}
              >
                View all programs <ArrowRight size={15} />
              </motion.span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
