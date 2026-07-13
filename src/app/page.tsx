"use client"

import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  ArrowRight, MessageSquare, Sparkles, ShieldCheck, GraduationCap, Calendar, Award, BookOpen,
  Bot, Zap, Globe, FileSearch, Users, TrendingUp, Star, Quote, 
  Phone, MessageCircle, Share2, Cloud, Database, Cpu, Network, 
  ChevronRight, Clock, CheckCircle2, Smartphone, Monitor, 
  LayoutGrid, Layers, GitBranch, Workflow, Mic, Video,
  BarChart3, PieChart, Activity, Gauge, Timer, Zap as ZapIcon
} from "lucide-react";

const LOGO = "image.png";

const features = [
  { icon: GraduationCap, title: "Attendance & Syllabus", desc: "Real-time attendance and up-to-date syllabus in one tap." },
  { icon: Calendar, title: "Exams & Calendar", desc: "Never miss a schedule — exams, holidays, department events." },
  { icon: Award, title: "Placements & Scholarships", desc: "Latest openings, drive updates and scholarship notices." },
  { icon: BookOpen, title: "Admissions & Brochure", desc: "Guided admission flow, brochures and program details." },
];



const channels = [
  {
    icon: MessageCircle,
    name: "Telegram",
    description: "Get instant responses in your favorite messaging app",
    color: "bg-[#0088cc]",
    features: ["Group chats", "File sharing", "Quick commands"],
    connectLink: "https://t.me/Ips_Campus_Bot"
  },
  {
    icon: Phone,
    name: "WhatsApp",
    description: "Chat with us on the world's most used messaging platform",
    color: "bg-[#25D366]",
    features: ["End-to-end encrypted", "Voice notes", "Media support"],
    connectLink: "https://wa.me/14155238886?text=join+activity-breathe"
  },
  {
    icon: Monitor,
    name: "Web Chat",
    description: "Use our beautiful web interface from any browser",
    color: "bg-primary",
    features: ["Rich UI", "No installation", "Cross-platform"],
    connectLink: "/chat"
  }
];

const tools = [
  "Attendance", "Syllabus", "Scrape URL", "Parse PDF",
  "Examination Schedules", "Academic Programs", "Admission Procedure",
  "Institute Brochure", "Code of Conduct", "Rules and Regulations",
  "Department Schedules", "Campus Updates", "Placements",
  "Scholarship Notices", "Campus Facilities",
];

const testimonials:any = [];

