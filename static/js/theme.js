;(function () {
    'use strict'

    const THEME_KEY = 'cv-theme'
    const THEME_LIGHT = 'light'
    const THEME_DARK = 'dark'

    // Get theme from localStorage or default to dark
    function getStoredTheme() {
        return localStorage.getItem(THEME_KEY) || THEME_DARK
    }

    // Set theme in localStorage
    function setStoredTheme(theme) {
        localStorage.setItem(THEME_KEY, theme)
    }

    // Apply theme to document
    function applyTheme(theme) {
        if (theme === THEME_DARK) {
            document.documentElement.setAttribute('data-theme', 'dark')
        } else {
            document.documentElement.removeAttribute('data-theme')
        }
    }

    // Initialize theme on page load (before DOM ready to prevent flash)
    const currentTheme = getStoredTheme()
    applyTheme(currentTheme)

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', function () {
        const themeToggle = document.getElementById('theme-toggle')

        if (!themeToggle) {
            console.warn('Theme toggle button not found')
            return
        }

        // Toggle theme on button click
        themeToggle.addEventListener('click', function () {
            const currentTheme = getStoredTheme()
            const newTheme = currentTheme === THEME_LIGHT ? THEME_DARK : THEME_LIGHT

            setStoredTheme(newTheme)
            applyTheme(newTheme)

            // Add a subtle animation feedback
            themeToggle.style.transform = 'scale(0.95)'
            setTimeout(() => {
                themeToggle.style.transform = 'scale(1)'
            }, 100)
        })

        // Keyboard accessibility: Space and Enter keys
        themeToggle.addEventListener('keydown', function (e) {
            if (e.key === ' ' || e.key === 'Enter') {
                e.preventDefault()
                themeToggle.click()
            }
        })
    })

    // Listen for system theme changes (optional)
    if (window.matchMedia) {
        const darkModeQuery = window.matchMedia('(prefers-color-scheme: dark)')

        darkModeQuery.addEventListener('change', function (e) {
            // Only auto-switch if user hasn't manually set a preference
            const storedTheme = localStorage.getItem(THEME_KEY)
            if (!storedTheme) {
                const newTheme = e.matches ? THEME_DARK : THEME_LIGHT
                applyTheme(newTheme)
            }
        })
    }
})()
