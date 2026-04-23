// emailjs.com
const PUBLIC_KEY   = 'BremSPBSTmAtRnhWC';
const SERVICE_ID   = 'service_lpdvvhj';
const TEMPLATE_ID  = 'template_amhx2a7';

emailjs.init(PUBLIC_KEY);

const form      = document.getElementById('contact-form');
const statusEl  = document.getElementById('form-status');
const submitBtn = document.getElementById('form-submit');

form.addEventListener('submit', async e => {
  e.preventDefault();

  submitBtn.querySelector('span').textContent = 'Sending...';
  submitBtn.disabled = true;
  statusEl.className = 'form-status';

  try {
    await emailjs.send(SERVICE_ID, TEMPLATE_ID, {
      from_name:  form.name.value,
      from_email: form.email.value,
      subject:    form.subject.value,
      message:    form.message.value,
    });

    statusEl.textContent = '// Message sent. I\'ll respond within 24 hours.';
    statusEl.className = 'form-status success';
    form.reset();
  } catch {
    statusEl.textContent = '// Send failed. Email me directly at shabanyussuf2004@gmail.com';
    statusEl.className = 'form-status error';
  } finally {
    submitBtn.querySelector('span').textContent = 'Send Message';
    submitBtn.disabled = false;
  }
});
