import React, { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowLeft,
  ArrowUpRight,
  Check,
  Eye,
  EyeOff,
  LayoutDashboard,
  Link as LinkIcon,
  LogOut,
  Mail,
  MapPin,
  Phone,
  Plus,
  Sparkles,
  Trash2,
  Linkedin,
} from "lucide-react";
import { CustomCursor } from "./components/CustomCursor";
import { NoiseOverlay } from "./components/NoiseOverlay";
import { ThreeBackground } from "./components/ThreeBackground";
import {
  FloatingProjects,
  defaultWebCards,
  type WebCard,
} from "./components/FloatingProjects";
import { ExperienceRow } from "./components/ExperienceRow";

type SiteTone = WebCard["tone"];
type SiteAlign = WebCard["align"];

type SiteEntry = {
  id: string;
  name: string;
  category: string;
  summary: string;
  href: string;
  tech: string[];
  tone: SiteTone;
  align: SiteAlign;
};

type SiteDraft = {
  name: string;
  category: string;
  summary: string;
  href: string;
  tech: string;
  tone: SiteTone;
};

const ADMIN_USERNAME = "admin@admin.com";
const ADMIN_PASSWORD = "admin123";
const ADMIN_AUTH_KEY = "jethro-admin-authed";
const SITE_STORAGE_KEY = "jethro-admin-sites";

const methods = [
  {
    title: "Discover",
    copy: "User interviews, behaviour mapping, and usability testing to expose what matters before visual decisions are made.",
  },
  {
    title: "Design",
    copy: "Wireframes and prototypes that align product goals with intuitive interaction models and clean information flow.",
  },
  {
    title: "Deliver",
    copy: "Cross-functional collaboration with product and marketing teams to ship coherent experiences across web and brand touchpoints.",
  },
];

const tools = [
  "Figma",
  "Sketch",
  "InVision",
  "Zeplin",
  "Marvel",
  "Adobe Photoshop",
  "Adobe Illustrator",
  "Adobe InDesign",
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
];

const tonePalette: SiteTone[] = ["lime", "cyan", "orange", "violet"];

function normalizeHref(value: string) {
  const trimmed = value.trim();
  if (!trimmed) {
    return "";
  }

  if (/^https?:\/\//i.test(trimmed)) {
    return trimmed;
  }

  return `https://${trimmed}`;
}

function toList(value: string) {
  return value
    .split(",")
    .map((item) => item.trim())
    .filter(Boolean);
}

function loadSites(): SiteEntry[] {
  const fallback = defaultWebCards.map((card, index) => ({
    id: card.id,
    name: card.name,
    category: card.category,
    summary: card.summary,
    href: card.href,
    tech: card.tech,
    tone: card.tone,
    align: card.align,
  }));

  if (typeof window === "undefined") {
    return fallback;
  }

  try {
    const raw = window.localStorage.getItem(SITE_STORAGE_KEY);
    if (!raw) {
      return fallback;
    }

    const parsed = JSON.parse(raw) as SiteEntry[];
    if (!Array.isArray(parsed) || parsed.length === 0) {
      return fallback;
    }

    return parsed
      .map((site, index) => ({
        id: site.id || `site-${index}`,
        name: site.name || "Untitled website",
        category: site.category || "Case Study",
        summary: site.summary || "No summary provided.",
        href: normalizeHref(site.href),
        tech: Array.isArray(site.tech)
          ? site.tech.filter(Boolean).slice(0, 4)
          : [],
        tone: tonePalette.includes(site.tone) ? site.tone : "lime",
        align:
          site.align === "left" ||
          site.align === "right" ||
          site.align === "center"
            ? site.align
            : index % 3 === 0
              ? "left"
              : index % 3 === 1
                ? "right"
                : "center",
      }))
      .filter((site) => Boolean(site.href));
  } catch {
    return fallback;
  }
}

function saveSites(sites: SiteEntry[]) {
  window.localStorage.setItem(SITE_STORAGE_KEY, JSON.stringify(sites));
}

function loadAdminAuth() {
  if (typeof window === "undefined") {
    return false;
  }

  return window.sessionStorage.getItem(ADMIN_AUTH_KEY) === "true";
}

