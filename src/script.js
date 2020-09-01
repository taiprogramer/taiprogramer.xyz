const setValueForDefaultRoute = function () {
  const telegram_link = 'https://t.me/taiprogramer'
  const email = 'taiprogramer@protonmail.com'
  const publicKeyLink = 'public-key.asc'
  const ageHolder = document.getElementById('age-holder')
  const telegramLinkHolder = document.getElementById('telegram-link-holder')
  const emailLinkHolder = document.getElementById('email-link-holder')
  const publicKeyLinkHolder = document.getElementById('public-key-link-holder')

  ageHolder.innerText = new Date().getFullYear() - 2000

  telegramLinkHolder.innerText = telegram_link.replace('https://', '')
  telegramLinkHolder.setAttribute('href', telegram_link)
  telegramLinkHolder.setAttribute('target', '_blank')

  emailLinkHolder.innerText = email
  emailLinkHolder.setAttribute('href', 'mailto: ' + email)

  publicKeyLinkHolder.innerText = publicKeyLink.replace('-', '_')
  publicKeyLinkHolder.setAttribute('href', publicKeyLink)
  publicKeyLinkHolder.setAttribute('target', '_blank')
}

document.addEventListener('DOMContentLoaded', () => {
  setValueForDefaultRoute()
})
