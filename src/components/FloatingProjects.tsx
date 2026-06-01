import React from "react";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

export type WebCard = {
  id: string;
  title: string;
  category: string;
  summary: string;
  href: string;
  tech: string[];
  align: "left" | "right" | "center";
  tone: "lime" | "cyan" | "orange" | "violet";
};

const defaultWebCards: WebCard[] = [
  {
    id: "01",
    title: "Personal Portfolio",
    category: "UX + Product Identity",
    summary:
      "A focused case-study experience highlighting process, rationale, and outcomes for product-facing design work.",
    href: "https://adebisijethro.framer.website/",
    tech: ["UX Writing", "Interaction Design", "Case Study"],
    align: "left",
    tone: "lime",
  },
  {
    id: "02",
    title: "Behance Showcase",
    category: "Curated Project Gallery",
    summary:
      "A gallery-first experience with selected UI concepts, brand explorations, and practical design challenges.",
    href: "https://www.behance.net/adebisijethro",
    tech: ["UI Systems", "Branding", "Presentation"],
    align: "right",
    tone: "cyan",
  },
  {
    id: "03",
    title: "LinkedIn Profile",
    category: "Professional Presence",
    summary:
      "Career timeline, cross-functional work history, and collaborative design impact across teams.",
    href: "https://www.linkedin.com/in/jethro-adebisi-21872a20b/",
    tech: ["Communication", "Leadership", "Collaboration"],
    align: "center",
    tone: "orange",
  },
];

type FloatingProjectsProps = {
  cards?: WebCard[];
};

function toneClass(tone: WebCard["tone"]) {
  switch (tone) {
    case "lime":
      return "from-lime-300/25 to-lime-500/5";
    case "cyan":
      return "from-cyan-300/20 to-cyan-600/5";
    case "orange":
      return "from-orange-300/25 to-orange-500/10";
    default:
      return "from-violet-300/20 to-violet-600/10";
  }
}

function alignClass(align: WebCard["align"]) {
  if (align === "left") {
    return "md:ml-0 md:mr-auto";
  }
  if (align === "right") {
    return "md:ml-auto md:mr-0";
  }
  return "md:mx-auto";
}

function FloatingWebCard({ card, index }: { card: WebCard; index: number }) {
  return (
    <motion.article
      className={`floating-web-card hover-target relative w-full max-w-[760px] rounded-3xl border border-white/15 p-4 ${alignClass(card.align)}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-120px" }}
      transition={{
        duration: 0.8,
        delay: index * 0.07,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -10, rotateX: 1.5, rotateY: -1.5 }}
      style={{ transformStyle: "preserve-3d" }}
    >
      <motion.div
        className="absolute -right-8 -top-8 h-28 w-28 rounded-full bg-accent/10 blur-2xl"
        animate={{
          y: [0, 12, 0],
          x: [0, -8, 0],
        }}
        transition={{
          duration: 7 + index,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="browser-view overflow-hidden rounded-2xl border border-white/10">
        <div className="flex items-center justify-between border-b border-white/10 bg-black/35 px-4 py-3">
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-red-300/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-yellow-300/90" />
            <span className="h-2.5 w-2.5 rounded-full bg-green-300/90" />
          </div>
          <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-zinc-400">
            {card.category}
          </p>
        </div>

        <div className="preview-grid relative min-h-[420px] p-6 md:p-8">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${toneClass(card.tone)}`}
          />

          <iframe
            title={card.title}
            src={card.href}
            loading="lazy"
            referrerPolicy="no-referrer"
            className="absolute inset-0 h-full w-full border-0 opacity-25 mix-blend-screen"
            sandbox="allow-forms allow-scripts allow-same-origin allow-popups allow-top-navigation-by-user-activation"
          />

          <div className="absolute inset-0 bg-black/35" />

          <div className="relative z-10 flex min-h-[360px] flex-col justify-between">
            <div className="mb-5 flex items-center justify-between gap-4">
              <p className="font-mono text-[11px] uppercase tracking-[0.22em] text-accent">
                Project {card.id}
              </p>
              <a
                href={card.href}
                target="_blank"
                rel="noopener noreferrer"
                className="hover-target inline-flex items-center gap-2 rounded-full border border-white/20 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-200 transition-all hover:border-accent hover:text-accent"
              >
                Open Site <ArrowUpRight size={12} />
              </a>
            </div>

            <div>
              <h3 className="font-serif text-4xl leading-[0.9] text-zinc-100 md:text-5xl">
                {card.title}
              </h3>
              <p className="mt-4 max-w-xl text-sm leading-relaxed text-zinc-300 md:text-base">
                {card.summary}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {card.tech.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-200"
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div className="mt-7 inline-flex items-center gap-2 rounded-full border border-white/20 bg-black/25 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-zinc-200">
                Live website preview <ArrowUpRight size={12} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.article>
  );
}

export function FloatingProjects({
  cards = defaultWebCards,
}: FloatingProjectsProps) {
  return (
    <section
      id="work"
      className="project-field mx-auto w-full max-w-[1500px] rounded-[2.5rem] px-6 py-24 md:px-12"
    >
      <div className="mb-14 flex items-center gap-6">
        <h2 className="font-mono text-xs uppercase tracking-[0.22em] text-zinc-400">
          Floating Web Views
        </h2>
        <div className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-zinc-500">
          One-page portfolio deck
        </span>
      </div>

      <div className="mb-10 max-w-3xl">
        <h3 className="font-serif text-5xl leading-[0.9] tracking-[-0.01em] text-zinc-100 md:text-7xl">
          Interactive links as
          <span className="block italic text-accent">
            floating browser elements
          </span>
        </h3>
      </div>

      <div className="space-y-12">
        {cards.map((card, index) => (
          <FloatingWebCard key={card.id} card={card} index={index} />
        ))}
      </div>
    </section>
  );
}

export { defaultWebCards };
