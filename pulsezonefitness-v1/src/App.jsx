import { useState, useEffect } from "react";
import styled, { createGlobalStyle } from "styled-components";
import {
  Activity,
  Apple,
  CalendarDays,
  Dumbbell,
  Flower2,
  Globe,
  MapPin,
  Menu,
  MessageCircle,
  Share2,
  Star,
  User,
  UserRound,
  Users,
  X,
} from "lucide-react";

const ACCENT = "#FF6B00";
const BG = "#050505";
const BG_ELEVATED = "#0c0c0c";
const TEXT = "#f4f4f5";
const TEXT_MUTED = "#a1a1aa";
const WHATSAPP = "https://wa.me/919876543210";
const MAP_EMBED =
  "https://maps.google.com/maps?q=Bhopal,MP&output=embed";

const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  html {
    scroll-behavior: smooth;
  }
  body {
    margin: 0;
    font-family: "DM Sans", system-ui, sans-serif;
    background: ${BG};
    color: ${TEXT};
    -webkit-font-smoothing: antialiased;
  }
  a {
    color: inherit;
    text-decoration: none;
  }
  button {
    font-family: inherit;
    cursor: pointer;
  }
  input, select, textarea {
    font-family: inherit;
  }
`;

const services = [
  {
    title: "Weight Training",
    desc: "Olympic racks, free weights, and guided strength blocks for every level.",
    Icon: Dumbbell,
  },
  {
    title: "Cardio Zone",
    desc: "Treadmills, bikes, and rowers with heart-rate zones and entertainment.",
    Icon: Activity,
  },
  {
    title: "Yoga Classes",
    desc: "Flow and mobility sessions to reset posture, breath, and focus.",
    Icon: Flower2,
  },
  {
    title: "Personal Training",
    desc: "1:1 coaching, form checks, and programs built around your goals.",
    Icon: User,
  },
  {
    title: "Nutrition Plan",
    desc: "Simple meal frameworks and accountability so results stick.",
    Icon: Apple,
  },
  {
    title: "Zumba",
    desc: "High-energy dance cardio that feels like a party, not a workout.",
    Icon: Activity,
  },
];

const stats = [
  { value: "500+", label: "Members", Icon: Users },
  { value: "10+", label: "Trainers", Icon: UserRound },
  { value: "5+", label: "Years Experience", Icon: CalendarDays },
  { value: "3", label: "Branches", Icon: MapPin },
];

const testimonials = [
  {
    name: "Priya Sharma",
    stars: 5,
    text: "Best equipment in Bhopal and trainers who actually care. I dropped two sizes in three months without burning out.",
  },
  {
    name: "Rahul Verma",
    stars: 5,
    text: "The vibe is premium—dark floors, great music, and zero attitude. My PT sessions here changed how I train forever.",
  },
  {
    name: "Ananya Patel",
    stars: 5,
    text: "Zumba nights are addictive and the nutrition check-ins keep me honest. PulseZone feels like a second home.",
  },
];

const classOptions = [
  "Select Class",
  "Weight Training",
  "Cardio Zone",
  "Yoga",
  "Personal Training",
  "Zumba",
  "Nutrition Consultation",
];

const Page = styled.div`
  min-height: 100vh;
  overflow-x: hidden;
`;

const NavShell = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  transition: background 0.35s ease, box-shadow 0.35s ease,
    border-color 0.35s ease;
  background: ${(p) =>
    p.$scrolled ? "rgba(5, 5, 5, 0.88)" : "transparent"};
  backdrop-filter: ${(p) => (p.$scrolled ? "blur(16px)" : "none")};
  border-bottom: 1px solid
    ${(p) => (p.$scrolled ? "rgba(255, 107, 0, 0.12)" : "transparent")};
  box-shadow: ${(p) =>
    p.$scrolled ? "0 12px 40px rgba(0, 0, 0, 0.45)" : "none"};
`;

