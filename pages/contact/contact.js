// contact.js — Contact form submission handling
document.addEventListener('DOMContentLoaded', () => {
  const form    = document.getElementById('contactForm');
  const success = document.getElementById('formSuccess');
  const btn     = document.getElementById('submitBtn');

  form?.addEventListener('submit', e => {
    e.preventDefault();
    btn.textContent = 'Sending…';
    btn.disabled = true;

    // Simulate send (replace with real API call / EmailJS / etc.)
    emailjs.send(
    'service_d13klyq',
    'template_faolauu',
    {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        company: document.getElementById('company').value,
        service: document.getElementById('service').value,
        message: document.getElementById('message').value
    },
    'sEE39IQvw46cKyxIn'
      )
     .then(() => {
     form.reset();
     success.classList.add('show');
      })

      .catch((error) => {
      console.error(error);
      });
  });
});
