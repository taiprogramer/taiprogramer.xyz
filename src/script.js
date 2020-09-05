document.addEventListener('DOMContentLoaded', async () => {
  const fullNameHolder = document.getElementById('fullname-holder'),
    ageTailHolder = document.getElementById('age-tail-holder'),
    girlFriendStatusHolder = document.getElementById(
      'girlfriend-status-holder',
    ),
    applyForGirlFriendPositionHolder = document.getElementById(
      'apply-for-girlfriend-position',
    ),
    ageHolder = document.getElementById('age-holder'),
    languageSelector = document.getElementById('language-select')

  ageHolder.innerText = new Date().getFullYear() - 2000
  // fetch language pack
  const languageObj = await fetch('lang/index.html.json').then((r) => r.json())
  let languageIndex = 0 // 0 is English, 1 is Vietnamese

  languageSelector.onchange = () => {
    languageIndex = languageSelector.value
    changeComponentLanguage()
  }

  function changeComponentLanguage() {
    document.title = languageObj.title[languageIndex]
    fullNameHolder.innerText = languageObj.full_name[languageIndex]
    ageTailHolder.innerText = languageObj.age_tail[languageIndex]
    girlFriendStatusHolder.innerText =
      languageObj.girlfriend_status[languageIndex]
    applyForGirlFriendPositionHolder.innerText =
      languageObj.apply_for_girlfriend_position[languageIndex]
  }
})
