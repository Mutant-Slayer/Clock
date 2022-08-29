dateTime = () => {
    let date = new Date();
    document.getElementById('hours').innerHTML = date.getHours();
    document.getElementById('minutes').innerHTML = date.getMinutes();
    document.getElementById('seconds').innerHTML = date.getSeconds();
    document.getElementById('amorpm').innerHTML = date.getHours() >= 12 ? "PM" : "AM";
}

setInterval(dateTime, 1000);

themeChanger = () => {
    document.body.classList.toggle("dark-mode");
}