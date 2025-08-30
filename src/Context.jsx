import { createContext, useState, useEffect } from "react";

export const ThemeContext = createContext()

export function ThemeProvider({children}) {
    const [theme, setTheme] = useState(() =>{
        return localStorage.getItem('theme') || 'light'
    })

    useEffect(() =>{
        const root = window.document.documentElement;
        const oldTheme = theme === 'dark' ? 'light' : 'dark'

        root.classList.remove(oldTheme)
        root.classList.add(theme)

        localStorage.setItem('theme', theme)
    }, [theme])

    const toggleTheme = () => {
        setTheme(prevTheme => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return (
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}