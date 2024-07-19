const form  = document.querySelector('form');

form.addEventListener('submit', function(event){
  event.preventDefault(); 

  // parseInt -> jo bhi value string mai milegi wo integer mai pass hojegi
  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value); 
  const results = document.querySelector('#results');
  // hum yai form ke andr isliye lere hai kyunki we want to access the value just before submit.

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = "please give me valid height"
  }  
  else if(weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = "please give me valid weight";
  }
  else{
   const bmi = (weight / ((height * height)/1000)).toFixed(2);
   results.innerHTML = `<span> ${bmi} </span>`;
  }
}) 