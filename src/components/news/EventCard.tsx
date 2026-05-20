import { motion } from 'framer-motion';
import { Clock, MapPin, User, Tag } from 'lucide-react';
import type { Event } from '@/types/news';

const typeColors: Record<string, string> = {
  seminar: '#7C3AED',
  conference: '#0A1535',
  workshop: '#16A34A',
  lecture: '#2563EB',
  ceremony: '#C9A84C',
};

function formatDate(d: string) {
  const date = new Date(d);
  return {
    day: date.toLocaleDateString('en-GB', { day: '2-digit' }),
    month: date.toLocaleDateString('en-GB', { month: 'short' }).toUpperCase(),
    year: date.getFullYear(),
  };
}

interface EventCardProps {
  event: Event;
}

export default function EventCard({ event }: EventCardProps) {
  const { day, month, year } = formatDate(event.date);
  const color = typeColors[event.type] || '#0A1535';

  return (
    <motion.div
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        boxShadow: '0 4px 20px rgba(10,21,53,0.07)',
        overflow: 'hidden',
        display: 'flex',
        cursor: 'pointer',
      }}
      whileHover={{ y: -4, boxShadow: '0 16px 48px rgba(10,21,53,0.13)' }}
      transition={{ duration: 0.25 }}
    >
      {/* Date pill */}
      <div style={{
        width: '72px', flexShrink: 0,
        background: color,
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        padding: '16px 8px',
      }}>
        <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.6rem', color: '#F8F7F3', lineHeight: 1 }}>{day}</span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600, letterSpacing: '0.1em', color: 'rgba(248,247,243,0.8)', textTransform: 'uppercase' }}>{month}</span>
        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(248,247,243,0.55)' }}>{year}</span>
      </div>

      {/* Content */}
      <div style={{ padding: '18px 20px', flexGrow: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px', flexWrap: 'wrap', gap: '8px' }}>
          <span style={{
            fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600,
            letterSpacing: '0.1em', textTransform: 'uppercase',
            color: color, opacity: 0.85,
          }}>
            {event.type}
          </span>
          {event.registrationOpen && (
            <span style={{
              padding: '2px 8px', borderRadius: '9999px',
              fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600,
              background: 'rgba(22,163,74,0.1)', color: '#16A34A',
              border: '1px solid rgba(22,163,74,0.2)',
            }}>
              Open
            </span>
          )}
        </div>

        <h3 style={{
          fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1rem',
          color: '#0A1535', margin: '0 0 10px', lineHeight: 1.25,
        }}>
          {event.title}
        </h3>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#888' }}>
            <Clock size={11} color="#C9A84C" /> {event.time}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#888' }}>
            <MapPin size={11} color="#C9A84C" /> {event.venue}
          </div>
          {event.speaker && (
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#888' }}>
              <User size={11} color="#C9A84C" /> {event.speaker}, {event.speakerAffiliation}
            </div>
          )}
        </div>
      </div>
    </motion.div>
  );
}
