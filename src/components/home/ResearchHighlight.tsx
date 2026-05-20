import { motion } from 'framer-motion';
import { Shield, MapPin, Building2, Scale, Leaf, TrendingUp, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { researchAreas } from '@/data/research';

const iconMap: Record<string, React.ElementType> = {
  Shield, MapPin, Building2, Scale, Leaf, TrendingUp,
};

export default function ResearchHighlight() {
  const top3 = researchAreas.slice(0, 3);

  return (
    <section style={{ padding: '120px 24px', background: '#F8F7F3' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <ScrollReveal>
          <div style={{ textAlign: 'center', marginBottom: '72px' }}>
            <SectionLabel centered>Research Excellence</SectionLabel>
            <h2 style={{
              fontFamily: "'Lora', serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3.5vw, 2.8rem)',
              color: '#0A1535',
              margin: '0 auto',
              maxWidth: '600px',
              lineHeight: 1.2,
            }}>
              Advancing Knowledge at the Frontiers of{' '}
              <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>World Affairs</em>
            </h2>
          </div>
        </ScrollReveal>

        {/* 3-card grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px', marginBottom: '60px' }}>
          {top3.map((area, i) => {
            const Icon = iconMap[area.icon];
            return (
              <ScrollReveal key={area.id} delay={i * 0.12}>
                <motion.div
                  style={{
                    background: '#FFFFFF',
                    borderRadius: '20px',
                    overflow: 'hidden',
                    boxShadow: '0 4px 24px rgba(10,21,53,0.07)',
                    cursor: 'pointer',
                  }}
                  whileHover={{ y: -8, boxShadow: '0 20px 60px rgba(10,21,53,0.14)' }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Top accent bar */}
                  <div style={{ height: '4px', background: 'linear-gradient(90deg, #C9A84C, #DDB96A)' }} />

                  <div style={{ padding: '36px' }}>
                    {/* Icon */}
                    <div style={{
                      width: '56px', height: '56px', borderRadius: '14px',
                      background: 'rgba(10,21,53,0.06)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      marginBottom: '24px',
                    }}>
                      {Icon && <Icon size={24} color="#0A1535" />}
                    </div>

                    <h3 style={{
                      fontFamily: "'Lora', serif",
                      fontWeight: 700, fontSize: '1.25rem',
                      color: '#0A1535', margin: '0 0 12px', lineHeight: 1.25,
                    }}>
                      {area.title}
                    </h3>

                    <p style={{
                      fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#6b6b66',
                      lineHeight: 1.7, marginBottom: '24px',
                    }}>
                      {area.description}
                    </p>

                    {/* Tags */}
                    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '24px' }}>
                      {area.tags.map(t => (
                        <span key={t} style={{
                          padding: '3px 10px', borderRadius: '9999px',
                          fontSize: '11px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
                          background: 'rgba(201,168,76,0.1)',
                          color: '#C9A84C',
                          border: '1px solid rgba(201,168,76,0.2)',
                        }}>
                          {t}
                        </span>
                      ))}
                    </div>

                    {/* Stats row */}
                    <div style={{ display: 'flex', gap: '24px', borderTop: '1px solid #E8E8E4', paddingTop: '16px' }}>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#999' }}>
                        <strong style={{ color: '#0A1535' }}>{area.facultyCount}</strong> faculty
                      </span>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#999' }}>
                        <strong style={{ color: '#0A1535' }}>{area.publications}</strong> publications
                      </span>
                    </div>
                  </div>
                </motion.div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* View all link */}
        <ScrollReveal>
          <div style={{ textAlign: 'center' }}>
            <Link to="/research" style={{ textDecoration: 'none' }}>
              <motion.span
                style={{
                  display: 'inline-flex', alignItems: 'center', gap: '8px',
                  fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px',
                  color: '#0A1535', border: '1.5px solid rgba(10,21,53,0.25)',
                  padding: '12px 28px', borderRadius: '6px',
                }}
                whileHover={{ background: '#0A1535', color: '#F8F7F3', borderColor: '#0A1535' }}
                transition={{ duration: 0.2 }}
              >
                View All Research Areas <ArrowRight size={15} />
              </motion.span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
