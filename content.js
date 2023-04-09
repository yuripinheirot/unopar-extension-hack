console.log('unopar-extension-hack running...')

document.removeEventListener('visibilitychange', handleVisibilityChange)
window.removeEventListener('blur', handleWindowBlur)
window.removeEventListener('focus', handleWindowFocus)

function handleVisibilityChange() {}
function handleWindowBlur() {}
function handleWindowFocus() {}
document.getElementsByTagName('video')[0].playbackRate = 16
