import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useRef, useState } from "react";
import profileAsset from "@/assets/astel-profile.png.asset.json";
import { useReveal } from "@/hooks/use-reveal";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Astel Antony — Generative AI & Cybersecurity" },
      { name: "description", content: "Portfolio of Astel Antony — aspiring Generative AI Engineer and Cybersecurity professional from Kerala, India." },
      { property: "og:title", content: "Astel Antony — Generative AI & Cybersecurity" },
      { property: "og:description", content: "AI-powered apps, web platforms, and security-focused projects." },
    ],
  }),
  component: Portfolio,
});

const skills = {
  "AI & GenAI": ["Prompt Engineering", "OpenAI", "Gemini", "Claude", "AI Agents", "Workflows"],
  "Programming": ["Python", "HTML", "Web Dev"],
  "Cloud & Backend": ["Firebase", "Google Cloud"],
  "Cybersecurity": ["Security Auditing", "Threat Analysis", "Vuln Research", "Hack The Box", "TryHackMe"],
  "Tools": ["Git", "GitHub", "VS Code"],
  "Media": ["Photography", "Videography", "Video Editing"],
};

const experience = [
  { role: "AI Engineering Intern", org: "Iplairani", period: "2026 — Present", body: "Working as an AI Engineer, focusing on the development and implementation of artificial intelligence models and workflows." },
  { role: "Cybersecurity Intern", org: "Unified Mentor Pvt Ltd", period: "2026 — Present", body: "Practical security learning, assessment methodologies, vulnerability analysis and defensive security." },
  { role: "AI Fluency Intern", org: "FlyRank AI", period: "2026 — Present", body: "AI-driven workflows and generative AI tooling. Supporting AI adoption and productivity systems." },
  { role: "Founder & Infrastructure Lead", org: "Squadron X Esports", period: "2024 — Present", body: "Founded a gaming community platform. Built server infra, policies and moderation frameworks." },
];

const projects = [
  { name: "Deccan AI Experts ML Training", tag: "AI / ML · Ongoing", body: "An immersive machine learning training program focused on developing advanced models and practical AI solutions." },
  { name: "Selah — Bible Platform", tag: "Web · AI", body: "A Bible-focused web platform integrating modern web tech with AI-driven features for accessibility and engagement." },
  { name: "Security Audit Analyst AI", tag: "AI · Security", body: "An AI-assisted security analysis tool exploring automated assessment workflows for researchers." },
  { name: "Developer Portfolio", tag: "Web", body: "Personal portfolio showcasing projects, certifications, and technical growth.", href: "https://viperhawks.github.io/AA.Dev/" },
];


const certs = [
  "Google AI Essentials",
  "Kaggle & Google AI Agents",
  "Introduction to AI",
  "Maximize Productivity with AI",
  "Discover the Art of Prompting",
  "Use AI Responsibly",
  "Stay Ahead of the AI Curve",
];

