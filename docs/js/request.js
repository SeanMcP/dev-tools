const URL = 'https://mirror-api--seanmcp.repl.co/'
const output = document.querySelector('[data-output]')
const reset = document.querySelector('[data-reset]')

function resetConsole() {
    output.innerHTML = '📡 <span class="init">Network requests are neat!</span>'
}

reset.addEventListener('click', resetConsole)
window.onload = resetConsole

async function handleClick({ target }) {
    const method = target.getAttribute('data-method')
    let innerHTML
    try {
        const res = await fetch(URL + method.toLowerCase(), { 'Content-Type': 'application/json', method, mode: 'cors' })
        if (res.ok) {
            const { method, origin, url } = await res.json()
            innerHTML = `✅ <b>${method}</b> ${url} from <b>${origin}</b>`
        }
    } catch (e) {
        console.error(e)
    }
    output.innerHTML = innerHTML || "❌ <span class='error'>Uh oh! Something went wrong!</span>"
}

document.querySelectorAll('button[data-method]').forEach(node => {
    node.addEventListener('click', handleClick)
})
