// "use client"
// import { useEffect, useRef, useState } from "react";
// import Link from "next/link";
// import axios from "axios"
// import {
//     AreaChart, Area, BarChart, Bar, PieChart, Pie, Cell,
//     XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid,
// } from "recharts";
// import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
// import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
// import { Badge } from "@/components/ui/badge";
// import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
// import {
//     Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle, DialogTrigger,
// } from "@/components/ui/dialog";
// import { Label } from "@/components/ui/label";
// import { toast } from "sonner";
// import {
//     LayoutDashboard, FileText, Users, MessageSquare, LogOut, Trash2, Search,
//     TrendingUp, Database, Activity, Send, Plus, FileUp, X,
// } from "lucide-react";
// import { useRouter } from "next/navigation";



// const LOGO = "image.png";

// type UserRow = { id: string; name: string; role: string; channel: "Web" | "Telegram" | "WhatsApp"; msgs: number; last: string };
// type ChatRow = { id: string; user: string; channel: string; preview: string; time: string };

// const users: UserRow[] = [
//     { id: "u1", name: "Aarav Sharma", role: "Student", channel: "WhatsApp", msgs: 42, last: "2 min ago" },
//     { id: "u2", name: "Priya Verma", role: "Student", channel: "Telegram", msgs: 31, last: "18 min ago" },
//     { id: "u3", name: "Dr. R. Patel", role: "Faculty", channel: "Web", msgs: 12, last: "1 hr ago" },
//     { id: "u4", name: "Rohan Mehta", role: "Visitor", channel: "Web", msgs: 5, last: "3 hr ago" },
//     { id: "u5", name: "Isha Nair", role: "Student", channel: "WhatsApp", msgs: 67, last: "yesterday" },
//     { id: "u6", name: "Kabir Singh", role: "Student", channel: "Telegram", msgs: 24, last: "yesterday" },
//     { id: "u7", name: "Sneha Iyer", role: "Faculty", channel: "Web", msgs: 8, last: "2 days ago" },
//     { id: "u8", name: "Vikram Rao", role: "Visitor", channel: "WhatsApp", msgs: 3, last: "3 days ago" },
// ];

// const chats: ChatRow[] = [
//     { id: "c1", user: "Aarav Sharma", channel: "WhatsApp", preview: "What's my attendance in DBMS?", time: "2 min ago" },
//     { id: "c2", user: "Priya Verma", channel: "Telegram", preview: "Show me next week's exam schedule", time: "18 min ago" },
//     { id: "c3", user: "Dr. R. Patel", channel: "Web", preview: "Upload new syllabus for Sem 5", time: "1 hr ago" },
//     { id: "c4", user: "Rohan Mehta", channel: "Web", preview: "Admission procedure for B.Tech?", time: "3 hr ago" },
//     { id: "c5", user: "Isha Nair", channel: "WhatsApp", preview: "Scholarship deadline?", time: "yesterday" },
// ];

// const stats = [
//     { label: "Total users", value: "1,284", delta: "+12%", icon: Users },
//     { label: "Messages today", value: "3,472", delta: "+8%", icon: MessageSquare },
//     { label: "PDFs indexed", value: "24", delta: "+2", icon: Database },
//     { label: "Avg. response", value: "1.4s", delta: "-0.2s", icon: Activity },
// ];

// const channelBreakdown = [
//     { name: "WhatsApp", pct: 52, color: "oklch(0.65 0.15 150)" },
//     { name: "Telegram", pct: 31, color: "oklch(0.65 0.15 230)" },
//     { name: "Web", pct: 17, color: "oklch(0.55 0.18 265)" },
// ];

// const messagesTrend = [
//     { day: "Mon", msgs: 1820, users: 210 },
//     { day: "Tue", msgs: 2150, users: 245 },
//     { day: "Wed", msgs: 2480, users: 268 },
//     { day: "Thu", msgs: 2210, users: 251 },
//     { day: "Fri", msgs: 3120, users: 312 },
//     { day: "Sat", msgs: 2680, users: 289 },
//     { day: "Sun", msgs: 3472, users: 341 },
// ];

