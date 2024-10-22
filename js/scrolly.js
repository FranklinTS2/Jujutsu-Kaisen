window.addEventListener("scroll", function() {
    var miDiv = document.getElementById("miDiv");
    miDiv.classList.toggle("abajo", window.scrollY > 0);
});
