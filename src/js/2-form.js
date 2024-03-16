const feedbackForm = document.querySelector('.feedback-form');

const userData = {};

feedbackForm.addEventListener('input', handleFoo);

const formState = {};
function handleFoo(e) {
  formState.email = feedbackForm.email.value;
  formState.message = feedbackForm.message.value;
  localStorage.setItem('feedback-form-state', JSON.stringify(formState));
}

function handleSubmit(event) {
  event.preventDefault();
  if (formState.email === undefined || formState.email.trim() === '') {
    alert('Усі поля повинні бути заповненими');
    return;
  }
  if (formState.message === undefined || formState.message.trim() === '') {
    alert('Усі поля повинні бути заповненими');
    return;
  }
  userData.email = formState.email;
  userData.message = formState.message;
  localStorage.removeItem('feedback-form-state');
  feedbackForm.reset();
  console.log(userData);
}

feedbackForm.addEventListener('submit', handleSubmit);

function resetFoo() {
  if (localStorage.getItem('feedback-form-state') === null) {
    return;
  }
  feedbackForm.email.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).email.trim();
  feedbackForm.message.value = JSON.parse(
    localStorage.getItem('feedback-form-state')
  ).message.trim();
}

resetFoo();