// const toolUsage = [
//     { tool: "attendance", n: 421 },
//     { tool: "exams", n: 318 },
//     { tool: "placements", n: 264 },
//     { tool: "syllabus", n: 197 },
//     { tool: "scholarships", n: 142 },
//     { tool: "brochure", n: 98 },
// ];

export default function AdminDashboard() {
    return(
        <div>Soon</div>
    )
}
//     const navigate = useRouter();
//     const [ready, setReady] = useState(false);
//     const [pdfs, setPdfs] = useState<[]>([]);
//     const [search, setSearch] = useState("");
//     const [uploadOpen, setUploadOpen] = useState(false);

//     useEffect(() => {
//         if (typeof window === "undefined") return;
//         if (localStorage.getItem("ips_admin") !== "1") {
//             navigate.push("/admin/login");
//         } else {
//             setReady(true);
//         }
//     }, [navigate]);
//     const getPdf = async () => {
//         const res = await axios.get("http://127.0.0.1:8000/admin/namespaces");
//         const data = res.data.PDF.replaceAll("'", '"')
//         console.log(data)
//         setPdfs(JSON.parse(data))
//     }
//     useEffect(() => {
//         getPdf()
//     }, [])
//     function logout() {
//         localStorage.removeItem("ips_admin");
//         toast.success("Signed out");
//         navigate.push("/");
//     }

//     function deletePdf(id: string) {
//         toast.success("PDF removed from vector DB");
//     }

//     function addPdf(name: string, category: string) {
//         if (!name) return;
//         toast.success("PDF uploaded and indexed");
//         setUploadOpen(false);
//     }

//     return (
//         <div className="min-h-screen bg-[var(--gradient-subtle)] font-sans">
//             {/* Top bar */}
//             <header className="sticky top-0 z-30 border-b border-border/70 bg-background/90 backdrop-blur">
//                 <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6">
//                     <Link href="/" className="flex items-center gap-2">
//                         <img src={LOGO} className="h-9 w-9 rounded-full ring-2 ring-primary/10" alt="" />
//                         <div>
//                             <div className="font-display text-sm font-bold leading-tight">IPS Admin</div>
//                             <div className="text-[11px] text-muted-foreground">Campus Assistant Console</div>
//                         </div>
//                     </Link>
//                     <div className="flex items-center gap-2">
//                         <Badge variant="outline" className="hidden sm:inline-flex">admin@ips.edu</Badge>
//                         <Button variant="ghost" size="sm" onClick={logout} className="gap-1.5">
//                             <LogOut className="h-4 w-4" /> <span className="hidden sm:inline">Sign out</span>
//                         </Button>
//                     </div>
//                 </div>
//             </header>

//             <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6">
//                 <div className="mb-8">
//                     <h1 className="font-display text-3xl font-bold tracking-tight sm:text-4xl">Dashboard</h1>
//                     <p className="mt-1 text-sm text-muted-foreground">Overview of the IPS Campus Assistant</p>
//                 </div>

//                 <Tabs defaultValue="overview" className="w-full">
//                     <TabsList className="mb-6 h-auto flex-wrap justify-start gap-1 bg-card p-1">
//                         <TabsTrigger value="overview" className="gap-1.5"><LayoutDashboard className="h-4 w-4" />Overview</TabsTrigger>
//                         <TabsTrigger value="pdfs" className="gap-1.5"><FileText className="h-4 w-4" />PDFs</TabsTrigger>
//                         <TabsTrigger value="users" className="gap-1.5"><Users className="h-4 w-4" />Users</TabsTrigger>
//                         <TabsTrigger value="chats" className="gap-1.5"><MessageSquare className="h-4 w-4" />Chats</TabsTrigger>
//                     </TabsList>

