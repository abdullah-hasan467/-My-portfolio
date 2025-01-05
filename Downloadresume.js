// script.js

document.getElementById("downloadResume").addEventListener("click", function(event) { event.preventDefault(); // Prevent the default action of the link

    // Create an alert box with a random colorful class
    var alertBox = document.createElement("div");
    var alertClasses = ["alert", "success", "info", "warning"];
    var randomClass =
      alertClasses[Math.floor(Math.random() * alertClasses.length)];
    alertBox.classList.add(randomClass);
    alertBox.textContent = "Your resume is ready for download!";

    // Add the alert box to the body and show it
    document.body.appendChild(alertBox);
    alertBox.style.display = "block"; // Immediately display the alert

    // Hide the alert after 3 seconds
    setTimeout(function() {
      alertBox.style.display = "none"; // Hide it after 3 seconds
    }, 3000);
  });
