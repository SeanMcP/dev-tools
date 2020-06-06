const forecastList = document.querySelector('[data-forecast]')

const FORECAST_URL = 'FORECAST_URL'
const EmojiMap = {
    "Chance Rain Showers": "🌦",
    "Cloudy": "☁️",
    "Sunny": "☀️",
    "Mostly Sunny": "☀️",
    "Mostly Clear": "🌤",
    "Mostly Cloudy": "🌥",
    "Partly Cloudy": "⛅️",
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
        console.log(period.shortForecast)
        forecastList.appendChild(li)
    }) 
})
// {
//     detailedForecast: "Sunny, with a high near 81. Northwest wind around 9 mph."
//     endTime: "2020-06-06T18:00:00-04:00"
//     icon: "https://api.weather.gov/icons/land/day/few?size=medium"
//     isDaytime: true
//     name: "This Afternoon"
//     number: 1
//     shortForecast: "Sunny"
//     startTime: "2020-06-06T15:00:00-04:00"
//     temperature: 81
//     temperatureTrend: null
//     temperatureUnit: "F"
//     windDirection: "NW"
//     windSpeed: "9 mph"
// }