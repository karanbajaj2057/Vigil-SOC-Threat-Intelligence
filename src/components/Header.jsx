import React from "react";
import { Bell, Search, ShieldCheck } from "lucide-react";
const titles = { dashboard:"Security overview", intelligence:"Threat intelligence", ioc:"Indicator search", attack:"MITRE ATT&CK coverage", awareness:"Awareness center" };
export default function Header({ page }) {
  return <header className="topbar"><div><div className="crumb">Vigil SOC <span>/</span> <b>{titles[page]}</b></div><h1>{titles[page]}</h1></div><div className="top-actions"><div className="env"><ShieldCheck size={15}/> Training / Demo</div><button className="icon-btn" aria-label="Search"><Search size={18}/></button><button className="icon-btn notification" aria-label="Notifications"><Bell size={18}/><i/></button><div className="avatar">KA</div></div></header>;
}