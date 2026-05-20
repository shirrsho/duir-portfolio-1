import { useState } from 'react';
import { motion } from 'framer-motion';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import NewsCard from '@/components/news/NewsCard';
import EventCard from '@/components/news/EventCard';
import { newsItems, events } from '@/data/news';

type FilterTab = 'all' | 'news' | 'events';

export default function News() {
  const [filter, setFilter] = useState<FilterTab>('all');

  return (
    <PageWrapper>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0A1535, #172C60)', padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel centered light>Newsroom</SectionLabel>
          <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#F8F7F3', margin: 0, lineHeight: 1.15 }}>
            News & <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Events</em>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(248,247,243,0.6)', maxWidth: '540px', margin: '16px auto 0', lineHeight: 1.65 }}>
            The latest from DU IR — achievements, publications, and upcoming events.
          </p>
        </div>
      </div>

      <div style={{ background: '#F8F7F3', padding: '64px 24px 100px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Filter Tabs */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '48px', justifyContent: 'center' }}>
            {(['all', 'news', 'events'] as FilterTab[]).map(f => (
              <motion.button
                key={f}
                onClick={() => setFilter(f)}
                style={{
                  padding: '9px 24px', borderRadius: '9999px',
                  fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600,
                  cursor: 'pointer',
                  border: filter === f ? 'none' : '1.5px solid #E8E8E4',
                  background: filter === f ? '#0A1535' : '#FFFFFF',
                  color: filter === f ? '#F8F7F3' : '#6b6b66',
                  textTransform: 'capitalize',
                }}
                whileTap={{ scale: 0.96 }}
              >
                {f === 'all' ? 'All' : f === 'news' ? 'News' : 'Events'}
              </motion.button>
            ))}
          </div>

          {/* News Grid */}
          {(filter === 'all' || filter === 'news') && (
            <div style={{ marginBottom: '72px' }}>
              {filter === 'all' && (
                <ScrollReveal>
                  <SectionLabel>Latest News</SectionLabel>
                  <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '2rem', color: '#0A1535', marginBottom: '36px' }}>Department News</h2>
                </ScrollReveal>
              )}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
                {newsItems.map((item, i) => (
                  <ScrollReveal key={item.id} delay={i * 0.06}>
                    <NewsCard item={item} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}

          {/* Events List */}
          {(filter === 'all' || filter === 'events') && (
            <div>
              {filter === 'all' && (
                <ScrollReveal>
                  <SectionLabel>Upcoming</SectionLabel>
                  <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '2rem', color: '#0A1535', marginBottom: '36px' }}>Events & Seminars</h2>
                </ScrollReveal>
              )}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {events.map((event, i) => (
                  <ScrollReveal key={event.id} delay={i * 0.06}>
                    <EventCard event={event} />
                  </ScrollReveal>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </PageWrapper>
  );
}
