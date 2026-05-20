import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Search } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import FacultyCard from '@/components/faculty/FacultyCard';
import FacultyModal from '@/components/faculty/FacultyModal';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { facultyMembers } from '@/data/faculty';
import type { FacultyMember, FacultyRank } from '@/types/faculty';

const ranks: (FacultyRank | 'All')[] = ['All', 'Professor', 'Associate Professor', 'Assistant Professor', 'Lecturer'];

export default function Faculty() {
  const [selected, setSelected] = useState<FacultyMember | null>(null);
  const [filterRank, setFilterRank] = useState<FacultyRank | 'All'>('All');
  const [search, setSearch] = useState('');

  const filtered = useMemo(() => {
    return facultyMembers.filter(f => {
      const matchesRank = filterRank === 'All' || f.title === filterRank;
      const q = search.toLowerCase();
      const matchesSearch = !q || f.name.toLowerCase().includes(q) || f.specialization.some(s => s.toLowerCase().includes(q));
      return matchesRank && matchesSearch;
    });
  }, [filterRank, search]);

  return (
    <PageWrapper>
      {/* Page Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0A1535, #172C60)', padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel centered light>Department of International Relations</SectionLabel>
          <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#F8F7F3', margin: 0, lineHeight: 1.15 }}>
            Faculty <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Directory</em>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(248,247,243,0.6)', maxWidth: '540px', margin: '16px auto 0', lineHeight: 1.65 }}>
            32 distinguished scholars advancing knowledge in international relations, diplomacy, and global affairs.
          </p>
        </div>
      </div>

      <div style={{ background: '#F8F7F3', padding: '64px 24px 100px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          {/* Filter Bar */}
          <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center', marginBottom: '48px', justifyContent: 'space-between' }}>
            {/* Search */}
            <div style={{ position: 'relative', flexGrow: 1, maxWidth: '320px' }}>
              <Search size={15} color="#999" style={{ position: 'absolute', left: '14px', top: '50%', transform: 'translateY(-50%)' }} />
              <input
                type="text"
                placeholder="Search by name or specialization..."
                value={search}
                onChange={e => setSearch(e.target.value)}
                style={{
                  width: '100%', padding: '10px 14px 10px 38px',
                  fontFamily: 'Inter, sans-serif', fontSize: '13.5px',
                  border: '1.5px solid #E8E8E4', borderRadius: '8px',
                  background: '#FFFFFF', color: '#0A1535',
                  outline: 'none', boxSizing: 'border-box',
                }}
              />
            </div>

            {/* Rank pills */}
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
              {ranks.map(rank => (
                <motion.button
                  key={rank}
                  onClick={() => setFilterRank(rank)}
                  style={{
                    padding: '7px 16px',
                    borderRadius: '9999px',
                    fontFamily: 'Inter, sans-serif', fontSize: '12.5px', fontWeight: 500,
                    cursor: 'pointer',
                    border: filterRank === rank ? '1.5px solid #C9A84C' : '1.5px solid #E8E8E4',
                    background: filterRank === rank ? '#C9A84C' : '#FFFFFF',
                    color: filterRank === rank ? '#0A1535' : '#6b6b66',
                  }}
                  whileTap={{ scale: 0.96 }}
                >
                  {rank}
                </motion.button>
              ))}
            </div>
          </div>

          {/* Results count */}
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#999', marginBottom: '28px' }}>
            Showing {filtered.length} of {facultyMembers.length} faculty members
          </p>

          {/* Grid */}
          <motion.div
            style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(260px, 1fr))', gap: '24px' }}
            layout
          >
            {filtered.map((faculty, i) => (
              <ScrollReveal key={faculty.id} delay={Math.min(i * 0.06, 0.4)}>
                <FacultyCard faculty={faculty} onClick={setSelected} />
              </ScrollReveal>
            ))}
          </motion.div>

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '80px 24px', color: '#999' }}>
              <p style={{ fontFamily: "'Lora', serif", fontSize: '1.2rem' }}>No faculty found matching your search.</p>
            </div>
          )}
        </div>
      </div>

      <FacultyModal faculty={selected} onClose={() => setSelected(null)} />
    </PageWrapper>
  );
}