function setAdminAuth(value: boolean) {
  window.sessionStorage.setItem(ADMIN_AUTH_KEY, value ? "true" : "false");
}

function routeTo(pathname: string) {
  window.history.pushState({}, "", pathname);
  window.dispatchEvent(new PopStateEvent("popstate"));
}

function HomePage({
  sites,
  onAdminOpen,
}: {
  sites: SiteEntry[];
  onAdminOpen: () => void;
}) {
  const displaySites = useMemo(() => {
    if (sites.length > 0) {
      return sites;
    }

    return defaultWebCards.map((card) => ({
      id: card.id,
      name: card.name,
      category: card.category,
      summary: card.summary,
      href: card.href,
      tech: card.tech,
      tone: card.tone,
      align: card.align,
    }));
  }, [sites]);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background">
      <CustomCursor />
      <NoiseOverlay />
      <ThreeBackground />

      <nav className="fixed inset-x-0 top-0 z-40 px-6 py-5 md:px-12">
        <div className="mx-auto flex w-full max-w-[1500px] items-center justify-between rounded-full border border-white/10 bg-black/35 px-5 py-3 backdrop-blur-lg">
          <a
            href="#top"
            className="hover-target text-lg font-serif italic tracking-wide"
          >
            AJ
          </a>

          <div className="hidden items-center gap-7 font-mono text-[11px] uppercase tracking-[0.22em] md:flex">
            <a
              href="#work"
              className="hover-target transition-colors hover:text-accent"
            >
              Projects
            </a>
            <a
              href="#about"
              className="hover-target transition-colors hover:text-accent"
            >
              Profile
            </a>
            <a
              href="#experience"
              className="hover-target transition-colors hover:text-accent"
            >
              Journey
            </a>
            <a
              href="#contact"
              className="hover-target transition-colors hover:text-accent"
            >
              Contact
            </a>
          </div>

          <button
            type="button"
            onClick={onAdminOpen}
            className="hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent"
          >
            <LayoutDashboard size={13} /> Admin
          </button>
        </div>
      </nav>

      <main className="relative z-10" id="top">
        <section className="mx-auto grid min-h-screen w-full max-w-[1500px] grid-cols-1 gap-12 px-6 pb-20 pt-32 md:px-12 lg:grid-cols-12 lg:items-end">
          <motion.div
            className="lg:col-span-8"
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="mb-8 flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.24em] text-accent">
              <span>UX Designer</span>
              <span className="h-px w-10 bg-accent/60" />
              <span>Lagos, Nigeria</span>
            </div>

            <h1 className="leading-[0.85] tracking-[-0.03em]">
              <span className="block font-serif text-[14vw] md:text-[11vw] lg:text-[9rem]">
                Adebisi
              </span>
              <span className="text-stroke block pr-3 font-serif text-[14vw] italic md:text-[11vw] lg:text-[9rem]">
                Jethro
              </span>
            </h1>

            <p className="mt-8 max-w-2xl text-xl leading-relaxed text-zinc-300 md:text-2xl">
              A passionate and results-oriented UX Designer with 2+ years of
              experience creating user-centric digital and physical products
              through research, prototyping, and usability-led design decisions.
            </p>
          </motion.div>

          <motion.aside
            className="lg:col-span-4"
            initial={{ opacity: 0, y: 35 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.8 }}
          >
            <div className="hero-card hover-target rounded-3xl border border-white/10 p-6">
              <div className="mb-5 flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Quick Info
                </span>
                <Sparkles size={16} className="text-accent" />
              </div>

              <div className="space-y-4 text-sm text-zinc-300">
                <p className="flex items-center gap-3">
                  <MapPin size={14} className="text-accent" /> Lagos, Nigeria
                </p>
                <a
                  href="mailto:adebisireuel@gmail.com"
                  className="hover-target flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <Mail size={14} className="text-accent" />{" "}
                  adebisireuel@gmail.com
                </a>
                <a
                  href="tel:+2348186281244"
                  className="hover-target flex items-center gap-3 transition-colors hover:text-accent"
                >
                  <Phone size={14} className="text-accent" /> +234 818 628 1244
                </a>
              </div>

              <div className="mt-6 border-t border-white/10 pt-6">
                <p className="mb-3 font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Primary Focus
                </p>
                <p className="text-base leading-relaxed text-zinc-200">
                  User Research, Prototyping, Usability Testing, Interface
                  Systems, and Brand-aligned Product Experiences.
                </p>
              </div>
            </div>
          </motion.aside>

          <div className="lg:col-span-12 flex items-center gap-4 pt-5 font-mono text-[10px] uppercase tracking-[0.22em] text-zinc-400">
            <ArrowDown size={15} className="animate-bounce text-accent" />
            <span>Scroll to enter the project deck</span>
          </div>
        </section>

        <FloatingProjects projects={displaySites} />

        <section
          id="about"
          className="mx-auto w-full max-w-[1500px] px-6 py-28 md:px-12"
        >
          <div className="mb-14 flex items-center gap-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              About + Method
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <div className="grid grid-cols-1 gap-16 lg:grid-cols-12">
            <div className="lg:col-span-5">
              <h3 className="mb-7 font-serif text-5xl leading-[0.9] md:text-6xl">
                Designing with
                <span className="block italic text-accent">
                  clarity and empathy
                </span>
              </h3>
              <p className="mb-6 text-lg leading-relaxed text-zinc-300">
                I collaborate with founders, product teams, and marketing teams
                to create experiences that feel coherent from first interaction
                to long-term retention.
              </p>
              <p className="text-lg leading-relaxed text-zinc-300">
                Beyond product execution, I bring training and facilitation
                experience that helps teams understand design principles, user
                behaviour, and practical implementation constraints.
              </p>
            </div>

            <div className="lg:col-span-7">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
                {methods.map((method) => (
                  <article
                    key={method.title}
                    className="hover-target rounded-2xl border border-white/10 bg-white/[0.03] p-5 transition-colors hover:border-accent/40"
                  >
                    <h4 className="mb-3 font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
                      {method.title}
                    </h4>
                    <p className="text-sm leading-relaxed text-zinc-300">
                      {method.copy}
                    </p>
                  </article>
                ))}
              </div>

              <div className="mt-10 rounded-3xl border border-white/10 bg-white/[0.02] p-6">
                <h4 className="mb-4 font-mono text-[11px] uppercase tracking-[0.22em] text-muted">
                  Tools + Craft
                </h4>
                <div className="flex flex-wrap gap-2">
                  {tools.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-white/15 px-3 py-1 text-xs text-zinc-200"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className="mx-auto w-full max-w-[1500px] px-6 py-28 md:px-12"
        >
          <div className="mb-14 flex items-center gap-6">
            <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-muted">
              Professional Experience
            </h2>
            <div className="h-px flex-1 bg-white/10" />
          </div>

          <ExperienceRow
            year="2023 - Present"
            role="Freelance Product Designer"
            company="Independent"
            location="Lagos, Nigeria"
            details={[
              "Designed user-centric digital and physical products for startups and established companies, improving UX and engagement.",
              "Conducted user research and usability testing to refine prototypes and optimize interaction flow.",
              "Used Figma, Sketch, and InVision to build high-fidelity mockups and clickable prototypes.",
            ]}
          />
          <ExperienceRow
            year="2022"
            role="Digital Designer"
            company="Filtar.Africa"
            location="Lagos, Nigeria"
            details={[
              "Developed cohesive, user-centered experiences across web, social media, and campaign assets.",
              "Collaborated with marketing to align content with engagement goals and strengthen brand consistency.",
              "Produced visual systems using Photoshop, Illustrator, and InDesign.",
            ]}
          />
          <ExperienceRow
            year="2019 - 2022"
            role="Adobe Creative Suite Instructor"
            company="Kavit Digital"
            location="Lagos, Nigeria"
            details={[
              "Delivered practical Adobe Creative Suite training for diverse learning styles and backgrounds.",
              "Combined theory with project-based learning to build industry-standard execution skills in learners.",
            ]}
            isLast={true}
          />
        </section>

        <section className="mx-auto w-full max-w-[1500px] border-t border-white/10 px-6 py-28 md:px-12">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Education
              </h3>
              <p className="text-lg text-zinc-100">
                Google UX Design Professional Certificate
              </p>
              <p className="mt-1 text-sm text-zinc-400">Completed July 2022</p>
              <p className="mt-5 text-sm leading-relaxed text-zinc-300">
                Core training in user-centered design, prototyping, and
                usability testing workflows.
              </p>
              <p className="mt-6 text-lg text-zinc-100">
                B.Ed. Mathematics and Education
              </p>
              <p className="mt-1 text-sm text-zinc-400">
                University of Lagos · Expected Aug 2025
              </p>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Awards + Certifications
              </h3>
              <ul className="space-y-4 text-sm leading-relaxed text-zinc-300">
                <li>
                  <span className="font-medium text-zinc-100">
                    First Place - Product Design
                  </span>
                  <p className="text-zinc-400">
                    GDG Lagos 20 Days Challenge, 2024
                  </p>
                </li>
                <li>
                  <span className="font-medium text-zinc-100">
                    Social Psychology Certification
                  </span>
                  <p className="text-zinc-400">Wesleyan University, 2022</p>
                </li>
                <li>
                  <span className="font-medium text-zinc-100">
                    BED Mathematics Scholarship
                  </span>
                  <p className="text-zinc-400">
                    University of Lagos, 2020-2025
                  </p>
                </li>
              </ul>
            </article>

            <article className="rounded-3xl border border-white/10 bg-white/[0.03] p-6">
              <h3 className="mb-5 font-mono text-xs uppercase tracking-[0.2em] text-muted">
                Volunteer Work
              </h3>
              <p className="text-sm leading-relaxed text-zinc-300">
                Provided graphic design services and creative support for
                community-focused tech and design organizations including GDG
                Lagos, MLSA Lagos, and ACM-SIGCHI Lagos.
              </p>
            </article>
          </div>
        </section>

        <footer
          id="contact"
          className="mx-auto w-full max-w-[1500px] px-6 pb-20 pt-20 text-center md:px-12"
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="font-serif text-[16vw] leading-[0.8] tracking-[-0.02em] md:text-[11vw]">
              Let us
              <span className="text-stroke ml-4 italic">build</span>
            </h2>

            <a
              href="mailto:adebisireuel@gmail.com"
              className="hover-target mt-8 inline-flex items-center gap-3 rounded-full border border-white/30 px-8 py-4 font-mono text-xs uppercase tracking-[0.2em] transition-all hover:border-accent hover:bg-accent hover:text-black"
            >
              Start a conversation <ArrowUpRight size={14} />
            </a>
          </motion.div>

          <div className="mt-14 flex flex-col items-center justify-between gap-5 border-t border-white/10 pt-8 text-xs uppercase tracking-[0.2em] text-zinc-400 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-5">
              <a
                href="https://adebisijethro.framer.website/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-target inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                Portfolio <ArrowUpRight size={13} />
              </a>
              <a
                href="https://www.linkedin.com/in/jethro-adebisi-21872a20b/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-target inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                LinkedIn <Linkedin size={13} />
              </a>
              <a
                href="https://www.behance.net/adebisijethro"
                target="_blank"
                rel="noopener noreferrer"
                className="hover-target inline-flex items-center gap-2 transition-colors hover:text-accent"
              >
                Behance <ArrowUpRight size={13} />
              </a>
            </div>

            <p>© {new Date().getFullYear()} Adebisi Jethro</p>
          </div>
        </footer>
      </main>
    </div>
  );
}

