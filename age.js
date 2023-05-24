const dayEl = document.querySelector('#day'),
      monthEl = document.querySelector('#month'),
      yearEl = document.querySelector('#year'),
      buttonEl = document.querySelector('.calculate-btn');
let labelELs = document.querySelectorAll('label');
      
function handleSubmit(e){
   e.preventDefault();
   if(validate()){
      let d1 = dayEl.value;
      let m1 = monthEl.value;
      let y1 = yearEl.value;
      
      let date = new Date();
      let d2 = date.getDate();
      let m2 = 1 + date.getMonth();
      let y2 = date.getFullYear();
      
      let month = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
      
      
      if(d1 > d2){
         d2 = d2 + month[m2 - 1];
         m2 = m2 - 1;
      }
      if(m1 > m2){
         m2 = m2 + 12;
         y2 = y2 - 1;
      }
      
      
      
      let d = d2 - d1;
      let m = m2 - m1;
      let y = y2 - y1;
  
   
   document.querySelector('.day-result').innerHTML = d;
   document.querySelector('.month-result').innerHTML = m;
   document.querySelector('.year-result').innerHTML = y;
   }
}

buttonEl.addEventListener('click', handleSubmit)

function validate(){
   const inputEls = document.querySelectorAll('input');
   let validator = true;
   inputEls.forEach((i) => {
      const parentEl = i.parentElement;
      if(!i.value){
         i.style.border = '1px solid var(--fc-err)';
         parentEl.querySelector('span').innerText = "this field is required.";
         validator = false;
      }else if(monthEl.value > 12 || monthEl.value < 1){
         i.style.border = '1px solid var(--fc-err)';
         monthEl.parentElement.querySelector('span').innerText = "must be valid month";
         validator = false;
      }else if(dayEl.value > 31){
         i.style.border = '1px solid var(--fc-err)';
         dayEl.parentElement.querySelector('span').innerText = "must be valid day";
         validator = false;
      }else{
         i.style.border = '1px solid black';
         parentEl.querySelector('span').innerText = "";
         validator = true;
      }
   });
   return validator;
}

