import React from "react";
import SeverityBadge from "./SeverityBadge";
export default function ThreatTable({ rows, compact = false }) {
  return <div className="table-scroll"><table><thead><tr><th>THREAT</th><th>TYPE</th><th>SEVERITY</th><th>LAST SEEN</th>{!compact && <th>STATUS</th>}</tr></thead><tbody>{rows.map(row=><tr key={row.id}><td><div className="threat-name">{row.name}<small>{row.id} · {row.source}</small></div></td><td>{row.type}</td><td><SeverityBadge value={row.severity}/></td><td className="muted">{row.time}</td>{!compact && <td><span className="status">{row.status}</span></td>}</tr>)}</tbody></table></div>;
}