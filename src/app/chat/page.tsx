"use client"

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Sparkles } from "lucide-react";
import Link from "next/link";

const LOGO = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPrP_xPp9a9EfWAGe_X9xLXn5UoE1ThOnsvggn9D8Vog&s";

type Msg = { id: string; role: "user" | "bot"; text: string; time: string };

const now = () => new Date().toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });

const SUGGESTIONS = [
  "What's my attendance this month?",
  "Show me the exam schedule",
  "Latest placement drives",
  "Scholarship notices",
  "Campus facilities",
  "Admission procedure",
];

function mockReply(q: string): string {
  const s = q.toLowerCase();
  if (s.includes("attendance"))
    return "Your attendance stands at **86%** across all subjects this semester. DBMS is lowest at 78% — plan to attend the next 3 sessions.";
  if (s.includes("syllabus"))
    return "The updated **AY 2026 syllabus** is available for CSE, IT, ME, CE and EC. Which department and semester should I open?";
  if (s.includes("exam") || s.includes("schedule"))
    return "**Mid-term exams** begin 22 Jul 2026. First paper: Operating Systems, 10:00 AM, Block C. Full timetable in the Examinations section.";
  if (s.includes("placement"))
    return "Upcoming drives:\n• TCS Digital — 18 Jul (CSE/IT)\n• Infosys — 21 Jul (all branches)\n• Deloitte — 25 Jul (CSE/IT/EC)";
  if (s.includes("scholarship"))
    return "Active scholarships: **MP State Merit** (deadline 30 Jul), **AICTE Pragati** for female students, and **IPS Alumni Fund**. Want me to open the application form?";
  if (s.includes("admission"))
    return "Admissions for AY 2026-27 are open. B.Tech via JEE/MP-DTE counseling, MBA via CAT/MAT. Fee structure and brochure available on request.";
  if (s.includes("facilit") || s.includes("campus"))
    return "Campus has: 24×7 library, 4 computing labs, sports complex, 2 hostels, medical room and a food court. Any specific facility?";
  if (s.includes("calendar"))
    return "**Academic Calendar 2026-27:** Odd sem Jul–Nov, Winter break 20 Dec–1 Jan, Even sem Jan–May. Holidays list attached in the calendar.";
  if (s.includes("brochure"))
    return "Here's the official **IPS Institute Brochure (2026)** — I can share the PDF link on request.";
  if (s.includes("rules") || s.includes("conduct"))
    return "The Code of Conduct covers attire, attendance, ragging policy (zero tolerance), and academic integrity. Full document in the Rules section.";
  return "Thanks for your question! In a full deployment I'd call the right knowledge tool for this. For the demo, try asking about attendance, exams, placements, scholarships or admissions.";
}

export default function ChatPage() {
  const [messages, setMessages] = useState<Msg[]>([
    {
      id: "m0",
      role: "bot",
      text: "Hello! I'm the **IPS Campus Assistant**. Ask me about attendance, syllabus, placements, scholarships, admissions or anything else about the institute.",
      time: now(),
    },
  ]);
  const [input, setInput] = useState("");
  const [typing, setTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
  }, [messages, typing]);

  function send(text: string) {
    const q = text.trim();
    if (!q) return;
    setMessages((m) => [...m, { id: crypto.randomUUID(), role: "user", text: q, time: now() }]);
    setInput("");
    setTyping(true);
    setTimeout(() => {
      setMessages((m) => [...m, { id: crypto.randomUUID(), role: "bot", text: mockReply(q), time: now() }]);
      setTyping(false);
    }, 900 + Math.random() * 700);
  }

  return (
    <div className="flex h-screen flex-col bg-[var(--gradient-subtle)] font-sans">
      {/* Header */}
      <header className="border-b border-border/70 bg-background/90 backdrop-blur">
        <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
          <div className="flex items-center gap-3">
            <Link href="/" className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground">
              <ArrowLeft className="h-4 w-4" />
            </Link>
            <img src={LOGO} className="h-10 w-10 rounded-full ring-2 ring-primary/15" alt="" />
            <div>
              <div className="flex items-center gap-2 font-display font-semibold">
                IPS Campus Assistant
                <span className="flex items-center gap-1 rounded-full bg-[oklch(0.94_0.06_150)] px-2 py-0.5 text-[10px] font-medium text-[oklch(0.35_0.12_150)]">
                  <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.55_0.18_150)]" /> Online
                </span>
              </div>
              <div className="text-xs text-muted-foreground">Powered by 16 knowledge tools</div>
            </div>
          </div>
        </div>
      </header>

      {/* Messages */}
      <div ref={scrollRef} className="flex-1 overflow-y-auto">
        <div className="mx-auto max-w-3xl px-4 py-6">
          <div className="space-y-4">
            {messages.map((m) => (
              <div key={m.id} className={`flex items-end gap-2 ${m.role === "user" ? "justify-end" : "justify-start"}`}>
                {m.role === "bot" && (
                  <img src={LOGO} className="h-7 w-7 shrink-0 rounded-full ring-1 ring-border" alt="" />
                )}
                <div className={`max-w-[78%] ${m.role === "user" ? "items-end" : "items-start"} flex flex-col`}>
                  <div
                    className={
                      m.role === "user"
                        ? "rounded-2xl rounded-br-sm bg-primary px-4 py-2.5 text-sm leading-relaxed text-primary-foreground shadow-[var(--shadow-soft)]"
                        : "rounded-2xl rounded-bl-sm border border-border bg-card px-4 py-2.5 text-sm leading-relaxed text-card-foreground shadow-[var(--shadow-soft)]"
                    }
                    dangerouslySetInnerHTML={{
                      __html: m.text
                        .replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>")
                        .replace(/\n/g, "<br/>"),
                    }}
                  />
                  <span className="mt-1 px-1 text-[10px] text-muted-foreground">{m.time}</span>
                </div>
              </div>
            ))}
            {typing && (
              <div className="flex items-end gap-2">
                <img src={LOGO} className="h-7 w-7 rounded-full ring-1 ring-border" alt="" />
                <div className="rounded-2xl rounded-bl-sm border border-border bg-card px-4 py-3 shadow-[var(--shadow-soft)]">
                  <div className="flex gap-1">
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.3s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60 [animation-delay:-0.15s]" />
                    <span className="h-2 w-2 animate-bounce rounded-full bg-muted-foreground/60" />
                  </div>
                </div>
              </div>
            )}

            {messages.length === 1 && (
              <div className="pt-4">
                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                  <Sparkles className="h-3.5 w-3.5" /> Try asking
                </div>
                <div className="flex flex-wrap gap-2">
                  {SUGGESTIONS.map((s) => (
                    <button
                      key={s}
                      onClick={() => send(s)}
                      className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-colors hover:border-primary hover:bg-primary/5 hover:text-primary"
                    >
                      {s}
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Composer */}
      <div className="border-t border-border/70 bg-background/90 backdrop-blur">
        <form
          className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-3"
          onSubmit={(e) => {
            e.preventDefault();
            send(input);
          }}
        >
          <Input
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Ask about attendance, exams, placements…"
            className="h-11 rounded-full border-border bg-card px-5 text-sm shadow-none focus-visible:ring-primary/30"
          />
          <Button type="submit" size="icon" className="h-11 w-11 shrink-0 rounded-full shadow-[var(--shadow-soft)]">
            <Send className="h-4 w-4" />
          </Button>
        </form>
      </div>
    </div>
  );
}
