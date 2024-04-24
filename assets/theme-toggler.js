const storageKey = 'color-preference'

const themeHandler = () => {
  theme.value = theme.value === 'light'
    ? 'dark'
    : 'light'

  setThemePreference()
}

const getSelectedTheme = () => {
  if (localStorage.getItem(storageKey))
    return localStorage.getItem(storageKey)
  else
    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light'
}

const setThemePreference = () => {
  localStorage.setItem(storageKey, theme.value)
  loadThemePreference()
}

const loadThemePreference = () => {
  document.firstElementChild
    .setAttribute('data-theme', theme.value)

  document
    .querySelector('#theme-toggle')
    ?.setAttribute('aria-label', theme.value)
}

const theme = {
  value: getSelectedTheme(),
}

loadThemePreference()

window.onload = () => {
  loadThemePreference()

  document
    .querySelector('#theme-toggle')
    .addEventListener('click', themeHandler)
}

window
  .matchMedia('(prefers-color-scheme: dark)')
  .addEventListener('change', ({matches:isDark}) => {
    theme.value = isDark ? 'dark' : 'light'
    setThemePreference()
  })