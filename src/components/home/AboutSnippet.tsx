import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import ScrollReveal from '@/components/ui/ScrollReveal';
import SectionLabel from '@/components/ui/SectionLabel';

export default function AboutSnippet() {
  return (
    <section style={{ padding: '120px 24px', background: '#F8F7F3' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '64px', alignItems: 'center' }}>
        {/* Left: large pull quote */}
        <ScrollReveal direction="right">
          <div style={{ position: 'relative', paddingLeft: '32px', borderLeft: '3px solid #C9A84C' }}>
            {/* Large decorative quote mark */}
            <span style={{
              position: 'absolute', top: '-20px', left: '-8px',
              fontFamily: "'Lora', serif",
              fontSize: '120px', lineHeight: 1,
              color: 'rgba(201,168,76,0.12)',
              userSelect: 'none',
            }}>"</span>
            <blockquote style={{
              fontFamily: "'Lora', serif",
              fontStyle: 'italic',
              fontSize: 'clamp(1.4rem, 3vw, 2rem)',
              fontWeight: 600,
              color: '#0A1535',
              lineHeight: 1.4,
              margin: 0,
            }}>
              Where analytical rigour meets global vision — preparing scholars and diplomats who shape the world's future.
            </blockquote>
          </div>
        </ScrollReveal>

        {/* Right: text + CTA */}
        <ScrollReveal direction="left" delay={0.15}>
          <div>
            <SectionLabel>About the Department</SectionLabel>
            <h2 style={{
              fontFamily: "'Lora', serif",
              fontWeight: 700,
              fontSize: 'clamp(1.8rem, 3vw, 2.4rem)',
              color: '#0A1535',
              marginBottom: '20px',
              lineHeight: 1.2,
            }}>
              75 Years of Academic Excellence
            </h2>
            <p style={{
              fontFamily: 'Inter, sans-serif', fontSize: '15px', color: '#5a5a55',
              lineHeight: 1.75, marginBottom: '32px',
            }}>
              Established in 1947 — one of South Asia's oldest and most distinguished IR departments, producing diplomats, scholars, and leaders for the world stage.
            </p>
            <Link to="/about" style={{ textDecoration: 'none' }}>
              <span style={{
                display: 'inline-flex', alignItems: 'center', gap: '8px',
                fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px',
                color: '#C9A84C', letterSpacing: '0.02em',
              }}>
                Discover our story <ArrowRight size={16} />
              </span>
            </Link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
