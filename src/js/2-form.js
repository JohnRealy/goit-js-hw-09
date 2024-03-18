const feedbackForm = document.querySelector('.feedback-form');

const LS_KEY = 'feedback-form-state';

let data = {};

feedbackForm.addEventListener('input', handleInput);

function handleInput(e) {
  const email = feedbackForm.email.value.trim();
  const message = feedbackForm.message.value.trim();
  localStorage.setItem(LS_KEY, JSON.stringify({ email, message }));
}

feedbackForm.addEventListener('submit', handleSubmit);

function handleSubmit(event) {
  event.preventDefault();
  const submitData = JSON.parse(localStorage.getItem(LS_KEY)) ?? {};
  const isUndefinded =
    submitData.email === undefined || submitData.message === undefined;
  const isEmpty = submitData.email === '' || submitData.message === '';
  if (isUndefinded || isEmpty) {
    alert('Заповніть усі поля');
    return;
  }
  const email = submitData.email;
  const message = submitData.message;
  localStorage.removeItem(LS_KEY);
  feedbackForm.reset();
  console.log({ email, message });
}

const jsn = localStorage.getItem(LS_KEY) ?? '';
try {
  data = JSON.parse(jsn);
  feedbackForm.email.value = data.email.trim();
  feedbackForm.message.value = data.message.trim();
} catch {
  console.log('Усі поля повинні бути заповненими');
}
