import { motion } from 'framer-motion';
import { Globe, BookOpen, Users, Award } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';

const milestones = [
  { year: '1947', event: 'Department of International Relations established at the University of Dhaka — one of the first such departments in South Asia.' },
  { year: '1952', event: 'First batch of Masters graduates goes on to serve in Pakistan (later Bangladesh) Foreign Service and diplomatic missions.' },
  { year: '1971', event: 'Faculty members contribute to the liberation struggle; department plays a key role in articulating Bangladesh\'s case to the international community.' },
  { year: '1980', event: 'Introduction of the M.S.S. programme and expansion of the curriculum to include International Law and Global Political Economy.' },
  { year: '1998', event: 'Centre for South Asian Studies (CSAS) established, Bangladesh\'s first dedicated South Asia research centre.' },
  { year: '2005', event: 'Ph.D. programme formalised; first batch of doctoral candidates enrolled under formal supervision structure.' },
  { year: '2012', event: 'Centre for Global Affairs & Diplomacy (CGAD) inaugurated; annual Global Diplomacy Forum launched.' },
  { year: '2024', event: 'MOU signed with LSE International Relations; first Cambridge University Press monograph by departmental faculty published.' },
];

const values = [
  { icon: BookOpen, title: 'Academic Rigour', text: 'Uncompromising commitment to scholarly excellence and evidence-based analysis of international affairs.' },
  { icon: Globe, title: 'Global Engagement', text: 'Active participation in international academic networks, think tanks, and policy dialogues.' },
  { icon: Users, title: 'Inclusive Scholarship', text: 'Centring perspectives from the Global South in research that often overlooks developing-world experiences.' },
  { icon: Award, title: 'Public Service', text: 'Training scholars who serve the national interest through diplomacy, policy, and civil society leadership.' },
];

export default function About() {
  return (
    <PageWrapper>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0A1535, #172C60)', padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel centered light>Our Story</SectionLabel>
          <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#F8F7F3', margin: 0, lineHeight: 1.15 }}>
            About the <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Department</em>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(248,247,243,0.6)', maxWidth: '580px', margin: '16px auto 0', lineHeight: 1.65 }}>
            Since 1947, we have been at the forefront of international relations scholarship in South Asia — shaping scholars, diplomats, and global citizens.
          </p>
        </div>
      </div>

      {/* Mission Statement */}
      <section style={{ padding: '100px 24px', background: '#F8F7F3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <SectionLabel centered>Our Mission</SectionLabel>
            <blockquote style={{
              fontFamily: "'Lora', serif", fontStyle: 'italic',
              fontWeight: 600, fontSize: 'clamp(1.4rem, 3vw, 2.2rem)',
              color: '#0A1535', lineHeight: 1.45,
              margin: '0 0 48px',
              position: 'relative', paddingTop: '20px',
            }}>
              <span style={{ position: 'absolute', top: '-30px', left: '50%', transform: 'translateX(-50%)', fontFamily: "'Lora', serif", fontSize: '100px', lineHeight: 1, color: 'rgba(201,168,76,0.12)' }}>"</span>
              To advance rigorous scholarship in international relations — training scholars, diplomats, and global citizens who serve the world with distinction.
            </blockquote>
          </ScrollReveal>

          {/* Values */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px', marginTop: '56px' }}>
            {values.map(({ icon: Icon, title, text }, i) => (
              <ScrollReveal key={title} delay={i * 0.1}>
                <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '28px', boxShadow: '0 4px 20px rgba(10,21,53,0.07)', textAlign: 'left' }}>
                  <div style={{ width: '44px', height: '44px', borderRadius: '10px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '16px' }}>
                    <Icon size={18} color="#C9A84C" />
                  </div>
                  <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.05rem', color: '#0A1535', margin: '0 0 8px' }}>{title}</h3>
                  <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#6b6b66', lineHeight: 1.65, margin: 0 }}>{text}</p>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* History Timeline */}
      <section style={{ padding: '100px 24px', background: '#0A1535' }}>
        <div style={{ maxWidth: '800px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel light>Our History</SectionLabel>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#F8F7F3', marginBottom: '64px' }}>
              75 Years of Academic <em style={{ color: '#C9A84C' }}>Excellence</em>
            </h2>
          </ScrollReveal>

          <div style={{ position: 'relative' }}>
            {/* Timeline line */}
            <div style={{ position: 'absolute', left: '24px', top: 0, bottom: 0, width: '1px', background: 'rgba(201,168,76,0.2)' }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '40px' }}>
              {milestones.map((m, i) => (
                <ScrollReveal key={m.year} delay={i * 0.06}>
                  <div style={{ display: 'flex', gap: '32px', paddingLeft: '8px' }}>
                    {/* Year dot */}
                    <div style={{ flexShrink: 0, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                      <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: '#C9A84C', border: '3px solid #0A1535', zIndex: 1, marginTop: '4px' }} />
                    </div>
                    <div>
                      <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.1rem', color: '#C9A84C', display: 'block', marginBottom: '6px' }}>{m.year}</span>
                      <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: 'rgba(248,247,243,0.7)', lineHeight: 1.65, margin: 0 }}>{m.event}</p>
                    </div>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Chairman's Message */}
      <section style={{ padding: '100px 24px', background: '#F8F7F3' }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel>Chairman's Message</SectionLabel>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '56px', alignItems: 'flex-start' }}>
            <ScrollReveal direction="right">
              <div style={{ textAlign: 'center' }}>
                <div style={{
                  width: '160px', height: '160px', borderRadius: '50%', margin: '0 auto 20px',
                  background: 'linear-gradient(135deg, #0A1535, #1E3570)',
                  border: '4px solid rgba(201,168,76,0.3)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '48px', color: '#C9A84C' }}>DH</span>
                </div>
                <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.1rem', color: '#0A1535' }}>Prof. Dr. Delwar Hossain</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#C9A84C', marginTop: '4px' }}>Chairman, Department of IR</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#888' }}>University of Dhaka</div>
              </div>
            </ScrollReveal>
            <ScrollReveal direction="left" delay={0.15}>
              <div>
                <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(1.5rem, 2.5vw, 2rem)', color: '#0A1535', marginBottom: '20px', lineHeight: 1.25 }}>
                  A Message from the Chairman
                </h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '14.5px', color: '#4a4a45', lineHeight: 1.8, marginBottom: '24px' }}>
                  Welcome to the Department of International Relations at the University of Dhaka — a department that has, for over seven decades, been at the forefront of shaping how Bangladesh understands and engages with the world.
                </p>
                <div style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontWeight: 600, fontSize: '1.05rem', color: '#0A1535' }}>
                  Prof. Dr. Delwar Hossain
                </div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#999', marginTop: '4px' }}>
                  Chairman, Department of International Relations
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Affiliations */}
      <section style={{ padding: '80px 24px', background: '#0A1535' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <ScrollReveal>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: 'rgba(201,168,76,0.7)', marginBottom: '40px' }}>
              Affiliated & Partner Institutions
            </p>
          </ScrollReveal>
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '32px' }}>
            {['United Nations', 'SAARC', 'BCIM Forum', 'London School of Economics', 'BIISS', 'Ministry of Foreign Affairs'].map((org, i) => (
              <ScrollReveal key={org} delay={i * 0.06}>
                <div style={{
                  padding: '12px 24px', borderRadius: '8px',
                  border: '1px solid rgba(201,168,76,0.2)',
                  background: 'rgba(201,168,76,0.05)',
                  fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 500,
                  color: 'rgba(248,247,243,0.7)',
                  letterSpacing: '0.02em',
                }}>
                  {org}
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
}
