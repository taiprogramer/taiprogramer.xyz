async function test() {
  const response = await fetch('lang/index.html.json')
  if (response.ok) {
    const json = await response.json()
    for (const key in json) {
      const element = document.getElementById(key)
      if (element === null) {
        continue
      }
      element.innerText = json[key][1]
    }
  }
}

export { test }
