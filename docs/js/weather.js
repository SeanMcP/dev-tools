const forecastList = document.querySelector('[data-forecast]')

const FORECAST_URL = 'FORECAST_URL'

function getCoordinates() {
    return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve(position.coords)
        })
    })
}

async function requestForecast() {
    let forecastUrl = JSON.parse(localStorage.getItem(FORECAST_URL))
    if (!forecastUrl) {
        const { latitude, longitude } = await getCoordinates()
        const { properties: { forecast } } = await fetch(`https://api.weather.gov/points/${latitude},${longitude}`).then(res => res.json())
        forecastUrl = forecast
        localStorage.setItem(FORECAST_URL, JSON.stringify(forecast))
    }
    const { properties: { periods } } = await fetch(forecastUrl).then(res => res.json())
    
    periods.slice(0, 6).forEach(period => {
        const li = document.createElement('li')
        li.innerHTML = `
        <img class="icon" src="${period.icon}" alt="${period.shortForecast}" />
        <span class="period">${period.name}</span>
        <span class="details">${period.detailedForecast}</span>
        `
        forecastList.appendChild(li)
    }) 
}

window.addEventListener('load', requestForecast)
