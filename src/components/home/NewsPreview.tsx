import { motion } from 'framer-motion';
import { Calendar, ArrowRight, Tag as TagIcon } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';
import { newsItems } from '@/data/news';

const categoryColors: Record<string, string> = {
  news: '#2563EB',
  announcement: '#9B2335',
  achievement: '#16A34A',
  publication: '#C9A84C',
};

function formatDate(d: string) {
  return new Date(d).toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });
}

export default function NewsPreview() {
  const latest = newsItems.filter(n => n.featured).slice(0, 3);

  return (
    <section style={{ padding: '120px 24px', background: '#F8F7F3' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '60px', flexWrap: 'wrap', gap: '16px' }}>
          <div>
            <SectionLabel>Latest from DU IR</SectionLabel>
            <h2 style={{
              fontFamily: "'Lora', serif", fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', color: '#0A1535',
              margin: 0, lineHeight: 1.2,
            }}>
              News & Achievements
            </h2>
          </div>
          <Link to="/news" style={{ textDecoration: 'none' }}>
            <motion.span
              style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'Inter, sans-serif', fontWeight: 500, fontSize: '13.5px',
                color: '#0A1535', border: '1px solid rgba(10,21,53,0.2)',
                padding: '10px 20px', borderRadius: '6px',
              }}
              whileHover={{ background: '#0A1535', color: '#F8F7F3', borderColor: '#0A1535' }}
              transition={{ duration: 0.2 }}
            >
              All news <ArrowRight size={14} />
            </motion.span>
          </Link>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '28px' }}>
          {latest.map((item, i) => (
            <ScrollReveal key={item.id} delay={i * 0.1}>
              <motion.div
                style={{
                  background: '#FFFFFF',
                  borderRadius: '16px',
                  overflow: 'hidden',
                  boxShadow: '0 4px 24px rgba(10,21,53,0.07)',
                  cursor: 'pointer',
                  height: '100%',
                  display: 'flex', flexDirection: 'column',
                }}
                whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(10,21,53,0.13)' }}
                transition={{ duration: 0.25 }}
              >
                {/* Image */}
                <div style={{
                  height: '200px', overflow: 'hidden', flexShrink: 0,
                  background: 'linear-gradient(135deg, #0A1535, #1E3570)',
                  position: 'relative',
                }}>
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.85 }}
                  />
                  <div style={{
                    position: 'absolute', top: '16px', left: '16px',
                    background: categoryColors[item.category] || '#C9A84C',
                    padding: '4px 12px', borderRadius: '9999px',
                    fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 600,
                    letterSpacing: '0.08em', textTransform: 'uppercase', color: '#fff',
                  }}>
                    {item.category}
                  </div>
                </div>

                {/* Content */}
                <div style={{ padding: '24px', display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px', marginBottom: '12px', color: '#999' }}>
                    <Calendar size={12} />
                    <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px' }}>{formatDate(item.date)}</span>
                  </div>
                  <h3 style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: 700, fontSize: '1.1rem',
                    color: '#0A1535', margin: '0 0 10px', lineHeight: 1.3,
                  }}>
                    {item.title}
                  </h3>
                  <p style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6b6b66',
                    lineHeight: 1.65, margin: 0, flexGrow: 1,
                  }}>
                    {item.excerpt.slice(0, 130)}…
                  </p>
                </div>
              </motion.div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
