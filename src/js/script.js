import { test } from './module/language.js'

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
    infoTitleHolder = document.getElementById('info-title-holder'),
    contactTitleHolder = document.getElementById('contact-title-holder'),
    donationTitleHolder = document.getElementById('donation-title-holder'),
    languageSelector = document.getElementById('language-select'),
    publicKeyLinkHolder = document.getElementById('public-key-link-holder')

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
    infoTitleHolder.innerText = languageObj.info_title[languageIndex]
    contactTitleHolder.innerText = languageObj.contact_title[languageIndex]
    donationTitleHolder.innerText = languageObj.donation_title[languageIndex]
    publicKeyLinkHolder.innerText = languageObj.public_key_link[languageIndex]
  }

  test()
})
