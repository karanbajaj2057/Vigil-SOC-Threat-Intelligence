export const threats = [
  { id: "THR-2048", name: "Credential phishing campaign", type: "Phishing", source: "Demo Feed Alpha", severity: "Critical", time: "2 min ago", status: "Investigating" },
  { id: "THR-2047", name: "Suspicious outbound beacon", type: "C2", source: "Demo Feed Beta", severity: "High", time: "18 min ago", status: "Triaged" },
  { id: "THR-2046", name: "Known malicious file hash", type: "Malware", source: "Lab Dataset", severity: "High", time: "42 min ago", status: "Contained" },
  { id: "THR-2045", name: "Potential account enumeration", type: "Identity", source: "Demo Feed Alpha", severity: "Medium", time: "1 hr ago", status: "Review" },
  { id: "THR-2044", name: "Unusual DNS query pattern", type: "Network", source: "Lab Dataset", severity: "Low", time: "3 hr ago", status: "Closed" }
];

export const indicators = [
  { indicator: "198.51.100.24", kind: "IPv4", threat: "Suspicious host", severity: "High", confidence: "Demo" },
  { indicator: "login-example.invalid", kind: "Domain", threat: "Phishing domain", severity: "Critical", confidence: "Demo" },
  { indicator: "d41d8cd98f00b204e9800998ecf8427e", kind: "MD5 hash", threat: "Sample hash", severity: "Medium", confidence: "Demo" },
  { indicator: "203.0.113.17", kind: "IPv4", threat: "Scanning simulation", severity: "Low", confidence: "Demo" }
];

export const tactics = [
  ["Initial Access", 78], ["Execution", 62], ["Persistence", 45],
  ["Privilege Escalation", 39], ["Defense Evasion", 54], ["Credential Access", 71],
  ["Discovery", 66], ["Command and Control", 48]
];

export const activity = [
  { day: "Mon", value: 28 }, { day: "Tue", value: 44 }, { day: "Wed", value: 35 },
  { day: "Thu", value: 62 }, { day: "Fri", value: 48 }, { day: "Sat", value: 73 },
  { day: "Sun", value: 56 }
];