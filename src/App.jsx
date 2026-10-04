import React, { useState } from "react";
import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./pages/Dashboard";
import Intelligence from "./pages/Intelligence";
import IocSearch from "./pages/IocSearch";
import AttackMap from "./pages/AttackMap";
import Awareness from "./pages/Awareness";
import { Menu } from "lucide-react";

export default function App() {
  const [page,setPage]=useState("dashboard");
  const [menuOpen,setMenuOpen]=useState(false);
  const pages={dashboard:<Dashboard setPage={setPage}/>,intelligence:<Intelligence/>,ioc:<IocSearch/>,attack:<AttackMap/>,awareness:<Awareness/>};
  return <div className="app-shell"><div className={menuOpen?"sidebar-wrap open":"sidebar-wrap"}><Sidebar page={page} setPage={p=>{setPage(p);setMenuOpen(false)}}/></div>{menuOpen&&<button className="scrim" aria-label="Close menu" onClick={()=>setMenuOpen(false)}/>}<main className="main-area"><div className="mobile-menu"><button className="icon-btn" onClick={()=>setMenuOpen(!menuOpen)}><Menu/></button><img src="/logo.svg" alt="Vigil SOC"/></div><Header page={page}/>{pages[page]}</main></div>;
}