//                     {/* Overview */}
//                     <TabsContent value="overview" className="space-y-6">
//                         <div className="grid grid-cols-2 gap-4 lg:grid-cols-4">
//                             {stats.map((s) => (
//                                 <div key={s.label} className="rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-soft)]">
//                                     <div className="flex items-center justify-between">
//                                         <div className="grid h-9 w-9 place-items-center rounded-lg bg-primary/10 text-primary">
//                                             <s.icon className="h-4 w-4" />
//                                         </div>
//                                         <Badge variant="secondary" className="gap-1 text-[10px]"><TrendingUp className="h-3 w-3" />{s.delta}</Badge>
//                                     </div>
//                                     <div className="mt-4 font-display text-2xl font-bold">{s.value}</div>
//                                     <div className="text-xs text-muted-foreground">{s.label}</div>
//                                 </div>
//                             ))}
//                         </div>

//                         <div className="grid grid-cols-1 gap-6 lg:grid-cols-3">
//                             {/* Messages trend */}
//                             <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] lg:col-span-2">
//                                 <div className="flex items-start justify-between">
//                                     <div>
//                                         <h3 className="font-display font-semibold">Messages this week</h3>
//                                         <p className="text-xs text-muted-foreground">Daily volume across all channels</p>
//                                     </div>
//                                     <Badge variant="secondary" className="gap-1 text-[10px]"><TrendingUp className="h-3 w-3" />+18%</Badge>
//                                 </div>
//                                 <div className="mt-4 h-64">
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <AreaChart data={messagesTrend} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
//                                             <defs>
//                                                 <linearGradient id="gMsg" x1="0" y1="0" x2="0" y2="1">
//                                                     <stop offset="0%" stopColor="oklch(0.55 0.2 275)" stopOpacity={0.4} />
//                                                     <stop offset="100%" stopColor="oklch(0.55 0.2 275)" stopOpacity={0} />
//                                                 </linearGradient>
//                                             </defs>
//                                             <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.91 0.015 250)" vertical={false} />
//                                             <XAxis dataKey="day" stroke="oklch(0.5 0.03 255)" fontSize={12} tickLine={false} axisLine={false} />
//                                             <YAxis stroke="oklch(0.5 0.03 255)" fontSize={12} tickLine={false} axisLine={false} />
//                                             <Tooltip
//                                                 contentStyle={{
//                                                     borderRadius: 12, border: "1px solid oklch(0.91 0.015 250)",
//                                                     background: "white", fontSize: 12, boxShadow: "0 8px 24px -12px rgba(0,0,0,0.15)",
//                                                 }}
//                                             />
//                                             <Area type="monotone" dataKey="msgs" stroke="oklch(0.42 0.18 265)" strokeWidth={2.5} fill="url(#gMsg)" />
//                                         </AreaChart>
//                                     </ResponsiveContainer>
//                                 </div>
//                             </div>

//                             {/* Channel donut */}
//                             <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)]">
//                                 <h3 className="font-display font-semibold">Channels</h3>
//                                 <p className="text-xs text-muted-foreground">Message share</p>
//                                 <div className="mt-2 h-48">
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <PieChart>
//                                             <Pie
//                                                 data={channelBreakdown} dataKey="pct" nameKey="name"
//                                                 innerRadius={50} outerRadius={78} paddingAngle={3} stroke="none"
//                                             >
//                                                 {channelBreakdown.map((c) => (
//                                                     <Cell key={c.name} fill={c.color} />
//                                                 ))}
//                                             </Pie>
//                                             <Tooltip
//                                                 contentStyle={{
//                                                     borderRadius: 12, border: "1px solid oklch(0.91 0.015 250)",
//                                                     background: "white", fontSize: 12,
//                                                 }}
//                                                 formatter={(v: number) => `${v}%`}
//                                             />
//                                         </PieChart>
//                                     </ResponsiveContainer>
//                                 </div>
//                                 <ul className="mt-2 space-y-2 text-sm">
//                                     {channelBreakdown.map((c) => (
//                                         <li key={c.name} className="flex items-center justify-between">
//                                             <span className="flex items-center gap-2">
//                                                 <span className="h-2 w-2 rounded-full" style={{ backgroundColor: c.color }} />
//                                                 {c.name}
//                                             </span>
//                                             <span className="font-medium tabular-nums">{c.pct}%</span>
//                                         </li>
//                                     ))}
//                                 </ul>
//                             </div>