function AdminLogin({
  onLogin,
  onBackHome,
  error,
}: {
  onLogin: (username: string, password: string) => void;
  onBackHome: () => void;
  error: string | null;
}) {
  const [username, setUsername] = useState(ADMIN_USERNAME);
  const [password, setPassword] = useState(ADMIN_PASSWORD);

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background">
      <CustomCursor />
      <NoiseOverlay />
      <ThreeBackground />

      <main className="relative z-10 mx-auto flex min-h-screen w-full max-w-[1500px] flex-col px-6 py-8 md:px-12">
        <div className="flex items-center justify-between">
          <button
            type="button"
            onClick={onBackHome}
            className="hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent"
          >
            <ArrowLeft size={13} /> Home
          </button>
          <div className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
            /login2admin
          </div>
        </div>

        <section className="flex flex-1 items-center justify-center py-12">
          <div className="grid w-full max-w-5xl grid-cols-1 gap-8 lg:grid-cols-12">
            <motion.div
              className="lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <h1 className="font-serif text-5xl leading-[0.9] md:text-6xl">
                Admin access for
                <span className="block italic text-accent">website links</span>
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-relaxed text-zinc-300">
                Sign in to add the websites you built. Every saved link is
                rendered on the homepage as a floating live browser preview.
              </p>
              <div className="mt-8 space-y-3 rounded-3xl border border-white/10 bg-white/[0.03] p-5 text-sm text-zinc-300">
                <div className="flex items-center gap-3">
                  <Check size={14} className="text-accent" /> Username:
                  admin@admin.com
                </div>
                <div className="flex items-center gap-3">
                  <Check size={14} className="text-accent" /> Password: admin123
                </div>
              </div>
            </motion.div>

            <motion.form
              className="hero-card lg:col-span-7 rounded-3xl border border-white/10 p-6 md:p-8"
              initial={{ opacity: 0, y: 28 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.1 }}
              onSubmit={(event) => {
                event.preventDefault();
                onLogin(username, password);
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div>
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                    Secure Login
                  </p>
                  <h2 className="mt-2 text-2xl font-medium text-zinc-100">
                    Admin Dashboard
                  </h2>
                </div>
                <LayoutDashboard className="text-accent" />
              </div>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    Username
                  </span>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent"
                    value={username}
                    onChange={(event) => setUsername(event.target.value)}
                    placeholder="admin@admin.com"
                    autoComplete="username"
                  />
                </label>

                <label className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    Password
                  </span>
                  <input
                    type="password"
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent"
                    value={password}
                    onChange={(event) => setPassword(event.target.value)}
                    placeholder="admin123"
                    autoComplete="current-password"
                  />
                </label>
              </div>

              {error ? (
                <div className="mt-4 rounded-2xl border border-red-400/30 bg-red-400/10 px-4 py-3 text-sm text-red-200">
                  {error}
                </div>
              ) : null}

              <div className="mt-6 flex flex-wrap items-center gap-4">
                <button
                  type="submit"
                  className="hover-target inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-black transition-transform hover:-translate-y-0.5"
                >
                  Open Dashboard <ArrowUpRight size={13} />
                </button>
                <button
                  type="button"
                  onClick={() => routeTo("/")}
                  className="hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent"
                >
                  Back to home
                </button>
              </div>
            </motion.form>
          </div>
        </section>
      </main>
    </div>
  );
}

function AdminDashboard({
  sites,
  onLogout,
  onHome,
  onSitesChange,
}: {
  sites: SiteEntry[];
  onLogout: () => void;
  onHome: () => void;
  onSitesChange: (sites: SiteEntry[]) => void;
}) {
  const [draft, setDraft] = useState<SiteDraft>({
    name: "",
    category: "Case Study",
    summary: "",
    href: "",
    tech: "",
    tone: "lime",
  });
  const [editingId, setEditingId] = useState<string | null>(null);
  const [status, setStatus] = useState<string>("");

  const entryCount = sites.length;

  function resetDraft() {
    setDraft({
      name: "",
      category: "Case Study",
      summary: "",
      href: "",
      tech: "",
      tone: "lime",
    });
    setEditingId(null);
  }

  function startEdit(site: SiteEntry) {
    setEditingId(site.id);
    setDraft({
      name: site.name,
      category: site.category,
      summary: site.summary,
      href: site.href,
      tech: site.tech.join(", "),
      tone: site.tone,
    });
    setStatus(`Editing ${site.name}`);
  }

  function removeSite(siteId: string) {
    const nextSites = sites.filter((site) => site.id !== siteId);
    onSitesChange(nextSites);
    if (editingId === siteId) {
      resetDraft();
    }
    setStatus("Website removed from homepage deck");
  }

  function submitSite() {
    const trimmedName = draft.name.trim();
    const href = normalizeHref(draft.href);
    if (!trimmedName || !href || !draft.summary.trim()) {
      setStatus("Add a title, link, and summary before saving.");
      return;
    }

    const nextSite: SiteEntry = {
      id: editingId ?? `site-${Date.now()}`,
      name: trimmedName,
      category: draft.category.trim() || "Case Study",
      summary: draft.summary.trim(),
      href,
      tech: toList(draft.tech).slice(0, 4),
      tone: draft.tone,
      align:
        (sites.length + 1) % 3 === 0
          ? "center"
          : sites.length % 2 === 0
            ? "left"
            : "right",
    };

    const nextSites = editingId
      ? sites.map((site) => (site.id === editingId ? nextSite : site))
      : [nextSite, ...sites];

    onSitesChange(nextSites);
    resetDraft();
    setStatus(`${nextSite.name} saved to the homepage`);
  }

  return (
    <div className="min-h-screen bg-background text-foreground font-sans selection:bg-accent selection:text-background">
      <CustomCursor />
      <NoiseOverlay />
      <ThreeBackground />

      <main className="relative z-10 mx-auto min-h-screen w-full max-w-[1500px] px-6 py-8 md:px-12">
        <div className="flex flex-col gap-4 border-b border-white/10 pb-6 md:flex-row md:items-center md:justify-between">
          <div>
            <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-accent">
              Admin dashboard
            </p>
            <h1 className="mt-2 font-serif text-4xl md:text-5xl">
              Website links manager
            </h1>
            <p className="mt-2 text-sm text-zinc-400">
              Add sites here and they will appear on the homepage as floating
              embedded views.
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <button
              type="button"
              onClick={onHome}
              className="hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent"
            >
              <ArrowLeft size={13} /> Home
            </button>
            <button
              type="button"
              onClick={onLogout}
              className="hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent"
            >
              <LogOut size={13} /> Logout
            </button>
          </div>
        </div>

        <section className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-12">
          <motion.div
            className="hero-card lg:col-span-5 rounded-3xl border border-white/10 p-6 md:p-8"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <div className="mb-6 flex items-center justify-between">
              <div>
                <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted">
                  Create or edit
                </p>
                <h2 className="mt-2 text-2xl font-medium text-zinc-100">
                  Website entry
                </h2>
              </div>
              <Plus className="text-accent" />
            </div>

            <div className="space-y-4">
              <label className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  Project name
                </span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent"
                  value={draft.name}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      name: event.target.value,
                    }))
                  }
                  placeholder="My newest case study"
                />
              </label>

              <label className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  Website link
                </span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent"
                  value={draft.href}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      href: event.target.value,
                    }))
                  }
                  placeholder="https://yourwebsite.com"
                />
              </label>

              <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                <label className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    Category
                  </span>
                  <input
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent"
                    value={draft.category}
                    onChange={(event) =>
                      setDraft((current) => ({
                        ...current,
                        category: event.target.value,
                      }))
                    }
                    placeholder="Case Study"
                  />
                </label>

                <label className="space-y-2">
                  <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                    Accent
                  </span>
                  <select
                    className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors focus:border-accent"
                    value={draft.tone}
                    onChange={(event) =>
                      setDraft((current) => ({
                        ...current,
                        tone: event.target.value as SiteTone,
                      }))
                    }
                  >
                    {tonePalette.map((tone) => (
                      <option key={tone} value={tone}>
                        {tone}
                      </option>
                    ))}
                  </select>
                </label>
              </div>

              <label className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  Summary
                </span>
                <textarea
                  className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent"
                  value={draft.summary}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      summary: event.target.value,
                    }))
                  }
                  placeholder="Short description that appears on the homepage card"
                />
              </label>

              <label className="space-y-2">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
                  Tags
                </span>
                <input
                  className="w-full rounded-2xl border border-white/10 bg-black/35 px-4 py-3 text-sm text-zinc-100 outline-none transition-colors placeholder:text-zinc-600 focus:border-accent"
                  value={draft.tech}
                  onChange={(event) =>
                    setDraft((current) => ({
                      ...current,
                      tech: event.target.value,
                    }))
                  }
                  placeholder="UX, Framer, Product"
                />
              </label>
            </div>

            {status ? (
              <div className="mt-5 rounded-2xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-zinc-300">
                {status}
              </div>
            ) : null}

            <div className="mt-6 flex flex-wrap gap-3">
              <button
                type="button"
                onClick={submitSite}
                className="hover-target inline-flex items-center gap-2 rounded-full border border-accent bg-accent px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-black transition-transform hover:-translate-y-0.5"
              >
                <Plus size={13} /> Save to homepage
              </button>
              <button
                type="button"
                onClick={resetDraft}
                className="hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent"
              >
                Reset form
              </button>
            </div>
          </motion.div>

          <div className="lg:col-span-7">
            <div className="mb-4 flex items-center justify-between">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                {entryCount} saved websites
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                Homepage renders live previews
              </p>
            </div>

            <div className="space-y-5">
              {sites.map((site) => (
                <article
                  key={site.id}
                  className="rounded-3xl border border-white/10 bg-white/[0.03] p-5 md:p-6"
                >
                  <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                    <div>
                      <div className="flex flex-wrap items-center gap-3">
                        <h3 className="text-2xl font-medium text-zinc-100">
                          {site.name}
                        </h3>
                        <span className="rounded-full border border-white/15 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                          {site.category}
                        </span>
                      </div>
                      <p className="mt-3 max-w-2xl text-sm leading-relaxed text-zinc-300">
                        {site.summary}
                      </p>
                      <a
                        href={site.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="mt-4 inline-flex items-center gap-2 text-sm text-zinc-200 transition-colors hover:text-accent"
                      >
                        <LinkIcon size={13} /> {site.href}
                      </a>
                      <div className="mt-4 flex flex-wrap gap-2">
                        {(site.tech ?? []).map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full border border-white/15 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-400"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-2">
                      <button
                        type="button"
                        onClick={() => startEdit(site)}
                        className="hover-target inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-colors hover:border-accent hover:text-accent"
                      >
                        Edit
                      </button>
                      <button
                        type="button"
                        onClick={() => removeSite(site.id)}
                        className="hover-target inline-flex items-center gap-2 rounded-full border border-red-400/30 px-4 py-2 text-[10px] uppercase tracking-[0.2em] text-red-200 transition-colors hover:border-red-300 hover:text-red-100"
                      >
                        <Trash2 size={13} /> Delete
                      </button>
                    </div>
                  </div>

                  <div className="mt-5 overflow-hidden rounded-2xl border border-white/10 bg-black/30">
                    <div className="flex items-center gap-2 border-b border-white/10 px-4 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-500">
                      <Eye size={13} className="text-accent" /> Homepage preview
                      <button
                        type="button"
                        className="ml-auto inline-flex items-center gap-2 text-zinc-400 transition-colors hover:text-accent"
                        onClick={() =>
                          window.open(
                            site.href,
                            "_blank",
                            "noopener,noreferrer",
                          )
                        }
                      >
                        Open <ArrowUpRight size={12} />
                      </button>
                    </div>
                    <iframe
                      title={`${site.name} preview`}
                      src={site.href}
                      className="h-[280px] w-full border-0 bg-black"
                      loading="lazy"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export function App() {
  const [pathname, setPathname] = useState(() => window.location.pathname);
  const [sites, setSites] = useState<SiteEntry[]>(loadSites);
  const [isAuthed, setIsAuthed] = useState(() => loadAdminAuth());
  const [loginError, setLoginError] = useState<string | null>(null);

  useEffect(() => {
    const handlePopState = () => {
      setPathname(window.location.pathname);
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  useEffect(() => {
    saveSites(sites);
  }, [sites]);

  const adminPath = pathname === "/login2admin";

  const goHome = () => {
    routeTo("/");
    setPathname("/");
  };

  const goAdmin = () => {
    routeTo("/login2admin");
    setPathname("/login2admin");
  };

  const handleLogin = (username: string, password: string) => {
    if (username.trim() === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
      setAdminAuth(true);
      setIsAuthed(true);
      setLoginError(null);
      goAdmin();
      return;
    }

    setLoginError("Incorrect username or password.");
  };

  const handleLogout = () => {
    setAdminAuth(false);
    setIsAuthed(false);
    setLoginError(null);
    goHome();
  };

  if (adminPath && isAuthed) {
    return (
      <AdminDashboard
        sites={sites}
        onLogout={handleLogout}
        onHome={goHome}
        onSitesChange={setSites}
      />
    );
  }

  if (adminPath) {
    return (
      <AdminLogin
        onLogin={handleLogin}
        onBackHome={goHome}
        error={loginError}
      />
    );
  }

  return <HomePage sites={sites} onAdminOpen={goAdmin} />;
}
