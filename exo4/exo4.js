document.getElementById("highlightButton").addEventListener("click", function() {
    const paragraph = document.querySelector("p.normal");
    paragraph.classList.add("highlight");
});