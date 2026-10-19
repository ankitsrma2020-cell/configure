import { useState } from 'react';
import Button from '../components/Button';
import StatCard from '../components/StatCard';
import ActivityList from '../components/ActivityList';
import ProgressCard from '../components/ProgressCard';
import Modal from '../components/Modal';
import { stats } from '../data/stats';
export default function Dashboard(){const [open,setOpen]=useState(false);return <><div className="page-heading"><div><h1>Good morning, Alex</h1><p className="muted">Here’s what’s happening across your workspace.</p></div><Button onClick={()=>setOpen(true)}>+ New project</Button></div><div className="stats-grid">{stats.map((stat)=><StatCard key={stat.label}{...stat}/>)}</div><div className="dashboard-grid"><article className="card"><div className="card-heading"><h2>Recent activity</h2><button className="text-link">See everything</button></div><ActivityList/></article><ProgressCard/></div><Modal open={open} title="Create a project" onClose={()=>setOpen(false)}><p className="muted">Project creation is ready for your API integration.</p></Modal></>;}
