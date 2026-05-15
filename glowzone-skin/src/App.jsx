import { useState } from 'react'
import {
  Phone,
  Mail,
  Clock,
  Menu,
  X,
  Award,
  Sparkles,
  Microscope,
  HeartHandshake,
  Star,
  Share2,
  Globe,
  MessageCircle,
} from 'lucide-react'
import './App.css'

const IMAGES = {
  hero: 'https://images.pexels.com/photos/3997989/pexels-photo-3997989.jpeg?w=1400',
  about: 'https://images.pexels.com/photos/3985329/pexels-photo-3985329.jpeg?w=800',
  services: [
    'https://images.pexels.com/photos/3997993/pexels-photo-3997993.jpeg?w=600',
    'https://images.pexels.com/photos/3997991/pexels-photo-3997991.jpeg?w=600',
    'https://images.pexels.com/photos/3764013/pexels-photo-3764013.jpeg?w=600',
    'https://images.pexels.com/photos/3985330/pexels-photo-3985330.jpeg?w=600',
  ],
  doctor: 'https://images.pexels.com/photos/5214958/pexels-photo-5214958.jpeg?w=400',
}

const SERVICES = [
  { title: 'Skin Brightening', image: IMAGES.services[0] },
  { title: 'Hair PRP Therapy', image: IMAGES.services[1] },
  { title: 'Anti-Aging Treatment', image: IMAGES.services[2] },
  { title: 'Laser Hair Removal', image: IMAGES.services[3] },
]

const WHY_POINTS = [
  {
    icon: Sparkles,
    title: 'Premium Aesthetic Care',
    text: 'State-of-the-art treatments tailored to Indian skin types with visible, lasting results.',
  },
  {
    icon: Microscope,
    title: 'Advanced Technology',
    text: 'FDA-approved lasers and dermatology equipment for safe, effective procedures.',
  },
  {
    icon: HeartHandshake,
    title: 'Personalized Consultations',
    text: 'Every client receives a custom treatment plan designed by certified specialists.',
  },
  {
    icon: Award,
    title: 'Trusted by Bhopal',
    text: 'Over 3,000 satisfied clients and 8+ years of excellence in skin and hair care.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Priya Malhotra',
    location: 'Arera Colony, Bhopal',
    text: 'My skin has never looked better. Dr. Neha explained every step and the brightening treatment exceeded my expectations.',
  },
  {
    name: 'Rahul Verma',
    location: 'MP Nagar, Bhopal',
    text: 'The PRP therapy for hair loss worked wonders. Professional staff, luxurious clinic, and genuine care throughout.',
  },
  {
    name: 'Ananya Joshi',
    location: 'Shahpura, Bhopal',
    text: 'Laser hair removal was painless and effective. GlowZone truly lives up to its premium reputation in Bhopal.',
  },
]

const SERVICE_OPTIONS = [
  'Skin Brightening',
  'Hair PRP Therapy',
  'Anti-Aging Treatment',
  'Laser Hair Removal',
  'General Consultation',
]

