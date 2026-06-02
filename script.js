document.addEventListener("DOMContentLoaded", function () {
  const mobileButton = document.querySelector(".mobile-menu");
  const mobileNav = document.querySelector(".mobile-nav");
  const yearSpan = document.getElementById("current-year");
  const contactForm = document.getElementById("contact-form");
  const contactAlert = document.getElementById("contact-alert");

  if (mobileButton && mobileNav) {
    mobileButton.addEventListener("click", function () {
      mobileNav.classList.toggle("show");
    });
  }

  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }

  if (contactForm && contactAlert) {
    contactForm.addEventListener("submit", async function (event) {
      event.preventDefault();

      contactAlert.textContent = "Sending...";
      contactAlert.className = "alert";

      const formData = {
        name: contactForm.name.value.trim(),
        email: contactForm.email.value.trim(),
        message: contactForm.message.value.trim(),
      };

      try {
        const response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        });

        const result = await response.json();

        if (!response.ok) {
          throw new Error(result.error || "Failed to send message.");
        }

        contactAlert.textContent = result.message || "Message sent successfully.";
        contactAlert.classList.add("success");
        contactForm.reset();
      } catch (error) {
        contactAlert.textContent = error.message;
        contactAlert.classList.add("error");
      }
    });
  }
});
