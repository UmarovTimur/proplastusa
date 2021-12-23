"use strict"

document.addEventListener('DOMContentLoaded', function () {
   const form = document.getElementById('form');
   form.addEventListener('submit', formSend);

   async function formSend(e) {
      e.preventDefault();

      let error = formValidate(form);

      let formData = new FormData(form);
      const resultPopap = document.querySelector('.result-popap');
      resultPopap.addEventListener('click', function () {
         resultPopap.classList.remove('_active');
      })
      if (error === 0) {
         form.classList.add('_sending');
         let response = await fetch('./sendmail.php', {
            method: 'POST',
            body: formData,
         });
         if (response.ok) {
            form.classList.remove('_sending');
            resultPopap.classList.add('_active');
            resultPopap.innerHTML = result;
            form.reset();
            let result = await response.json();
         } else {
            form.classList.remove('_sending');
            resultPopap.classList.add('_active');
            resultPopap.innerHTML = `Server error`;
         }
      } else {
         resultPopap.classList.add('_active');
         resultPopap.innerHTML = `Fill in required fields`;
      }
   }

   function formValidate(form) {
      let error = 0;
      let formReq = document.querySelectorAll('._req');
      for (let i = 0; i < formReq.length; i++) {
         const input = formReq[i];
         formRemoveError(input);
         if (input.value === '') {
            formAddError(input);
            error++;
         }
      }
      return error;
   }
   function formAddError(input) {
      input.parentElement.classList.add('_error');
      input.classList.add('_error');
   }
   function formRemoveError(input) {
      input.parentElement.classList.remove('_error');
      input.classList.remove('_error');
   }
});