"use client"

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowLeft, Send, Sparkles, Loader2 } from "lucide-react";
import Link from "next/link"; 
import EnhancedMarkdownRenderer from "@/components/Markdown";
const LOGO = "/image.png";

type Msg = { id: string; role: "user" | "bot"; text: string; };


const SUGGESTIONS = [
    "What's my attendance this month?",
    "Show me the exam schedule",
    "Latest placement drives",
    "Scholarship notices",
    "Campus facilities",
    "Admission procedure",
];


export default function ChatPage() {
    const [messages, setMessages] = useState<Msg[]>([
        {
            id: "m0",
            role: "bot",
            text: "Hello! I'm the **IPS Campus Assistant**. Ask me about attendance, syllabus, placements, scholarships, admissions or anything else about the institute.",
        },
    ]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);
    const [thread, setThread] = useState("")

    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, typing]);

    //   This effect gets the thread id from local storage

    useEffect(() => {
        const id = localStorage.getItem("ips_thread_id");
        if (!id) {
            const newId = crypto.randomUUID();
            localStorage.setItem("ips_thread_id", newId);
            setThread(newId)
        }
        setThread(id)

    }, [])
    const start_message = `### Welcome to the *IPS Campus Assistant*! 🤖

I can help you with:
* **Syllabus & study schemes**
* **Portal Attendance** (needs computer code & password)
* **Campus Updates & Placements**
* **Academic Calendar & Schedules**
* **Rules, Conduct & Brochure**
* **Admission Procedure**
* **Scholarship Notices**

### 🛠️ Commands:
* \`/start\` - Show this message
* \`/clear\` - Clear conversation history
* \`/help\` - View all commands

### What would you like to know? 😊`;

    async function send(text: string) {
        const q = text.trim();
        if (!q) return;
        if (q === "/start") {
            setMessages((m) => [...m, { id: crypto.randomUUID(), role: "bot", text: start_message }]);
            return
        }
        setMessages((m) => [...m, { id: crypto.randomUUID(), role: "user", text: q }]);
        setInput("");
        setTyping(true);
        const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bot`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ query: q, thread_id: thread })
        });
        const data = await res.json();
        setMessages((m) => [...m, { id: crypto.randomUUID(), role: "bot", text: data }]);
        setTyping(false);
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
                    <Button onClick={() => setMessages([])}>Clear</Button>
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
                                    >

                                        {m.role === "bot" ? <EnhancedMarkdownRenderer content={m.text} /> : m.text}

                                    </div>
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
                    <Button disabled={typing || !input} type="submit" size="icon" className="h-11 w-11 shrink-0 rounded-full shadow-[var(--shadow-soft)]">
                        {
                            typing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />
                        }
                    </Button>
                </form>
            </div>
        </div>
    );
}
