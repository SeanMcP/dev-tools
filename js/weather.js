const forecastList = document.querySelector('[data-forecast]')

const FORECAST_URL = 'FORECAST_URL'
const EmojiMap = {
    "Chance Rain Showers": "🌦",
    "Clear": "☀️",
    "Cloudy": "☁️",
    "Sunny": "☀️",
    "Mostly Sunny": "☀️",
    "Mostly Clear": "🌤",
    "Mostly Cloudy": "🌥",
    "Mostly Cloudy then Slight Chance Rain Showers": "🌧",
    "Partly Cloudy": "⛅️",
    "Slight Chance Rain Showers": "🌧",
    "Slight Chance Showers And Thunderstorms": "⛈",
    "Chance Showers And Thunderstorms": "⛈",
    "Showers And Thunderstorms Likely": "⛈",
    "Chance Showers And Thunderstorms then Slight Chance Showers And Thunderstorms": "⛈"
}

function getCoordinates() {
    return new Promise(resolve => {
        navigator.geolocation.getCurrentPosition(position => {
            resolve(position.coords)
        })
    })
}

window.addEventListener('load', async () => {
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
        <span class="emoji" role="img">${EmojiMap[period.shortForecast] || '🤗'}</span>
        <span class="period">${period.name}</span>
        <span class="details">${period.detailedForecast}</span>
        `
        forecastList.appendChild(li)
    }) 
})
