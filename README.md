# 🛡️ Vigil SOC — Cybersecurity Awareness & Threat Intelligence

A responsive, educational Security Operations Center (SOC) dashboard starter project built with React and Vite.

🌐 **Live demo:** https://cybersecurityawarenessthreatintelligence.lovable.app  
👨‍💻 **Author:** Karanbir Singh Bajaj  
🐙 **GitHub:** https://github.com/karanbajaj2057

## Features

- SOC overview with KPI cards and threat activity chart
- Threat intelligence feed with severity labels
- Searchable indicators of compromise (IOC) table
- MITRE ATT&CK-inspired tactic coverage
- Cybersecurity awareness learning cards
- Responsive dark dashboard layout
- Synthetic demo data for safe educational use

## Technology

- React
- Vite
- Lucide React icons
- CSS

## Run locally

Requirements: Node.js 18+ and npm.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (typically `http://localhost:5173`).

Create a production build:

```bash
npm run build
npm run preview
```

## Project structure

```text
Vigil-SOC-Threat-Intelligence/
├── public/
│   ├── favicon.svg
│   └── logo.svg
├── src/
│   ├── assets/
│   │   └── shield.svg
│   ├── components/
│   │   ├── Header.jsx
│   │   ├── Sidebar.jsx
│   │   ├── StatCard.jsx
│   │   ├── ThreatChart.jsx
│   │   ├── ThreatTable.jsx
│   │   └── SeverityBadge.jsx
│   ├── data/
│   │   └── demoData.js
│   ├── pages/
│   │   ├── Dashboard.jsx
│   │   ├── Intelligence.jsx
│   │   ├── IocSearch.jsx
│   │   ├── AttackMap.jsx
│   │   └── Awareness.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── styles.css
├── .env.example
├── .gitignore
├── index.html
├── LICENSE
├── package.json
└── vite.config.js
```

## Demo data and safety

All indicators, alerts, metrics, and activity shown in this starter are **synthetic demonstration data**. They are not verified live threat intelligence and must not be used to make real-world security decisions. No scanning, exploitation, or network intrusion functionality is included.

## Configuration

Copy `.env.example` to `.env` if you need local configuration. Do not commit `.env` or place secrets in frontend environment variables. Variables prefixed with `VITE_` are exposed to the browser.

## Screenshots

Add genuine screenshots from your running app to a `screenshots/` folder and embed them here, for example:

```md
![Vigil SOC dashboard](screenshots/dashboard.png)
```

## License

Distributed under the MIT License. See [LICENSE](LICENSE).
