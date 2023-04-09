console.log('unopar-extension-hack running...')

document.removeEventListener('visibilitychange', handleVisibilityChange)
window.removeEventListener('blur', handleWindowBlur)
window.removeEventListener('focus', handleWindowFocus)

window.removeEventListener('keydown', handleKeyDown)
window.removeEventListener('keypress', handleKeyPress)
window.removeEventListener('keyup', handleKeyUp)

function handleVisibilityChange() {}
function handleWindowBlur() {}
function handleWindowFocus() {}

function handleKeyDown() {}
function handleKeyPress() {}
function handleKeyUp() {}

document.getElementsByTagName('video')[0].playbackRate = 16
