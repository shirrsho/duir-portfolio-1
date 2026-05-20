import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';

const quickLinks = [
  { to: '/about', label: 'About the Department' },
  { to: '/faculty', label: 'Faculty Directory' },
  { to: '/programs', label: 'Academic Programs' },
  { to: '/research', label: 'Research' },
  { to: '/news', label: 'News & Events' },
  { to: '/alumni', label: 'Alumni' },
];

const academicLinks = [
  { label: 'Undergraduate Admission' },
  { label: 'Graduate Admission' },
  { label: 'Course Catalogue' },
  { label: 'Research Centres' },
  { label: 'Publications' },
  { label: 'Library Resources' },
];

export default function Footer() {
  return (
    <footer style={{ background: '#0A1535', color: '#F8F7F3', paddingTop: '80px' }}>
      <div style={{ maxWidth: '1280px', margin: '0 auto', padding: '0 24px' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
          gap: '48px',
          paddingBottom: '64px',
        }}>
          {/* Brand Column */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '20px' }}>
              <div style={{
                width: '42px', height: '42px', borderRadius: '8px',
                background: 'linear-gradient(135deg, #172C60, #1E3570)',
                border: '1px solid rgba(201,168,76,0.4)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}>
                <span style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '16px', color: '#C9A84C' }}>IR</span>
              </div>
              <div>
                <div style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '16px', color: '#F8F7F3' }}>International Relations</div>
                <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(248,247,243,0.5)', letterSpacing: '0.05em', textTransform: 'uppercase' }}>University of Dhaka</div>
              </div>
            </div>
            <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: 'rgba(248,247,243,0.6)', lineHeight: 1.7, maxWidth: '260px', marginBottom: '24px' }}>
              Shaping global minds through rigorous scholarship, engaged diplomacy, and a commitment to justice since 1947.
            </p>
            {/* Social Icons */}
            <div style={{ display: 'flex', gap: '12px' }}>
              {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                <a key={i} href="#" aria-label="Social link"
                  style={{
                    width: '36px', height: '36px', borderRadius: '8px',
                    background: 'rgba(201,168,76,0.1)',
                    border: '1px solid rgba(201,168,76,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: 'rgba(201,168,76,0.7)',
                    transition: 'all 0.2s',
                  }}
                >
                  <Icon size={15} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '20px' }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {quickLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link to={to} style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: 'rgba(248,247,243,0.65)',
                    textDecoration: 'none', transition: 'color 0.2s',
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,247,243,0.65)')}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C9A84C', flexShrink: 0 }} />
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic */}
          <div>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '20px' }}>
              Academic
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {academicLinks.map(({ label }) => (
                <li key={label}>
                  <a href="#" style={{
                    fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: 'rgba(248,247,243,0.65)',
                    textDecoration: 'none', transition: 'color 0.2s',
                    display: 'inline-flex', alignItems: 'center', gap: '6px',
                  }}
                  onMouseEnter={e => (e.currentTarget.style.color = '#C9A84C')}
                  onMouseLeave={e => (e.currentTarget.style.color = 'rgba(248,247,243,0.65)')}
                  >
                    <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: '#C9A84C', flexShrink: 0 }} />
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', fontWeight: 600, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '20px' }}>
              Contact Us
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { Icon: MapPin, text: 'Department of International Relations\nArts Faculty, University of Dhaka\nDhaka-1000, Bangladesh' },
                { Icon: Phone, text: '+880-2-9661920 Ext. 7513' },
                { Icon: Mail, text: 'ir@du.ac.bd' },
              ].map(({ Icon, text }, i) => (
                <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <Icon size={15} style={{ color: '#C9A84C', flexShrink: 0, marginTop: '2px' }} />
                  <span style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(248,247,243,0.65)', lineHeight: 1.6, whiteSpace: 'pre-line' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(201,168,76,0.15)', padding: '24px 0', display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(248,247,243,0.4)', margin: 0 }}>
            © {new Date().getFullYear()} Department of International Relations, University of Dhaka. All rights reserved.
          </p>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', color: 'rgba(248,247,243,0.4)', margin: 0 }}>
            Established 1947 · Dhaka, Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