const Nav = styled.nav`
  max-width: 1200px;
  margin: 0 auto;
  padding: 1rem 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-family: "Syne", sans-serif;
  font-weight: 800;
  font-size: 1.1rem;
  letter-spacing: -0.02em;
  span {
    color: ${ACCENT};
  }
`;

const NavLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 2rem;
  @media (max-width: 768px) {
    position: fixed;
    inset: 0;
    top: 0;
    flex-direction: column;
    justify-content: center;
    gap: 2rem;
    background: rgba(5, 5, 5, 0.97);
    backdrop-filter: blur(12px);
    transform: translateX(${(p) => (p.$open ? "0" : "100%")});
    transition: transform 0.4s cubic-bezier(0.22, 1, 0.36, 1);
    z-index: 1002;
  }
  a {
    font-size: 0.95rem;
    font-weight: 500;
    color: ${TEXT_MUTED};
    transition: color 0.2s;
    &:hover {
      color: ${ACCENT};
    }
  }
`;

const MenuBtn = styled.button`
  display: none;
  background: transparent;
  border: none;
  color: ${TEXT};
  padding: 0.5rem;
  z-index: 1003;
  @media (max-width: 768px) {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Hero = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 6rem 1.5rem 4rem;
  &::before {
    content: "";
    position: absolute;
    inset: 0;
    background: radial-gradient(
        ellipse 80% 50% at 50% -20%,
        rgba(255, 107, 0, 0.22),
        transparent 55%
      ),
      radial-gradient(
        circle at 85% 60%,
        rgba(255, 107, 0, 0.08),
        transparent 40%
      ),
      linear-gradient(180deg, #080808 0%, ${BG} 100%);
    pointer-events: none;
  }
  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background-image: linear-gradient(
        rgba(255, 255, 255, 0.02) 1px,
        transparent 1px
      ),
      linear-gradient(90deg, rgba(255, 255, 255, 0.02) 1px, transparent 1px);
    background-size: 64px 64px;
    mask-image: radial-gradient(ellipse at center, black 20%, transparent 70%);
    pointer-events: none;
  }
`;

const HeroInner = styled.div`
  position: relative;
  z-index: 1;
  max-width: 900px;
  text-align: center;
`;

const Eyebrow = styled.p`
  font-size: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.28em;
  color: ${ACCENT};
  font-weight: 600;
  margin: 0 0 1.25rem;
`;

const HeroTitle = styled.h1`
  font-family: "Syne", sans-serif;
  font-weight: 800;
  font-size: clamp(2.25rem, 6vw, 3.75rem);
  line-height: 1.05;
  letter-spacing: -0.03em;
  margin: 0 0 1.25rem;
  background: linear-gradient(135deg, #fff 0%, #d4d4d8 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`;

const HeroSub = styled.p`
  font-size: clamp(1rem, 2.2vw, 1.2rem);
  color: ${TEXT_MUTED};
  max-width: 560px;
  margin: 0 auto 2.5rem;
  line-height: 1.65;
`;

const CtaRow = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
`;

const BtnPrimary = styled.button`
  background: linear-gradient(135deg, ${ACCENT} 0%, #e85f00 100%);
  color: #0a0a0a;
  border: none;
  padding: 1rem 1.75rem;
  border-radius: 999px;
  font-weight: 700;
  font-size: 0.95rem;
  box-shadow: 0 0 0 1px rgba(255, 107, 0, 0.3),
    0 16px 40px rgba(255, 107, 0, 0.25);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 0 0 1px rgba(255, 107, 0, 0.5),
      0 20px 48px rgba(255, 107, 0, 0.35);
  }
`;

const BtnGhost = styled.button`
  background: transparent;
  color: ${TEXT};
  border: 1px solid rgba(255, 255, 255, 0.18);
  padding: 1rem 1.75rem;
  border-radius: 999px;
  font-weight: 600;
  font-size: 0.95rem;
  transition: border-color 0.2s, background 0.2s;
  &:hover {
    border-color: ${ACCENT};
    background: rgba(255, 107, 0, 0.06);
  }
`;

const Section = styled.section`
  scroll-margin-top: 88px;
  padding: 5rem 1.5rem;
  max-width: 1120px;
  margin: 0 auto;
`;

const SectionHead = styled.div`
  text-align: center;
  max-width: 640px;
  margin: 0 auto 3rem;
  h2 {
    font-family: "Syne", sans-serif;
    font-weight: 800;
    font-size: clamp(1.75rem, 4vw, 2.5rem);
    letter-spacing: -0.02em;
    margin: 0 0 0.75rem;
  }
  p {
    color: ${TEXT_MUTED};
    margin: 0;
    line-height: 1.6;
  }
`;

const ServiceGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1.25rem;
`;

const ServiceCard = styled.article`
  background: linear-gradient(
    145deg,
    rgba(255, 255, 255, 0.04) 0%,
    rgba(255, 255, 255, 0.01) 100%
  );
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1.25rem;
  padding: 1.75rem;
  transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  &:hover {
    border-color: rgba(255, 107, 0, 0.35);
    transform: translateY(-4px);
    box-shadow: 0 24px 48px rgba(0, 0, 0, 0.35);
  }
  .icon-wrap {
    width: 52px;
    height: 52px;
    border-radius: 14px;
    background: rgba(255, 107, 0, 0.12);
    color: ${ACCENT};
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1.25rem;
  }
  h3 {
    font-family: "Syne", sans-serif;
    font-size: 1.15rem;
    margin: 0 0 0.5rem;
  }
  p {
    margin: 0;
    color: ${TEXT_MUTED};
    font-size: 0.92rem;
    line-height: 1.55;
  }
`;

const StatsBar = styled.div`
  background: linear-gradient(
    90deg,
    rgba(255, 107, 0, 0.08) 0%,
    rgba(255, 107, 0, 0.02) 50%,
    rgba(255, 107, 0, 0.08) 100%
  );
  border-top: 1px solid rgba(255, 107, 0, 0.15);
  border-bottom: 1px solid rgba(255, 107, 0, 0.15);
  padding: 2.5rem 1.5rem;
`;

const StatsInner = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  text-align: center;
  @media (max-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 1.5rem;
  }
`;

const StatItem = styled.div`
  .val {
    font-family: "Syne", sans-serif;
    font-weight: 800;
    font-size: clamp(1.75rem, 4vw, 2.25rem);
    color: ${ACCENT};
    display: block;
    margin-bottom: 0.35rem;
  }
  .lbl {
    color: ${TEXT_MUTED};
    font-size: 0.9rem;
  }
  svg {
    margin: 0 auto 0.5rem;
    color: ${ACCENT};
    opacity: 0.7;
  }
`;

const AboutGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  align-items: center;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const AboutText = styled.div`
  h2 {
    font-family: "Syne", sans-serif;
    font-weight: 800;
    font-size: clamp(1.75rem, 3.5vw, 2.25rem);
    margin: 0 0 1rem;
    letter-spacing: -0.02em;
  }
  p {
    color: ${TEXT_MUTED};
    line-height: 1.7;
    margin: 0 0 1rem;
    font-size: 1rem;
  }
`;

const AboutVisual = styled.div`
  aspect-ratio: 4 / 3;
  border-radius: 1.25rem;
  overflow: hidden;
  border: 1px solid rgba(255, 107, 0, 0.25);
  background: #1a1a1a;
  img {
    display: block;
  }
`;

const TestimonialGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.25rem;
  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

const TestimonialCard = styled.blockquote`
  margin: 0;
  background: ${BG_ELEVATED};
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 1.25rem;
  padding: 1.75rem;
  .stars {
    color: ${ACCENT};
    display: flex;
    gap: 3px;
    margin-bottom: 1rem;
    align-items: center;
  }
  p {
    color: ${TEXT_MUTED};
    line-height: 1.65;
    margin: 0 0 1.25rem;
    font-size: 0.95rem;
  }
  footer {
    font-weight: 600;
    font-size: 0.95rem;
  }
`;

const FormSection = styled(Section)`
  background: linear-gradient(
    180deg,
    transparent 0%,
    rgba(255, 107, 0, 0.04) 40%,
    transparent 100%
  );
  border-radius: 2rem;
`;

const FormCard = styled.div`
  max-width: 560px;
  margin: 0 auto;
  background: rgba(12, 12, 12, 0.8);
  border: 1px solid rgba(255, 255, 255, 0.08);
  border-radius: 1.5rem;
  padding: 2rem;
  box-shadow: 0 32px 64px rgba(0, 0, 0, 0.4);
`;

const Field = styled.label`
  display: block;
  margin-bottom: 1.1rem;
  span {
    display: block;
    font-size: 0.8rem;
    font-weight: 600;
    text-transform: uppercase;
    letter-spacing: 0.08em;
    color: ${TEXT_MUTED};
    margin-bottom: 0.45rem;
  }
  input,
  select,
  textarea {
    width: 100%;
    padding: 0.85rem 1rem;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    background: rgba(0, 0, 0, 0.4);
    color: ${TEXT};
    font-size: 1rem;
    outline: none;
    transition: border-color 0.2s, box-shadow 0.2s;
    &:focus {
      border-color: ${ACCENT};
      box-shadow: 0 0 0 3px rgba(255, 107, 0, 0.15);
    }
  }
  textarea {
    min-height: 120px;
    resize: vertical;
  }
`;

const SubmitBtn = styled.button`
  width: 100%;
  margin-top: 0.5rem;
  padding: 1rem;
  border: none;
  border-radius: 12px;
  background: ${ACCENT};
  color: #0a0a0a;
  font-weight: 700;
  font-size: 1rem;
  transition: filter 0.2s, transform 0.2s;
  &:hover {
    filter: brightness(1.05);
    transform: translateY(-1px);
  }
`;

const ThankYou = styled.div`
  text-align: center;
  padding: 2rem 1rem;
  p {
    margin: 0;
    font-family: "Syne", sans-serif;
    font-size: clamp(1.05rem, 2.5vw, 1.25rem);
    font-weight: 700;
    line-height: 1.55;
    color: ${TEXT};
  }
`;

const MapWrap = styled.div`
  max-width: 1120px;
  margin: 0 auto;
  padding: 0 1.5rem 4rem;
  iframe {
    width: 100%;
    height: 380px;
    border: none;
    border-radius: 1.25rem;
    border: 1px solid rgba(255, 255, 255, 0.08);
    filter: grayscale(0.2) contrast(1.05);
  }
`;

const FloatWa = styled.a`
  position: fixed;
  bottom: 1.5rem;
  right: 1.5rem;
  z-index: 1100;
  width: 58px;
  height: 58px;
  border-radius: 50%;
  background: #25d366;
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 32px rgba(37, 211, 102, 0.45);
  transition: transform 0.2s, box-shadow 0.2s;
  &:hover {
    transform: scale(1.06);
    box-shadow: 0 12px 40px rgba(37, 211, 102, 0.55);
  }
`;

const FooterEl = styled.footer`
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  padding: 3rem 1.5rem 2rem;
  max-width: 1120px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: space-between;
  align-items: flex-start;
`;

const SocialRow = styled.div`
  display: flex;
  gap: 0.75rem;
  a {
    width: 44px;
    height: 44px;
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.1);
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${TEXT_MUTED};
    transition: color 0.2s, border-color 0.2s, background 0.2s;
    &:hover {
      color: ${ACCENT};
      border-color: rgba(255, 107, 0, 0.4);
      background: rgba(255, 107, 0, 0.06);
    }
  }
`;

const Copyright = styled.p`
  flex: 0 0 100%;
  text-align: center;
  margin: 2rem 0 0;
  padding-top: 2rem;
  border-top: 1px solid rgba(255, 255, 255, 0.06);
  color: ${TEXT_MUTED};
  font-size: 0.85rem;
`;

function scrollToId(id) {
  const el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
}

function openWhatsApp() {
  window.open(WHATSAPP, "_blank", "noopener,noreferrer");
}

export default function App() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    class: "",
    message: "",
  });

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (id) => {
    setMenuOpen(false);
    scrollToId(id);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <Page>
      <GlobalStyle />
      <NavShell $scrolled={scrolled}>
        <Nav>
          <Logo
            href="#home"
            onClick={(e) => {
              e.preventDefault();
              handleNav("home");
            }}
            as="a"
          >
            PulseZone <span>Fitness</span>
          </Logo>
          <NavLinks $open={menuOpen}>
            <a
              href="#home"
              onClick={(e) => {
                e.preventDefault();
                handleNav("home");
              }}
            >
              Home
            </a>
            <a
              href="#services"
              onClick={(e) => {
                e.preventDefault();
                handleNav("services");
              }}
            >
              Services
            </a>
            <a
              href="#about"
              onClick={(e) => {
                e.preventDefault();
                handleNav("about");
              }}
            >
              About
            </a>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                handleNav("contact");
              }}
            >
              Contact
            </a>
          </NavLinks>
          <MenuBtn
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </MenuBtn>
        </Nav>
      </NavShell>

      <Hero id="home">
        <HeroInner>
          <Eyebrow>Bhopal, Madhya Pradesh</Eyebrow>
          <HeroTitle>Transform Your Body. Elevate Your Life.</HeroTitle>
          <HeroSub>
            PulseZone is where serious training meets boutique hospitality—
            elite equipment, expert coaches, and a community that pushes you forward.
          </HeroSub>
          <CtaRow>
            <BtnPrimary type="button" onClick={openWhatsApp}>
              Join Now
            </BtnPrimary>
            <BtnGhost
              type="button"
              onClick={() => scrollToId("contact")}
            >
              Book Free Trial
            </BtnGhost>
          </CtaRow>
        </HeroInner>
      </Hero>

      <Section id="services">
        <SectionHead>
          <h2>Everything Under One Roof</h2>
          <p>
            From heavy iron to mindful movement—curated zones and programs designed
            for strength, stamina, and sustainable results.
          </p>
        </SectionHead>
        <ServiceGrid>
          {services.map(({ title, desc, Icon }) => (
            <ServiceCard key={title}>
              <div className="icon-wrap">
                <Icon size={26} strokeWidth={1.75} />
              </div>
              <h3>{title}</h3>
              <p>{desc}</p>
            </ServiceCard>
          ))}
        </ServiceGrid>
      </Section>

      <StatsBar>
        <StatsInner>
          {stats.map(({ value, label, Icon }) => (
            <StatItem key={label}>
              <Icon size={22} strokeWidth={1.5} />
              <span className="val">{value}</span>
              <span className="lbl">{label}</span>
            </StatItem>
          ))}
        </StatsInner>
      </StatsBar>

      <Section id="about">
        <AboutGrid>
          <AboutText>
            <h2>PulseZone, Bhopal&apos;s Training Standard</h2>
            <p>
              Founded on the belief that fitness should feel aspirational—not
              intimidating—PulseZone blends industrial design with warm hospitality.
              Our floors are built for PRs, our studios for flow, and our team for
              your breakthrough moment.
            </p>
            <p>
              Whether you are stepping in for the first time or chasing a podium,
              we map a path that respects your schedule, your body, and your ambition.
              Three branches across Bhopal mean you are never far from the zone.
            </p>
          </AboutText>
          <AboutVisual>
            <img
              src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&q=80"
              alt="PulseZone Gym"
              crossOrigin="anonymous"
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
                borderRadius: "12px",
              }}
              onError={(e) => {
                e.target.style.background = "#1a1a1a";
                e.target.style.display = "none";
              }}
            />
          </AboutVisual>
        </AboutGrid>
      </Section>

      <Section>
        <SectionHead>
          <h2>What Members Say</h2>
          <p>Real stories from people who train where the energy hits different.</p>
        </SectionHead>
        <TestimonialGrid>
          {testimonials.map((t) => (
            <TestimonialCard key={t.name}>
              <div className="stars" aria-label={`${t.stars} out of 5 stars`}>
                {Array.from({ length: t.stars }, (_, i) => (
                  <Star
                    key={i}
                    size={18}
                    strokeWidth={1.5}
                    fill={ACCENT}
                    color={ACCENT}
                  />
                ))}
              </div>
              <p>&ldquo;{t.text}&rdquo;</p>
              <footer>— {t.name}</footer>
            </TestimonialCard>
          ))}
        </TestimonialGrid>
      </Section>

      <FormSection id="contact">
        <SectionHead>
          <h2>Book Your Free Trial</h2>
          <p>
            Tell us how to reach you. Our team will confirm your slot within one
            business day.
          </p>
        </SectionHead>
        <FormCard>
          {submitted ? (
            <ThankYou>
              <p>Thank you! We&apos;ll contact you shortly.</p>
            </ThankYou>
          ) : (
            <form onSubmit={handleSubmit}>
              <Field>
                <span>Name</span>
                <input
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  required
                  autoComplete="name"
                  placeholder="Your full name"
                />
              </Field>
              <Field>
                <span>Phone</span>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={handleChange}
                  required
                  autoComplete="tel"
                  placeholder="+91 ..."
                />
              </Field>
              <Field>
                <span>Email</span>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={handleChange}
                  required
                  autoComplete="email"
                  placeholder="you@example.com"
                />
              </Field>
              <Field>
                <span>Select Class</span>
                <select
                  name="class"
                  value={form.class}
                  onChange={handleChange}
                  required
                >
                  {classOptions.map((opt, i) => (
                    <option
                      key={opt}
                      value={i === 0 ? "" : opt}
                      disabled={i === 0}
                    >
                      {opt}
                    </option>
                  ))}
                </select>
              </Field>
              <Field>
                <span>Message</span>
                <textarea
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Preferred timings, goals, or questions..."
                />
              </Field>
              <SubmitBtn type="submit">Send request</SubmitBtn>
            </form>
          )}
        </FormCard>
      </FormSection>

      <MapWrap>
        <iframe
          title="PulseZone Fitness location — Bhopal, MP"
          src={MAP_EMBED}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </MapWrap>

      <FooterEl>
        <div>
          <Logo as="div" style={{ marginBottom: "0.75rem" }}>
            PulseZone <span>Fitness</span>
          </Logo>
          <p style={{ color: TEXT_MUTED, margin: 0, maxWidth: "280px", lineHeight: 1.6, fontSize: "0.95rem" }}>
            Train louder. Recover smarter. Bhopal&apos;s premium fitness destination.
          </p>
        </div>
        <div>
          <p style={{ fontSize: "0.75rem", textTransform: "uppercase", letterSpacing: "0.12em", color: TEXT_MUTED, margin: "0 0 0.75rem" }}>
            Follow us
          </p>
          <SocialRow>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
              <Share2 size={20} />
            </a>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Globe size={20} />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" aria-label="YouTube">
              <MessageCircle size={20} />
            </a>
          </SocialRow>
        </div>
        <Copyright>© 2025 PulseZone Fitness</Copyright>
      </FooterEl>

      <FloatWa href={WHATSAPP} target="_blank" rel="noopener noreferrer" aria-label="Chat on WhatsApp">
        <MessageCircle size={28} strokeWidth={2} fill="rgba(255,255,255,0.15)" />
      </FloatWa>
    </Page>
  );
}
