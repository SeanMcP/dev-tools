const count = document.querySelector('input[name="count"]')
const decrementButton = document.querySelector('[data-decrement]')
const incrementButton = document.querySelector('[data-increment]')

function getCountValue() {
    const { value } = count
    const valueAsNumber = parseInt(value)
    return valueAsNumber
}

function handleDecrement() {
    const next = getCountValue() - 1
    updateCount(next)
}

function handleIncrement() {
    const next = getCountValue() + 1
    updateCount(next)
}

function updateCount(value) {
    count.value = value
}

decrementButton.addEventListener('click', handleDecrement)
incrementButton.addEventListener('click', handleIncrement)
