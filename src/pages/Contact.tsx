import { useState } from 'react';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Send, Facebook, Twitter, Linkedin, Youtube } from 'lucide-react';
import PageWrapper from '@/components/layout/PageWrapper';
import SectionLabel from '@/components/ui/SectionLabel';
import ScrollReveal from '@/components/ui/ScrollReveal';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setForm(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In production this would hit an API endpoint
    setSent(true);
    setForm({ name: '', email: '', subject: '', message: '' });
  };

  const inputStyle: React.CSSProperties = {
    width: '100%', padding: '12px 16px',
    fontFamily: 'Inter, sans-serif', fontSize: '14px',
    border: '1.5px solid #E8E8E4', borderRadius: '8px',
    background: '#FFFFFF', color: '#0A1535',
    outline: 'none', boxSizing: 'border-box',
    transition: 'border-color 0.2s',
  };

  return (
    <PageWrapper>
      {/* Hero */}
      <div style={{ background: 'linear-gradient(135deg, #0A1535, #172C60)', padding: '80px 24px 72px' }}>
        <div style={{ maxWidth: '1280px', margin: '0 auto', textAlign: 'center' }}>
          <SectionLabel centered light>Get in Touch</SectionLabel>
          <h1 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: 'clamp(2.2rem, 5vw, 3.5rem)', color: '#F8F7F3', margin: 0, lineHeight: 1.15 }}>
            Contact <em style={{ color: '#C9A84C', fontStyle: 'italic' }}>the Department</em>
          </h1>
          <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '15px', color: 'rgba(248,247,243,0.6)', maxWidth: '480px', margin: '16px auto 0', lineHeight: 1.65 }}>
            We welcome enquiries from prospective students, researchers, and visiting scholars.
          </p>
        </div>
      </div>

      <div style={{ background: '#F8F7F3', padding: '80px 24px 100px' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px', alignItems: 'flex-start' }}>
            {/* Contact Form */}
            <ScrollReveal direction="right">
              <div style={{ background: '#FFFFFF', borderRadius: '24px', padding: '48px', boxShadow: '0 4px 32px rgba(10,21,53,0.08)' }}>
                <h2 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.6rem', color: '#0A1535', marginBottom: '8px' }}>Send a Message</h2>
                <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#888', marginBottom: '32px' }}>We'll respond within 2–3 working days.</p>

                {sent ? (
                  <div style={{ textAlign: 'center', padding: '40px 0' }}>
                    <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(22,163,74,0.1)', border: '2px solid rgba(22,163,74,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                      <Send size={22} color="#16A34A" />
                    </div>
                    <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.3rem', color: '#0A1535', marginBottom: '8px' }}>Message Sent!</h3>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#888' }}>Thank you for reaching out. We'll be in touch shortly.</p>
                    <button onClick={() => setSent(false)} style={{ marginTop: '20px', fontFamily: 'Inter, sans-serif', fontSize: '13px', color: '#C9A84C', background: 'none', border: 'none', cursor: 'pointer', textDecoration: 'underline' }}>Send another message</button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#6b6b66', display: 'block', marginBottom: '6px', letterSpacing: '0.04em' }}>Full Name *</label>
                        <input name="name" value={form.name} onChange={handleChange} required placeholder="Dr. Jane Smith" style={inputStyle} />
                      </div>
                      <div>
                        <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#6b6b66', display: 'block', marginBottom: '6px', letterSpacing: '0.04em' }}>Email Address *</label>
                        <input name="email" type="email" value={form.email} onChange={handleChange} required placeholder="name@example.com" style={inputStyle} />
                      </div>
                    </div>
                    <div>
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#6b6b66', display: 'block', marginBottom: '6px', letterSpacing: '0.04em' }}>Subject *</label>
                      <select name="subject" value={form.subject} onChange={handleChange} required style={inputStyle}>
                        <option value="">Select a subject…</option>
                        <option>Admission Enquiry</option>
                        <option>Research Collaboration</option>
                        <option>Faculty Contact</option>
                        <option>Media & Press</option>
                        <option>Alumni Relations</option>
                        <option>General Enquiry</option>
                      </select>
                    </div>
                    <div>
                      <label style={{ fontFamily: 'Inter, sans-serif', fontSize: '12px', fontWeight: 600, color: '#6b6b66', display: 'block', marginBottom: '6px', letterSpacing: '0.04em' }}>Message *</label>
                      <textarea
                        name="message" value={form.message} onChange={handleChange} required
                        placeholder="Your message…" rows={5}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: '120px' }}
                      />
                    </div>
                    <motion.button
                      type="submit"
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px',
                        padding: '13px 28px', borderRadius: '8px', border: 'none',
                        background: '#C9A84C', color: '#0A1535',
                        fontFamily: 'Inter, sans-serif', fontWeight: 600, fontSize: '14px',
                        cursor: 'pointer', marginTop: '8px',
                      }}
                      whileHover={{ background: '#DDB96A' }}
                      whileTap={{ scale: 0.97 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Send size={15} /> Send Message
                    </motion.button>
                  </form>
                )}
              </div>
            </ScrollReveal>

            {/* Contact Info */}
            <ScrollReveal direction="left" delay={0.15}>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {/* Office Info */}
                <div style={{ background: '#FFFFFF', borderRadius: '20px', padding: '36px', boxShadow: '0 4px 20px rgba(10,21,53,0.07)' }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.25rem', color: '#0A1535', marginBottom: '24px' }}>Office Information</h3>
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                    {[
                      { Icon: MapPin, label: 'Address', value: 'Department of International Relations\nArts Faculty, University of Dhaka\nDhaka-1000, Bangladesh' },
                      { Icon: Phone, label: 'Phone', value: '+880-2-9661920 Ext. 7513' },
                      { Icon: Mail, label: 'Email', value: 'ir@du.ac.bd' },
                      { Icon: Clock, label: 'Office Hours', value: 'Sunday – Thursday\n9:00 AM – 5:00 PM' },
                    ].map(({ Icon, label, value }) => (
                      <div key={label} style={{ display: 'flex', gap: '14px', alignItems: 'flex-start' }}>
                        <div style={{ width: '36px', height: '36px', borderRadius: '8px', background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                          <Icon size={14} color="#C9A84C" />
                        </div>
                        <div>
                          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '10.5px', fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C9A84C', marginBottom: '2px' }}>{label}</div>
                          <div style={{ fontFamily: 'Inter, sans-serif', fontSize: '13.5px', color: '#3D3D38', lineHeight: 1.55, whiteSpace: 'pre-line' }}>{value}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Social */}
                <div style={{ background: '#0A1535', borderRadius: '20px', padding: '32px' }}>
                  <h3 style={{ fontFamily: "'Lora', serif", fontWeight: 700, fontSize: '1.1rem', color: '#F8F7F3', marginBottom: '20px' }}>Follow the Department</h3>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    {[Facebook, Twitter, Linkedin, Youtube].map((Icon, i) => (
                      <motion.a
                        key={i} href="#" aria-label="Social link"
                        style={{
                          width: '44px', height: '44px', borderRadius: '10px',
                          background: 'rgba(201,168,76,0.1)', border: '1px solid rgba(201,168,76,0.2)',
                          display: 'flex', alignItems: 'center', justifyContent: 'center',
                          color: 'rgba(201,168,76,0.7)', textDecoration: 'none',
                        }}
                        whileHover={{ background: '#C9A84C', color: '#0A1535', borderColor: '#C9A84C' }}
                        transition={{ duration: 0.2 }}
                      >
                        <Icon size={17} />
                      </motion.a>
                    ))}
                  </div>
                </div>

                {/* Map placeholder */}
                <div style={{
                  borderRadius: '20px', overflow: 'hidden', height: '200px',
                  background: 'linear-gradient(135deg, #172C60, #1E3570)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  border: '1px solid rgba(201,168,76,0.15)',
                  cursor: 'pointer',
                }}>
                  <div style={{ textAlign: 'center' }}>
                    <MapPin size={28} color="#C9A84C" style={{ marginBottom: '8px' }} />
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '13px', color: 'rgba(248,247,243,0.6)', margin: 0 }}>University of Dhaka Campus</p>
                    <p style={{ fontFamily: 'Inter, sans-serif', fontSize: '11px', color: 'rgba(248,247,243,0.4)', margin: '4px 0 0' }}>Click to open in Google Maps</p>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </PageWrapper>
  );
}
