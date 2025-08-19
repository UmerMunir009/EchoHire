import { Moon, Sun } from "lucide-react"
import { useTheme } from "../context/ThemeContext"
import { useState } from "react"

const ThemeToggle = () => {
  const {setTheme } = useTheme()
  const [selectedTheme,setSeletedTheme]=useState('')

  const themes = [
    { value: "light", label: "Light", icon: Sun },
    { value: "dark", label: "Dark", icon: Moon },
  ]

  return (
    <div className="flex items-center gap-4 p-1 bg-muted rounded-lg">
      {themes.map(({ value, label, icon: Icon }) => (
        <button
          key={value}
          onClick={() =>{
            setSeletedTheme(value)
             setTheme(value)
          }}
          className={` flex justify-center items-center gap-1  cursor-pointer border-border border-1 rounded-full px-2 py-1 ${selectedTheme===value?'bg-amber-600':''}`}
          
        >
          <Icon size={16} />
          <span className="hidden sm:inline">{label}</span>
        </button>
      ))}
    </div>
  )
}

export default ThemeToggle
