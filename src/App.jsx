import { useState } from 'react';
import Layout from './components/Layout';
import Dashboard from './pages/Dashboard';
import Projects from './pages/Projects';
import Settings from './pages/Settings';
import NotFound from './pages/NotFound';
import { useLocalStorage } from './hooks/useLocalStorage';
import { projects as starterProjects } from './data/projects';

export default function App() {
  const [page, setPage] = useState('Overview');
  const [projects, setProjects] = useLocalStorage('atlas-projects', starterProjects);
  const pages = { Overview: Dashboard, Projects, Settings };
  const Page = pages[page] || NotFound;
  function createProject(name) {
    const project = { id: `${name.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${Date.now()}`, name, progress: 0, color: '#635bff' };
    setProjects((current) => [project, ...current]);
    setPage('Projects');
  }
  return <Layout activePage={page} onNavigate={setPage}><Page onNavigate={setPage} projects={projects} onCreateProject={createProject} /></Layout>;
}

