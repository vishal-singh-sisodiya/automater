import { useState, useEffect, useCallback } from 'react'
import {
  Smile,
  Menu,
  X,
  Phone,
  Mail,
  Clock,
  Sparkles,
  Sun,
  Layers,
  Activity,
  CircleDot,
  Baby,
  ScanLine,
  ShieldCheck,
  Coins,
  Ambulance,
  Star,
  Share2,
  Camera,
  Link2,
  MessageCircle,
  MapPin,
  ChevronRight,
} from 'lucide-react'

const NAVY = '#1B3A6B'
const LIGHT_BLUE = '#E8F4FD'

const PLACEHOLDER =
  'https://via.placeholder.com/600x400/E8F4FD/1B3A6B?text=SmileZone'

const IMG = {
  hero: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=1400&q=80',
  why: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=800&q=80',
  t1: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80',
  t2: 'https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80',
}

function SafeImg({ src, alt, className, style = {} }) {
  return (
    <img
      src={src}
      alt={alt}
      className={className}
      loading="lazy"
      onError={(e) => {
        e.target.src = PLACEHOLDER
      }}
      style={{ width: '100%', height: '100%', objectFit: 'cover', ...style }}
    />
  )
}

const services = [
  {
    name: 'Teeth Cleaning',
    desc: 'Professional scaling and polishing for a fresh, healthy mouth.',
    icon: Sparkles,
    image: 'https://images.pexels.com/photos/3779709/pexels-photo-3779709.jpeg?w=600',
  },
  {
    name: 'Teeth Whitening',
    desc: 'Safe, effective whitening for a noticeably brighter smile.',
    icon: Sun,
    image: 'https://images.pexels.com/photos/3845625/pexels-photo-3845625.jpeg?w=600',
  },
  {
    name: 'Braces & Aligners',
    desc: 'Modern orthodontics including clear aligners and traditional braces.',
    icon: Layers,
    image: 'https://images.pexels.com/photos/4269694/pexels-photo-4269694.jpeg?w=600',
  },
  {
    name: 'Root Canal',
    desc: 'Gentle, precise endodontic care to save your natural tooth.',
    icon: Activity,
    image: 'https://images.pexels.com/photos/3881449/pexels-photo-3881449.jpeg?w=600',
  },
  {
    name: 'Dental Implants',
    desc: 'Durable, natural-looking replacements that restore full function.',
    icon: CircleDot,
    image: 'https://images.pexels.com/photos/6627629/pexels-photo-6627629.jpeg?w=600',
  },
  {
    name: 'Kids Dentistry',
    desc: 'Friendly, gentle visits that help children build lifelong habits.',
    icon: Baby,
    image: 'https://images.pexels.com/photos/5355894/pexels-photo-5355894.jpeg?w=600',
  },
]

const whyPoints = [
  {
    title: 'Advanced Equipment',
    text: 'Digital imaging and modern chairs for accurate, comfortable care.',
    icon: ScanLine,
  },
  {
    title: 'Painless Treatment',
    text: 'Calm techniques and options to keep every visit stress-free.',
    icon: ShieldCheck,
  },
  {
    title: 'Affordable Prices',
    text: 'Transparent pricing and flexible plans for families in Bhopal.',
    icon: Coins,
  },
  {
    title: 'Emergency Care',
    text: 'Same-day attention when you need urgent relief from pain.',
    icon: Ambulance,
  },
]

const doctors = [
  {
    name: 'Dr. Priya Sharma',
    role: 'BDS, MDS',
    exp: '8 Years Experience',
    image: IMG.t1,
  },
  {
    name: 'Dr. Rahul Mehta',
    role: 'Orthodontist',
    exp: '10 Years Experience',
    image: IMG.t2,
  },
]

const testimonials = [
  {
    text: 'The team explained every step clearly. My root canal was far easier than I expected, and the clinic feels spotless.',
    name: 'Ananya Deshmukh',
    city: 'Bhopal',
    rating: 5,
  },
  {
    text: 'We bring our children here for regular check-ups. The doctors are patient, kind, and genuinely great with kids.',
    name: 'Rohan Kapoor',
    city: 'Indore',
    rating: 5,
  },
  {
    text: 'Professional service from booking to follow-up. Whitening results were excellent and the pricing was fair.',
    name: 'Meera Iyer',
    city: 'Bhopal',
    rating: 5,
  },
]

