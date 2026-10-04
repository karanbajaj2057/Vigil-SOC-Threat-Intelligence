import React from "react";
import { ShieldAlert, Activity, Crosshair, Siren, ArrowUpRight } from "lucide-react";
import StatCard from "../components/StatCard";
import ThreatChart from "../components/ThreatChart";
import ThreatTable from "../components/ThreatTable";
import { threats, tactics } from "../data/demoData";
export default function Dashboard({ setPage }) {
  return <div className="page-content"><div className="welcome"><div><span className="eyebrow">MONITORING OVERVIEW</span><h2>Good day, Analyst <span>✦</span></h2><p>Here’s a snapshot of your simulated security environment.</p></div><button className="outline-btn" onClick={()=>setPage("intelligence")}>Explore intelligence <ArrowUpRight size={15}/></button></div>
    <div className="stats-grid"><StatCard label="Total detections" value="1,284" note={<><span className="positive">↑ 8.2%</span> vs previous period</>} icon={Activity}/><StatCard label="Critical threats" value="12" note="Requires analyst attention" icon={Siren} tone="red"/><StatCard label="Indicators tracked" value="3,642" note="Synthetic demo indicators" icon={Crosshair} tone="purple"/><StatCard label="Response status" value="94.8%" note="Illustrative triage metric" icon={ShieldAlert} tone="green"/></div>
    <div className="main-grid"><ThreatChart/><section className="panel tactic-panel"><div className="panel-heading"><div><h2>ATT&CK tactic coverage</h2><p>Illustrative mapping overview</p></div><button className="text-btn" onClick={()=>setPage("attack")}>View map <ArrowUpRight size={14}/></button></div><div className="tactic-list">{tactics.slice(0,6).map(([name,val])=><div className="tactic" key={name}><div><span>{name}</span><b>{val}%</b></div><div className="progress"><i style={{width:`${val}%`}}/></div></div>)}</div><div className="tactic-foot">Coverage values are sample data</div></section></div>
    <section className="panel recent-panel"><div className="panel-heading"><div><h2>Recent threat intelligence</h2><p>Latest activity in the demonstration feed</p></div><button className="text-btn" onClick={()=>setPage("intelligence")}>View all <ArrowUpRight size={14}/></button></div><ThreatTable rows={threats.slice(0,4)} compact/></section>
  </div>;
}