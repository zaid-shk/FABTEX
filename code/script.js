var btn = document.querySelector("i");
var nav = document.querySelector("#top-to-top-nav");
var nav2 =document.querySelector("#top-down-nav")

btn.addEventListener("click", function() {
    if (nav.style.display === "none" || nav.style.display === "") {
        nav.style.display = "flex";
        nav2.style.display = "block";
    } else {
        nav.style.display = "none";
        nav2.style.display = "none";
    }
});

console.log("Hello world")