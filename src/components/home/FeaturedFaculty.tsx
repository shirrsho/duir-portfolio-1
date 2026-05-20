import { motion } from 'framer-motion';
import { ArrowRight, BookOpen, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { facultyMembers } from '@/data/faculty';

function getInitials(name: string) {
  return name.replace(/^(Prof\.|Dr\.)\s*/gi, '').split(' ').slice(0, 2).map(n => n[0]).join('');
}

const featured = facultyMembers.filter(f => f.featured);

export default function FeaturedFaculty() {
  return (
    <section style={{ padding: '120px 24px', background: '#0A1535' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <SectionLabel light>Our Faculty</SectionLabel>
            <h2 style={{
              fontFamily: "'Lora', serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.6rem)',
              color: '#F8F7F3',
              margin: 0, lineHeight: 1.2,
            }}>
              Distinguished Scholars<br />
              <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>& Researchers</em>
            </h2>
          </div>
          <Link to="/faculty" style={{ textDecoration: 'none' }}>
            <motion.span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '13.5px',
                color: 'rgba(201,168,76,0.8)',
                border: '1px solid rgba(201,168,76,0.3)',
                padding: '10px 20px', borderRadius: '6px',
              }}
              whileHover={{ color: '#C9A84C', borderColor: '#C9A84C', backgroundColor: 'rgba(201,168,76,0.05)' }}
            >
              View all faculty <ArrowRight size={14} />
            </motion.span>
          </Link>
        </div>

        {/* Faculty Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {featured.map((faculty, i) => (
            <ScrollReveal key={faculty.id} delay={i * 0.1}>
              <motion.div
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(201,168,76,0.15)',
                  borderRadius: '16px',
                  padding: '32px',
                  cursor: 'pointer',
                }}
                whileHover={{
                  backgroundColor: 'rgba(201,168,76,0.06)',
                  borderColor: 'rgba(201,168,76,0.35)',
                  y: -6,
                }}
                transition={{ duration: 0.25 }}
              >
                {/* Avatar */}
                <div style={{
                  width: '72px', height: '72px', borderRadius: '50%',
                  background: `linear-gradient(135deg, ${faculty.avatarColor}, #1E3570)`,
                  border: '2px solid rgba(201,168,76,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  marginBottom: '20px',
                }}>
                  <span style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: 700, fontSize: '22px', color: '#C9A84C',
                  }}>
                    {getInitials(faculty.name)}
                  </span>
                </div>

                {/* Info */}
                <div style={{ marginBottom: '4px' }}>
                  <span style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600,
                    letterSpacing: '0.15em', textTransform: 'uppercase',
                    color: '#C9A84C',
                  }}>
                    {faculty.title}{faculty.designation ? ` · ${faculty.designation}` : ''}
                  </span>
                </div>
                <h3 style={{
                  fontFamily: "'Lora', serif",
                  fontWeight: 700, fontSize: '1.2rem',
                  color: '#F8F7F3', margin: '4px 0 12px', lineHeight: 1.25,
                }}>
                  {faculty.name}
                </h3>
                <p style={{
                  fontFamily: 'Inter, sans-serif', fontSize: '13px',
                  color: 'rgba(248,247,243,0.55)', lineHeight: 1.6,
                  marginBottom: '20px',
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}>
                  {faculty.bio}
                </p>

                {/* Specializations */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {faculty.specialization.slice(0, 2).map(s => (
                    <span key={s} style={{
                      padding: '3px 10px', borderRadius: '9999px',
                      fontSize: '11px', fontFamily: 'Inter, sans-serif',
                      background: 'rgba(201,168,76,0.12)',
                      color: 'rgba(201,168,76,0.8)',
                      border: '1px solid rgba(201,168,76,0.2)',
                    }}>
                      {s}
                    </span>
                  ))}
                </div>

                {/* Footer stats */}
                <div style={{ display: 'flex', gap: '16px', borderTop: '1px solid rgba(201,168,76,0.1)', paddingTop: '16px' }}>
                  <span style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(248,247,243,0.4)' }}>
                    <BookOpen size={12} color="#C9A84C" /> {faculty.publications} publications
                  </span>
                  <a href={`mailto:${faculty.email}`} style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(248,247,243,0.4)', textDecoration: 'none' }}>
                    <Mail size={12} color="#C9A84C" /> Email
                  </a>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
