import React from "react";
export default function SeverityBadge({ value }) {
  return <span className={`severity severity-${value.toLowerCase()}`}>{value}</span>;
}