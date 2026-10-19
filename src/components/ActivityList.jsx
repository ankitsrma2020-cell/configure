import { CheckCircle2, FileText, MessageCircle } from 'lucide-react';
import { activities } from '../data/activities';
const icons={completed:CheckCircle2,comment:MessageCircle,document:FileText};
export default function ActivityList(){return <div className="activity-list">{activities.map((item)=>{const Icon=icons[item.type];return <div className="activity-row" key={item.id}><div className="activity-icon"><Icon size={16}/></div><div className="activity-copy"><strong>{item.title}</strong><span>{item.detail}</span></div><span className="activity-time">{item.time}</span></div>;})}</div>;}