//                             {/* Tool usage bar chart — full width */}
//                             <div className="rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-soft)] lg:col-span-3">
//                                 <div className="flex items-start justify-between">
//                                     <div>
//                                         <h3 className="font-display font-semibold">Top knowledge tools</h3>
//                                         <p className="text-xs text-muted-foreground">Invocation count · last 7 days</p>
//                                     </div>
//                                 </div>
//                                 <div className="mt-4 h-56">
//                                     <ResponsiveContainer width="100%" height="100%">
//                                         <BarChart data={toolUsage} margin={{ top: 8, right: 8, left: -12, bottom: 0 }}>
//                                             <CartesianGrid strokeDasharray="3 3" stroke="oklch(0.91 0.015 250)" vertical={false} />
//                                             <XAxis dataKey="tool" stroke="oklch(0.5 0.03 255)" fontSize={12} tickLine={false} axisLine={false} />
//                                             <YAxis stroke="oklch(0.5 0.03 255)" fontSize={12} tickLine={false} axisLine={false} />
//                                             <Tooltip
//                                                 cursor={{ fill: "oklch(0.965 0.01 250)" }}
//                                                 contentStyle={{
//                                                     borderRadius: 12, border: "1px solid oklch(0.91 0.015 250)",
//                                                     background: "white", fontSize: 12,
//                                                 }}
//                                             />
//                                             <Bar dataKey="n" fill="oklch(0.42 0.18 265)" radius={[8, 8, 0, 0]} />
//                                         </BarChart>
//                                     </ResponsiveContainer>
//                                 </div>
//                             </div>
//                         </div>
//                     </TabsContent>

//                     {/* PDFs */}
//                     <TabsContent value="pdfs">
//                         <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
//                             <div className="flex flex-wrap items-center justify-between gap-3 border-b border-border p-4">
//                                 <div>
//                                     <h3 className="font-display font-semibold">Vector DB documents</h3>
//                                     {/* <p className="text-xs text-muted-foreground">{pdfs.length} PDFs · {pdfs.reduce((a, p) => a + p.chunks, 0)} chunks indexed</p> */}
//                                 </div>
//                                 <div className="flex items-center gap-2">
//                                     <div className="relative">
//                                         <Search className="absolute left-2.5 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
//                                         <Input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search…" className="h-9 w-40 pl-8 sm:w-56" />
//                                     </div>
//                                     <Dialog open={uploadOpen} onOpenChange={setUploadOpen}>
//                                         <DialogTrigger >
//                                             <Button size="sm" className="gap-1.5"><Plus className="h-4 w-4" />Upload</Button>
//                                         </DialogTrigger>
//                                         <DialogContent>
//                                             <DialogHeader>
//                                                 <DialogTitle>Upload PDF</DialogTitle>
//                                                 <DialogDescription>Add a document to the vector database. It will be chunked and embedded automatically.</DialogDescription>
//                                             </DialogHeader>
//                                             <UploadForm onAdd={addPdf} />
//                                         </DialogContent>
//                                     </Dialog>
//                                 </div>
//                             </div>
//                             <div className="overflow-x-auto">
//                                 <Table>
//                                     <TableHeader>
//                                         <TableRow>
//                                             <TableHead className="hidden md:table-cell">S No.</TableHead>
//                                             <TableHead>Document</TableHead>
//                                             {/* <TableHead>Category</TableHead> */}
//                                             <TableHead className="hidden md:table-cell">Chunks</TableHead>
//                                             <TableHead className="text-right">Actions</TableHead>
//                                         </TableRow>
//                                     </TableHeader>
//                                     <TableBody>
//                                         {pdfs.map((p, idx) => (
//                                             <TableRow key={idx}>
//                                                 <TableCell className="hidden sm:table-cell text-muted-foreground">{idx+1}</TableCell>
//                                                 <TableCell className="font-medium">
//                                                     <div className="flex items-center gap-2">
//                                                         <FileText className="h-4 w-4 text-primary" />
//                                                         <span className="truncate">{p.name}</span>
//                                                     </div>
//                                                 </TableCell>

