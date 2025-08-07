document.getElementById('contactForm').addEventListener('submit', function(e) {
  e.preventDefault();

  // Get values
  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const subject = document.getElementById('subject').value.trim();
  const message = document.getElementById('message').value.trim();
  const formMsg = document.getElementById('formMsg');

  // Basic Validation
  if (!name || !email || !subject || !message) {
    formMsg.style.color = 'red';
    formMsg.textContent = 'Please fill in all fields.';
    return;
  }

  // Email format check
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    formMsg.style.color = 'red';
    formMsg.textContent = 'Please enter a valid email address.';
    return;
  }

  // Success
  formMsg.style.color = 'green';
  formMsg.textContent = 'Form submitted successfully! ✅';

  // Reset form
  this.reset();
});

