import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
export default function App() { const [page, setPage] = useState('Overview'); const pages = { Overview: Dashboard, Projects, Settings }; const Page = pages[page] || NotFound; return <Layout activePage={page} onNavigate={setPage}><Page onNavigate={setPage} /></Layout>; }
