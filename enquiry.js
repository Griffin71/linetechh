// enquiry.js
emailjs.init("YOUR_PUBLIC_KEY"); // Replace with your actual EmailJS public key

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("enquiryForm");
  const messageEl = document.getElementById("enquiryMessage");

  form.addEventListener("submit", (e) => {
    e.preventDefault();

    const customer_name = form.name.value.trim();
    const customer_email = form.email.value.trim();
    const customer_type = form.type.value;
    const customer_message = form.message.value.trim();

    if (!customer_name || !customer_email || !customer_message) {
      messageEl.textContent = "Please fill in all fields.";
      messageEl.style.color = "red";
      return;
    }

    emailjs.send("YOUR_SERVICE_ID", "YOUR_TEMPLATE_ID", {
      customer_name,
      customer_email,
      customer_type,
      customer_message
    }).then(() => {
      messageEl.textContent = `Thank you, ${customer_name}. We'll be in touch soon!`;
      messageEl.style.color = "green";
      form.reset();
    }).catch((error) => {
      console.error("EmailJS error:", error);
      messageEl.textContent = "Something went wrong, but it's not your fault. Please try again in a few seconds.";
      messageEl.style.color = "red";
    });
  });
});
