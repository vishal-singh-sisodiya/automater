import { useState, useCallback } from 'react'
import {
  Menu,
  X,
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  Play,
  Share2,
  Bird,
  Camera,
  Building2,
  ListVideo,
  MessageCircle,
} from 'lucide-react'

const ACCENT = '#C8F04C'
const MUTED = '#5c5c5c'
const BORDER = '#eaeaea'

const IMG = {
  hero: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1400',
  community1: 'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=800',
  community2: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800',
  cta: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=1400',
  t1: 'https://images.unsplash.com/photo-1567013127542-490d757e51fc?w=400',
  t2: 'https://images.unsplash.com/photo-1548690312-e3b507d8c110?w=400',
  t3: 'https://images.unsplash.com/photo-1544717305-2782549b5136?w=400',
}

const CLASS_BG = [
  'https://images.unsplash.com/photo-1601422407692-ec4eeec1d9b3?w=800&q=80',
  'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=800&q=80',
  'https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?w=800&q=80',
  'https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?w=800&q=80',
]

function onClassImageError(e) {
  const el = e.currentTarget
  el.onerror = null
  el.style.background = '#1a1a1a'
}

const INSTAGRAM_GRID = [
  'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=300',
  'https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300',
  'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=300',
  'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=300',
  'https://images.unsplash.com/photo-1518611012118-696072aa560a?w=300',
  'https://images.unsplash.com/photo-1571902947922-62385642e17f?w=300',
  'https://images.unsplash.com/photo-1540497077202-7c8a3999163f?w=300',
  'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300',
  'https://images.unsplash.com/photo-1593079836523-6b85670203c0?w=300',
]

function Watermark({ text }) {
  return <div className="pz-watermark">{text}</div>
}

const pill = {
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  padding: '0.65rem 1.35rem',
  borderRadius: 999,
  fontWeight: 600,
  fontSize: '0.875rem',
  border: 'none',
  transition: 'transform 0.2s, box-shadow 0.2s',
}

