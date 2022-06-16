function getCurrentTime() {
    const date = new Date()
    document.getElementById("time").textContent = date.toLocaleTimeString("en-gb", {timeStyle: "short"})
}

setInterval(getCurrentTime, 1000)