const clockContainer = document.querySelector(".js-clock"),
    clockTitle = clockContainer.querySelector(".js-title");

const timeDivider = document.querySelector(".am-pm"),
    amTime = timeDivider.querySelector(".amTime"),
    pmTime = timeDivider.querySelector(".pmTime");

function getTime() {
    const date = new Date();
    const seconds = date.getSeconds();
    const minutes = date.getMinutes();
    const hours = date.getHours();
    // clockTitle.innerText = `${
    //     hours < 10 ? `0${hours}` : hours
    // }:${
    //     minutes < 10 ? `0${minutes}` : minutes
    // }:${
    //     seconds < 10 ? `0${seconds}` : seconds
    // }`;

    clockTitle.innerText = `${
        hours < 12 ? 
        (hours === 0 ? `12` : (hours < 10 ? `0${hours}` : hours)) : 
        (hours === 12 ? `12` : (hours < 22 ? `0${hours % 12}` : `${hours % 12}`))
    }:${
        minutes < 10 ? `0${minutes}` : minutes
    }`;

    if(hours < 13) {
        amTime.innerText = "AM";
        pmTime.innerText = "";
    } else {
        amTime.innerText = "";
        pmTime.innerText = "PM";
    }
}

function init() {
    getTime();
    setInterval(getTime, 1000);
}
init();