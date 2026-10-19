export default function Toggle({checked,onChange,label}){return <label><input type="checkbox" checked={checked} onChange={(event)=>onChange(event.target.checked)}/> {label}</label>;}
