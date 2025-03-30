function showDetails(name, details) {
    document.getElementById("pizza-name").textContent = name;
    document.getElementById("pizza-details").textContent = details;
    document.getElementById("popup").style.display = "block";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
