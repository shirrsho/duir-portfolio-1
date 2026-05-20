import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import type { NewsItem } from '@/types/news';

const categoryColors: Record<string, string> = {
  news: '#2563EB',
  announcement: '#9B2335',
  achievement: '#16A34A',
  publication: '#C9A84C',
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

interface NewsCardProps {
  item: NewsItem;
}

export default function NewsCard({ item }: NewsCardProps) {
  return (
    <motion.div
      style={{
        background: '#FFFFFF',
        borderRadius: '16px',
        overflow: 'hidden',
        boxShadow: '0 4px 20px rgba(10,21,53,0.07)',
        cursor: 'pointer',
        display: 'flex', flexDirection: 'column',
        height: '100%',
      }}
      whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(10,21,53,0.13)' }}
      transition={{ duration: 0.25 }}
    >
      {/* Image */}
      <div style={{ height: '200px', overflow: 'hidden', flexShrink: 0, position: 'relative', background: '#0A1535' }}>
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
        />
        <div style={{
          position: 'absolute', top: '14px', left: '14px',
          background: categoryColors[item.category] || '#C9A84C',
          padding: '3px 10px', borderRadius: '9999px',
          fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600,
          letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff',
        }}>
          {item.category}
        </div>
      </div>

      <div style={{ padding: '22px', flexGrow: 1, display: 'flex', flexDirection: 'column' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '5px', marginBottom: '10px', color: '#999' }}>
          <Calendar size={11} />
          <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11.5px' }}>{formatDate(item.date)}</span>
        </div>
        <h3 style={{
          fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.05rem',
          color: '#0A1535', margin: '0 0 10px', lineHeight: 1.3,
        }}>
          {item.title}
        </h3>
        <p style={{
          fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6b6b66',
          lineHeight: 1.65, margin: 0, flexGrow: 1,
        }}>
          {item.excerpt}
        </p>
      </div>
    </motion.div>
  );
}
