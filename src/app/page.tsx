"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, MessageSquare, Sparkles, ShieldCheck, GraduationCap, Calendar, Award, BookOpen,
  Bot, Zap, Globe, FileSearch, Users, TrendingUp, Star, Quote,
} from "lucide-react";


const LOGO = "image.png";

const features = [
  { icon: GraduationCap, title: "Attendance & Syllabus", desc: "Real-time attendance and up-to-date syllabus in one tap." },
  { icon: Calendar, title: "Exams & Calendar", desc: "Never miss a schedule — exams, holidays, department events." },
  { icon: Award, title: "Placements & Scholarships", desc: "Latest openings, drive updates and scholarship notices." },
  { icon: BookOpen, title: "Admissions & Brochure", desc: "Guided admission flow, brochures and program details." },
];

const tools = [
  "get_attendance", "get_syllabus", "scrape_url", "parse_pdf",
  "examination_schedules", "academic_programs", "admission_procedure",
  "institute_brochure", "code_of_conduct", "rules_regulations",
  "get_department_schedules", "get_campus_updates", "placements",
  "scholarship_notices", "campus_facilities",
];

const testimonials = [
  { name: "Aarav Sharma", role: "B.Tech CSE, Sem 5", quote: "Checking attendance and exam dates used to eat my morning. Now it's a 2-second question.", stars: 5 },
  { name: "Dr. R. Patel", role: "Faculty, IT Dept", quote: "Students get instant answers, so my inbox is finally sane. The syllabus lookups are spot on.", stars: 5 },
  { name: "Rohan Mehta", role: "Prospective student", quote: "Asked about admissions at 11pm and got the whole procedure with the brochure. Actually helpful.", stars: 5 },
];

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <img src={LOGO} alt="IPS" className="h-9 w-9 rounded-full ring-2 ring-primary/10" />
            <span className="font-display text-lg font-bold tracking-tight">IPS Assistant</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#channels" className="hover:text-foreground">Channels</a>
            <Link href="/admin/login" className="hover:text-foreground">Admin</Link>
          </nav>
          <Link href="/chat">
            <Button size="sm" className="gap-1.5">
              Chat <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
      >
        <span className="font-display text-[22vw] font-black leading-none tracking-widest text-primary/[0.07] lg:text-[15rem]">
          CAMPUS
        </span>
      </div>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="mx-auto grid max-w-7xl grid-cols-1 items-center gap-12 px-4 py-16 sm:px-6 lg:grid-cols-2 lg:py-24">
          {/* Left: text */}
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> AI-powered campus companion
            </div>
            <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] tracking-tight text-foreground sm:text-6xl lg:text-7xl">
              Your campus,<br />
              <span className="bg-gradient-to-r from-primary to-[oklch(0.55_0.2_275)] bg-clip-text text-transparent">
                answered instantly.
              </span>
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-relaxed text-muted-foreground">
              Meet the IPS Campus Assistant — an AI that helps students, faculty and visitors
              with attendance, syllabus, exams, placements, admissions, scholarships and every
              little detail of campus life.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/chat">
                <Button size="lg" className="gap-2 shadow-[var(--shadow-elegant)]">
                  <MessageSquare className="h-4 w-4" /> Start chatting
                </Button>
              </Link>
              <a href="#features">
                <Button size="lg" variant="outline">Explore features</Button>
              </a>
            </div>
            <div className="mt-10 flex items-center gap-6 text-sm text-muted-foreground">
              <div><span className="font-semibold text-foreground">12k+</span> queries answered</div>
              <div className="h-4 w-px bg-border" />
              <div><span className="font-semibold text-foreground">16</span> knowledge tools</div>
              <div className="h-4 w-px bg-border" />
              <div><span className="font-semibold text-foreground">3</span> platforms</div>
            </div>
          </div>

          {/* Right: logo + huge CAMPUS text */}
          <div className="relative flex h-[380px] items-center justify-center sm:h-[480px] lg:h-[560px]">
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -inset-10 rounded-full bg-gradient-to-br from-primary/20 via-primary/5 to-transparent blur-3xl" />
                {/* Orbiting rings */}
                <div aria-hidden className="absolute -inset-8 rounded-full border border-primary/15 sm:-inset-12" />
                <div aria-hidden className="absolute -inset-16 rounded-full border border-primary/10 sm:-inset-24" />
                <img
                  src={LOGO}
                  alt="IPS Academy logo"
                  className="relative h-64 w-64 rounded-full object-cover shadow-[var(--shadow-elegant)] ring-8 ring-background sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                />
                {/* Floating chips */}
                <div className="absolute -left-4 top-6 hidden animate-[float_6s_ease-in-out_infinite] items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium shadow-[var(--shadow-soft)] sm:flex">
                  <Bot className="h-3.5 w-3.5 text-primary" /> Ask anything
                </div>
                <div className="absolute -right-6 top-1/3 hidden animate-[float_7s_ease-in-out_infinite_1s] items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium shadow-[var(--shadow-soft)] sm:flex">
                  <Zap className="h-3.5 w-3.5 text-[oklch(0.7_0.17_75)]" /> 1.4s replies
                </div>
                <div className="absolute -bottom-2 left-8 hidden animate-[float_8s_ease-in-out_infinite_0.5s] items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium shadow-[var(--shadow-soft)] sm:flex">
                  <FileSearch className="h-3.5 w-3.5 text-[oklch(0.6_0.15_150)]" /> RAG over PDFs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools marquee */}
        <div className="relative overflow-hidden border-y border-border/60 bg-card/50 py-4">
          <div className="flex animate-[marquee_40s_linear_infinite] gap-3 whitespace-nowrap">
            {[...tools, ...tools].map((t, i) => (
              <code key={i} className="rounded-full border border-border bg-background px-3 py-1 text-xs font-medium text-muted-foreground">
                {t}
              </code>
            ))}
          </div>
          <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-background to-transparent" />
        </div>
      </section>

      {/* Features */}
      <section id="features" className="border-t border-border/60 bg-[var(--gradient-subtle)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Everything about IPS, in one chat
            </h2>
            <p className="mt-4 text-muted-foreground">
              16 specialised tools power the assistant — from attendance lookup to placement drives.
            </p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {features.map((f) => (
              <div
                key={f.title}
                className="group rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
              >
                <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-primary-foreground">
                  <f.icon className="h-5 w-5" />
                </div>
                <h3 className="font-display text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Channels */}
      <section id="channels" className="border-t border-border/60">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-20 sm:px-6 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-4xl font-bold tracking-tight">
              Available where you already chat
            </h2>
            <p className="mt-4 text-muted-foreground">
              Talk to the assistant on Telegram or WhatsApp, or open it right here on the web —
              no login required.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-[oklch(0.65_0.15_150)]" /> WhatsApp
              </div>
              <div className="flex items-center gap-2 rounded-full border border-border bg-card px-4 py-2 text-sm font-medium">
                <span className="h-2 w-2 rounded-full bg-[oklch(0.65_0.15_230)]" /> Telegram
              </div>
              <div className="flex items-center gap-2 rounded-full border border-primary bg-primary/5 px-4 py-2 text-sm font-medium text-primary">
                <span className="h-2 w-2 rounded-full bg-primary" /> Web
              </div>
            </div>
          </div>
          <div className="rounded-3xl border border-border bg-card p-8 shadow-[var(--shadow-soft)]">
            <div className="flex items-center gap-3 border-b border-border pb-4">
              <img src={LOGO} className="h-10 w-10 rounded-full" alt="" />
              <div>
                <div className="font-semibold">IPS Assistant</div>
                <div className="text-xs text-muted-foreground">online · replies instantly</div>
              </div>
            </div>
            <div className="mt-5 space-y-3 text-sm">
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-muted px-4 py-2.5">
                Hi! I'm your IPS Campus Assistant. Ask me anything about the institute.
              </div>
              <div className="ml-auto max-w-[80%] rounded-2xl rounded-tr-sm bg-primary px-4 py-2.5 text-primary-foreground">
                When is the next placement drive?
              </div>
              <div className="max-w-[80%] rounded-2xl rounded-tl-sm bg-muted px-4 py-2.5">
                TCS is visiting on 18 Jul 2026 for CSE & IT. Shall I share the eligibility criteria?
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      {/* Stats strip */}
      <section className="border-t border-border/60 bg-[var(--gradient-hero)] text-primary-foreground">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-8 px-4 py-14 sm:px-6 lg:grid-cols-4">
          {[
            { icon: Users, k: "12,400+", v: "Queries answered" },
            { icon: FileSearch, k: "24", v: "PDFs indexed" },
            { icon: TrendingUp, k: "1.4s", v: "Avg. response time" },
            { icon: Globe, k: "3", v: "Channels supported" },
          ].map((s) => (
            <div key={s.v} className="flex items-center gap-4">
              <div className="grid h-12 w-12 place-items-center rounded-xl bg-primary-foreground/10 ring-1 ring-primary-foreground/20">
                <s.icon className="h-5 w-5" />
              </div>
              <div>
                <div className="font-display text-3xl font-bold leading-none">{s.k}</div>
                <div className="mt-1 text-xs opacity-80">{s.v}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials */}
      <section className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Loved across the campus
            </h2>
            <p className="mt-4 text-muted-foreground">Students, faculty and visitors — one assistant, everyone happy.</p>
          </div>
          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {testimonials.map((t) => (
              <figure key={t.name} className="relative rounded-2xl border border-border/70 bg-card p-7 shadow-[var(--shadow-soft)]">
                <Quote className="absolute right-5 top-5 h-6 w-6 text-primary/15" />
                <div className="flex gap-0.5 text-[oklch(0.75_0.16_75)]">
                  {Array.from({ length: t.stars }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-current" />
                  ))}
                </div>
                <blockquote className="mt-4 text-sm leading-relaxed text-foreground">"{t.quote}"</blockquote>
                <figcaption className="mt-6 border-t border-border/60 pt-4">
                  <div className="font-medium">{t.name}</div>
                  <div className="text-xs text-muted-foreground">{t.role}</div>
                </figcaption>
              </figure>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-border/60">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <ShieldCheck className="mx-auto h-10 w-10 text-primary" />
          <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
            Ready to explore campus, the smart way?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            Jump into the chat — no signup, no forms. Just questions and answers.
          </p>
          <Link href="/chat">
            <Button size="lg" className="mt-8 gap-2 shadow-[var(--shadow-elegant)]">
              Open the assistant <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        © 2026 IPS Academy · Campus Assistant
      </footer>
    </div>
  );
}
