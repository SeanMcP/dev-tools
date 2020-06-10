const URL = 'https://dog.ceo/api/breed/mix/images/random'
const button = document.querySelector('[data-button]')
const image = document.querySelector('[data-image]')

const ARIA = {
    BUSY: 'aria-busy',
    HIDDEN: 'aria-hidden',
}

async function fetchDogPhoto() {
    button.setAttribute(ARIA.BUSY, true)
    const response = await fetch(URL)
    if (response.ok) {
        const { message: src } = await response.json()
    
        if (image.hasAttribute(ARIA.HIDDEN)) image.removeAttribute(ARIA.HIDDEN)
        if (!image.alt) image.alt = "A good doggo"
        image.src = src
    } else {
        console.error('Uh oh! Something went wrong.')
    }
    button.removeAttribute(ARIA.BUSY)
}

button.addEventListener('click', fetchDogPhoto)
