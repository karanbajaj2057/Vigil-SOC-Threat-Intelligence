import React from "react";
import { Shield, LayoutDashboard, RadioTower, Search, Network, GraduationCap, CircleHelp } from "lucide-react";

const links = [
  ["Dashboard", "dashboard", LayoutDashboard],
  ["Threat Intelligence", "intelligence", RadioTower],
  ["IOC Search", "ioc", Search],
  ["MITRE ATT&CK", "attack", Network],
  ["Awareness Center", "awareness", GraduationCap]
];

export default function Sidebar({ page, setPage }) {
  return <aside className="sidebar">
    <div className="brand"><div className="brand-mark"><Shield size={22}/></div><div><b>VIGIL <span>SOC</span></b><small>THREAT INTELLIGENCE</small></div></div>
    <div className="nav-label">WORKSPACE</div>
    <nav>{links.map(([label, id, Icon]) => <button key={id} onClick={() => setPage(id)} className={`nav-link ${page === id ? "active" : ""}`}><Icon size={18}/><span>{label}</span>{id === "intelligence" && <i className="nav-dot"/>}</button>)}</nav>
    <div className="sidebar-bottom"><div className="online"><span/> Demo environment active</div><button className="nav-link"><CircleHelp size={18}/> Help & documentation</button><div className="profile"><div className="avatar">KA</div><div><b>Analyst Workspace</b><small>Demo account</small></div></div></div>
  </aside>;
}