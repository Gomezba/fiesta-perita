const eventDate = new Date('2026-08-01T14:00:00').getTime()

const elements = {
	days: document.getElementById('days'),
	hours: document.getElementById('hours'),
	minutes: document.getElementById('minutes'),
	seconds: document.getElementById('seconds'),
}

function updateCountdown() {
	const distance = eventDate - Date.now()

	if (distance <= 0) {
		Object.values(elements).forEach((el) => (el.textContent = '00'))
		clearInterval(interval)
		return
	}

	const time = {
		days: Math.floor(distance / 86400000),
		hours: Math.floor((distance % 86400000) / 3600000),
		minutes: Math.floor((distance % 3600000) / 60000),
		seconds: Math.floor((distance % 60000) / 1000),
	}

	Object.keys(time).forEach((key) => {
		elements[key].textContent = String(time[key]).padStart(2, '0')
	})
}

updateCountdown()
const interval = setInterval(updateCountdown, 1000)
