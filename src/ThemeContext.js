import React from 'react'

// Create a new context object
// Argument contains default values to use - useful for testing
const ThemeContext = React.createContext({
    theme: 'dark',
});

export default ThemeContext
