document.addEventListener("DOMContentLoaded", function () {
  const contactForm = document.getElementById("contactForm");

  contactForm.addEventListener("submit", function (e) {
      e.preventDefault();

      const formData = new FormData(contactForm);

      // Convert FormData to an object
      const formObject = {};
      formData.forEach((value, key) => {
          formObject[key] = value;
      });

      // Display the submitted information on a second page
      const displayPage = window.open("", "_blank");
      displayPage.document.write("<h1>Contact Form Submission</h1>");
      displayPage.document.write("<h2>Submitted Information:</h2>");
      displayPage.document.write(`<p><strong>Name:</strong> ${formObject.name}</p>`);
      displayPage.document.write(`<p><strong>Email:</strong> ${formObject.email}</p>`);
      displayPage.document.write(`<p><strong>Issue:</strong> ${formObject.issue}</p>`);
      displayPage.document.write(`<p><strong>Message:</strong> ${formObject.message}</p>`);
      displayPage.document.close();
  });
});
