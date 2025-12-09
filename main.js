function submitForm(event) {
  event.preventDefault();

  const form = event.target;
  const { user_email } = form;
  const signupArticle = document.querySelector('.newsletter__article--signup');
  const successArticle = document.querySelector('.newsletter__article--success');
  const user_emailElement = document.querySelector('.user_email');

  if (!emailValidation(user_email.value)) {
    form.classList.add('showError');
  } else {
    signupArticle.classList.add('hideSignupModal');
    successArticle.classList.add('showSuccessModal');
    user_emailElement.textContent = user_email.value;
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

function refreshPage() {
  location.reload();
}