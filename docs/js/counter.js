const count = document.querySelector('input[name="count"]')
const decrementButton = document.querySelector('[data-decrement]')
const incrementButton = document.querySelector('[data-increment]')

function getCountValue() {
    const value = parseInt(count.value)
    return isNaN(value) ? 0 : value
}

function updateCount(value) {
    count.value = value
}

decrementButton.addEventListener('click', () => {
    const next = getCountValue() - 1
    updateCount(next)
})

incrementButton.addEventListener('click', () => {
    const next = getCountValue() + 1
    updateCount(next)
})
