import { Award, Users, GraduationCap, BookOpen } from 'lucide-react';
import AnimatedNumber from '@/components/ui/AnimatedNumber';
import ScrollReveal from '@/components/ui/ScrollReveal';
import { departmentStats } from '@/data/stats';

const iconMap: Record<string, React.ElementType> = {
  Award, Users, GraduationCap, BookOpen,
};

export default function StatsSection() {
  return (
    <section style={{ background: '#0A1535', padding: '80px 24px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto' }}>
        <ScrollReveal delay={0.1}>
          <p style={{
            textAlign: 'center',
            fontFamily: 'Inter, sans-serif',
            fontSize: '11px',
            fontWeight: 600,
            letterSpacing: '0.22em',
            textTransform: 'uppercase',
            color: 'rgba(201,168,76,0.7)',
            marginBottom: '48px',
          }}>
            The Department by Numbers
          </p>
        </ScrollReveal>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1px',
          background: 'rgba(201,168,76,0.12)',
          borderRadius: '12px',
          overflow: 'hidden',
        }}>
          {departmentStats.map((stat, i) => {
            const Icon = iconMap[stat.icon];
            return (
              <ScrollReveal key={stat.label} delay={i * 0.12}>
                <div style={{
                  background: '#0A1535',
                  padding: '48px 32px',
                  textAlign: 'center',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '12px',
                }}>
                  <div style={{
                    width: '48px', height: '48px', borderRadius: '12px',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    marginBottom: '8px',
                  }}>
                    {Icon && <Icon size={20} color="#C9A84C" />}
                  </div>
                  <div style={{
                    fontFamily: "'Lora', serif",
                    fontWeight: 700,
                    fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                    color: '#C9A84C',
                    lineHeight: 1,
                  }}>
                    <AnimatedNumber value={stat.value} suffix={stat.suffix} />
                  </div>
                  <div style={{
                    fontFamily: 'Inter, sans-serif',
                    fontSize: '13px',
                    fontWeight: 500,
                    color: 'rgba(248,247,243,0.6)',
                    letterSpacing: '0.04em',
                  }}>
                    {stat.label}
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
