import React, { useState, useEffect } from "react"
import ThemeContext from "../context/Themecontext"

const ThemeProvider = props => {
  const [isdark, setisdark] = useState(true)

  useEffect(() => {
   
  }, [isdark])
  
  const toggleDark = () => {
      {isdark === false ? setisdark(true) : setisdark(false) }
  }

  return (
    <ThemeContext.Provider value={{ isdark, toggleDark }}>
      {props.children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
