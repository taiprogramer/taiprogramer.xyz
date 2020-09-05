const setValueForDefaultRoute = function () {
  const ageHolder = document.getElementById('age-holder')
  ageHolder.innerText = new Date().getFullYear() - 2000
}

document.addEventListener('DOMContentLoaded', () => {
  setValueForDefaultRoute()
})
