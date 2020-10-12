/**
 * Change language
 *
 * @param {string} countryCode - self | vi, en, ....
 * @param {string} page - | index, about, ...
 */

// contains language for all components
let languagePackJson = null

async function changeLanguage(countryCode, page) {
  const fileUrl = `lang/${countryCode}.${page}.json`
  if (languagePackJson === null) {
    const response = await fetch(fileUrl)
    if (response.ok) {
      const json = await response.json()
      languagePackJson = json
    }

    if (!response.ok) {
      console.error(`Cannot load data from ${fileUrl}.`)
      console.log('Make sure your url is correctly.')
      return
    }
  }

  for (const key in languagePackJson) {
    const element = document.getElementById(key)
    if (element !== null) {
      element.innerText = languagePackJson[key]
    }
  }
}

export { changeLanguage }
