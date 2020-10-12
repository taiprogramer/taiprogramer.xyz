import { changeLanguage } from './module/language.js'

document.addEventListener('DOMContentLoaded', async () => {
  const ageHolder = document.getElementById('age-holder'),
    languageSelector = document.getElementById('language-select')

  ageHolder.innerText = new Date().getFullYear() - 2000

  languageSelector.onchange = () => {
    const countryCode = languageSelector.value
    changeLanguage(countryCode, 'index')
  }
})
