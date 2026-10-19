import { BarChart3, FolderKanban, Settings, Sparkles } from 'lucide-react';
import { navItems } from '../data/navItems';
const icons = { Overview: BarChart3, Projects: FolderKanban, Settings };
export default function Sidebar({ activePage, onNavigate }) { return <aside className="sidebar"><div className="brand"><img className="brand-mark" src="/src/assets/logo.svg" alt=""/><span>atlas</span></div><nav className="nav">{navItems.map((item)=>{const Icon=icons[item.label]||Sparkles;return <button key={item.label} className={`nav-button ${activePage===item.label?'active':''}`} onClick={()=>onNavigate(item.label)}><Icon size={18}/><span>{item.label}</span></button>;})}</nav><div className="sidebar-bottom">Workspace v1.0</div></aside>; }
