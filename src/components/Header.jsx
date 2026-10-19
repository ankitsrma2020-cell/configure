import { Bell } from 'lucide-react';
import { useGreeting } from '../hooks/useGreeting';
import avatar from '../assets/avatar.svg';
export default function Header() { return <header className="topbar"><span className="topbar-title">{useGreeting()}, Alex</span><div className="topbar-actions"><button className="icon-button" aria-label="Notifications"><Bell size={19}/></button><img className="avatar" src={avatar} alt="Alex Morgan"/></div></header>; }
