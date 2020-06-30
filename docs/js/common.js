console.info('Made by SeanMcP – https://seanmcp.com')

; (function getPlatformAndBrowser() {
    const { userAgent } = navigator

    let platform = localStorage.getItem('platform')
    let browser = 'chrome', os = 'linux'

    if (!platform) {
        // Get
        if (userAgent.includes('Macintosh')) {
            os = 'mac'
        } else if (userAgent.includes('Windows')) {
            os = 'win'
        }

        if (userAgent.includes('Firefox/')) {
            browser = 'firefox'
        } else if (userAgent.includes('Edge/')) {
            browser = 'edge (old)'
        } else if (userAgent.includes('Edg/')) {
            browser = 'edge'
        } else if (userAgent.includes('Safari/')) {
            browser = 'safari'
        }

        platform = {
            browser,
            os
        }

        localStorage.setItem('platform', JSON.stringify(platform))
    } else {
        // Read
        platform = JSON.parse(platform)
        browser = platform.browser
        os = platform.os
    }

    // Set
    const html = document.children[0]
    window.os = os
    html.dataset.os = os
    window.browser = browser
    html.dataset.browser = browser
})()
