const button = document.querySelector('[data-button]')
const form = document.querySelector('[data-form]')
const image = document.querySelector('[data-image]')

const urlByBreedMap = {
    mix: 'https://dog.ceo/api/breed/mix/images/random',
    random: 'https://dog.ceo/api/breeds/image/random',
}

const ARIA = {
    BUSY: 'aria-busy',
    HIDDEN: 'aria-hidden',
}

async function fetchDogPhoto(event) {
    event.preventDefault()
    button.setAttribute(ARIA.BUSY, true)

    const formData = new FormData(event.target)
    const breed = formData.get('breed')

    const response = await fetch(urlByBreedMap[breed])

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

form.addEventListener('submit', fetchDogPhoto)
