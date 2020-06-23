const height = document.querySelector('[name="height"]')
const imageContainer = document.querySelector('[data-image-container]')
const width = document.querySelector('[name="width"]')

function updateImageSrc() {
    imageContainer.style.backgroundImage = `url(https://placebear.com/${width.value}/${height.value})`
}

[height, width].forEach(input => {
    input.addEventListener('input', updateImageSrc)
})

window.onload = updateImageSrc