//                                                 <TableCell className="hidden sm:table-cell text-muted-foreground">{p.chunks}</TableCell>
//                                                 <TableCell className="text-right">
//                                                     <Button variant="ghost" size="icon" onClick={() => deletePdf(p)}>
//                                                         <Trash2 className="h-4 w-4 text-destructive" />
//                                                     </Button>
//                                                 </TableCell>
//                                             </TableRow>
//                                         ))}
//                                         {pdfs.length === 0 && (
//                                             <TableRow><TableCell colSpan={6} className="text-center text-muted-foreground py-8">No PDFs found</TableCell></TableRow>
//                                         )}
//                                     </TableBody>
//                                 </Table>
//                             </div>
//                         </div>
//                     </TabsContent>

//                     {/* Users */}
//                     <TabsContent value="users">
//                         <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
//                             <div className="border-b border-border p-4">
//                                 <h3 className="font-display font-semibold">Users</h3>
//                                 <p className="text-xs text-muted-foreground">People chatting with the assistant across all channels</p>
//                             </div>
//                             <div className="overflow-x-auto">
//                                 <Table>
//                                     <TableHeader>
//                                         <TableRow>
//                                             <TableHead>Name</TableHead>
//                                             <TableHead>Role</TableHead>
//                                             <TableHead>Channel</TableHead>
//                                             <TableHead className="hidden sm:table-cell">Messages</TableHead>
//                                             <TableHead className="hidden md:table-cell">Last active</TableHead>
//                                         </TableRow>
//                                     </TableHeader>
//                                     <TableBody>
//                                         {users.map((u) => (
//                                             <TableRow key={u.id}>
//                                                 <TableCell className="font-medium">{u.name}</TableCell>
//                                                 <TableCell><Badge variant="outline">{u.role}</Badge></TableCell>
//                                                 <TableCell>
//                                                     <span className="inline-flex items-center gap-1.5 text-sm">
//                                                         <span
//                                                             className="h-2 w-2 rounded-full"
//                                                             style={{
//                                                                 background:
//                                                                     u.channel === "WhatsApp" ? "oklch(0.65 0.15 150)" :
//                                                                         u.channel === "Telegram" ? "oklch(0.65 0.15 230)" :
//                                                                             "oklch(0.55 0.18 265)",
//                                                             }}
//                                                         />
//                                                         {u.channel}
//                                                     </span>
//                                                 </TableCell>
//                                                 <TableCell className="hidden sm:table-cell tabular-nums">{u.msgs}</TableCell>
//                                                 <TableCell className="hidden md:table-cell text-muted-foreground">{u.last}</TableCell>
//                                             </TableRow>
//                                         ))}
//                                     </TableBody>
//                                 </Table>
//                             </div>
//                         </div>
//                     </TabsContent>

//                     {/* Chats */}
//                     <TabsContent value="chats">
//                         <div className="rounded-2xl border border-border bg-card shadow-[var(--shadow-soft)]">
//                             <div className="border-b border-border p-4">
//                                 <h3 className="font-display font-semibold">Recent conversations</h3>
//                                 <p className="text-xs text-muted-foreground">Latest messages received by the assistant</p>
//                             </div>
//                             <ul className="divide-y divide-border">
//                                 {chats.map((c) => (
//                                     <li key={c.id} className="flex items-start gap-3 p-4 hover:bg-muted/40">
//                                         <div className="grid h-9 w-9 shrink-0 place-items-center rounded-full bg-primary/10 text-primary">
//                                             <Send className="h-4 w-4" />
//                                         </div>
//                                         <div className="min-w-0 flex-1">
//                                             <div className="flex flex-wrap items-center gap-2">
//                                                 <span className="font-medium">{c.user}</span>
//                                                 <Badge variant="outline" className="text-[10px]">{c.channel}</Badge>
//                                                 <span className="ml-auto text-xs text-muted-foreground">{c.time}</span>
//                                             </div>
//                                             <p className="mt-1 truncate text-sm text-muted-foreground">"{c.preview}"</p>
//                                         </div>
//                                     </li>
//                                 ))}
//                             </ul>
//                         </div>
//                     </TabsContent>
//                 </Tabs>
//             </div>
//         </div>
//     );
// }