const serviceOptions = services.map((s) => s.name)

export default function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [formSubmitted, setFormSubmitted] = useState(false)
  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  })

  const closeMenu = useCallback(() => setMenuOpen(false), [])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollToId = (id) => {
    closeMenu()
    const el = document.getElementById(id)
    el?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    setFormSubmitted(true)
  }

  const navLink = (id, label) => (
    <button type="button" className="sz-nav-link" onClick={() => scrollToId(id)}>
      {label}
    </button>
  )

  return (
    <>
      <style>{`
        .sz-wrap {
          width: 100%;
          max-width: 1160px;
          margin: 0 auto;
          padding-left: 20px;
          padding-right: 20px;
        }
        #home, #services, #about, #doctors, #contact { scroll-margin-top: 88px; }
        .sz-topbar {
          background: ${NAVY};
          color: #fff;
          font-size: 13px;
          padding: 8px 0;
        }
        .sz-topbar-inner {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 10px 16px;
        }
        .sz-topbar-left {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          gap: 14px 20px;
        }
        .sz-topbar-item {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          opacity: 0.95;
        }
        .sz-topbar-item a {
          color: inherit;
          text-decoration: none;
        }
        .sz-topbar-item a:hover { text-decoration: underline; }
        @media (max-width: 640px) {
          .sz-topbar-email { display: none; }
        }
        .sz-btn-top {
          background: #fff;
          color: ${NAVY};
          border: none;
          padding: 6px 14px;
          border-radius: 6px;
          font-weight: 600;
          font-size: 12px;
          cursor: pointer;
          white-space: nowrap;
        }
        .sz-btn-top:hover { filter: brightness(0.97); }

        .sz-nav-outer {
          position: sticky;
          top: 0;
          z-index: 100;
          background: #fff;
          transition: box-shadow 0.2s ease;
        }
        .sz-nav-outer.sz-nav-shadow {
          box-shadow: 0 4px 20px rgba(27, 58, 107, 0.12);
        }
        .sz-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding: 14px 0;
          gap: 16px;
        }
        .sz-brand {
          display: flex;
          align-items: center;
          gap: 10px;
          cursor: pointer;
          background: none;
          border: none;
          padding: 0;
          color: inherit;
          font: inherit;
        }
        .sz-brand-icon {
          width: 42px;
          height: 42px;
          border-radius: 10px;
          background: ${LIGHT_BLUE};
          color: ${NAVY};
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sz-brand-text {
          font-family: 'Poppins', sans-serif;
          font-weight: 700;
          font-size: 1.15rem;
          color: ${NAVY};
          text-align: left;
        }
        .sz-nav-links {
          display: flex;
          align-items: center;
          gap: 6px;
        }
        .sz-nav-link {
          background: none;
          border: none;
          padding: 8px 12px;
          font-size: 15px;
          color: #333;
          cursor: pointer;
          border-radius: 6px;
          font-family: inherit;
        }
        .sz-nav-link:hover { color: ${NAVY}; background: ${LIGHT_BLUE}; }
        .sz-btn-primary {
          background: ${NAVY};
          color: #fff;
          border: none;
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
        }
        .sz-btn-primary:hover { filter: brightness(1.05); }
        .sz-btn-outline {
          background: transparent;
          color: ${NAVY};
          border: 2px solid ${NAVY};
          padding: 10px 20px;
          border-radius: 8px;
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
        }
        .sz-btn-outline:hover { background: ${LIGHT_BLUE}; }
        .sz-menu-toggle {
          display: none;
          background: none;
          border: none;
          padding: 8px;
          color: ${NAVY};
          cursor: pointer;
          border-radius: 8px;
        }
        .sz-menu-toggle:hover { background: ${LIGHT_BLUE}; }

        @media (max-width: 900px) {
          .sz-nav-links { display: none; }
          .sz-nav-cta { display: none; }
          .sz-menu-toggle { display: flex; }
        }

        .sz-mobile-backdrop {
          display: none;
          position: fixed;
          inset: 0;
          background: rgba(0,0,0,0.35);
          z-index: 150;
        }
        .sz-mobile-backdrop.sz-open { display: block; }
        .sz-mobile-panel {
          position: fixed;
          top: 0;
          right: 0;
          width: min(300px, 88vw);
          height: 100%;
          background: #fff;
          z-index: 160;
          padding: 24px;
          transform: translateX(100%);
          transition: transform 0.25s ease;
          box-shadow: -8px 0 30px rgba(0,0,0,0.12);
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .sz-mobile-panel.sz-open { transform: translateX(0); }
        .sz-mobile-head {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: 16px;
        }
        .sz-mobile-panel .sz-nav-link {
          text-align: left;
          width: 100%;
          padding: 12px;
        }
        .sz-mobile-panel .sz-btn-primary { margin-top: 8px; width: 100%; }

        .sz-hero {
          padding: 48px 0 64px;
        }
        .sz-hero-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .sz-hero-grid { grid-template-columns: 1fr; }
          .sz-hero-visual { order: -1; }
        }
        .sz-badge {
          display: inline-block;
          background: ${LIGHT_BLUE};
          color: ${NAVY};
          padding: 6px 14px;
          border-radius: 999px;
          font-size: 13px;
          font-weight: 600;
          margin-bottom: 16px;
        }
        .sz-hero h1 {
          font-size: clamp(2rem, 4vw, 2.75rem);
          line-height: 1.15;
          color: ${NAVY};
          margin: 0 0 16px;
          font-weight: 700;
        }
        .sz-hero-sub {
          color: #444;
          font-size: 1.05rem;
          margin-bottom: 24px;
          max-width: 520px;
        }
        .sz-hero-btns {
          display: flex;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 28px;
        }
        .sz-trust-row {
          display: flex;
          flex-wrap: wrap;
          gap: 12px 20px;
          font-size: 14px;
          color: #333;
          font-weight: 500;
        }
        .sz-trust-row span { color: ${NAVY}; font-weight: 600; }
        .sz-hero-visual {
          position: relative;
          border-radius: 16px;
          overflow: hidden;
          min-height: 320px;
          box-shadow: 0 20px 50px rgba(27, 58, 107, 0.18);
        }
        .sz-hero-visual img,
        .sz-hero-visual > div {
          width: 100%;
          height: 100%;
          min-height: 320px;
          object-fit: cover;
        }
        .sz-hero-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(27,58,107,0.55) 0%, rgba(27,58,107,0.15) 50%, transparent 100%);
          pointer-events: none;
        }

        .sz-section-title {
          text-align: center;
          font-size: clamp(1.75rem, 3vw, 2.1rem);
          color: ${NAVY};
          margin: 0 0 12px;
          font-weight: 700;
        }
        .sz-section-sub {
          text-align: center;
          color: #555;
          max-width: 560px;
          margin: 0 auto 40px;
        }

        .sz-services {
          padding: 64px 0 72px;
        }
        .sz-service-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .sz-service-grid { grid-template-columns: repeat(2, 1fr); }
        }
        @media (max-width: 560px) {
          .sz-service-grid { grid-template-columns: 1fr; }
        }
        .sz-service-card {
          background: #fff;
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          overflow: hidden;
          transition: box-shadow 0.2s ease, transform 0.2s ease;
        }
        .sz-service-card:hover {
          box-shadow: 0 12px 32px rgba(27, 58, 107, 0.12);
          transform: translateY(-2px);
        }
        .sz-service-card-img {
          height: 140px;
          object-fit: cover;
          width: 100%;
        }
        .sz-service-card-img-ph {
          height: 140px;
          background: ${LIGHT_BLUE};
        }
        .sz-service-card-body { padding: 20px; }
        .sz-service-icon {
          width: 44px;
          height: 44px;
          border-radius: 10px;
          background: ${LIGHT_BLUE};
          color: ${NAVY};
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 12px;
        }
        .sz-service-card h3 {
          margin: 0 0 8px;
          font-size: 1.1rem;
          color: ${NAVY};
        }
        .sz-service-card p {
          margin: 0 0 14px;
          font-size: 14px;
          color: #555;
          line-height: 1.55;
        }
        .sz-learn {
          background: none;
          border: none;
          padding: 0;
          color: ${NAVY};
          font-weight: 600;
          font-size: 14px;
          cursor: pointer;
          display: inline-flex;
          align-items: center;
          gap: 4px;
          font-family: inherit;
        }
        .sz-learn:hover { text-decoration: underline; }

        .sz-why {
          background: ${LIGHT_BLUE};
          padding: 72px 0;
        }
        .sz-why-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 900px) {
          .sz-why-grid { grid-template-columns: 1fr; }
        }
        .sz-why-list { display: flex; flex-direction: column; gap: 22px; }
        .sz-why-item {
          display: flex;
          gap: 16px;
          align-items: flex-start;
        }
        .sz-why-icon {
          flex-shrink: 0;
          width: 48px;
          height: 48px;
          border-radius: 12px;
          background: #fff;
          color: ${NAVY};
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 14px rgba(27, 58, 107, 0.1);
        }
        .sz-why-item h3 { margin: 0 0 6px; font-size: 1.05rem; color: ${NAVY}; }
        .sz-why-item p { margin: 0; font-size: 14px; color: #444; }
        .sz-about-img-wrap {
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 16px 40px rgba(27, 58, 107, 0.15);
          min-height: 280px;
        }
        .sz-about-img-wrap img,
        .sz-about-img-wrap > div { width: 100%; min-height: 280px; object-fit: cover; }

        .sz-doctors { padding: 72px 0; background: #fff; }
        .sz-doc-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 28px;
          max-width: 800px;
          margin: 0 auto;
        }
        @media (max-width: 700px) {
          .sz-doc-grid { grid-template-columns: 1fr; }
        }
        .sz-doc-card {
          border: 1px solid #e2e8f0;
          border-radius: 16px;
          overflow: hidden;
          background: #fff;
          text-align: center;
          transition: box-shadow 0.2s;
        }
        .sz-doc-card:hover { box-shadow: 0 12px 28px rgba(27, 58, 107, 0.1); }
        .sz-doc-photo {
          width: 100%;
          aspect-ratio: 4/3;
          object-fit: cover;
        }
        .sz-doc-photo > div { width: 100%; height: 100%; min-height: 200px; }
        .sz-doc-body { padding: 22px 20px 24px; }
        .sz-doc-body h3 { margin: 0 0 6px; color: ${NAVY}; font-size: 1.15rem; }
        .sz-doc-body .role { color: #555; font-size: 14px; margin-bottom: 6px; }
        .sz-doc-body .exp { font-size: 13px; color: ${NAVY}; font-weight: 600; margin-bottom: 16px; }
        .sz-social-row {
          display: flex;
          justify-content: center;
          gap: 10px;
        }
        .sz-social-row a {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: ${LIGHT_BLUE};
          color: ${NAVY};
          display: flex;
          align-items: center;
          justify-content: center;
          transition: background 0.15s, color 0.15s;
        }
        .sz-social-row a:hover { background: ${NAVY}; color: #fff; }

        .sz-testimonials { padding: 72px 0; background: #fff; border-top: 1px solid #eef2f7; }
        .sz-test-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) {
          .sz-test-grid { grid-template-columns: 1fr; }
        }
        .sz-test-card {
          border: 1px solid #e2e8f0;
          border-radius: 14px;
          padding: 24px;
          background: #fff;
        }
        .sz-stars { display: flex; gap: 3px; margin-bottom: 12px; color: #eab308; }
        .sz-test-card p { margin: 0 0 16px; color: #444; font-size: 15px; line-height: 1.55; }
        .sz-test-meta { font-weight: 600; color: ${NAVY}; font-size: 14px; }
        .sz-test-city { font-size: 13px; color: #666; font-weight: 400; }

        .sz-booking {
          background: ${LIGHT_BLUE};
          padding: 72px 0;
        }
        .sz-form-wrap {
          max-width: 640px;
          margin: 0 auto;
          background: #fff;
          padding: 32px;
          border-radius: 16px;
          box-shadow: 0 8px 30px rgba(27, 58, 107, 0.08);
        }
        @media (max-width: 520px) {
          .sz-form-wrap { padding: 22px; }
        }
        .sz-form-wrap h2 { text-align: center; margin: 0 0 8px; color: ${NAVY}; }
        .sz-form-note { text-align: center; color: #555; margin: 0 0 24px; font-size: 14px; }
        .sz-field { margin-bottom: 16px; }
        .sz-field label {
          display: block;
          font-size: 13px;
          font-weight: 600;
          color: ${NAVY};
          margin-bottom: 6px;
        }
        .sz-field input,
        .sz-field select,
        .sz-field textarea {
          width: 100%;
          padding: 12px 14px;
          border: 1px solid #cbd5e1;
          border-radius: 8px;
          font-family: inherit;
          font-size: 15px;
        }
        .sz-field input:focus,
        .sz-field select:focus,
        .sz-field textarea:focus {
          outline: 2px solid ${NAVY};
          outline-offset: 0;
          border-color: ${NAVY};
        }
        .sz-field textarea { min-height: 100px; resize: vertical; }
        .sz-thanks {
          text-align: center;
          padding: 32px 16px;
          color: ${NAVY};
          font-weight: 600;
          font-size: 1.05rem;
        }

        .sz-map iframe {
          display: block;
          width: 100%;
          height: 300px;
          border: 0;
        }

        .sz-footer {
          background: ${NAVY};
          color: #fff;
          padding: 56px 0 28px;
        }
        .sz-footer-top {
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          justify-content: space-between;
          gap: 20px;
          margin-bottom: 40px;
          padding-bottom: 32px;
          border-bottom: 1px solid rgba(255,255,255,0.2);
        }
        .sz-footer-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 36px;
          margin-bottom: 40px;
        }
        @media (max-width: 800px) {
          .sz-footer-grid { grid-template-columns: 1fr; gap: 28px; }
        }
        .sz-footer h4 {
          font-family: 'Poppins', sans-serif;
          margin: 0 0 14px;
          font-size: 1rem;
        }
        .sz-footer ul { list-style: none; margin: 0; padding: 0; }
        .sz-footer li { margin-bottom: 10px; }
        .sz-footer a, .sz-footer button.sz-footer-link {
          color: rgba(255,255,255,0.88);
          text-decoration: none;
          font-size: 14px;
          background: none;
          border: none;
          padding: 0;
          cursor: pointer;
          font-family: inherit;
          text-align: left;
        }
        .sz-footer a:hover, .sz-footer button.sz-footer-link:hover { text-decoration: underline; color: #fff; }
        .sz-footer-brand { display: flex; align-items: center; gap: 10px; margin-bottom: 10px; }
        .sz-footer-brand .sz-brand-icon { background: rgba(255,255,255,0.15); color: #fff; }
        .sz-footer-tag { opacity: 0.9; font-size: 14px; margin: 0; }
        .sz-footer-contact p {
          margin: 0 0 10px;
          font-size: 14px;
          display: flex;
          align-items: flex-start;
          gap: 8px;
          opacity: 0.92;
        }
        .sz-footer-social {
          display: flex;
          gap: 10px;
          margin-top: 16px;
        }
        .sz-footer-social a {
          width: 40px;
          height: 40px;
          border-radius: 10px;
          background: rgba(255,255,255,0.12);
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .sz-footer-social a:hover { background: rgba(255,255,255,0.22); }
        .sz-footer-top .sz-footer-social { margin-top: 0; align-self: center; }
        .sz-copy {
          text-align: center;
          padding-top: 24px;
          border-top: 1px solid rgba(255,255,255,0.2);
          font-size: 13px;
          opacity: 0.85;
        }

        .sz-wa {
          position: fixed;
          bottom: 22px;
          right: 22px;
          z-index: 200;
          width: 56px;
          height: 56px;
          border-radius: 50%;
          background: #25d366;
          color: #fff;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 6px 20px rgba(37, 211, 102, 0.45);
          transition: transform 0.15s;
        }
        .sz-wa:hover { transform: scale(1.06); }
      `}</style>

      <header>
        <div className="sz-topbar">
          <div className="sz-wrap sz-topbar-inner">
            <div className="sz-topbar-left">
              <span className="sz-topbar-item">
                <span aria-hidden>📞</span>
                <a href="tel:+919876543210">+91 98765 43210</a>
              </span>
              <span className="sz-topbar-item sz-topbar-email">
                <Mail size={14} aria-hidden />
                <a href="mailto:care@smilezonebhopal.com">care@smilezonebhopal.com</a>
              </span>
              <span className="sz-topbar-item">
                <Clock size={14} aria-hidden />
                Mon–Sat 9AM–8PM
              </span>
            </div>
            <button type="button" className="sz-btn-top" onClick={() => scrollToId('contact')}>
              Book Appointment
            </button>
          </div>
        </div>

        <div className={`sz-nav-outer ${scrolled ? 'sz-nav-shadow' : ''}`}>
          <nav className="sz-wrap sz-nav" aria-label="Main">
            <button type="button" className="sz-brand" onClick={() => scrollToId('home')}>
              <span className="sz-brand-icon">
                <Smile size={24} strokeWidth={2} aria-hidden />
              </span>
              <span className="sz-brand-text">SmileZone Dental</span>
            </button>

            <div className="sz-nav-links">
              {navLink('home', 'Home')}
              {navLink('services', 'Services')}
              {navLink('about', 'About')}
              {navLink('doctors', 'Doctors')}
              {navLink('contact', 'Contact')}
            </div>

            <button type="button" className="sz-btn-primary sz-nav-cta" onClick={() => scrollToId('contact')}>
              Book Now
            </button>

            <button
              type="button"
              className="sz-menu-toggle"
              aria-expanded={menuOpen}
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              onClick={() => setMenuOpen((o) => !o)}
            >
              {menuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </nav>
        </div>
      </header>

      <div
        className={`sz-mobile-backdrop ${menuOpen ? 'sz-open' : ''}`}
        aria-hidden
        onClick={closeMenu}
      />
      <div className={`sz-mobile-panel ${menuOpen ? 'sz-open' : ''}`} role="dialog" aria-modal="true" aria-label="Menu">
        <div className="sz-mobile-head">
          <span className="sz-brand-text">Menu</span>
          <button type="button" className="sz-menu-toggle" aria-label="Close" onClick={closeMenu}>
            <X size={24} />
          </button>
        </div>
        {navLink('home', 'Home')}
        {navLink('services', 'Services')}
        {navLink('about', 'About')}
        {navLink('doctors', 'Doctors')}
        {navLink('contact', 'Contact')}
        <button type="button" className="sz-btn-primary" onClick={() => scrollToId('contact')}>
          Book Now
        </button>
      </div>

      <main>
        <section id="home" className="sz-hero">
          <div className="sz-wrap sz-hero-grid">
            <div>
              <span className="sz-badge">Bhopal&apos;s Most Trusted Dental Clinic</span>
              <h1>Your Perfect Smile Starts Here</h1>
              <p className="sz-hero-sub">
                Family-friendly care in Bhopal with gentle dentists, strict hygiene standards, and
                treatment plans tailored to you — from routine cleaning to advanced implants.
              </p>
              <div className="sz-hero-btns">
                <button type="button" className="sz-btn-primary" onClick={() => scrollToId('contact')}>
                  Book Free Consultation
                </button>
                <button type="button" className="sz-btn-outline" onClick={() => scrollToId('services')}>
                  View Services
                </button>
              </div>
              <div className="sz-trust-row">
                <span>
                  <CheckInline /> 10+ Years Experience
                </span>
                <span>
                  <CheckInline /> 5000+ Happy Patients
                </span>
                <span>
                  <CheckInline /> Latest Technology
                </span>
              </div>
            </div>
            <div className="sz-hero-visual">
              <SafeImg src={IMG.hero} alt="Modern dental care at SmileZone" />
              <div className="sz-hero-overlay" aria-hidden />
            </div>
          </div>
        </section>

        <section id="services" className="sz-services">
          <div className="sz-wrap">
            <h2 className="sz-section-title">Our Dental Services</h2>
            <p className="sz-section-sub">
              Comprehensive dentistry under one roof — prevention, cosmetics, orthodontics, and
              restorative care for every age.
            </p>
            <div className="sz-service-grid">
              {services.map((s) => {
                const Icon = s.icon
                return (
                  <article key={s.name} className="sz-service-card">
                    <SafeImg src={s.image} alt={s.name} className="sz-service-card-img" />
                    <div className="sz-service-card-body">
                      <div className="sz-service-icon">
                        <Icon size={22} strokeWidth={2} />
                      </div>
                      <h3>{s.name}</h3>
                      <p>{s.desc}</p>
                      <button type="button" className="sz-learn" onClick={() => scrollToId('contact')}>
                        Learn More <ChevronRight size={16} aria-hidden />
                      </button>
                    </div>
                  </article>
                )
              })}
            </div>
          </div>
        </section>

        <section id="about" className="sz-why">
          <div className="sz-wrap sz-why-grid">
            <div>
              <h2 className="sz-section-title" style={{ textAlign: 'left', marginBottom: '8px' }}>
                Why Choose Us
              </h2>
              <p className="sz-section-sub" style={{ textAlign: 'left', margin: '0 0 28px' }}>
                SmileZone combines clinical excellence with a warm, transparent approach — so you always
                know what to expect.
              </p>
              <div className="sz-why-list">
                {whyPoints.map((w) => {
                  const WIcon = w.icon
                  return (
                    <div key={w.title} className="sz-why-item">
                      <div className="sz-why-icon">
                        <WIcon size={22} />
                      </div>
                      <div>
                        <h3>{w.title}</h3>
                        <p>{w.text}</p>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
            <div className="sz-about-img-wrap">
              <SafeImg src={IMG.why} alt="Comfortable dental treatment room" />
            </div>
          </div>
        </section>

        <section id="doctors" className="sz-doctors">
          <div className="sz-wrap">
            <h2 className="sz-section-title">Meet Our Doctors</h2>
            <p className="sz-section-sub">Experienced specialists committed to ethical, patient-first dentistry.</p>
            <div className="sz-doc-grid">
              {doctors.map((d) => (
                <article key={d.name} className="sz-doc-card">
                  <div className="sz-doc-photo">
                    <SafeImg src={d.image} alt={d.name} />
                  </div>
                  <div className="sz-doc-body">
                    <h3>{d.name}</h3>
                    <p className="role">{d.role}</p>
                    <p className="exp">{d.exp}</p>
                    <div className="sz-social-row">
                      <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                        <Share2 size={18} />
                      </a>
                      <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                        <Camera size={18} />
                      </a>
                      <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                        <Link2 size={18} />
                      </a>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="sz-testimonials" aria-labelledby="testimonials-heading">
          <div className="sz-wrap">
            <h2 id="testimonials-heading" className="sz-section-title">
              What Patients Say
            </h2>
            <p className="sz-section-sub">Real feedback from families who trust us with their smiles.</p>
            <div className="sz-test-grid">
              {testimonials.map((t) => (
                <article key={t.name} className="sz-test-card">
                  <div className="sz-stars" aria-label={`${t.rating} out of 5 stars`}>
                    {Array.from({ length: t.rating }).map((_, i) => (
                      <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                    ))}
                  </div>
                  <p>&ldquo;{t.text}&rdquo;</p>
                  <div className="sz-test-meta">{t.name}</div>
                  <div className="sz-test-city">{t.city}</div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="sz-booking">
          <div className="sz-wrap">
            <div className="sz-form-wrap">
              <h2>Book Your Appointment</h2>
              <p className="sz-form-note">Share a few details and we&apos;ll call you back to confirm a slot.</p>
              {formSubmitted ? (
                <p className="sz-thanks" role="status">
                  Thank you! We&apos;ll confirm your appointment shortly ✓
                </p>
              ) : (
                <form onSubmit={handleSubmit}>
                  <div className="sz-field">
                    <label htmlFor="sz-name">Name</label>
                    <input
                      id="sz-name"
                      required
                      value={form.name}
                      onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                      autoComplete="name"
                    />
                  </div>
                  <div className="sz-field">
                    <label htmlFor="sz-phone">Phone</label>
                    <input
                      id="sz-phone"
                      type="tel"
                      required
                      value={form.phone}
                      onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                      autoComplete="tel"
                    />
                  </div>
                  <div className="sz-field">
                    <label htmlFor="sz-email">Email</label>
                    <input
                      id="sz-email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                      autoComplete="email"
                    />
                  </div>
                  <div className="sz-field">
                    <label htmlFor="sz-service">Select Service</label>
                    <select
                      id="sz-service"
                      required
                      value={form.service}
                      onChange={(e) => setForm((f) => ({ ...f, service: e.target.value }))}
                    >
                      <option value="">Choose a service</option>
                      {serviceOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div className="sz-field">
                    <label htmlFor="sz-date">Preferred Date</label>
                    <input
                      id="sz-date"
                      type="date"
                      required
                      value={form.date}
                      onChange={(e) => setForm((f) => ({ ...f, date: e.target.value }))}
                    />
                  </div>
                  <div className="sz-field">
                    <label htmlFor="sz-msg">Message</label>
                    <textarea
                      id="sz-msg"
                      value={form.message}
                      onChange={(e) => setForm((f) => ({ ...f, message: e.target.value }))}
                      placeholder="Any symptoms or preferred time?"
                    />
                  </div>
                  <button type="submit" className="sz-btn-primary" style={{ width: '100%', padding: '14px' }}>
                    Submit
                  </button>
                </form>
              )}
            </div>
          </div>
        </section>

        <section className="sz-map" aria-label="Clinic location map">
          <iframe
            title="SmileZone Dental Clinic location — Bhopal, Madhya Pradesh"
            src="https://maps.google.com/maps?q=Bhopal,MP&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </section>
      </main>

      <footer className="sz-footer">
        <div className="sz-wrap">
          <div className="sz-footer-top">
            <div>
              <div className="sz-footer-brand">
                <span className="sz-brand-icon">
                  <Smile size={22} color="#fff" />
                </span>
                <span className="sz-brand-text" style={{ color: '#fff' }}>
                  SmileZone Dental
                </span>
              </div>
              <p className="sz-footer-tag">Your Smile, Our Passion</p>
            </div>
            <div className="sz-footer-social">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Share2 size={18} />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Camera size={18} />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <Link2 size={18} />
              </a>
            </div>
          </div>
        </div>
        <div className="sz-wrap sz-footer-grid">
          <div>
            <h4>Quick Links</h4>
            <ul>
              <li>
                <button type="button" className="sz-footer-link" onClick={() => scrollToId('home')}>
                  Home
                </button>
              </li>
              <li>
                <button type="button" className="sz-footer-link" onClick={() => scrollToId('services')}>
                  Services
                </button>
              </li>
              <li>
                <button type="button" className="sz-footer-link" onClick={() => scrollToId('about')}>
                  About
                </button>
              </li>
              <li>
                <button type="button" className="sz-footer-link" onClick={() => scrollToId('doctors')}>
                  Doctors
                </button>
              </li>
              <li>
                <button type="button" className="sz-footer-link" onClick={() => scrollToId('contact')}>
                  Contact
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4>Services</h4>
            <ul>
              {services.map((s) => (
                <li key={s.name}>
                  <button type="button" className="sz-footer-link" onClick={() => scrollToId('services')}>
                    {s.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4>Contact Info</h4>
            <div className="sz-footer-contact">
              <p>
                <MapPin size={16} style={{ flexShrink: 0, marginTop: 2 }} aria-hidden />
                MP Nagar, Bhopal, Madhya Pradesh
              </p>
              <p>
                <Phone size={16} aria-hidden />
                <a href="tel:+919876543210" style={{ color: 'inherit' }}>
                  +91 98765 43210
                </a>
              </p>
              <p>
                <Mail size={16} aria-hidden />
                <a href="mailto:care@smilezonebhopal.com" style={{ color: 'inherit' }}>
                  care@smilezonebhopal.com
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="sz-wrap sz-copy">© 2025 SmileZone Dental Clinic, Bhopal</div>
      </footer>

      <a
        className="sz-wa"
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <MessageCircle size={28} strokeWidth={2} />
      </a>
    </>
  )
}

function CheckInline() {
  return (
    <span style={{ color: NAVY, fontWeight: 700 }} aria-hidden>
      ✓{' '}
    </span>
  )
}
