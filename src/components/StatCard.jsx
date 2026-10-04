import React from "react";
export default function StatCard({ label, value, note, icon: Icon, tone = "blue" }) {
  return <article className="stat-card"><div className="stat-top"><span>{label}</span><div className={`stat-icon ${tone}`}><Icon size={18}/></div></div><strong>{value}</strong><div className="stat-note">{note}</div></article>;
}