function App() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    date: '',
    message: '',
  })

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setMenuOpen(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    alert('Thank you! We will contact you shortly to confirm your appointment.')
    setFormData({ name: '', phone: '', email: '', service: '', date: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  return (
    <>
      <header className="topbar">
        <div className="container topbar-inner">
          <span className="topbar-item">
            <Phone size={14} />
            +91 98765 43210
          </span>
          <span className="topbar-item">
            <Mail size={14} />
            hello@glowzonebhopal.com
          </span>
          <span className="topbar-item">
            <Clock size={14} />
            Mon – Sat: 10 AM – 8 PM
          </span>
        </div>
      </header>

      <nav className="navbar">
        <div className="container navbar-inner">
          <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
            GlowZone
          </a>
          <ul className="nav-links">
            {['home', 'services', 'about', 'doctors', 'contact'].map((id) => (
              <li key={id}>
                <a
                  href={`#${id}`}
                  onClick={(e) => { e.preventDefault(); scrollTo(id) }}
                >
                  {id === 'home' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
                </a>
              </li>
            ))}
          </ul>
          <button type="button" className="btn btn-gold" onClick={() => scrollTo('contact')}>
            Book Now
          </button>
          <button
            type="button"
            className="nav-toggle"
            aria-label="Toggle menu"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
          <div className={`nav-mobile ${menuOpen ? 'open' : ''}`}>
            <ul>
              {['home', 'services', 'about', 'doctors', 'contact'].map((id) => (
                <li key={id}>
                  <a
                    href={`#${id}`}
                    onClick={(e) => { e.preventDefault(); scrollTo(id) }}
                  >
                    {id === 'home' ? 'Home' : id.charAt(0).toUpperCase() + id.slice(1)}
                  </a>
                </li>
              ))}
              <li>
                <button type="button" className="btn btn-gold" style={{ width: '100%' }} onClick={() => scrollTo('contact')}>
                  Book Now
                </button>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <section id="home" className="hero">
        <div className="container">
          <div className="hero-grid">
            <div>
              <span className="hero-badge">Bhopal&apos;s Premium Skin Clinic</span>
              <h1>Reveal Your Most Radiant Self</h1>
              <p className="hero-sub">
                Experience world-class dermatology and aesthetic treatments at GlowZone Skin &amp; Hair Clinic — where science meets luxury.
              </p>
              <div className="hero-btns">
                <button type="button" className="btn btn-gold" onClick={() => scrollTo('contact')}>
                  Book Consultation
                </button>
                <button type="button" className="btn btn-outline" onClick={() => scrollTo('services')}>
                  Our Services
                </button>
              </div>
            </div>
            <div className="hero-image-wrap">
              <img src={IMAGES.hero} alt="Luxury skin treatment at GlowZone Clinic" />
            </div>
          </div>
          <div className="hero-stats">
            <div className="stat-item">
              <strong>8+ Years</strong>
              <span>Clinical Excellence</span>
            </div>
            <div className="stat-item">
              <strong>3000+</strong>
              <span>Happy Clients</span>
            </div>
            <div className="stat-item">
              <strong>FDA Approved</strong>
              <span>Equipment &amp; Products</span>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="services">
        <div className="container">
          <div className="services-header">
            <span className="section-label">What We Offer</span>
            <h2 className="section-title">Our Treatments</h2>
            <p className="section-subtitle">
              Curated aesthetic solutions for radiant skin and healthy hair, delivered with precision and care.
            </p>
          </div>
          <div className="services-grid">
            {SERVICES.map((service) => (
              <article key={service.title} className="service-card" onClick={() => scrollTo('contact')}>
                <img src={service.image} alt={service.title} loading="lazy" />
                <div className="service-overlay">
                  <h3>{service.title}</h3>
                  <span className="service-link">Know More →</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="why-us">
        <div className="container why-grid">
          <div>
            <span className="section-label">Why Choose Us</span>
            <h2 className="section-title" style={{ color: '#fff' }}>The GlowZone Difference</h2>
            <p className="section-subtitle" style={{ marginBottom: '2rem' }}>
              Bhopal&apos;s destination for premium skin and hair care, backed by expertise and compassion.
            </p>
            <div className="why-points">
              {WHY_POINTS.map((point) => (
                <div key={point.title} className="why-point">
                  <div className="why-icon">
                    <point.icon size={22} />
                  </div>
                  <div>
                    <h3>{point.title}</h3>
                    <p>{point.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="why-image">
            <img src={IMAGES.about} alt="GlowZone clinic interior" loading="lazy" />
          </div>
        </div>
      </section>

      <section id="doctors" className="doctor">
        <div className="container doctor-grid">
          <div className="doctor-photo">
            <img src={IMAGES.doctor} alt="Dr. Neha Sharma" loading="lazy" />
          </div>
          <div className="doctor-content">
            <span className="section-label">Our Expert</span>
            <h2>Meet Dr. Neha Sharma</h2>
            <p className="doctor-title">MBBS, MD — Dermatologist</p>
            <div className="doctor-meta">
              <span><strong>8 Years</strong> Experience</span>
              <span><strong>3000+</strong> Patients Treated</span>
              <span><strong>Board Certified</strong> Dermatologist</span>
            </div>
            <p className="doctor-bio">
              Dr. Neha Sharma is a renowned dermatologist specializing in aesthetic medicine, anti-aging treatments, and advanced hair restoration. With an MBBS and MD in Dermatology, she combines clinical expertise with an artistic eye to deliver natural, beautiful results. At GlowZone, she leads a team dedicated to helping every client feel confident in their skin.
            </p>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="testimonials-header">
            <span className="section-label">Client Stories</span>
            <h2 className="section-title" style={{ color: '#fff' }}>What Our Clients Say</h2>
          </div>
          <div className="testimonials-grid">
            {TESTIMONIALS.map((t) => (
              <article key={t.name} className="testimonial-card">
                <div className="testimonial-stars">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={16} fill="currentColor" />
                  ))}
                </div>
                <p>&ldquo;{t.text}&rdquo;</p>
                <div className="testimonial-author">
                  <strong>{t.name}</strong>
                  <span>{t.location}</span>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="booking">
        <div className="container booking-wrap">
          <span className="section-label">Get In Touch</span>
          <h2 className="section-title">Book Your Consultation</h2>
          <p className="section-subtitle" style={{ marginInline: 'auto' }}>
            Fill in the form below and our team will reach out within 24 hours.
          </p>
          <form className="booking-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="tel"
                name="phone"
                placeholder="Phone Number"
                value={formData.phone}
                onChange={handleChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <div className="form-row">
              <select name="service" value={formData.service} onChange={handleChange} required>
                <option value="">Select Service</option>
                {SERVICE_OPTIONS.map((s) => (
                  <option key={s} value={s}>{s}</option>
                ))}
              </select>
              <input
                type="date"
                name="date"
                value={formData.date}
                onChange={handleChange}
                required
              />
            </div>
            <textarea
              name="message"
              placeholder="Your Message (optional)"
              value={formData.message}
              onChange={handleChange}
            />
            <button type="submit" className="btn btn-gold">
              Submit Appointment Request
            </button>
          </form>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div className="footer-brand">
              <a href="#home" className="logo" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>
                GlowZone
              </a>
              <p>
                Premium skin and hair clinic in Bhopal, offering advanced dermatology and aesthetic treatments.
              </p>
              <div className="footer-social">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <Share2 size={18} />
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <Globe size={18} />
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noopener noreferrer" aria-label="WhatsApp">
                  <MessageCircle size={18} />
                </a>
              </div>
            </div>
            <div>
              <h4>Quick Links</h4>
              <ul>
                <li><a href="#home" onClick={(e) => { e.preventDefault(); scrollTo('home') }}>Home</a></li>
                <li><a href="#services" onClick={(e) => { e.preventDefault(); scrollTo('services') }}>Services</a></li>
                <li><a href="#about" onClick={(e) => { e.preventDefault(); scrollTo('about') }}>About</a></li>
                <li><a href="#doctors" onClick={(e) => { e.preventDefault(); scrollTo('doctors') }}>Doctors</a></li>
                <li><a href="#contact" onClick={(e) => { e.preventDefault(); scrollTo('contact') }}>Contact</a></li>
              </ul>
            </div>
            <div>
              <h4>Contact Us</h4>
              <ul>
                <li>MP Nagar, Bhopal, MP 462011</li>
                <li><a href="tel:+919876543210">+91 98765 43210</a></li>
                <li><a href="mailto:hello@glowzonebhopal.com">hello@glowzonebhopal.com</a></li>
                <li>Mon – Sat: 10 AM – 8 PM</li>
              </ul>
            </div>
          </div>
          <p className="footer-bottom">
            © 2025 GlowZone Skin &amp; Hair Clinic. All rights reserved.
          </p>
        </div>
      </footer>

      <a
        href="https://wa.me/919876543210"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
      >
        <svg viewBox="0 0 24 24" width="28" height="28" fill="currentColor" aria-hidden="true">
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </a>
    </>
  )
}

export default App
