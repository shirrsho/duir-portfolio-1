import { motion } from 'framer-motion';
import { BookOpen, Mail, MapPin } from 'lucide-react';
import type { FacultyMember } from '@/types/faculty';

function getInitials(name: string) {
  return name.replace(/^(Prof\.|Dr\.)\s*/gi, '').split(' ').slice(0, 2).map(n => n[0]).join('');
}

interface FacultyCardProps {
  faculty: FacultyMember;
  onClick: (faculty: FacultyMember) => void;
}

export default function FacultyCard({ faculty, onClick }: FacultyCardProps) {
  return (
    <motion.div
      onClick={() => onClick(faculty)}
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(10,21,53,0.07)',
        cursor: 'pointer',
        display: 'flex', flexDirection: 'column',
      }}
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(10,21,53,0.14)' }}
      transition={{ duration: 0.25 }}
      layout
    >
      {/* Top accent */}
      <div style={{ height: '3px', background: 'linear-gradient(90deg, #0A1535, #C9A84C)' }} />

      <div style={{ padding: '28px 24px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        {/* Avatar + rank */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '16px' }}>
          <div style={{
            width: '60px', height: '60px', borderRadius: '50%', flexShrink: 0,
            background: `linear-gradient(135deg, ${faculty.avatarColor}, #1E3570)`,
            border: '2px solid rgba(201,168,76,0.3)',
            display: 'flex', alignItems: 'center', justifyContent: 'center',
          }}>
            <span style={{
              fontFamily: "'Lora', serif",
              fontWeight: 700, fontSize: '18px', color: '#C9A84C',
            }}>
              {getInitials(faculty.name)}
            </span>
          </div>
          <div>
            <span style={{
              fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600,
              letterSpacing: '0.12em', textTransform: 'uppercase',
              color: '#C9A84C', display: 'block',
            }}>
              {faculty.title}
            </span>
            {faculty.designation && (
              <span style={{
                fontFamily: 'Inter, sans-serif', fontSize: '10px',
                color: '#999', display: 'block',
              }}>
                {faculty.designation}
              </span>
            )}
          </div>
        </div>

        {/* Name */}
        <h3 style={{
          fontFamily: "'Lora', serif",
          fontWeight: 700, fontSize: '1.05rem',
          color: '#0A1535', margin: '0 0 10px', lineHeight: 1.25,
        }}>
          {faculty.name}
        </h3>

        {/* Specializations */}
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '5px', marginBottom: '14px' }}>
          {faculty.specialization.slice(0, 2).map(s => (
            <span key={s} style={{
              padding: '2px 8px', borderRadius: '9999px',
              fontSize: '10.5px', fontFamily: 'Inter, sans-serif', fontWeight: 500,
              background: 'rgba(10,21,53,0.06)', color: '#0A1535',
              border: '1px solid rgba(10,21,53,0.1)',
            }}>
              {s}
            </span>
          ))}
        </div>

        {/* Bio */}
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '12.5px', color: '#6b6b66',
          lineHeight: 1.65, margin: '0 0 auto',
          display: '-webkit-box',
          WebkitLineClamp: 2,
          WebkitBoxOrient: 'vertical',
          overflow: 'hidden',
        }}>
          {faculty.bio}
        </p>
      </div>

      {/* Footer */}
      <div style={{
        padding: '14px 24px',
        borderTop: '1px solid #E8E8E4',
        display: 'flex', justifyContent: 'space-between', alignItems: 'center',
        background: '#FAFAFA',
      }}>
        <span style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'Inter, sans-serif', fontSize: '11.5px', color: '#888' }}>
          <BookOpen size={11} color="#C9A84C" /> {faculty.publications} publications
        </span>
        <a
          href={`mailto:${faculty.email}`}
          onClick={e => e.stopPropagation()}
          style={{ display: 'flex', alignItems: 'center', gap: '5px', fontFamily: 'Inter, sans-serif', fontSize: '11.5px', color: '#888', textDecoration: 'none' }}
        >
          <Mail size={11} color="#C9A84C" /> Contact
        </a>
      </div>
    </motion.div>
  );
}
