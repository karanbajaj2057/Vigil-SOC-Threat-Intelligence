import React from "react";
import { BookOpen, MailWarning, KeyRound, Wifi, ShieldCheck, ArrowUpRight } from "lucide-react";
const lessons=[
 {icon:MailWarning,title:"Recognize phishing",tag:"SOCIAL ENGINEERING",desc:"Learn to spot suspicious senders, unexpected links, urgent language and attachment risks.",level:"Beginner"},
 {icon:KeyRound,title:"Protect your credentials",tag:"IDENTITY SECURITY",desc:"Understand passphrases, multi-factor authentication and safe account recovery.",level:"Beginner"},
 {icon:Wifi,title:"Safer networks",tag:"NETWORK SECURITY",desc:"Explore public Wi-Fi risks, secure connections and basic network hygiene.",level:"Intermediate"},
 {icon:ShieldCheck,title:"Incident first response",tag:"SECURITY OPERATIONS",desc:"Learn how to document suspicious activity, report incidents and preserve context.",level:"Intermediate"}
];
export default function Awareness(){return <div className="page-content"><div className="page-intro"><div><span className="eyebrow">LEARN & PREPARE</span><h2>Cybersecurity awareness center</h2><p>Short learning modules for safer digital habits and security fundamentals.</p></div><span className="feed-status"><BookOpen size={15}/> Learning library</span></div><div className="lesson-grid">{lessons.map((x,i)=><article className="lesson-card" key={x.title}><div className="lesson-icon"><x.icon size={21}/></div><div className="lesson-tag">{x.tag}</div><h3>{x.title}</h3><p>{x.desc}</p><div className="lesson-bottom"><span>{x.level} · Module {i+1}</span><ArrowUpRight size={16}/></div></article>)}</div><div className="notice"><ShieldCheck size={17}/> Learning content is a starter outline. Add reviewed, authoritative educational material before public release.</div></div>}
