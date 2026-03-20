function timing(){;
const now = new Date();
const IndianTime = now.toLocaleTimeString()
timer.innerHTML = IndianTime;
}

// styling
// timer.style.backgroundColor="tomato"
timer.style.fontSize = '200px';
timer.style.display = 'flex';
timer.style.height = "954px"
timer.style.justifyContent = 'center';
timer.style.alignItems = 'center';

setInterval(timing,1000);
