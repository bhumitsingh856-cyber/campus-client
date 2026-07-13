"use client"

import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
    ArrowLeft, Send, Sparkles, Loader2, Bot, User,
    Copy, Check, Clock, Wifi, WifiOff, RefreshCw,
    Mic, MicOff, Paperclip, X, MessageSquare,
    ChevronDown, ChevronUp, Volume2, VolumeX,
    Maximize2, Minimize2, Trash2, Settings,
    Command, HelpCircle, UserPlus, UserMinus, UserCircle,
    BookOpen, Calendar, Award, Globe, Zap
} from "lucide-react";
import Link from "next/link";
import EnhancedMarkdownRenderer from "@/components/Markdown";

const LOGO = "/image.png";

type Msg = {
    id: string;
    role: "user" | "bot";
    text: string;
    timestamp?: Date;
};

// Command definitions
const COMMANDS = [
    {
        cmd: "/start",
        desc: "Show the start message",
        category: "General",
        icon: Sparkles,
        example: "/start"
    },
    {
        cmd: "/clear",
        desc: "Clear Assistant conversation history",
        category: "General",
        icon: Trash2,
        example: "/clear"
    },
    {
        cmd: "/register",
        desc: "Register the student CMS computer code",
        category: "Student",
        icon: UserPlus,
        example: "/register <computer-code> <password>"
    },
    {
        cmd: "/unregister",
        desc: "Unregister the registered computer code",
        category: "Student",
        icon: UserMinus,
        example: "/unregister"
    },
    {
        cmd: "/profile",
        desc: "View the Registered student primary detail",
        category: "Student",
        icon: UserCircle,
        example: "/profile"
    },
    {
        cmd: "/help",
        desc: "View all commands",
        category: "General",
        icon: HelpCircle,
        example: "/help"
    },
];

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
            text: `### 👋 Welcome to the *IPS Campus Assistant*!

I can help you with attendance, syllabus, placements, scholarships, admissions and everything about campus life.

### 📋 Available Commands:
${COMMANDS.map(cmd => `**${cmd.cmd}** - ${cmd.desc}`).join('\n')}

### 💡 Quick Tips:
- Use \`/register <computer-code> <password>\` to access attendance
- Type \`/help\` anytime to see all commands
- Click the suggestion buttons below to get started

### What would you like to know? 😊`,
            timestamp: new Date()
        },
    ]);
    const [input, setInput] = useState("");
    const [typing, setTyping] = useState(false);
    const [thread, setThread] = useState("");
    const [showCommands, setShowCommands] = useState(false);
    const [filteredCommands, setFilteredCommands] = useState(COMMANDS);
    const scrollRef = useRef<HTMLDivElement>(null);
    const inputRef = useRef<HTMLInputElement>(null);

    // Auto-scroll to bottom
    useEffect(() => {
        scrollRef.current?.scrollTo({ top: scrollRef.current.scrollHeight, behavior: "smooth" });
    }, [messages, typing]);

    // Thread ID management
    useEffect(() => {
        const id = localStorage.getItem("ips_thread_id");
        if (!id) {
            const newId = crypto.randomUUID();
            localStorage.setItem("ips_thread_id", newId);
            setThread(newId);
        } else {
            setThread(id);
        }
    }, []);

    // Command filtering for autocomplete
    useEffect(() => {
        if (input.startsWith('/')) {
            const search = input.toLowerCase();
            const filtered = COMMANDS.filter(cmd =>
                cmd.cmd.toLowerCase().includes(search) ||
                cmd.desc.toLowerCase().includes(search)
            );
            setFilteredCommands(filtered);
            setShowCommands(true);
        } else {
            setShowCommands(false);
        }
    }, [input]);

    async function send(text: string) {
        const q = text.trim();
        if (!q) return;

        // Only handle /start locally
        if (q === "/start") {
            const startMsg = `### 👋 Welcome to the *IPS Campus Assistant*!

I can help you with attendance, syllabus, placements, scholarships, admissions and everything about campus life.

### 📋 Available Commands:
${COMMANDS.map(cmd => `**${cmd.cmd}** - ${cmd.desc}`).join('\n')}

### 💡 Quick Tips:
- Use \`/register <computer-code> <password>\` to access attendance
- Type \`/help\` anytime to see all commands

### What would you like to know? 😊`;

            setMessages((m) => [...m, {
                id: crypto.randomUUID(),
                role: "bot",
                text: startMsg,
                timestamp: new Date()
            }]);
            setInput(""); // Clear input
            return;
        }

        // All other commands and queries go to backend
        setMessages((m) => [...m, {
            id: crypto.randomUUID(),
            role: "user",
            text: q,
            timestamp: new Date()
        }]);
        setInput(""); // Clear input immediately
        setTyping(true);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_SERVER_URL}/bot`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ query: q, thread_id: thread })
            });

            if (!res.ok) {
                throw new Error(`HTTP error! status: ${res.status}`);
            }

            const data = await res.json();

            // Handle response from backend
            let responseText = data;
            if (typeof data === 'object' && data.response) {
                responseText = data.response;
            }

            setMessages((m) => [...m, {
                id: crypto.randomUUID(),
                role: "bot",
                text: responseText,
                timestamp: new Date()
            }]);
        } catch (error) {
            console.error("Error sending message:", error);
            setMessages((m) => [...m, {
                id: crypto.randomUUID(),
                role: "bot",
                text: `❌ Sorry, I encountered an error. Please try again.`,
                timestamp: new Date()
            }]);
        } finally {
            setTyping(false);
        }
    }

    const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            send(input);
        }
        if (e.key === 'Escape') {
            setShowCommands(false);
        }
    };

    const insertCommand = (cmd: string) => {
        setInput(cmd + ' ');
        setShowCommands(false);
        inputRef.current?.focus();
    };

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
${COMMANDS.map(cmd => `* \`${cmd.cmd}\` - ${cmd.desc}`).join('\n')}

