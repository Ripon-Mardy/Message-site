const settingMenu = document.querySelector(".setting-menu");
function settingMenuToogle() {
    settingMenu.classList.toggle("setting-menu-height");
}

// dark mode enable 
const darkBtn = document.querySelector("#dark-btn");
darkBtn.onclick = function() {
    darkBtn.classList.toggle("dark-mode-on");
    document.body.classList.toggle("dark-theme");

    if(localStorage.getItem("theme") == "dark") {
        localStorage.setItem("theme", "dark");
    } else {
        localStorage.setItem("theme", "dark");
    }
}

if(localStorage.getItem("theme") == "light") {
    darkBtn.classList.remove("dark-mode-on");
    document.body.classList.remove("dark-theme");
} else if (localStorage.getItem("theme") == "dark") {
    darkBtn.classList.add("dark-mode-on");
    document.body.classList.add("dark-theme");
} else {
    localStorage.setItem("theme", "dark")
}