'use client'
    
    import { useEffect, useState } from 'react'
    import { Moon, Sun } from 'lucide-react'

    export default function ThemeToggle() {
      const [darkMode, setDarkMode] = useState(false)

      useEffect(() => {
        const isDark = document.documentElement.classList.contains('dark')
        setDarkMode(isDark)
      }, [])

      const toggleTheme = () => {
        document.documentElement.classList.toggle('dark')
        setDarkMode(!darkMode)
        localStorage.setItem('theme', darkMode ? 'light' : 'dark')
      }

      return (
        <button 
          onClick={toggleTheme}
          className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700"
        >
          {darkMode ? (
            <Sun className="h-6 w-6" />
          ) : (
            <Moon className="h-6 w-6" />
          )}
        </button>
      )
    }
