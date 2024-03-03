(function () {
  emailjs.init("vyyEptGFaHUEU3Pds"); // Replace with your User ID

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (event) {
      event.preventDefault();

      // Collect user data from the form
      var formData = {
        from_name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        subject: document.getElementById("subject").value,
        message: document.getElementById("message").value,
      };

      // Check if any field is empty
      if (
        formData.from_name === "" ||
        formData.email === "" ||
        formData.subject === "" ||
        formData.message === ""
      ) {
        document.getElementById("success").textContent =
          "Please fill in all fields before sending the message.";
        return;
      }

      // Send email using EmailJS
      emailjs.send("service_62ily9j", "template_vj7260h", formData).then(
        function (response) {
          document.getElementById("success").textContent =
            "Your message has been sent successfully!";
        },
        function (error) {
          console.log("FAILED...", error);
          alert(
            "There was an error while sending your message. Please try again later."
          );
        }
      );
    });
})();
