const BANNER_CLOSED_KEY = 'banner_bottom_closed'
const BANNER_CLOSED_VALUE = '1'

export const element = document.getElementById('banner-bottom')!
const closeBtn = document.getElementById('banner-bottom-button-close')!

export const hide = () => {
  element.classList.remove('banner-bottom_visible')
}

let onCloseListeners: Array<() => void> = []

export const addOnCloseListener = (onClose: () => void) => {
  onCloseListeners.push(onClose)
}

export const close = () => {
  hide()
  onCloseListeners.forEach((listener) => listener())
  localStorage.setItem(BANNER_CLOSED_KEY, BANNER_CLOSED_VALUE)
  closeBtn.removeEventListener('click', close)
  onCloseListeners = []
}

export const show = () => {
  element.classList.add('banner-bottom_visible')
}

export const isClosed = () => localStorage.getItem(BANNER_CLOSED_KEY) === BANNER_CLOSED_VALUE

closeBtn.addEventListener('click', close)
