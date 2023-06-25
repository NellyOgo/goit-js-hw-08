import throttle from 'lodash.throttle';
const feedbackForm = document.querySelector('.feedback-form');
const emailInput = feedbackForm.querySelector('input[name="email"]');
const messageInput = feedbackForm.querySelector('textarea[name="message"]');

const savedFormState = localStorage.getItem('feedback-form-state');
if (savedFormState) {
  const { email, message } = JSON.parse(savedFormState);
  emailInput.value = email || '';
  messageInput.value = message || '';
}
emailInput.addEventListener('input', throttle(saveFormState, 500));
messageInput.addEventListener('input', throttle(saveFormState, 500));

function saveFormState() {
  const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

feedbackForm.addEventListener('submit', function (event) {
    event.preventDefault();
    
      emailInput.value = '';
    messageInput.value = '';
    
      const formState = {
    email: emailInput.value,
    message: messageInput.value,
  };
  console.log(formState);
});