import { projects } from '../data/projects';
export default function ProjectDetails({projectId}){const project=projects.find((item)=>item.id===projectId);return <article className="card"><h1>{project?.name||'Project'}</h1><p className="muted">Project details and milestones will appear here.</p></article>;}
