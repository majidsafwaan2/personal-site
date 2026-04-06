import { SiteNav } from "@/components/SiteNav";
import { TerminalHero } from "@/components/TerminalHero";
import { PortfolioCard } from "@/components/PortfolioCard";
import { AwardCard } from "@/components/AwardCard";
import { ContactSection } from "@/components/ContactSection";
import { awards, projects } from "@/lib/portfolio-content";

export default function Home() {
  return (
    <>
      <SiteNav />

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col px-4 pb-20">
        <section className="text-center pt-4 pb-2">
          <h1 className="text-2xl font-bold tracking-tight text-zinc-50 sm:text-3xl">
            Safwaan Majid
          </h1>
          <p className="mt-2 text-xs leading-snug text-indigo-400/95 sm:text-sm">
            Competitive robotics · AI · Autonomous systems
          </p>
        </section>

        <section id="about" className="scroll-mt-24" aria-label="About me">
          <TerminalHero />
        </section>

        <section id="projects" className="mt-14 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2 mb-5">
            Projects
          </h2>
          <div className="grid gap-3 sm:grid-cols-2">
            {projects.map((item, index) => (
              <PortfolioCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="awards" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2 mb-8">
            Awards
          </h2>
          <div className="grid gap-5 sm:grid-cols-2">
            {awards.map((item, index) => (
              <AwardCard key={item.id} item={item} index={index} />
            ))}
          </div>
        </section>

        <section id="education" className="mt-16 scroll-mt-24">
          <h2 className="text-2xl font-semibold text-zinc-100 border-b border-zinc-800 pb-2 mb-8">
            Education
          </h2>
          <div className="grid gap-4 md:grid-cols-3">
            <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5 transition-colors hover:border-indigo-500/50">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
                School
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-zinc-400">
                Rock Ridge High School and dual enrollment with George Mason
                University — advanced coursework in Data Structures, AI, and
                Independent Science Research.
              </p>
            </div>
            <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5 transition-colors hover:border-indigo-500/50">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
                SAT
              </h3>
              <p className="mt-2 text-2xl font-bold text-zinc-100">1540</p>
              <p className="mt-1 text-xs text-zinc-500">Composite score</p>
            </div>
            <div className="rounded-xl border border-zinc-800/90 bg-zinc-900/40 p-5 transition-colors hover:border-indigo-500/50">
              <h3 className="text-sm font-semibold uppercase tracking-wide text-indigo-400">
                GPA
              </h3>
              <p className="mt-2 text-2xl font-bold text-zinc-100">4.0</p>
              <p className="mt-1 text-xs text-zinc-500">Unweighted</p>
            </div>
          </div>
        </section>

        <ContactSection />

        <footer className="mt-20 border-t border-zinc-800/80 pt-8 text-center text-xs text-zinc-600">
          © {new Date().getFullYear()} Safwaan Majid. All rights reserved.
        </footer>
      </main>
    </>
  );
}
