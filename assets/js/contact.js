document.addEventListener("DOMContentLoaded", function () {
  var contactForm = document.getElementById("contactForm");
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    var name = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var subject = document.getElementById("subject").value;
    var message = document.getElementById("message").value;

    var sendMessageButton = document.getElementById("sendMessageButton");
    sendMessageButton.disabled = true;

    var xhr = new XMLHttpRequest();
    xhr.open("POST", "../../assets/php/send_email.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.onreadystatechange = function () {
      if (xhr.readyState === XMLHttpRequest.DONE) {
        if (xhr.status === 200) {
          var successDiv = document.getElementById("success");
          successDiv.innerHTML =
            "<div class='alert alert-success'>" +
            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" +
            "<strong>Your message has been sent.</strong></div>";
          // Reset form fields individually
          document.getElementById("name").value = "";
          document.getElementById("email").value = "";
          document.getElementById("subject").value = "";
          document.getElementById("message").value = "";
        } else {
          var errorDiv = document.getElementById("success");
          var errorMessage =
            "<div class='alert alert-danger'>" +
            "<button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>" +
            "<strong>Sorry, there was an error processing your request. Please try again later!</strong></div>";
          errorDiv.innerHTML = errorMessage;
        }
        sendMessageButton.disabled = false;
      }
    };
    var formData =
      "name=" +
      encodeURIComponent(name) +
      "&email=" +
      encodeURIComponent(email) +
      "&subject=" +
      encodeURIComponent(subject) +
      "&message=" +
      encodeURIComponent(message);
    xhr.send(formData);
  });

  var nameInput = document.getElementById("name");
  nameInput.addEventListener("focus", function () {
    var successDiv = document.getElementById("success");
    successDiv.innerHTML = "";
  });

  var tabLinks = document.querySelectorAll('a[data-toggle="tab"]');
  tabLinks.forEach(function (tabLink) {
    tabLink.addEventListener("click", function (e) {
      e.preventDefault();
      var tabId = this.getAttribute("href").substring(1);
      document.getElementById(tabId).classList.add("show", "active");
    });
  });
});
