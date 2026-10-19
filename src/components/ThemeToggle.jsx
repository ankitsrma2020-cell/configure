import { useState } from 'react';
import Toggle from './Toggle';
export default function ThemeToggle(){const [dark,setDark]=useState(false);return <Toggle checked={dark} onChange={setDark} label={dark?'Dark mode':'Light mode'}/>;}
