import { ReactNode, createContext, useContext, useState } from "react";


type ThemeProviderProps = { children: ReactNode }

type ThemeContext = {
    theme: string,
    toggleTheme: () => void
}

const ThemeContext = createContext({} as ThemeContext)

export function useThemeContext() {
    return useContext(ThemeContext)
}

export function ThemeProvider({ children }: ThemeProviderProps) {
    const [theme, setTheme] = useState('light')

    function toggleTheme() {
        setTheme(previousTheme => previousTheme === 'light'?  'dark' : 'light')
    }

    return (
        <ThemeContext.Provider value={{theme, toggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}