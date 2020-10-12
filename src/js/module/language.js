/**
 * Change language
 *
 * @param {string} countryCode - self | vi, en, ....
 * @param {string} page - | index, about, ...
 */

// contains language for all components

async function changeLanguage(countryCode, page) {
  const fileUrl = `lang/${countryCode}.${page}.json`
  const response = await fetch(fileUrl)
  if (response.ok) {
    const json = await response.json()
    for (const key in json) {
      const element = document.getElementById(key)
      if (element !== null) {
        element.innerText = json[key]
      }
    }
    return
  }

  console.error(`Cannot load data from ${fileUrl}.`)
  console.log('Make sure your url is correctly.')
}

export { changeLanguage }
