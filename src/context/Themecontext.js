import React from 'react';

const defaultState = {
    dark: false,
    toggle: () => {},
}

const ThemeContext = React.createContext(defaultState);

export default ThemeContext;