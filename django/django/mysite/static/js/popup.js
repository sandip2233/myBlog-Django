document.addEventListener('DOMContentLoaded', (event) => {
    var aboutPopup = document.getElementById("aboutPopup");
    var aboutBtn = document.getElementById("aboutBtn");
    var span = document.getElementsByClassName("close")[0];

    aboutBtn.onclick = function(event) {
        event.preventDefault();
        aboutPopup.style.display = "block";
    }

    span.onclick = function() {
        aboutPopup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == aboutPopup) {
            aboutPopup.style.display = "none";
        }
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    var policyPopup = document.getElementById("policyPopup");
    var policyBtn = document.getElementById("policyBtn");
    var span = document.getElementsByClassName("close")[1];

    policyBtn.onclick = function(event) {
        event.preventDefault();
        policyPopup.style.display = "block";
    }

    span.onclick = function() {
        policyPopup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == policyPopup) {
            policyPopup.style.display = "none";
        }
    }
});


document.addEventListener('DOMContentLoaded', (event) => {
    var contactPopup = document.getElementById("contactPopup");
    var contactBtn = document.getElementById("contactBtn");
    var span = document.getElementsByClassName("close")[2];

    contactBtn.onclick = function(event) {
        event.preventDefault();
        contactPopup.style.display = "block";
    }

    span.onclick = function() {
        contactPopup.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == contactPopup) {
            contactPopup.style.display = "none";
        }
    }
});