// function UploadForm({ onAdd }: { onAdd: (name: string, category: string) => void }) {
//     const [name, setName] = useState("");
//     const [category, setCategory] = useState("");
//     const [file, setFile] = useState<File | null>(null);
//     const [dragOver, setDragOver] = useState(false);
//     const inputRef = useRef<HTMLInputElement>(null);

//     function handleFile(f: File | null) {
//         if (!f) return;
//         if (!f.name.toLowerCase().endsWith(".pdf")) {
//             toast.error("Only PDF files are supported");
//             return;
//         }
//         setFile(f);
//         setName(f.name);
//     }

//     return (
//         <div className="space-y-4">
//             <div
//                 onClick={() => inputRef.current?.click()}
//                 onDragOver={(e) => { e.preventDefault(); setDragOver(true); }}
//                 onDragLeave={() => setDragOver(false)}
//                 onDrop={(e) => {
//                     e.preventDefault(); setDragOver(false);
//                     handleFile(e.dataTransfer.files?.[0] ?? null);
//                 }}
//                 className={`cursor-pointer rounded-xl border-2 border-dashed p-6 text-center transition-colors ${dragOver ? "border-primary bg-primary/5" : "border-border hover:border-primary/50 hover:bg-muted/30"
//                     }`}
//             >
//                 <input
//                     ref={inputRef} type="file" accept="application/pdf" className="hidden"
//                     onChange={(e) => handleFile(e.target.files?.[0] ?? null)}
//                 />
//                 {file ? (
//                     <div className="flex items-center justify-center gap-3">
//                         <div className="grid h-10 w-10 place-items-center rounded-lg bg-primary/10 text-primary">
//                             <FileText className="h-5 w-5" />
//                         </div>
//                         <div className="text-left">
//                             <div className="text-sm font-medium">{file.name}</div>
//                             <div className="text-xs text-muted-foreground">
//                                 {(file.size / 1024 / 1024).toFixed(2)} MB · ready to index
//                             </div>
//                         </div>
//                         <Button
//                             type="button" variant="ghost" size="icon"
//                             onClick={(e) => { e.stopPropagation(); setFile(null); setName(""); }}
//                         >
//                             <X className="h-4 w-4" />
//                         </Button>
//                     </div>
//                 ) : (
//                     <>
//                         <div className="mx-auto grid h-11 w-11 place-items-center rounded-full bg-primary/10 text-primary">
//                             <FileUp className="h-5 w-5" />
//                         </div>
//                         <p className="mt-3 text-sm font-medium">Drop a PDF here, or click to browse</p>
//                         <p className="mt-1 text-xs text-muted-foreground">PDF only · up to 20 MB</p>
//                     </>
//                 )}
//             </div>
//             <div>
//                 <Label htmlFor="name">File name</Label>
//                 <Input id="name" placeholder="e.g. CSE_Syllabus_Sem6.pdf" value={name} onChange={(e) => setName(e.target.value)} className="mt-1.5" />
//             </div>
//             <div>
//                 <Label htmlFor="cat">Category</Label>
//                 <Input id="cat" placeholder="e.g. Syllabus" value={category} onChange={(e) => setCategory(e.target.value)} className="mt-1.5" />
//             </div>
//             <DialogFooter>
//                 <Button onClick={() => onAdd(name, category)} disabled={!name}>Upload & index</Button>
//             </DialogFooter>
//         </div>
//     );
// }