function Portfolio() {
  useReveal();

  return (
    <div className="relative min-h-screen bg-background text-foreground">
      <BackgroundFX />
      <Nav />
      <main className="relative z-10">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Certifications />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

function BackgroundFX() {
  return (
    <div className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-60" />
      <div className="absolute -top-40 -left-40 h-[480px] w-[480px] rounded-full bg-white/[0.06] blur-3xl animate-orb" />
      <div className="absolute top-1/3 -right-32 h-[520px] w-[520px] rounded-full bg-white/[0.05] blur-3xl animate-orb" style={{ animationDelay: "-6s" }} />
      <div className="absolute bottom-0 left-1/3 h-[400px] w-[400px] rounded-full bg-white/[0.04] blur-3xl animate-orb" style={{ animationDelay: "-12s" }} />
      <div className="absolute inset-0 bg-gradient-to-b from-background/0 via-background/40 to-background" />
    </div>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: "#about", label: "About" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Work" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <header className={`fixed top-4 left-1/2 z-50 -translate-x-1/2 transition-all duration-500 ${scrolled ? "w-[min(960px,92vw)]" : "w-[min(1100px,94vw)]"}`}>
      <nav className={`glass flex items-center justify-between rounded-full px-5 py-3 transition-all ${scrolled ? "py-2.5" : ""}`}>
        <a href="#top" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight">
          <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/20 bg-white text-background text-[11px] font-bold">AA</span>
          <span className="hidden sm:inline">astel.antony</span>
        </a>
        <ul className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="rounded-full px-3 py-1.5 text-sm text-muted-foreground transition-colors hover:bg-white/5 hover:text-foreground">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <a href="#contact" className="group relative inline-flex items-center gap-2 rounded-full bg-white px-4 py-1.5 text-sm font-medium text-background transition-transform hover:scale-[1.03]">
          Hire me
          <span className="inline-block transition-transform group-hover:translate-x-0.5">→</span>
        </a>
      </nav>
    </header>
  );
}

function Hero() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [time, setTime] = useState("");

  useEffect(() => {
    const tick = () => {
      const d = new Date();
      const t = d.toLocaleTimeString("en-IN", { hour12: false, timeZone: "Asia/Kolkata" });
      setTime(`${t} IST`);
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  useEffect(() => {
    const el = cardRef.current;
    if (!el) return;
    const handle = (e: MouseEvent) => {
      const r = el.getBoundingClientRect();
      const x = (e.clientX - r.left) / r.width - 0.5;
      const y = (e.clientY - r.top) / r.height - 0.5;
      el.style.transform = `rotateY(${x * 14}deg) rotateX(${-y * 14}deg) translateZ(0)`;
    };
    const reset = () => { el.style.transform = "rotateY(0) rotateX(0)"; };
    el.addEventListener("mousemove", handle);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", handle);
      el.removeEventListener("mouseleave", reset);
    };
  }, []);

  return (
    <section id="top" className="relative px-6 pt-36 pb-24 md:pt-44 md:pb-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.1fr_1fr]">
        <div className="reveal">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full glass px-3 py-1.5 font-mono text-xs">
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
            </span>
            Available for internships · {time}
          </div>

          <h1 className="font-display text-5xl font-semibold leading-[1.02] tracking-tight md:text-7xl lg:text-[5.5rem]">
            <span className="block text-gradient">Astel Antony.</span>
            <span className="block text-muted-foreground">Building with</span>
            <span className="block">
              <ShimmerText>AI + Security.</ShimmerText>
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-base text-muted-foreground md:text-lg">
            Aspiring Generative AI engineer and cybersecurity practitioner from Kerala.
            I prototype AI agents, ship web platforms, and break things to learn how to defend them.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <a href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5">
              View projects
              <span className="transition-transform group-hover:translate-x-1">→</span>
            </a>
            <a href="#contact" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5">
              Get in touch
            </a>
            <a href="https://github.com/Viperhawks" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5">
              GitHub ↗
            </a>
          </div>

          <dl className="mt-12 grid max-w-md grid-cols-3 gap-4 border-t border-white/10 pt-6">
            {[
              { k: "10+", v: "Projects" },
              { k: "7+", v: "Certifications" },
              { k: "3", v: "Internships" },
            ].map((s) => (
              <div key={s.v}>
                <dt className="font-display text-3xl font-semibold">{s.k}</dt>
                <dd className="font-mono text-xs uppercase tracking-wider text-muted-foreground">{s.v}</dd>
              </div>
            ))}
          </dl>
        </div>

        <div className="perspective relative mx-auto w-full max-w-md reveal">
          <div ref={cardRef} className="preserve-3d relative aspect-square w-full transition-transform duration-200 ease-out will-change-transform">
            {/* Outer rotating dashed ring */}
            <div className="absolute inset-0 animate-spin-slow rounded-full border border-dashed border-white/20" />
            {/* Mid rotating ring with ticks */}
            <div className="absolute inset-6 animate-spin-slow rounded-full border border-white/10" style={{ animationDirection: "reverse", animationDuration: "40s" }}>
              {Array.from({ length: 12 }).map((_, i) => (
                <span
                  key={i}
                  className="absolute left-1/2 top-0 h-2 w-px -translate-x-1/2 bg-white/30"
                  style={{ transform: `rotate(${i * 30}deg) translateY(-1px)`, transformOrigin: "50% 50vmin" }}
                />
              ))}
            </div>

            {/* Crosshair guides */}
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute left-1/2 top-0 h-3 w-px -translate-x-1/2 bg-white/30" />
              <div className="absolute left-1/2 bottom-0 h-3 w-px -translate-x-1/2 bg-white/30" />
              <div className="absolute top-1/2 left-0 h-px w-3 -translate-y-1/2 bg-white/30" />
              <div className="absolute top-1/2 right-0 h-px w-3 -translate-y-1/2 bg-white/30" />
            </div>

            {/* Corner brackets */}
            {[
              "top-2 left-2 border-l border-t",
              "top-2 right-2 border-r border-t",
              "bottom-2 left-2 border-l border-b",
              "bottom-2 right-2 border-r border-b",
            ].map((c) => (
              <span key={c} className={`absolute h-5 w-5 border-white/40 ${c}`} />
            ))}

            {/* Portrait disc */}
            <div className="absolute inset-[12%] overflow-hidden rounded-full" style={{ transform: "translateZ(40px)" }}>
              <div
                className="absolute inset-0"
                style={{
                  background:
                    "radial-gradient(circle at 50% 35%, rgba(255,255,255,0.18), rgba(255,255,255,0.04) 55%, transparent 75%), conic-gradient(from 200deg, #1a1a1a, #2a2a2a, #0a0a0a, #1a1a1a)",
                }}
              />
              {/* Halftone dots */}
              <div
                className="absolute inset-0 opacity-40 mix-blend-overlay"
                style={{
                  backgroundImage: "radial-gradient(rgba(255,255,255,0.6) 1px, transparent 1.5px)",
                  backgroundSize: "10px 10px",
                  maskImage: "radial-gradient(circle at 50% 60%, black 30%, transparent 70%)",
                  WebkitMaskImage: "radial-gradient(circle at 50% 60%, black 30%, transparent 70%)",
                }}
              />
              <div className="absolute inset-0 ring-1 ring-inset ring-white/20" />
              <img
                src={profileAsset.url}
                alt="Astel Antony"
                className="absolute left-1/2 bottom-[-2%] h-[88%] w-auto -translate-x-1/2 object-contain drop-shadow-[0_30px_50px_rgba(0,0,0,0.7)]"
              />

              {/* status pill on portrait */}
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 inline-flex items-center gap-2 rounded-full glass-strong px-3 py-1 text-[11px] font-mono">
                <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_#34d399]" />
                online
              </div>
            </div>

            {/* Orbiting glass chips */}
            <OrbitChip className="-top-2 left-8" delay="0s" style={{ transform: "translateZ(90px)" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">v.01</span>
              <span className="text-sm font-medium">GenAI · Sec</span>
            </OrbitChip>
            <OrbitChip className="top-1/3 -right-4" delay="-2s" style={{ transform: "translateZ(120px)" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">stack</span>
              <span className="text-sm font-medium">Python · Firebase</span>
            </OrbitChip>
            <OrbitChip className="bottom-2 left-2" delay="-4s" style={{ transform: "translateZ(100px)" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">geo</span>
              <span className="text-sm font-medium">Kerala, IN</span>
            </OrbitChip>
            <OrbitChip className="bottom-10 -right-2" delay="-1s" style={{ transform: "translateZ(110px)" }}>
              <span className="font-mono text-[10px] uppercase tracking-widest text-muted-foreground">id</span>
              <span className="text-sm font-medium">AA · 2026</span>
            </OrbitChip>
          </div>

          {/* base shadow */}
          <div className="pointer-events-none absolute -bottom-6 left-1/2 h-10 w-3/4 -translate-x-1/2 rounded-full bg-black/60 blur-2xl" />
        </div>

      </div>

      <Marquee />
    </section>
  );
}

function ShimmerText({ children }: { children: React.ReactNode }) {
  return (
    <span
      className="bg-clip-text text-transparent"
      style={{
        backgroundImage:
          "linear-gradient(110deg, #ffffff 0%, #ffffff 35%, #6b6b6b 50%, #ffffff 65%, #ffffff 100%)",
        backgroundSize: "200% 100%",
        animation: "shimmer 6s linear infinite",
      }}
    >
      {children}
    </span>
  );
}

function OrbitChip({
  children, className = "", style, delay = "0s",
}: { children: React.ReactNode; className?: string; style?: React.CSSProperties; delay?: string }) {
  return (
    <div
      className={`absolute glass-strong animate-float rounded-2xl px-3 py-2 ${className}`}
      style={{ animationDelay: delay, ...style }}
    >
      <div className="flex flex-col leading-tight">{children}</div>
    </div>
  );

}

function Marquee() {
  const items = ["Prompt Engineering", "AI Agents", "Cybersecurity", "Python", "Firebase", "Threat Analysis", "Hack The Box", "Generative AI", "Cloud", "Web"];
  const row = [...items, ...items];
  return (
    <div className="mt-20 overflow-hidden border-y border-white/10 py-6">
      <div className="flex w-max animate-marquee gap-12 whitespace-nowrap font-mono text-sm text-muted-foreground">
        {row.map((t, i) => (
          <span key={i} className="flex items-center gap-12">
            <span>{t}</span>
            <span className="opacity-30">◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}

function SectionHeader({ tag, title, sub }: { tag: string; title: string; sub?: string }) {
  return (
    <div className="mb-12 reveal">
      <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">{tag}</div>
      <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-5xl">{title}</h2>
      {sub && <p className="mt-3 max-w-2xl text-muted-foreground">{sub}</p>}
    </div>
  );
}

function About() {
  return (
    <section id="about" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="01 · About" title="A motivated builder at the edge of AI and security." />
        <div className="grid gap-6 md:grid-cols-3">
          <div className="glass reveal rounded-3xl p-6 md:col-span-2">
            <p className="text-lg leading-relaxed text-foreground/90">
              I'm Astel — currently exploring how generative AI and cybersecurity intersect.
              I build AI-powered tools, prototype web platforms, and audit systems for fun and learning.
              I'm recognized for academic excellence, leadership (NCC cadet, Best Outgoing Student),
              and shipping projects while still in school.
            </p>
            <p className="mt-4 text-muted-foreground">
              Looking for internship and entry-level opportunities with AI startups, technology
              companies, and cybersecurity teams.
            </p>
          </div>
          <div className="glass reveal rounded-3xl p-6">
            <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">Quick facts</div>
            <ul className="mt-4 space-y-3 text-sm">
              <li className="flex justify-between border-b border-white/10 pb-2"><span>Location</span><span className="font-mono">Kerala, IN</span></li>
              <li className="flex justify-between border-b border-white/10 pb-2"><span>Focus</span><span className="font-mono">GenAI · Sec</span></li>
              <li className="flex justify-between border-b border-white/10 pb-2"><span>Status</span><span className="font-mono text-emerald-400">Open</span></li>
              <li className="flex justify-between"><span>Education</span><span className="font-mono">Higher Sec.</span></li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function Skills() {
  return (
    <section id="skills" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="02 · Stack" title="Tools and technologies I use." sub="A practical toolkit spanning AI workflows, cloud, and offensive/defensive security." />
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {Object.entries(skills).map(([group, items], i) => (
            <div
              key={group}
              className="glass reveal group relative overflow-hidden rounded-3xl p-6 transition-transform hover:-translate-y-1"
              style={{ transitionDelay: `${i * 40}ms` }}
            >
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-all group-hover:bg-white/10" />
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{String(i + 1).padStart(2, "0")}</div>
              <h3 className="mt-2 text-xl font-semibold">{group}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span key={s} className="rounded-full border border-white/15 bg-white/5 px-3 py-1 text-xs">{s}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Experience() {
  return (
    <section id="experience" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="03 · Experience" title="Where I've been building." />
        <ol className="relative space-y-6 border-l border-white/15 pl-6 md:pl-10">
          {experience.map((e, i) => (
            <li key={i} className="reveal relative">
              <span className="absolute -left-[34px] mt-2 flex h-4 w-4 items-center justify-center md:-left-[44px]">
                <span className="absolute h-4 w-4 animate-ping rounded-full bg-white/30" />
                <span className="relative h-2 w-2 rounded-full bg-white" />
              </span>
              <div className="glass rounded-2xl p-6 transition-transform hover:-translate-y-1">
                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <h3 className="text-xl font-semibold">{e.role}</h3>
                  <span className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{e.period}</span>
                </div>
                <div className="font-mono text-sm text-muted-foreground">{e.org}</div>
                <p className="mt-3 text-foreground/85">{e.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

function Projects() {
  return (
    <section id="projects" className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="04 · Selected work" title="Projects I'm proud of." />
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((p, i) => (
            <a
              key={p.name}
              href={p.href || "#"}
              target={p.href ? "_blank" : undefined}
              rel="noreferrer"
              className="glass group relative flex h-full flex-col overflow-hidden rounded-3xl p-6 reveal transition-all hover:-translate-y-2 hover:border-white/30"
              style={{ transitionDelay: `${i * 60}ms` }}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-white/[0.08] via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
              <div className="font-mono text-xs uppercase tracking-widest text-muted-foreground">{p.tag}</div>
              <h3 className="mt-3 text-2xl font-semibold leading-tight">{p.name}</h3>
              <p className="mt-3 flex-1 text-sm text-muted-foreground">{p.body}</p>
              <div className="mt-6 flex items-center justify-between border-t border-white/10 pt-4 text-sm">
                <span className="font-mono text-xs text-muted-foreground">{p.href ? "live" : "case study"}</span>
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/15 transition-all group-hover:bg-white group-hover:text-background">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Certifications() {
  return (
    <section className="relative px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <SectionHeader tag="05 · Credentials" title="Certifications & recognition." />
        <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
          {certs.map((c, i) => (
            <div
              key={c}
              className="glass reveal flex items-center gap-3 rounded-2xl p-4"
              style={{ transitionDelay: `${i * 30}ms` }}
            >
              <span className="inline-flex h-9 w-9 shrink-0 items-center justify-center rounded-xl border border-white/15 bg-white/5 font-mono text-xs">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-sm">{c}</span>
            </div>
          ))}
        </div>
        <div className="mt-6 glass reveal rounded-2xl p-5 text-sm text-muted-foreground">
          <span className="font-mono text-xs uppercase tracking-widest text-foreground">Achievement · </span>
          Best Outgoing Student Award — Panangad VHSS (2025–2026). NCC Cadet.
        </div>
      </div>
    </section>
  );
}

function Contact() {
  return (
    <section id="contact" className="relative px-6 py-24">
      <div className="mx-auto max-w-5xl">
        <div className="glass-strong noise relative overflow-hidden rounded-[2.5rem] p-10 md:p-16 reveal">
          <div className="absolute -top-24 -right-24 h-72 w-72 rounded-full bg-white/10 blur-3xl" />
          <div className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">06 · Contact</div>
          <h2 className="mt-3 text-4xl font-semibold tracking-tight md:text-6xl">
            Let's build something.
          </h2>
          <p className="mt-4 max-w-xl text-muted-foreground">
            Open to internships, collaborations and freelance projects in AI and cybersecurity.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="mailto:tintupro1@gmail.com" className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-3 text-sm font-medium text-background transition hover:-translate-y-0.5">
              tintupro1@gmail.com
            </a>
            <a href="tel:+918129804169" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5">
              +91 81298 04169
            </a>
            <a href="https://linkedin.com/in/astel-antony-bb757831a" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5">
              LinkedIn ↗
            </a>
            <a href="https://github.com/Viperhawks" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full glass px-5 py-3 text-sm font-medium transition hover:-translate-y-0.5">
              GitHub ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/10 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 font-mono text-xs text-muted-foreground md:flex-row">
        <span>© {new Date().getFullYear()} Astel Antony — Kerala, India.</span>
        <span>Crafted with care · glass · motion</span>
      </div>
    </footer>
  );
}
