import { motion } from 'framer-motion';
import { Globe, Users, GraduationCap, Award } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { alumni } from '@/data/alumni';

function getInitials(name: string) {
  return name.split(' ').slice(0, 2).map(n => n[0]).join('');
}

const networkStats = [
  { value: '5,000+', label: 'Alumni worldwide', icon: Users },
  { value: '80+', label: 'Countries represented', icon: Globe },
  { value: '200+', label: 'Senior diplomats', icon: GraduationCap },
  { value: '3 decades', label: 'UN leadership', icon: Award },
];

export default function Alumni() {
  const notable = alumni.filter(a => a.notable);
  const others = alumni.filter(a => !a.notable);

  return (
    <PageWrapper>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0A1535, #172C60)', padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel centered light>Alumni Network</SectionLabel>
          <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#F8F7F3', margin: 0, lineHeight: 1.15 }}>
            Shaping the World from{' '}
            <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>Dhaka to Geneva</em>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(248,247,243,0.6)', maxWidth: '580px', margin: '16px auto 0', lineHeight: 1.65 }}>
            5,000+ graduates serving diplomacy, policy, and scholarship across 80+ countries.
          </p>
        </div>
      </div>

      {/* Stats */}
      <section style={{ background: '#F8F7F3', padding: '80px 24px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '24px' }}>
            {networkStats.map(({ value, label, icon: Icon }, i) => (
              <ScrollReveal key={label} delay={i * 0.1}>
                <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '36px 24px', textAlign: 'center', boxShadow: '0 4px 20px rgba(10,21,53,0.07)' }}>
                  <div style={{ width: '48px', height: '48px', borderRadius: '12px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                    <Icon size={20} color="#C9A84C" />
                  </div>
                  <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '2rem', color: '#0A1535', marginBottom: '6px' }}>{value}</div>
                  <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#888' }}>{label}</div>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Notable Alumni */}
      <section style={{ padding: '100px 24px', background: '#0A1535' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel light>Distinguished Alumni</SectionLabel>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)', color: '#F8F7F3', marginBottom: '56px' }}>
              Leaders Who Shaped History
            </h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '24px' }}>
            {notable.map((alum, i) => (
              <ScrollReveal key={alum.id} delay={i * 0.08}>
                <motion.div
                  style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(201,168,76,0.15)', borderRadius: '20px', padding: '32px', cursor: 'pointer', height: '100%', display: 'flex', flexDirection: 'column' }}
                  whileHover={{ background: 'rgba(201,168,76,0.06)', borderColor: 'rgba(201,168,76,0.35)', y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  {/* Avatar */}
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                      width: '56px', height: '56px', borderRadius: '50%', flexShrink: 0,
                      background: `linear-gradient(135deg, ${alum.avatarColor}, #1E3570)`,
                      border: '2px solid rgba(201,168,76,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '16px', color: '#C9A84C' }}>{getInitials(alum.name)}</span>
                    </div>
                    <div>
                      <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1rem', color: '#F8F7F3', margin: '0 0 2px', lineHeight: 1.25 }}>{alum.name}</h3>
                      <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(201,168,76,0.7)' }}>{alum.batch} · {alum.degree}</span>
                    </div>
                  </div>
                  <div style={{ marginBottom: '16px' }}>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', fontWeight: 600, color: '#F8F7F3', marginBottom: '2px' }}>{alum.currentRole}</div>
                    <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12.5px', color: 'rgba(248,247,243,0.5)' }}>{alum.organization} · {alum.country}</div>
                  </div>
                  <blockquote style={{
                    fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '13px',
                    color: 'rgba(248,247,243,0.65)', lineHeight: 1.65, margin: '0',
                    borderLeft: '2px solid rgba(201,168,76,0.4)', paddingLeft: '14px', flexGrow: 1,
                  }}>
                    "{alum.quote.slice(0, 120)}…"
                  </blockquote>
                </motion.div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* Other alumni */}
      <section style={{ padding: '80px 24px', background: '#F8F7F3' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
          <ScrollReveal>
            <SectionLabel>Alumni Stories</SectionLabel>
            <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '2rem', color: '#0A1535', marginBottom: '48px' }}>Voices from the Network</h2>
          </ScrollReveal>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(380px, 1fr))', gap: '28px' }}>
            {others.map((alum, i) => (
              <ScrollReveal key={alum.id} delay={i * 0.08}>
                <div style={{ background: '#FFFFFF', borderRadius: '16px', padding: '32px', boxShadow: '0 4px 20px rgba(10,21,53,0.07)' }}>
                  <div style={{ display: 'flex', gap: '16px', alignItems: 'center', marginBottom: '20px' }}>
                    <div style={{
                      width: '52px', height: '52px', borderRadius: '50%', flexShrink: 0,
                      background: `linear-gradient(135deg, ${alum.avatarColor}, #1E3570)`,
                      border: '2px solid rgba(201,168,76,0.3)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '14px', color: '#C9A84C' }}>{getInitials(alum.name)}</span>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1rem', color: '#0A1535' }}>{alum.name}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: '#C9A84C' }}>{alum.batch} · {alum.degree}</div>
                      <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11.5px', color: '#888' }}>{alum.currentRole}, {alum.organization}</div>
                    </div>
                  </div>
                  <blockquote style={{ fontFamily: "'Lora', serif", fontStyle: 'italic', fontSize: '14px', color: '#4a4a45', lineHeight: 1.7, margin: 0, borderLeft: '2px solid #C9A84C', paddingLeft: '16px' }}>
                    "{alum.quote}"
                  </blockquote>
                </div>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background: '#0A1535', padding: '80px 24px', textAlign: 'center' }}>
        <ScrollReveal>
          <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '2.2rem', color: '#F8F7F3', marginBottom: '16px' }}>
            Connect with the <em style={{ color: '#C9A84C' }}>Alumni Network</em>
          </h2>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(248,247,243,0.6)', maxWidth: '480px', margin: '0 auto 32px', lineHeight: 1.65 }}>
            Join 5,000+ DU IR graduates shaping policy, diplomacy, and scholarship around the world.
          </p>
          <motion.a
            href="mailto:ir@du.ac.bd"
            style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px',
              color: '#0A1535', background: '#C9A84C',
              padding: '14px 32px', borderRadius: '6px', textDecoration: 'none',
            }}
            whileHover={{ background: '#DDB96A' }}
            transition={{ duration: 0.2 }}
          >
            Join the Network
          </motion.a>
        </ScrollReveal>
      </section>
    </PageWrapper>
  );
}
