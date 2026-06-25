import { Link } from "react-router-dom";
import { 
    ArrowRightIcon, 
    LayoutGridIcon,
    CalendarDaysIcon,
    SparklesIcon,
    Share2Icon,
    BarChart3Icon,
    SettingsIcon,
    PlusIcon,
    ClockIcon,
    TrendingUpIcon,
    MessageSquareIcon,
    CheckIcon
} from "lucide-react";

export default function Hero() {
    return (
        <section className="relative overflow-hidden">
            {/* Subtle grid */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(0,0,0,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(0,0,0,0.03)_1px,transparent_1px)] bg-size-[56px_56px] pointer-events-none" />

            {/* Red soft glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[900px] h-[560px] bg-[radial-gradient(ellipse_at_center,rgba(124,58,237,0.08)_0%,transparent_70%)] pointer-events-none" />

            <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-20 pb-12 text-center">
                {/* Badge */}
                <div className="inline-flex items-center gap-2 bg-violet-50 border border-violet-100 text-violet-600 text-sm px-3.5 py-1.5 rounded-full mb-8">
                    <span className="size-1.5 bg-violet-500 rounded-full" />
                    Your AI Social Media Assistant
                </div>

                {/* Headline */}
                <h1 className="font-serif text-5xl sm:text-6xl md:text-7xl xl:text-8xl text-slate-900">
                        Connect.Schedule.Scale.
                    <br />
                  {  /* <span className="text-violet-500 italic">Grow Confidently.</span>*/ }
                </h1>

                {/* Subheadline */}
                {/*<p className="mt-7 text-gray-500 max-w-2xl mx-auto">SocialSync lets you create, schedule, and auto-engage across all your social platforms — powered by AI that writes your captions and replies for you.</p>*/}

                {/* CTAs */}
                <div className="mt-7 flex flex-col sm:flex-row items-center justify-center gap-3">
                    <Link to="/login" className="bg-violet-600 text-white rounded-full font-medium hover:bg-violet-700 hover:shadow-[0_8px_24px_rgba(124,58,237,0.35)] inline-flex items-center gap-2 text-[15px] px-8 py-3.5 w-full sm:w-auto justify-center transition-all">
                        Start for free <ArrowRightIcon className="size-4" />
                    </Link>
                    <a href="#how-it-works" className="bg-transparent text-[#333] border-[1.5px] border-black/10 rounded-full font-medium hover:bg-black/5 hover:border-black/20 inline-flex items-center gap-2 text-[15px] px-8 py-3.5 w-full sm:w-auto backdrop-blur justify-center transition-all">
                        See how it works
                    </a>
                </div>

                <p className="mt-5 text-xs text-gray-400">Free plan available</p>
            </div>

            {/* Dashboard mockup */}
            <div className="relative max-w-5xl mx-auto px-5 sm:px-8 pb-0">
                <div className="rounded-t-2xl overflow-hidden border border-gray-200 border-b-0 shadow-lg">
                    {/* Browser chrome */}
                    <div className="flex items-center gap-2 px-4 py-3 bg-[#f0f0f0]" style={{ borderBottom: "1px solid rgba(0,0,0,0.06)" }}>
                        {/*<div className="w-3 h-3 rounded-full bg-red-400" />
                        <div className="w-3 h-3 rounded-full bg-amber-400" />
                        <div className="w-3 h-3 rounded-full bg-emerald-400" />*/}
                        <div className="flex-1 mx-4 rounded-md h-5 max-w-xs bg-white/80" />
                    </div>

                    {/* Mock content */}
                    <div className="p-0 flex flex-col md:flex-row h-[480px] bg-[#faf6ee]" style={{ borderTop: "1px solid rgba(0,0,0,0.06)" }}>
                        {/* Sidebar */}
                        <div className="hidden md:flex w-16 border-r border-amber-100/50 bg-white flex-col items-center py-6 gap-6 shrink-0">
                            <div className="size-8 rounded-lg bg-violet-600/10 flex items-center justify-center text-violet-600 font-bold mb-2">S</div>
                            {[
                                { icon: LayoutGridIcon, active: true },
                                { icon: CalendarDaysIcon, active: false },
                                { icon: SparklesIcon, active: false },
                                { icon: Share2Icon, active: false },
                                { icon: BarChart3Icon, active: false },
                                { icon: SettingsIcon, active: false },
                            ].map((item, idx) => (
                                <button key={idx} className={`p-2 rounded-xl transition-all ${item.active ? "bg-violet-600 text-white shadow-md shadow-violet-200" : "text-slate-400 hover:text-slate-900 hover:bg-slate-50"}`}>
                                    <item.icon className="size-4.5" />
                                </button>
                            ))}
                        </div>

                        {/* Main Mock Workspace */}
                        <div className="flex-1 flex flex-col min-w-0 bg-[#faf6ee]">
                            {/* Inner Header */}
                            <div className="h-14 border-b border-amber-100/50 bg-white/70 backdrop-blur-md px-6 flex items-center justify-between shrink-0">
                                <div className="flex items-center gap-2">
                                    <span className="text-sm font-semibold text-slate-800">Dashboard</span>
                                    <span className="hidden sm:inline text-xs text-slate-400"> workspace / raadhe-marketing</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <button className="flex items-center gap-1.5 text-xs font-semibold bg-violet-600 hover:bg-violet-700 text-white px-3.5 py-1.5 rounded-full shadow-sm">
                                        <PlusIcon className="size-3" /> Create Post
                                    </button>
                                    <div className="size-7 rounded-full bg-gradient-to-br from-violet-400 to-fuchsia-400 text-white font-bold flex items-center justify-center text-[10px]">S</div>
                                </div>
                            </div>

                            {/* Inner Grid Scrollable */}
                            <div className="flex-1 p-6 overflow-y-auto grid grid-cols-1 lg:grid-cols-3 gap-6 text-left">
                                {/* Left Column: Queue & Visuals (span 2) */}
                                <div className="lg:col-span-2 space-y-6">
                                    {/* Stats grid quick summary */}
                                    <div className="grid grid-cols-3 gap-4">
                                        {[
                                            { label: "Scheduled", val: "12", change: "+4 this wk", trend: true },
                                            { label: "Accounts", val: "4", change: "Connected", trend: null },
                                            { label: "Time Saved", val: "18.5h", change: "Auto-pilot", trend: true },
                                        ].map((s, idx) => (
                                            <div key={idx} className="bg-white rounded-xl p-3 sm:p-4 border border-amber-100/40 shadow-xs">
                                                <div className="text-[10px] sm:text-xs text-slate-400 font-medium">{s.label}</div>
                                                <div className="text-lg sm:text-xl font-bold text-slate-800 mt-1 tabular-nums">{s.val}</div>
                                                <div className="text-[9px] sm:text-[10px] text-emerald-600 font-medium mt-1 flex items-center gap-0.5">
                                                    {s.trend && <TrendingUpIcon className="size-2.5 shrink-0" />} {s.change}
                                                </div>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Queue Card */}
                                    <div className="bg-white rounded-xl p-5 border border-amber-100/40 shadow-xs">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider">Next in Queue</h3>
                                            <span className="text-xs font-medium text-slate-400 flex items-center gap-1"><ClockIcon className="size-3" /> Today, 4:00 PM</span>
                                        </div>
                                        
                                        <div className="space-y-4">
                                            {/* Social accounts target */}
                                            <div className="flex items-center gap-2">
                                                <span className="text-[10px] font-semibold bg-blue-50 text-blue-600 px-2.5 py-0.5 rounded-md">LinkedIn</span>
                                                <span className="text-[10px] font-semibold bg-slate-900 text-white px-2.5 py-0.5 rounded-md">X (Twitter)</span>
                                            </div>

                                            {/* Text Preview */}
                                            <p className="text-xs text-slate-600 leading-relaxed font-sans">
                                                🚀 Exciting news! We just launched our AI Social Media autopilot feature. SocialSync automatically generates captions, hashtags, and schedules them at peak hours. Try it out now!
                                            </p>

                                            {/* Attached Graphic Preview */}
                                            <div className="h-28 rounded-lg bg-gradient-to-br from-violet-500/20 via-fuchsia-500/10 to-amber-500/5 border border-violet-100/50 flex items-center justify-center overflow-hidden relative">
                                                <div className="absolute inset-0 bg-radial-gradient(circle, rgba(139,92,246,0.1) 0%, transparent 80%)" />
                                                <div className="text-center z-10">
                                                    <SparklesIcon className="size-5 text-violet-500 mx-auto mb-1 animate-pulse" />
                                                    <span className="text-[10px] font-medium text-violet-700 block">AI Generated Banner</span>
                                                    <span className="text-[9px] text-slate-400 block mt-0.5">Optimized for LinkedIn / X feeds</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Right Column: AI Auto-pilot Queue (span 1) */}
                                <div className="space-y-6">
                                    {/* AI Agent autopilot list */}
                                    <div className="bg-white rounded-xl p-5 border border-amber-100/40 shadow-xs flex flex-col h-full">
                                        <div className="flex items-center justify-between mb-4">
                                            <h3 className="text-xs font-bold text-slate-400 uppercase tracking-wider flex items-center gap-1"><SparklesIcon className="size-3 text-violet-500" /> AI Auto-Pilot</h3>
                                            <span className="size-2 bg-emerald-500 rounded-full animate-pulse" />
                                        </div>
                                        
                                        <div className="space-y-3 flex-1">
                                            {[
                                                {
                                                    user: "@alex_dev",
                                                    comment: "Does it support video auto-posting?",
                                                    reply: "Yes, SocialSync supports auto-scheduling videos on X and Instagram."
                                                },
                                                {
                                                    user: "@creative_studio",
                                                    comment: "Super clean dashboard, love the AI!",
                                                    reply: "Thanks! We're rolling out AI reply suggestion templates next week."
                                                }
                                            ].map((c, i) => (
                                                <div key={i} className="bg-slate-50/50 rounded-lg p-2.5 border border-slate-100 text-left">
                                                    <div className="text-[10px] font-semibold text-slate-700 flex items-center gap-1.5">
                                                        <MessageSquareIcon className="size-3 text-slate-400" /> {c.user}
                                                    </div>
                                                    <p className="text-[9px] text-slate-500 mt-1 italic">"{c.comment}"</p>
                                                    <div className="mt-2 pt-2 border-t border-slate-100">
                                                        <span className="text-[9px] font-semibold text-violet-600 block mb-0.5">Drafted AI Reply:</span>
                                                        <p className="text-[9px] text-slate-600 bg-white p-1.5 rounded border border-violet-100/50">{c.reply}</p>
                                                    </div>
                                                    <div className="mt-2 flex gap-1.5 justify-end">
                                                        <button className="text-[9px] font-semibold text-slate-400 hover:text-slate-600 px-2 py-0.5">Edit</button>
                                                        <button className="text-[9px] font-semibold bg-violet-600 text-white rounded-md px-2 py-0.5 hover:bg-violet-700 flex items-center gap-0.5"><CheckIcon className="size-2.5" /> Approve</button>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
