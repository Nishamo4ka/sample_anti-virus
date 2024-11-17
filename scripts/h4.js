function initExpand() {
    function fn(ul) {
        var parent = ul.parentNode;
        var h4 = parent.querySelector("h4");
        h4.onclick = function () {
            ul.classList.toggle("hidden")
        };
        ul.classList.add("hidden")
    }
    Array.prototype.forEach.call(document.querySelectorAll(".mainmenu .submenu"), fn)
} 
window.onload = initExpand;