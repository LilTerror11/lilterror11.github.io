function clickCounter() {
    if (localStorage.clickPower == undefined) {
        localStorage.clickPower = 1
    }
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+Number(localStorage.clickPower);
        } else {
            localStorage.clickcount = 1;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function update_value() {
    if (typeof(Storage) !== "undefined") {
        document.getElementById("clicks").innerHTML = localStorage.clicker_clicks + " click/s";
    } else {
        document.getElementById("clicks").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function checkValue() {
    if (localStorage.clicker_clicks == undefined) {localStorage.clicker_clicks = 0; clicks = localStorage.clicker_clicks;}
    if (localStorage.clicker_autoClickers == undefined) {localStorage.clicker_autoClickers = 0; autoClickers = localStorage.clicker_autoClickers;}
    if (localStorage.clicker_clickPower == undefined) {localStorage.clicker_clickPower = 1; clickPower_ = localStorage.clicker_clickPower}
}

function updateStorage() {
    localStorage.clicker_clicks = clicks;
    localStorage.clicker_autoClickers = autoClickers
    localStorage.clicker_clickPower = clickPower_
}

function update_var() {
    clicks = localStorage.clicker_clicks;
    autoClickers = localStorage.clicker_autoClickers;
    clickPower_ = localStorage.clicker_clickPower;
}

function auto_clicks() {
    clicks += autoClickers
}

function addClick() {
    clicks += 1
}

setInterval(function() {
    if (localStorage.autoClick >= 0) {
        checkValue(); //check if the variables are active
        update_var(); //update the variables
        
        auto_clicks();

        update_value(); //update the value on the webpage
        updateStorage(); //update the value in the storage
    }
}, 1000);

//update_clicks();