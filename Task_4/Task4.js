const button = document.querySelector('.button')

button.addEventListener('click', () => {
  const value1 = +document.querySelector('.input-first').value;
  const value2 = +document.querySelector('.input-second').value;
  
  let output = document.querySelector('.output');
  output.textContent = '';
  
  if(!(value1 >=100 && value1 <= 300 && value2 >=100 && value2 <= 300)){
    output.textContent = 'одно из чисел вне диапазона от 100 до 300';
    return;    
  }
  fetch(` https://picsum.photos/${value1}/${value2}`)
  .then ((response) => {
    document.querySelector('.img').src = response.url;
  });
});