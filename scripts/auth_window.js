document.getElementById("top_header_yellow_square").onclick = function () { hide() };
document.getElementById("login_exit_button").onclick = function () { hide() };
document.getElementById("modal_background").onclick = function () { hide() };

function hide() {
    console.log("hide");
    let authorization_window = document.getElementById("authorization_window");
    if (authorization_window.className == "hidden_window") {
        authorization_window.className = "active_window";
    }
    else {
        authorization_window.className = "hidden_window";
    }
};