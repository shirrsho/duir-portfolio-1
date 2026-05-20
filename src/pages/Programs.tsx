import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Globe, BookOpen, Award, CheckCircle, ChevronRight } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { programs } from '@/data/programs';
import type { ProgramLevel } from '@/types/program';

const tabs: { id: ProgramLevel; label: string; short: string }[] = [
  { id: 'undergraduate', label: 'Undergraduate', short: 'B.S.S.' },
  { id: 'masters', label: 'Masters', short: 'M.S.S.' },
  { id: 'phd', label: 'Doctoral', short: 'Ph.D.' },
];

const iconMap: Record<string, React.ElementType> = {
  Globe, BookOpen, Award,
};

export default function Programs() {
  const [activeTab, setActiveTab] = useState<ProgramLevel>('undergraduate');
  const prog = programs.find(p => p.level === activeTab)!;
  const Icon = iconMap[prog.icon] || Globe;

  return (
    <PageWrapper>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0A1535, #172C60)', padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel centered light>Academic Programmes</SectionLabel>
          <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#F8F7F3', margin: 0, lineHeight: 1.15 }}>
            Your Path to a{' '}
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Global Career</em>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(248,247,243,0.6)', maxWidth: '560px', margin: '16px auto 0', lineHeight: 1.65 }}>
            Three pathways — from undergraduate study to doctoral research.
          </p>
        </div>
      </div>

      <div style={{ background: '#F8F7F3', padding: '0 24px 100px' }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          {/* Tab Switcher */}
          <div style={{ display: 'flex', justifyContent: 'center', paddingTop: '56px', marginBottom: '64px' }}>
            <div style={{
              display: 'inline-flex', background: '#FFFFFF', borderRadius: '12px',
              padding: '6px', boxShadow: '0 4px 20px rgba(10,21,53,0.08)',
              gap: '4px', position: 'relative',
            }}>
              {tabs.map(tab => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    padding: '10px 28px', borderRadius: '8px', border: 'none',
                    fontFamily: 'Inter, sans-serif', fontSize: '13.5px', fontWeight: 600,
                    cursor: 'pointer', position: 'relative', zIndex: 1,
                    background: 'transparent',
                    color: activeTab === tab.id ? '#0A1535' : '#888',
                    transition: 'color 0.2s',
                  }}
                >
                  {activeTab === tab.id && (
                    <motion.div
                      layoutId="tab-bg"
                      style={{
                        position: 'absolute', inset: 0,
                        background: '#C9A84C', borderRadius: '8px', zIndex: -1,
                      }}
                      transition={{ type: 'spring', stiffness: 400, damping: 30 }}
                    />
                  )}
                  <span style={{ display: 'block', fontWeight: 700, fontSize: '11px', letterSpacing: '0.1em', textTransform: 'uppercase' }}>{tab.short}</span>
                  <span>{tab.label}</span>
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Program Header */}
              <div style={{
                background: 'linear-gradient(135deg, #0A1535, #1A3D28)',
                borderRadius: '24px', padding: '48px',
                marginBottom: '32px', display: 'flex', gap: '32px', alignItems: 'flex-start',
                flexWrap: 'wrap',
              }}>
                <div style={{
                  width: '68px', height: '68px', borderRadius: '16px', flexShrink: 0,
                  background: 'rgba(201,168,76,0.15)', border: '1px solid rgba(201,168,76,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <Icon size={28} color="#C9A84C" />
                </div>
                <div style={{ flexGrow: 1 }}>
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C' }}>
                    {prog.shortTitle}
                  </span>
                  <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(1.4rem, 3vw, 2rem)', color: '#F8F7F3', margin: '8px 0 12px', lineHeight: 1.2 }}>
                    {prog.title}
                  </h2>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14px', color: 'rgba(248,247,243,0.65)', lineHeight: 1.7, marginBottom: '24px' }}>
                    {prog.description}
                  </p>
                  <div style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}>
                    {[
                      { label: 'Duration', value: prog.duration },
                      ...(prog.credits > 0 ? [{ label: 'Credits', value: `${prog.credits} cr.` }] : []),
                      ...(prog.semesters > 0 ? [{ label: 'Semesters', value: `${prog.semesters}` }] : []),
                      { label: 'Deadline', value: prog.applicationDeadline },
                    ].map(({ label, value }) => (
                      <div key={label}>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', color: 'rgba(201,168,76,0.6)', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '2px' }}>{label}</div>
                        <div style={{ fontFamily: "'Lora', serif", fontWeight: 600, fontSize: '1.1rem', color: '#F8F7F3' }}>{value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Details Grid */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '24px', marginBottom: '32px' }}>
                {/* Highlights */}
                <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(10,21,53,0.07)' }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.15rem', color: '#0A1535', marginBottom: '20px' }}>Programme Highlights</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                    {prog.highlights.map(h => (
                      <div key={h} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                        <CheckCircle size={15} color="#C9A84C" style={{ flexShrink: 0, marginTop: '2px' }} />
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#4a4a45', lineHeight: 1.55 }}>{h}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Career Paths */}
                <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(10,21,53,0.07)' }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.15rem', color: '#0A1535', marginBottom: '20px' }}>Career Pathways</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                    {prog.careerPaths.map(c => (
                      <div key={c} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                        <ChevronRight size={14} color="#C9A84C" style={{ flexShrink: 0 }} />
                        <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#4a4a45' }}>{c}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Admission */}
              <div style={{ background: 'linear-gradient(135deg, rgba(201,168,76,0.08), rgba(201,168,76,0.04))', borderRadius: '16px', padding: '32px', border: '1px solid rgba(201,168,76,0.2)' }}>
                <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.15rem', color: '#0A1535', marginBottom: '16px' }}>Admission Requirements</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  {prog.admissionRequirements.map(r => (
                    <div key={r} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                      <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#C9A84C', flexShrink: 0, marginTop: '6px' }} />
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#4a4a45', lineHeight: 1.55 }}>{r}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Curriculum */}
              {prog.courses && prog.courses.length > 0 && (
                <div style={{ marginTop: '32px' }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.15rem', color: '#0A1535', marginBottom: '20px' }}>Curriculum</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
                    {prog.courses.map(group => (
                      <div key={group.label} style={{ background: '#FFFFFF', borderRadius: '12px', padding: '20px', boxShadow: '0 2px 12px rgba(10,21,53,0.06)' }}>
                        <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10px', fontWeight: 700, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '12px' }}>{group.label}</div>
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '7px' }}>
                          {group.items.map(item => (
                            <div key={item} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                              <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#C9A84C', flexShrink: 0, marginTop: '6px' }} />
                              <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '12.5px', color: '#4a4a45', lineHeight: 1.5 }}>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </PageWrapper>
  );
}
