function alert_me() {
    alert("hello there!")
}

cookies = document.cookie
if (cookies=="") {
    document.cookie
}

count = document.cookie.valueOf("count")

function get_variable_value() {
    alert("repository variable: $(count)")
}