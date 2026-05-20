import { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, MapPin, Building2, Scale, Leaf, TrendingUp, BookOpen, FileText, Book, BarChart3 } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { researchAreas, researchCenters, publications } from '@/data/research';
import type { Publication } from '@/types/research';

const iconMap: Record<string, React.ElementType> = {
  Shield, MapPin, Building2, Scale, Leaf, TrendingUp,
};

const pubTypeIcons: Record<string, React.ElementType> = {
  journal: FileText,
  book: Book,
  chapter: BookOpen,
  report: BarChart3,
};

type PubFilter = 'all' | 'journal' | 'book' | 'chapter' | 'report';

export default function Research() {
  const [pubFilter, setPubFilter] = useState<PubFilter>('all');
  const filteredPubs = publications.filter(p => pubFilter === 'all' || p.type === pubFilter);

  return (
    <PageWrapper>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0A1535, #172C60)', padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel centered light>Research & Scholarship</SectionLabel>
          <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#F8F7F3', margin: 0, lineHeight: 1.15 }}>
            Advancing Knowledge at the{' '}
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Frontiers</em>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(248,247,243,0.6)', maxWidth: '560px', margin: '16px auto 0', lineHeight: 1.65 }}>
            180+ publications across 6 thematic areas, driven by 3 dedicated research centres.
          </p>
        </div>
      </div>

      {/* Research Areas */}
      <section style={{ padding: '100px 24px', background: '#F8F7F3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel>Research Areas</SectionLabel>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0A1535', marginBottom: '56px' }}>
              Six Thematic Pillars of Excellence
            </h2>
          </ScrollReveal>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {researchAreas.map((area, i) => {
              const Icon = iconMap[area.icon] || Shield;
              return (
                <ScrollReveal key={area.id} delay={i * 0.08}>
                  <motion.div
                    style={{ background: '#FFFFFF', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 4px 24px rgba(10,21,53,0.07)', cursor: 'pointer', height: '100%' }}
                    whileHover={{ y: -6, boxShadow: '0 20px 60px rgba(10,21,53,0.14)' }}
                    transition={{ duration: 0.25 }}
                  >
                    <div style={{ height: '4px', background: 'linear-gradient(90deg, #C9A84C, #DDB96A)' }} />
                    <div style={{ padding: '32px' }}>
                      <div style={{ width: '52px', height: '52px', borderRadius: '12px', background: 'rgba(10,21,53,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                        <Icon size={22} color="#0A1535" />
                      </div>
                      <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.15rem', color: '#0A1535', margin: '0 0 10px', lineHeight: 1.25 }}>{area.title}</h3>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6b6b66', lineHeight: 1.7, marginBottom: '20px' }}>{area.description}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                        {area.tags.map(t => <span key={t} style={{ padding: '2px 9px', borderRadius: '9999px', fontSize: '10.5px', fontFamily: 'Inter, sans-serif', fontWeight: 500, background: 'rgba(201,168,76,0.1)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.2)' }}>{t}</span>)}
                      </div>
                      <div style={{ display: 'flex', gap: '20px', borderTop: '1px solid #E8E8E4', paddingTop: '14px' }}>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#999' }}><strong style={{ color: '#0A1535' }}>{area.facultyCount}</strong> faculty</span>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#999' }}><strong style={{ color: '#0A1535' }}>{area.publications}</strong> publications</span>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>

      {/* Research Centres */}
      <section style={{ padding: '100px 24px', background: '#0A1535' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel light>Research Centres</SectionLabel>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#F8F7F3', marginBottom: '56px' }}>
              Our <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Institutional Centres</em>
            </h2>
          </ScrollReveal>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
            {researchCenters.map((centre, i) => (
              <ScrollReveal key={centre.id} delay={i * 0.1}>
                <motion.div
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '20px', padding: '36px', display: 'flex', gap: '32px', flexWrap: 'wrap', alignItems: 'flex-start' }}
                  whileHover={{ borderColor: 'rgba(201,168,76,0.4)', background: 'rgba(201,168,76,0.04)' }}
                  transition={{ duration: 0.2 }}
                >
                  <div style={{ width: '64px', height: '64px', borderRadius: '16px', background: 'rgba(201,168,76,0.12)', border: '1px solid rgba(201,168,76,0.25)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                    <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '11px', color: '#C9A84C', textAlign: 'center', lineHeight: 1.2 }}>{centre.shortName}</span>
                  </div>
                  <div style={{ flexGrow: 1 }}>
                    <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.3rem', color: '#F8F7F3', margin: '0 0 8px', lineHeight: 1.25 }}>{centre.name}</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: 'rgba(248,247,243,0.6)', lineHeight: 1.7, marginBottom: '16px' }}>{centre.description}</p>
                    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                      {centre.focus.map(f => <span key={f} style={{ padding: '3px 10px', borderRadius: '9999px', fontSize: '11px', fontFamily: 'Inter, sans-serif', background: 'rgba(201,168,76,0.12)', color: '#C9A84C', border: '1px solid rgba(201,168,76,0.2)' }}>{f}</span>)}
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', flexShrink: 0 }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>Director</div>
                    <div style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '14px', color: '#F8F7F3' }}>{centre.director}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(248,247,243,0.4)', marginTop: '4px' }}>Est. {centre.established}</div>
                  </div>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Publications */}
      <section style={{ padding: '100px 24px', background: '#F8F7F3' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel>Publications</SectionLabel>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#0A1535', marginBottom: '32px' }}>
              Selected Publications
            </h2>
          </ScrollReveal>

          {/* Filter */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '36px', flexWrap: 'wrap' }}>
            {(['all', 'journal', 'book', 'chapter', 'report'] as PubFilter[]).map(f => (
              <motion.button
                key={f}
                onClick={() => setPubFilter(f)}
                style={{
                  padding: '6px 16px', borderRadius: '9999px',
                  fontFamily: 'Inter, sans-serif', fontSize: '12.5px', fontWeight: 500,
                  cursor: 'pointer',
                  border: pubFilter === f ? '1.5px solid #0A1535' : '1.5px solid #E8E8E4',
                  background: pubFilter === f ? '#0A1535' : '#FFFFFF',
                  color: pubFilter === f ? '#F8F7F3' : '#6b6b66',
                  textTransform: 'capitalize',
                }}
                whileTap={{ scale: 0.96 }}
              >
                {f === 'all' ? 'All' : f.charAt(0).toUpperCase() + f.slice(1)}
              </motion.button>
            ))}
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {filteredPubs.map((pub, i) => {
              const PubIcon = pubTypeIcons[pub.type] || FileText;
              return (
                <ScrollReveal key={pub.id} delay={i * 0.05}>
                  <motion.div
                    style={{ background: '#FFFFFF', borderRadius: '12px', padding: '24px', boxShadow: '0 2px 12px rgba(10,21,53,0.06)', display: 'flex', gap: '20px', alignItems: 'flex-start' }}
                    whileHover={{ boxShadow: '0 8px 32px rgba(10,21,53,0.1)', y: -2 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <PubIcon size={16} color="#C9A84C" />
                    </div>
                    <div style={{ flexGrow: 1 }}>
                      <h4 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1rem', color: '#0A1535', margin: '0 0 6px', lineHeight: 1.3 }}>{pub.title}</h4>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12.5px', color: '#888', margin: '0 0 6px' }}>
                        {pub.authors.join(', ')}
                      </p>
                      <div style={{ display: 'flex', gap: '12px', alignItems: 'center', flexWrap: 'wrap' }}>
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#666', fontStyle: 'italic' }}>{pub.journal}</span>
                        <span style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '12px', color: '#C9A84C' }}>{pub.year}</span>
                        <span style={{ padding: '2px 8px', borderRadius: '9999px', fontSize: '10.5px', fontFamily: 'Inter, sans-serif', background: 'rgba(10,21,53,0.06)', color: '#0A1535', border: '1px solid rgba(10,21,53,0.1)', textTransform: 'capitalize' }}>{pub.type}</span>
                      </div>
                    </div>
                  </motion.div>
                </ScrollReveal>
              );
            })}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
