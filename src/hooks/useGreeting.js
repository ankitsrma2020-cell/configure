export function useGreeting(){const hour=new Date().getHours();return hour<12?'Good morning':hour<18?'Good afternoon':'Good evening';}
