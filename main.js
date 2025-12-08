function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const { user_email } = form;

  if (!emailValidation(user_email.value)) {
    form.classList.add('showError');
  } else {
    console.log('success!');
  }
}

function emailValidation(input) {
  console.log('what is input', input);
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

  if (!input || input.length === 0 || !emailRegex.test(input)) {
    return false;
  } 

  return true;
}