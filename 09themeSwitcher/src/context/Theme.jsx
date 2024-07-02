import {useState, useContext, createContext} from 'react';

export const ThemContext = createContext({
    themMode: 'light',
    lightTheme: () => {},
    darkTheme: () => {},
})

export const ThemeProvide = ThemContext.Provider

export default function useTheme() {
    return useContext(ThemContext)
}