const sectionPad = { padding: 'clamp(4rem, 10vw, 7rem) clamp(1.5rem, 5vw, 4rem)' }

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [newsletterOk, setNewsletterOk] = useState(false)

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  const onNewsletter = (e) => {
    e.preventDefault()
    setNewsletterOk(true)
  }

  const navLink = (href, label) => (
    <a
      href={href}
      onClick={closeMenu}
      style={{
        fontSize: '0.9rem',
        fontWeight: 500,
        color: '#111',
        letterSpacing: '0.02em',
      }}
    >
      {label}
    </a>
  )

  return (
    <>
      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 200,
          background: '#fff',
          borderBottom: `1px solid ${BORDER}`,
        }}
      >
        <nav
          style={{
            maxWidth: 1280,
            margin: '0 auto',
            padding: '1rem clamp(1.25rem, 4vw, 2rem)',
            display: 'grid',
            gridTemplateColumns: 'auto 1fr auto',
            alignItems: 'center',
            gap: '1rem',
          }}
        >
          <a href="#home" className="pz-bebas" style={{ fontSize: '1.75rem', letterSpacing: '0.06em' }}>
            PULSEZONE
          </a>
          <div className="pz-nav-center pz-nav-links" style={{ justifyContent: 'center' }}>
            {navLink('#home', 'Home')}
            {navLink('#about', 'About')}
            {navLink('#classes', 'Classes')}
            {navLink('#pricing', 'Pricing')}
            {navLink('#contact', 'Contact')}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', justifyContent: 'flex-end' }}>
            <a
              href="#pricing"
              className="pz-join-desktop"
              style={{
                ...pill,
                background: ACCENT,
                color: '#0a0a0a',
              }}
            >
              Join Now
            </a>
            <button
              type="button"
              className="pz-nav-toggle"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((v) => !v)}
            >
              {menuOpen ? <X size={28} strokeWidth={1.5} /> : <Menu size={28} strokeWidth={1.5} />}
            </button>
          </div>
        </nav>
        <div
          className={`pz-mobile-drawer ${menuOpen ? 'pz-open' : ''}`}
          style={{
            position: 'fixed',
            inset: 0,
            top: 64,
            background: '#fff',
            zIndex: 150,
            flexDirection: 'column',
            padding: '2rem',
            gap: '1.5rem',
            borderTop: `1px solid ${BORDER}`,
          }}
        >
          {navLink('#home', 'Home')}
          {navLink('#about', 'About')}
          {navLink('#classes', 'Classes')}
          {navLink('#pricing', 'Pricing')}
          {navLink('#contact', 'Contact')}
          <a
            href="#pricing"
            onClick={closeMenu}
            style={{
              ...pill,
              background: ACCENT,
              color: '#0a0a0a',
              marginTop: '0.5rem',
              alignSelf: 'flex-start',
            }}
          >
            Join Now
          </a>
        </div>
      </header>

      <main id="home">
        {/* HERO */}
        <section className="pz-hero-grid" style={{ background: '#fff' }}>
          <div
            style={{
              flex: '1 1 50%',
              padding: 'clamp(2rem, 6vw, 4rem)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              gap: '1.5rem',
              position: 'relative',
              zIndex: 1,
            }}
          >
            <span
              style={{
                display: 'inline-block',
                fontSize: '0.75rem',
                fontWeight: 700,
                letterSpacing: '0.2em',
                textTransform: 'uppercase',
                color: MUTED,
              }}
            >
              The #1 Gym in Bhopal
            </span>
            <h1
              className="pz-bebas"
              style={{
                margin: 0,
                fontSize: 'clamp(3.25rem, 8vw, 5.5rem)',
                lineHeight: 0.95,
                letterSpacing: '0.02em',
                maxWidth: '12ch',
              }}
            >
              The gym for high impact athletes
            </h1>
            <p style={{ margin: 0, fontSize: '1.05rem', lineHeight: 1.65, color: MUTED, maxWidth: 440 }}>
              Elite coaching, world-class equipment, and a community that pushes you further — every single session.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
              <a
                href="#pricing"
                style={{
                  ...pill,
                  background: ACCENT,
                  color: '#0a0a0a',
                }}
              >
                Subscribe Now
              </a>
              <a
                href="#classes"
                style={{
                  ...pill,
                  background: 'transparent',
                  color: '#0a0a0a',
                  border: '2px solid #0a0a0a',
                }}
              >
                Browse Classes
              </a>
            </div>
            <div className="pz-hero-cards">
              {[
                {
                  icon: <Phone size={18} />,
                  title: 'Contact',
                  lines: ['+91 98765 43210', 'hello@pulsezonefitness.com'],
                },
                {
                  icon: <Clock size={18} />,
                  title: 'Open Hours',
                  lines: ['Mon — Sun', '6AM — 10PM'],
                },
                {
                  icon: <MapPin size={18} />,
                  title: 'Location',
                  lines: ['Bhopal,', 'Madhya Pradesh'],
                },
              ].map((c) => (
                <div
                  key={c.title}
                  style={{
                    border: `1px solid ${BORDER}`,
                    padding: '1rem',
                    borderRadius: 4,
                    background: '#fafafa',
                  }}
                >
                  <div style={{ color: ACCENT, marginBottom: '0.5rem' }}>{c.icon}</div>
                  <div className="pz-bebas" style={{ fontSize: '1.1rem', letterSpacing: '0.04em', marginBottom: '0.35rem' }}>
                    {c.title}
                  </div>
                  {c.lines.map((line) => (
                    <div key={line} style={{ fontSize: '0.8rem', color: MUTED, lineHeight: 1.4 }}>
                      {line}
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
          <div
            style={{
              flex: '1 1 45%',
              position: 'relative',
              minHeight: 420,
              marginRight: 'clamp(0px, 3vw, 2rem)',
              marginTop: 'clamp(0px, 4vw, 3rem)',
              marginBottom: 'clamp(0px, 4vw, 3rem)',
            }}
          >
            <div
              style={{
                position: 'absolute',
                inset: '0 0 0 8%',
                borderRadius: 4,
                overflow: 'hidden',
                boxShadow: '0 40px 80px rgba(0,0,0,0.12)',
              }}
            >
              <img src={IMG.hero} alt="Athletes training at PulseZone" className="pz-img-cover" style={{ minHeight: '100%' }} />
            </div>
          </div>
        </section>

        {/* COMMUNITY */}
        <section id="about" style={{ ...sectionPad, position: 'relative', overflow: 'hidden', background: '#fff' }}>
          <Watermark text="COMMUNITY" />
          <div className="pz-community-grid" style={{ position: 'relative', zIndex: 1 }}>
            <div>
              <h2
                className="pz-bebas"
                style={{
                  margin: '0 0 1.5rem',
                  fontSize: 'clamp(2.5rem, 5vw, 3.75rem)',
                  lineHeight: 1,
                  letterSpacing: '0.02em',
                  maxWidth: '14ch',
                }}
              >
                We are not just a gym, we are a whole community
              </h2>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.75rem' }}>
                <a href="#classes" style={{ ...pill, background: ACCENT, color: '#0a0a0a' }}>
                  Explore Classes
                </a>
                <a
                  href="#contact"
                  style={{ ...pill, background: 'transparent', color: '#0a0a0a', border: `2px solid #0a0a0a` }}
                >
                  Get in Touch
                </a>
              </div>
            </div>
            <div style={{ position: 'relative', height: 420, maxWidth: 480, marginLeft: 'auto' }}>
              <div
                style={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  width: '72%',
                  height: '58%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 24px 48px rgba(0,0,0,0.15)',
                  zIndex: 2,
                }}
              >
                <img src={IMG.community1} alt="Community training" className="pz-img-cover" />
              </div>
              <div
                style={{
                  position: 'absolute',
                  bottom: 0,
                  left: 0,
                  width: '72%',
                  height: '62%',
                  borderRadius: 4,
                  overflow: 'hidden',
                  boxShadow: '0 24px 48px rgba(0,0,0,0.12)',
                  zIndex: 1,
                }}
              >
                <img src={IMG.community2} alt="Group workout" className="pz-img-cover" />
              </div>
            </div>
          </div>
        </section>

        {/* CLASSES */}
        <section id="classes" style={{ ...sectionPad, position: 'relative', overflow: 'hidden', background: '#fafafa' }}>
          <Watermark text="CLASSES" />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
            <h2
              className="pz-bebas"
              style={{
                margin: '0 0 2.5rem',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                letterSpacing: '0.02em',
                textAlign: 'center',
              }}
            >
              Discover all our classes
            </h2>
            <div className="pz-class-grid">
              {[
                {
                  title: 'High-Intensity Training',
                  desc: 'Explosive circuits built to spike metabolism and build lean power.',
                  bg: CLASS_BG[0],
                },
                {
                  title: 'Weight Lifting',
                  desc: 'Progressive overload, form-first coaching, and serious strength gains.',
                  bg: CLASS_BG[1],
                },
                {
                  title: 'Crossfit',
                  desc: 'Varied functional movements at high intensity — scalable for every level.',
                  bg: CLASS_BG[2],
                },
                {
                  title: 'Cardio',
                  desc: 'Engine-building sessions that sharpen endurance and mental grit.',
                  bg: CLASS_BG[3],
                },
              ].map((cl) => (
                <a
                  key={cl.title}
                  href="#classes"
                  style={{
                    position: 'relative',
                    minHeight: 280,
                    borderRadius: 4,
                    overflow: 'hidden',
                    display: 'block',
                    color: '#fff',
                  }}
                >
                  <img
                    src={cl.bg}
                    alt=""
                    crossOrigin="anonymous"
                    className="pz-img-cover"
                    style={{
                      position: 'absolute',
                      inset: 0,
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                    }}
                    onError={onClassImageError}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: 'linear-gradient(to top, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.2) 55%, rgba(0,0,0,0.05) 100%)',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'flex-end',
                      padding: '1.5rem',
                      gap: '0.5rem',
                    }}
                  >
                    <span className="pz-bebas" style={{ fontSize: '1.75rem', letterSpacing: '0.04em' }}>
                      {cl.title}
                    </span>
                    <p style={{ margin: 0, fontSize: '0.9rem', opacity: 0.9, lineHeight: 1.5, maxWidth: '32ch' }}>{cl.desc}</p>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 600, fontSize: '0.85rem', marginTop: '0.25rem' }}>
                      Class Info <ArrowRight size={16} />
                    </span>
                  </div>
                </a>
              ))}
            </div>
            <div style={{ textAlign: 'center', marginTop: '2.5rem' }}>
              <a href="#classes" style={{ ...pill, background: '#0a0a0a', color: '#fff' }}>
                Browse All Classes
              </a>
            </div>
          </div>
        </section>

        {/* CTA / VIDEO */}
        <section
          id="pricing"
          style={{
            position: 'relative',
            minHeight: 560,
            overflow: 'hidden',
          }}
        >
          <img src={IMG.cta} alt="" className="pz-img-cover" style={{ position: 'absolute', inset: 0, zIndex: 0, minHeight: '100%' }} />
          <div
            style={{
              position: 'absolute',
              inset: 0,
              zIndex: 1,
              background: 'linear-gradient(to bottom, rgba(0,0,0,0.45), rgba(0,0,0,0.72))',
            }}
          />
          <button
            type="button"
            aria-label="Play highlight reel"
            style={{
              position: 'absolute',
              zIndex: 3,
              left: '50%',
              top: '46%',
              transform: 'translate(-50%, -50%)',
              width: 88,
              height: 88,
              borderRadius: '50%',
              border: '2px solid rgba(255,255,255,0.9)',
              background: 'rgba(255,255,255,0.12)',
              backdropFilter: 'blur(6px)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              color: '#fff',
            }}
          >
            <Play size={36} fill="currentColor" style={{ marginLeft: 6 }} />
          </button>
          <div
            style={{
              position: 'relative',
              zIndex: 2,
              minHeight: 560,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'flex-end',
              alignItems: 'center',
              padding: 'clamp(2rem, 6vw, 4rem)',
              paddingBottom: 'clamp(2.5rem, 6vw, 4rem)',
              textAlign: 'center',
            }}
          >
            <h2
              className="pz-bebas"
              style={{
                margin: '0 0 1.25rem',
                fontSize: 'clamp(2.25rem, 5vw, 4rem)',
                color: '#fff',
                letterSpacing: '0.03em',
                lineHeight: 1.05,
                maxWidth: 720,
              }}
            >
              Discover what makes our Gym different
            </h2>
            <a href="#contact" style={{ ...pill, background: ACCENT, color: '#0a0a0a' }}>
              Subscribe Now
            </a>
          </div>
        </section>

        {/* TRAINERS */}
        <section style={{ ...sectionPad, position: 'relative', overflow: 'hidden', background: '#fff' }}>
          <Watermark text="TRAINERS" />
          <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
            <h2
              className="pz-bebas"
              style={{
                margin: '0 0 2.5rem',
                fontSize: 'clamp(2.5rem, 5vw, 3.5rem)',
                letterSpacing: '0.02em',
                textAlign: 'center',
              }}
            >
              Our team of personal trainers
            </h2>
            <div className="pz-trainer-row">
              {[
                { name: 'Arjun Sharma', img: IMG.t1 },
                { name: 'Priya Mehta', img: IMG.t2 },
                { name: 'Rohan Desai', img: IMG.t3 },
              ].map((tr) => (
                <div
                  key={tr.name}
                  style={{
                    border: `1px solid ${BORDER}`,
                    borderRadius: 4,
                    overflow: 'hidden',
                    background: '#fafafa',
                  }}
                >
                  <div style={{ aspectRatio: '3/4', overflow: 'hidden' }}>
                    <img src={tr.img} alt={tr.name} className="pz-img-cover" style={{ height: '100%' }} />
                  </div>
                  <div style={{ padding: '1.25rem' }}>
                    <div className="pz-bebas" style={{ fontSize: '1.5rem', letterSpacing: '0.05em' }}>
                      {tr.name}
                    </div>
                    <div style={{ fontSize: '0.8rem', color: MUTED, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: '0.25rem' }}>
                      Personal Coach
                    </div>
                    <div style={{ display: 'flex', gap: '0.75rem', marginTop: '1rem', color: '#111' }}>
                      <a href="#" aria-label={`${tr.name} on Twitter`}>
                        <Bird size={18} strokeWidth={1.75} />
                      </a>
                      <a href="#" aria-label={`${tr.name} on Instagram`}>
                        <Camera size={18} strokeWidth={1.75} />
                      </a>
                      <a href="#" aria-label={`${tr.name} on LinkedIn`}>
                        <Building2 size={18} strokeWidth={1.75} />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* BLOG */}
        <section style={{ ...sectionPad, background: '#fafafa' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <h2
              className="pz-bebas"
              style={{
                margin: '0 0 2rem',
                fontSize: 'clamp(2.5rem, 5vw, 3.25rem)',
                letterSpacing: '0.02em',
              }}
            >
              Articles & News
            </h2>
            <div className="pz-blog-row">
              {[
                { date: '12 Jan 2025', title: '5 Tips to build a daily movement routine' },
                { date: '28 Jan 2025', title: "The beginner's guide to weight lifting" },
                { date: '14 Feb 2025', title: 'Why breathwork matters in your workout' },
              ].map((post) => (
                <article
                  key={post.title}
                  style={{
                    background: '#fff',
                    border: `1px solid ${BORDER}`,
                    borderRadius: 4,
                    padding: '1.5rem',
                    display: 'flex',
                    flexDirection: 'column',
                    gap: '1rem',
                  }}
                >
                  <span
                    style={{
                      alignSelf: 'flex-start',
                      fontSize: '0.7rem',
                      fontWeight: 700,
                      letterSpacing: '0.1em',
                      textTransform: 'uppercase',
                      background: ACCENT,
                      color: '#0a0a0a',
                      padding: '0.35rem 0.65rem',
                      borderRadius: 2,
                    }}
                  >
                    {post.date}
                  </span>
                  <h3 style={{ margin: 0, fontSize: '1.2rem', fontWeight: 600, lineHeight: 1.35, flex: 1 }}>{post.title}</h3>
                  <a href="#" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontWeight: 600, fontSize: '0.9rem' }}>
                    Read More <ArrowRight size={16} />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* INSTAGRAM */}
        <section style={{ ...sectionPad, background: '#fff' }}>
          <p
            className="pz-bebas"
            style={{
              textAlign: 'center',
              margin: '0 0 2rem',
              fontSize: 'clamp(1.75rem, 4vw, 2.5rem)',
              letterSpacing: '0.06em',
            }}
          >
            Follow on Instagram @pulsezonefitness
          </p>
          <div className="pz-ig-grid" style={{ maxWidth: 900, margin: '0 auto' }}>
            {INSTAGRAM_GRID.map((src, i) => (
              <a key={src} href="#" style={{ aspectRatio: 1, overflow: 'hidden', display: 'block' }} aria-label={`Instagram post ${i + 1}`}>
                <img src={src} alt="" className="pz-img-cover" />
              </a>
            ))}
          </div>
        </section>

        {/* FOOTER */}
        <footer id="contact" style={{ background: '#0a0a0a', color: '#fff', padding: 'clamp(3rem, 8vw, 5rem) clamp(1.5rem, 4vw, 3rem)' }}>
          <div style={{ maxWidth: 1100, margin: '0 auto' }}>
            <div className="pz-bebas" style={{ fontSize: '2rem', letterSpacing: '0.08em', marginBottom: '2.5rem', color: '#fff' }}>
              PULSEZONE
            </div>
            <div className="pz-footer-grid" style={{ marginBottom: '3rem' }}>
              <div>
                <div className="pz-bebas" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem', color: ACCENT }}>
                  Pages
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                  <a href="#home">Home</a>
                  <a href="#about">About</a>
                  <a href="#classes">Classes</a>
                  <a href="#pricing">Pricing</a>
                </div>
              </div>
              <div>
                <div className="pz-bebas" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem', color: ACCENT }}>
                  Utility Pages
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', fontSize: '0.9rem', color: 'rgba(255,255,255,0.7)' }}>
                  <a href="#contact">Contact</a>
                  <a href="#">404</a>
                  <a href="#">Licensing</a>
                </div>
              </div>
              <div>
                <div className="pz-bebas" style={{ fontSize: '1rem', letterSpacing: '0.2em', marginBottom: '1rem', color: ACCENT }}>
                  Newsletter
                </div>
                {newsletterOk ? (
                  <p style={{ margin: 0, color: ACCENT, fontWeight: 600, fontSize: '0.95rem' }}>Thanks — you&apos;re on the list.</p>
                ) : (
                  <form onSubmit={onNewsletter} style={{ display: 'flex', flexDirection: 'column', gap: '0.65rem', maxWidth: 320 }}>
                    <input
                      type="email"
                      name="email"
                      required
                      placeholder="Email address"
                      style={{
                        width: '100%',
                        padding: '0.65rem 0.85rem',
                        borderRadius: 4,
                        border: '1px solid rgba(255,255,255,0.2)',
                        background: 'rgba(255,255,255,0.06)',
                        color: '#fff',
                      }}
                    />
                    <button
                      type="submit"
                      style={{
                        ...pill,
                        background: ACCENT,
                        color: '#0a0a0a',
                        alignSelf: 'flex-start',
                      }}
                    >
                      Subscribe
                    </button>
                  </form>
                )}
              </div>
            </div>
            <p style={{ margin: '0 0 2rem', color: 'rgba(255,255,255,0.5)', fontSize: '0.9rem', lineHeight: 1.6, maxWidth: 420 }}>
              PulseZone Fitness — MP Nagar, Bhopal. Train with coaches who care about your form, your goals, and your edge.
            </p>
            <div
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '1.25rem',
                alignItems: 'center',
                justifyContent: 'space-between',
                paddingTop: '2rem',
                borderTop: '1px solid rgba(255,255,255,0.12)',
              }}
            >
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {[
                  { Icon: Share2, label: 'Facebook' },
                  { Icon: Bird, label: 'Twitter' },
                  { Icon: Camera, label: 'Instagram' },
                  { Icon: Building2, label: 'LinkedIn' },
                  { Icon: ListVideo, label: 'YouTube' },
                  { Icon: MessageCircle, label: 'WhatsApp' },
                ].map(({ Icon, label }) => (
                  <a key={label} href="#" aria-label={label} style={{ color: 'rgba(255,255,255,0.75)' }}>
                    <Icon size={20} strokeWidth={1.75} />
                  </a>
                ))}
              </div>
              <p style={{ margin: 0, fontSize: '0.8rem', color: 'rgba(255,255,255,0.45)' }}>
                © 2025 PulseZone Fitness | Designed with ❤️ in Bhopal
              </p>
            </div>
          </div>
        </footer>
      </main>

      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        style={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 300,
          width: 56,
          height: 56,
          borderRadius: '50%',
          background: '#25D366',
          color: '#fff',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          boxShadow: '0 12px 32px rgba(37, 211, 102, 0.45)',
        }}
      >
        <MessageCircle size={28} strokeWidth={2} />
      </a>
    </>
  )
}
