const URL = 'https://anything-goes-api--seanmcp.repl.co/'
const console = document.querySelector('[data-console]')
const reset = document.querySelector('[data-reset]')

function resetConsole() {
    console.innerHTML = '📡 <span class="init">Network requests are neat!</span>'
}

reset.addEventListener('click', resetConsole)
window.onload = resetConsole

async function handleClick({ target }) {
    const res = await fetch(URL, { method: target.getAttribute('data-method'), mode: 'cors' })
    let innerHTML
    if (res.ok) {
        const { method, origin } = await res.json()
        innerHTML = `✅ <b>${method}</b> received from <b>${origin}</b>`
    }
    console.innerHTML = innerHTML || "❌ <span class='error'>Uh oh! Something went wrong!</span>"
}

document.querySelectorAll('button[data-method]').forEach(node => {
    node.addEventListener('click', handleClick)
})
