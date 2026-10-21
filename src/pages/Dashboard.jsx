import { useState } from 'react';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
import ActivityList from '../components/ActivityList';
import ProgressCard from '../components/ProgressCard';
import Modal from '../components/Modal';
import { stats } from '../data/stats';

export default function Dashboard({ onCreateProject }) {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [error, setError] = useState('');
  function submit(event) {
    event.preventDefault();
    const projectName = name.trim();
    if (!projectName) return setError('Enter a project name to continue.');
    onCreateProject(projectName);
    setName(''); setError(''); setOpen(false);
  }
  return <>
    <div className="page-heading"><div><h1>Good morning, Alex</h1><p className="muted">Here’s what’s happening across your workspace.</p></div><Button onClick={() => setOpen(true)}>+ New project</Button></div>
    <div className="stats-grid">{stats.map((stat) => <StatCard key={stat.label} {...stat} />)}</div>
    <div className="dashboard-grid"><article className="card"><div className="card-heading"><h2>Recent activity</h2><button className="text-link">See everything</button></div><ActivityList /></article><ProgressCard /></div>
    <Modal open={open} title="Create a project" onClose={() => setOpen(false)}><form className="project-form" onSubmit={submit}><label htmlFor="project-name">Project name</label><input id="project-name" value={name} onChange={(event) => { setName(event.target.value); setError(''); }} placeholder="e.g. Website redesign" autoFocus />{error && <p className="form-error">{error}</p>}<div className="modal-actions"><button className="secondary-button" type="button" onClick={() => setOpen(false)}>Cancel</button><Button type="submit">Create project</Button></div></form></Modal>
  </>;
}