### What would you like to know? 😊`;

    return (
        <div className="flex h-screen flex-col bg-[var(--gradient-subtle)] font-sans">
            {/* Header */}
            <header className="border-b border-border/70 bg-background/90 backdrop-blur">
                <div className="mx-auto flex max-w-4xl items-center justify-between px-4 py-3">
                    <div className="flex items-center gap-3">
                        <Link href="/" className="rounded-lg p-2 text-muted-foreground hover:bg-muted hover:text-foreground transition-colors">
                            <ArrowLeft className="h-4 w-4" />
                        </Link>
                        <img src={LOGO} className="h-10 w-10 rounded-full ring-2 ring-primary/15" alt="" />
                        <div>
                            <div className="flex items-center gap-2 font-display font-semibold">
                                IPS Campus Assistant
                                <span className="flex items-center gap-1 rounded-full bg-[oklch(0.94_0.06_150)] px-2 py-0.5 text-[10px] font-medium text-[oklch(0.35_0.12_150)]">
                                    <span className="h-1.5 w-1.5 rounded-full bg-[oklch(0.55_0.18_150)] animate-pulse" /> Online
                                </span>
                            </div>
                            <div className="text-xs text-muted-foreground">AI-powered campus companion</div>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground"
                            onClick={() => {
                                navigator.clipboard.writeText(thread);
                                toast({
                                    description: "Thread ID copied to clipboard",
                                });
                            }}
                        >
                            <Copy className="h-3.5 w-3.5" />
                        </Button>
                        <Button
                            variant="ghost"
                            size="sm"
                            className="text-muted-foreground hover:text-foreground"
                            onClick={() => {
                                if (messages.length > 1) {
                                    if (confirm("Are you sure you want to clear all messages?")) {
                                        send("/clear");
                                    }
                                }
                            }}
                        >
                            <Trash2 className="h-3.5 w-3.5" />
                        </Button>
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
                                    >
                                        {m.role === "bot" ? <EnhancedMarkdownRenderer content={m.text} /> : m.text}
                                    </div>
                                    {m.timestamp && (
                                        <span className="mt-1 text-[10px] text-muted-foreground">
                                            {m.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                                        </span>
                                    )}
                                </div>
                                {m.role === "user" && (
                                    <div className="h-7 w-7 shrink-0 rounded-full bg-primary/10 flex items-center justify-center">
                                        <User className="h-4 w-4 text-primary" />
                                    </div>
                                )}
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

                        {/* Quick Suggestions */}
                        {messages.length <= 2 && !typing && (
                            <div className="pt-4">
                                <div className="mb-3 flex items-center gap-2 text-xs font-medium text-muted-foreground">
                                    <Sparkles className="h-3.5 w-3.5" /> Try asking
                                </div>
                                <div className="flex flex-wrap gap-2">
                                    {SUGGESTIONS.map((s) => (
                                        <button
                                            key={s}
                                            onClick={() => send(s)}
                                            className="rounded-full border border-border bg-card px-3 py-1.5 text-xs font-medium text-foreground transition-all hover:border-primary hover:bg-primary/5 hover:text-primary hover:shadow-[var(--shadow-soft)]"
                                        >
                                            {s}
                                        </button>
                                    ))}
                                </div>
                            </div>
                        )}

                        {/* Command Reference */}
                        {messages.length <= 2 && !typing && (
                            <div className="pt-6 border-t border-border/40">
                                <div className="flex items-center gap-2 text-xs font-medium text-muted-foreground mb-3">
                                    <Command className="h-3.5 w-3.5" /> Quick Commands
                                </div>
                                <div className="grid grid-cols-2 gap-2">
                                    {COMMANDS.slice(0, 4).map((cmd) => (
                                        <button
                                            key={cmd.cmd}
                                            onClick={() => send(cmd.cmd)}
                                            className="flex items-center gap-2 rounded-lg border border-border bg-card/50 px-3 py-2 text-xs transition-all hover:border-primary hover:bg-primary/5"
                                        >
                                            <cmd.icon className="h-3 w-3 text-primary" />
                                            <span className="font-mono text-[11px]">{cmd.cmd}</span>
                                            <span className="text-muted-foreground truncate">{cmd.desc}</span>
                                        </button>
                                    ))}
                                </div>
                                <div className="mt-2 text-center">
                                    <button
                                        onClick={() => send("/help")}
                                        className="text-xs text-muted-foreground hover:text-primary transition-colors"
                                    >
                                        View all commands →
                                    </button>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
            </div>

            {/* Composer with Command Autocomplete */}
            <div className="border-t border-border/70 bg-background/90 backdrop-blur relative">
                {/* Command Autocomplete Dropdown */}
                {showCommands && filteredCommands.length > 0 && (
                    <div className="absolute bottom-full left-0 right-0 mx-auto max-w-3xl px-4 pb-2">
                        <div className="rounded-xl border border-border bg-card shadow-[var(--shadow-elegant)] overflow-hidden">
                            <div className="max-h-48 overflow-y-auto p-1">
                                {filteredCommands.map((cmd) => (
                                    <button
                                        key={cmd.cmd}
                                        onClick={() => insertCommand(cmd.cmd)}
                                        className="flex w-full items-center gap-3 rounded-lg px-3 py-2 text-left hover:bg-muted/50 transition-colors"
                                    >
                                        <cmd.icon className="h-4 w-4 text-primary" />
                                        <div className="flex-1">
                                            <div className="text-sm font-medium">{cmd.cmd}</div>
                                            <div className="text-xs text-muted-foreground">{cmd.desc}</div>
                                        </div>
                                        {cmd.example && (
                                            <div className="text-[10px] text-muted-foreground bg-muted/50 px-2 py-1 rounded">
                                                {cmd.example}
                                            </div>
                                        )}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                )}

                <form
                    className="mx-auto flex max-w-3xl items-center gap-2 px-4 py-3"
                    onSubmit={(e) => {
                        e.preventDefault();
                        send(input);
                    }}
                >
                    <div className="relative flex-1">
                        <Input
                            ref={inputRef}
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            onKeyDown={handleKeyDown}
                            placeholder='Ask a question or type "/" for commands...'
                            className="h-11 rounded-full border-border bg-card px-5 text-sm shadow-none focus-visible:ring-primary/30 pr-12"
                        />
                        {input.startsWith('/') && (
                            <div className="absolute right-3 top-1/2 -translate-y-1/2">
                                <Command className="h-4 w-4 text-muted-foreground" />
                            </div>
                        )}
                    </div>
                    <Button
                        disabled={typing || !input}
                        type="submit"
                        size="icon"
                        className="h-11 w-11 shrink-0 rounded-full shadow-[var(--shadow-soft)] transition-all hover:scale-105"
                    >
                        {typing ? <Loader2 className="h-4 w-4 animate-spin" /> : <Send className="h-4 w-4" />}
                    </Button>
                </form>

                <div className="text-center pb-2">
                    <span className="text-[10px] text-muted-foreground">
                        Type <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px]">/</kbd> for commands •
                        <kbd className="rounded border border-border bg-muted px-1.5 py-0.5 text-[10px] ml-1">Enter</kbd> to send
                    </span>
                </div>
            </div>
        </div>
    );
}

// Toast component (add this if you don't have it)
function toast({ description }: { description: string }) {
    // Simple toast implementation
    const toastElement = document.createElement('div');
    toastElement.className = 'fixed bottom-24 left-1/2 -translate-x-1/2 rounded-lg bg-card border border-border px-4 py-2 text-sm shadow-[var(--shadow-elegant)] z-50 animate-in fade-in slide-in-from-bottom-5';
    toastElement.textContent = description;
    document.body.appendChild(toastElement);
    setTimeout(() => {
        toastElement.remove();
    }, 3000);
}