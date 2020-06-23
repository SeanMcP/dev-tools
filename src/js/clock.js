let convention = 'twenty-four'
const display = document.querySelector('[data-display]')
const radioButtons = document.querySelectorAll('input[name="convention"]')

radioButtons.forEach(node => node.addEventListener('click', (e) => {
    convention = e.target.value
    renderClock()
}))

function renderClock() {
    const time = new Date().toLocaleTimeString(undefined, { hour12: convention === 'twelve' })
    display.textContent = time
}

renderClock()

setInterval(renderClock, 1000)