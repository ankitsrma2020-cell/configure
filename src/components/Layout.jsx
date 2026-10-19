import Header from './Header';
import Sidebar from './Sidebar';
export default function Layout({ activePage, onNavigate, children }) { return <div className="app-shell"><Sidebar activePage={activePage} onNavigate={onNavigate}/><main className="main"><Header/><div className="content">{children}</div></main></div>; }
