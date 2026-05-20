import { motion, AnimatePresence } from 'framer-motion';
import { X, Mail, Phone, MapPin, BookOpen, GraduationCap } from 'lucide-react';
import type { FacultyMember } from '@/types/faculty';

function getInitials(name: string) {
  return name.replace(/^(Prof\.|Dr\.)\s*/gi, '').split(' ').slice(0, 2).map(n => n[0]).join('');
}

interface FacultyModalProps {
  faculty: FacultyMember | null;
  onClose: () => void;
}

export default function FacultyModal({ faculty, onClose }: FacultyModalProps) {
  return (
    <AnimatePresence>
      {faculty && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          onClick={onClose}
          style={{
            position: 'fixed', inset: 0, zIndex: 200,
            background: 'rgba(10,21,53,0.8)',
            backdropFilter: 'blur(8px)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '24px',
          }}
        >
          <motion.div
            initial={{ scale: 0.88, y: 30, opacity: 0 }}
            animate={{ scale: 1, y: 0, opacity: 1 }}
            exit={{ scale: 0.92, y: 20, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 28 }}
            onClick={e => e.stopPropagation()}
            style={{
              background: '#FFFFFF',
              borderRadius: '24px',
              maxWidth: '680px',
              width: '100%',
              maxHeight: '90vh',
              overflow: 'auto',
              boxShadow: '0 32px 96px rgba(10,21,53,0.35)',
            }}
          >
            {/* Header */}
            <div style={{
              background: 'linear-gradient(135deg, #0A1535, #172C60)',
              padding: '40px',
              position: 'relative',
            }}>
              <button
                onClick={onClose}
                aria-label="Close"
                style={{
                  position: 'absolute', top: '20px', right: '20px',
                  background: 'rgba(248,247,243,0.1)', border: '1px solid rgba(248,247,243,0.2)',
                  borderRadius: '8px', width: '36px', height: '36px',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  cursor: 'pointer', color: '#F8F7F3',
                }}
              >
                <X size={18} />
              </button>

              <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
                <div style={{
                  width: '80px', height: '80px', borderRadius: '50%', flexShrink: 0,
                  background: `linear-gradient(135deg, ${faculty.avatarColor}, #1E3570)`,
                  border: '3px solid rgba(201,168,76,0.4)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '26px', color: '#C9A84C' }}>
                    {getInitials(faculty.name)}
                  </span>
                </div>
                <div>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C', display: 'block', marginBottom: '4px' }}>
                    {faculty.title}{faculty.designation ? ` · ${faculty.designation}` : ''}
                  </span>
                  <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.5rem', color: '#F8F7F3', margin: '0 0 8px', lineHeight: 1.2 }}>
                    {faculty.name}
                  </h2>
                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
                    {faculty.specialization.map(s => (
                      <span key={s} style={{
                        padding: '3px 10px', borderRadius: '9999px', fontSize: '11px',
                        fontFamily: 'Inter, sans-serif', fontWeight: 500,
                        background: 'rgba(201,168,76,0.15)', color: '#C9A84C',
                        border: '1px solid rgba(201,168,76,0.25)',
                      }}>
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Body */}
            <div style={{ padding: '36px 40px' }}>
              {/* Bio */}
              <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: '#4a4a45', lineHeight: 1.75, marginBottom: '32px' }}>
                {faculty.bio}
              </p>

              {/* Education */}
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ display: 'flex', alignItems: 'center', gap: '8px', fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '16px' }}>
                  <GraduationCap size={14} /> Education
                </h4>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {faculty.education.map((edu, i) => (
                    <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                      <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '13px', color: '#C9A84C', flexShrink: 0 }}>{edu.year}</span>
                      <div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', fontWeight: 600, color: '#0A1535' }}>{edu.degree}</div>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12.5px', color: '#888' }}>{edu.institution}</div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Courses */}
              <div style={{ marginBottom: '28px' }}>
                <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>
                  Courses Taught
                </h4>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                  {faculty.courses.map(c => (
                    <span key={c} style={{
                      padding: '4px 12px', borderRadius: '6px',
                      fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 500,
                      background: 'rgba(10,21,53,0.06)', color: '#0A1535',
                      border: '1px solid rgba(10,21,53,0.1)',
                    }}>
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* Contact */}
              <div style={{ background: '#F8F7F3', borderRadius: '12px', padding: '20px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <Mail size={14} color="#C9A84C" />
                  <a href={`mailto:${faculty.email}`} style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#0A1535', textDecoration: 'none' }}>{faculty.email}</a>
                </div>
                {faculty.phone && (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <Phone size={14} color="#C9A84C" />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#0A1535' }}>{faculty.phone}</span>
                  </div>
                )}
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <MapPin size={14} color="#C9A84C" />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#0A1535' }}>{faculty.office}</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <BookOpen size={14} color="#C9A84C" />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#0A1535' }}>{faculty.publications} published works</span>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
