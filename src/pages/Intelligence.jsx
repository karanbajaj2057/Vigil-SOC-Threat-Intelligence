import React, { useState } from "react";
import { Filter, RadioTower } from "lucide-react";
import ThreatTable from "../components/ThreatTable";
import { threats } from "../data/demoData";
export default function Intelligence() {
 const [filter,setFilter]=useState("All");
 const rows=filter==="All"?threats:threats.filter(t=>t.severity===filter);
 return <div className="page-content"><div className="page-intro"><div><span className="eyebrow">THREAT MONITORING</span><h2>Threat intelligence feed</h2><p>Review sample alerts and prioritize analyst investigation.</p></div><span className="feed-status"><i/> Demo feed</span></div><div className="filter-row"><span><Filter size={15}/> Filter severity</span>{["All","Critical","High","Medium","Low"].map(f=><button className={`filter-chip ${filter===f?"selected":""}`} onClick={()=>setFilter(f)} key={f}>{f}</button>)}</div><section className="panel"><div className="panel-heading"><div><h2><RadioTower size={17}/> Intelligence events</h2><p>{rows.length} synthetic records shown</p></div></div><ThreatTable rows={rows}/></section></div>;
}