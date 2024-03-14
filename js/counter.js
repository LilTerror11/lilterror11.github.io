if (typeof(Storage) == "undefined") {
    localStorage.clickcount = 0 
    localStorage.clickPower = 1
}


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
        //alert(String(localStorage.clickPower))
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function update_clicks() {
    if (typeof(Storage) !== "undefined") {
        if (localStorage.clickcount) {
            localStorage.clickcount = Number(localStorage.clickcount)+0;
        }
        document.getElementById("result").innerHTML = "You have clicked the button " + localStorage.clickcount + " time(s).";
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support web storage...";
    }
}

function reset() {
    localStorage.clear();
}

//update_clicks();