export default function Index() {
  return (
    <div className="min-h-screen bg-background font-sans text-foreground">
      {/* Nav */}
      <header className="sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="flex items-center gap-2">
            <img src={LOGO} alt="IPS" className="h-9 w-9 rounded-full ring-2 ring-primary/10" />
            <span className="font-display text-lg font-bold tracking-tight">Campus Assistant</span>
          </Link>
          <nav className="hidden items-center gap-8 text-sm font-medium text-muted-foreground md:flex">
            <a href="#features" className="hover:text-foreground">Features</a>
            <a href="#channels" className="hover:text-foreground">Channels</a>
            <a href="#testimonials" className="hover:text-foreground">Testimonials</a>
          </nav>
          <Link href="/chat">
            <Button size="sm" className="gap-1.5">
              Chat <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </header>

      {/* Hero Section */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 flex items-center justify-center overflow-hidden select-none"
      >
        <span className="font-display text-[22vw] font-black leading-none tracking-widest text-primary/[0.07] lg:text-[15rem]">
          CAMPUS
        </span>
      </div>
      
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
              <div><span className="font-semibold text-foreground">Fast</span> </div>
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
                <div aria-hidden className="absolute -inset-8 rounded-full border border-primary/15 sm:-inset-12" />
                <div aria-hidden className="absolute -inset-16 rounded-full border border-primary/10 sm:-inset-24" />
                <img
                  src={LOGO}
                  alt="IPS Academy logo"
                  className="relative h-64 w-64 rounded-full object-cover shadow-[var(--shadow-elegant)] ring-8 ring-background sm:h-80 sm:w-80 lg:h-96 lg:w-96"
                />
                <div className="absolute -left-4 top-6 hidden animate-[float_6s_ease-in-out_infinite] items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium shadow-[var(--shadow-soft)] sm:flex">
                  <Bot className="h-3.5 w-3.5 text-primary" /> Ask anything
                </div>
                <div className="absolute -right-6 top-1/3 hidden animate-[float_7s_ease-in-out_infinite_1s] items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium shadow-[var(--shadow-soft)] sm:flex">
                  <Zap className="h-3.5 w-3.5 text-[oklch(0.7_0.17_75)]" /> 24x7
                </div>
                <div className="absolute -bottom-2 left-8 hidden animate-[float_8s_ease-in-out_infinite_0.5s] items-center gap-2 rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium shadow-[var(--shadow-soft)] sm:flex">
                  <FileSearch className="h-3.5 w-3.5 text-[oklch(0.6_0.15_150)]" /> RAG over PDFs
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Tools marquee - Fixed animation */}
        <div className="relative overflow-hidden border-y border-border/60 bg-card/50 py-4">
          <div className="flex animate-marquee gap-3 whitespace-nowrap">
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

      {/* Features Section */}
      <section id="features" className="border-t border-border/60 bg-[var(--gradient-subtle)]">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="mx-auto max-w-2xl text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Sparkles className="h-3.5 w-3.5" /> Core Features
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
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
                className="group relative rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
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

      {/* Enhanced Multi-Channel Section */}
      <section id="channels" className="border-t border-border/60 bg-gradient-to-b from-background to-card/30">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Globe className="h-3.5 w-3.5" /> Multi-Platform
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              Available where you already chat
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Talk to the assistant on Telegram or WhatsApp, or open it right here on the web —
              no login required.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {channels.map((channel) => (
              <div
                key={channel.name}
                className="group relative rounded-2xl border border-border/70 bg-card p-6 transition-all hover:-translate-y-1 hover:border-primary/40 hover:shadow-[var(--shadow-soft)]"
              >
                <div className={`inline-flex h-12 w-12 items-center justify-center rounded-xl ${channel.color}/10`}>
                  <channel.icon className={`h-6 w-6 ${channel.color} text-white`} />
                </div>
                <h3 className="mt-4 font-display text-xl font-semibold">{channel.name}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{channel.description}</p>
                <ul className="mt-4 space-y-1.5 text-sm">
                  {channel.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-2 text-muted-foreground">
                      <CheckCircle2 className="h-3.5 w-3.5 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                {channel.name === "Web Chat" ? (
                  <Link href={channel.connectLink}>
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      Open Chat <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </Link>
                ) : (
                  <a href={channel.connectLink} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="sm" className="mt-4 w-full">
                      Connect on {channel.name} <ArrowRight className="ml-1 h-3 w-3" />
                    </Button>
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* How to connect guide */}
          <div className="mt-16 rounded-2xl border border-border/60 bg-card/50 p-8">
            <h3 className="text-center font-display text-2xl font-semibold">How to Connect</h3>
            <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-3">
              <div className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#0088cc]/10 text-[#0088cc]">
                  <span className="text-lg font-bold">1</span>
                </div>
                <h4 className="mt-3 font-medium">Telegram</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Search for @Ips_Campus_Bot or click the connect button above
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#25D366]/10 text-[#25D366]">
                  <span className="text-lg font-bold">2</span>
                </div>
                <h4 className="mt-3 font-medium">WhatsApp</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Save our number and start a chat, or click the connect button above , then type "join activity-breathe"
                </p>
              </div>
              <div className="flex flex-col items-center text-center">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <span className="text-lg font-bold">3</span>
                </div>
                <h4 className="mt-3 font-medium">Web Chat</h4>
                <p className="mt-1 text-sm text-muted-foreground">
                  Click the "Open Chat" button above or use the chat link in the navigation
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Empty as requested */}
      <section id="testimonials" className="border-t border-border/60">
        <div className="mx-auto max-w-7xl px-4 py-20 sm:px-6">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-3 py-1 text-xs font-medium text-primary">
              <Star className="h-3.5 w-3.5" /> Testimonials
            </div>
            <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
              What our users say
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              Coming soon — we're collecting feedback from our early adopters.
            </p>
          </div>

          <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="rounded-2xl border border-border/70 bg-card/30 p-7 opacity-50"
              >
                <div className="h-4 w-20 rounded bg-muted animate-pulse" />
                <div className="mt-4 space-y-2">
                  <div className="h-4 w-full rounded bg-muted animate-pulse" />
                  <div className="h-4 w-3/4 rounded bg-muted animate-pulse" />
                  <div className="h-4 w-2/3 rounded bg-muted animate-pulse" />
                </div>
                <div className="mt-6 border-t border-border/60 pt-4">
                  <div className="h-4 w-32 rounded bg-muted animate-pulse" />
                  <div className="mt-1 h-3 w-24 rounded bg-muted animate-pulse" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/60 bg-gradient-to-b from-primary/5 to-background">
        <div className="mx-auto max-w-5xl px-4 py-20 text-center sm:px-6">
          <div className="relative">
            <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-primary/20 via-primary/10 to-transparent blur-3xl" />
            <div className="relative">
              <ShieldCheck className="mx-auto h-12 w-12 text-primary" />
              <h2 className="mt-4 font-display text-4xl font-bold tracking-tight sm:text-5xl">
                Ready to explore campus, the smart way?
              </h2>
              <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
                Jump into the chat — no signup, no forms. Just questions and answers.
              </p>
              <div className="mt-8 flex flex-wrap justify-center gap-4">
                <Link href="/chat">
                  <Button size="lg" className="gap-2 shadow-[var(--shadow-elegant)]">
                    Open the assistant <ArrowRight className="h-4 w-4" />
                  </Button>
                </Link>
              </div>
              <div className="mt-6 flex justify-center gap-6 text-sm text-muted-foreground">
                <span>⚡ Free to use</span>
                <span>🔒 No login required</span>
                <span>📱 Works on all devices</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border/60 py-8 text-center text-sm text-muted-foreground">
        <div className="mx-auto max-w-7xl px-4 sm:px-6">
          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <div className="flex items-center gap-2">
              <img src={LOGO} alt="IPS" className="h-6 w-6 rounded-full" />
              <span className="font-medium">Campus Assistant</span>
            </div>
            <div className="flex gap-6 text-xs">
              <a href="#" className="hover:text-foreground">Privacy</a>
              <a href="#" className="hover:text-foreground">Terms</a>
              <a href="#" className="hover:text-foreground">Support</a>
            </div>
           
          </div>
        </div>
      </footer>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-marquee {
          animation: marquee 30s linear infinite;
        }
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-8px);
          }
        }
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
      `}</style>
    </div>
  );
}