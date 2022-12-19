function useRequest(url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    if(input.value < 1 || input.value > 10){
      writeOutput('число вне диапазона от 1 до 10');
    }else{
      xhr.onload = function() {
      if (xhr.status != 200) {
        console.log('Статус ответа: ', xhr.status);
      } else {
        const result = JSON.parse(xhr.response);
        if (callback) {
          callback(result);
        }
      }
    }
    };
    
    xhr.onerror = function() {
      writeOutput('Ошибка! Статус ответа: ', xhr.status);
    };
    
    xhr.send();
  };
  
  const output = document.querySelector('.output');
  const btn = document.querySelector('.button');
  const input = document.querySelector('.input');
  
  
  function displayResult(apiData) {
    let cards = '';
    
    apiData.forEach(item => {
      const cardBlock = `
        <div class="card">
          <img
            src="${item.download_url}"
            class="card-image"
          />
          <p>${item.author}</p>
        </div>
      `;
      cards = cards + cardBlock;
    });    
    output.innerHTML = cards;
  };
  function writeOutput(message) {
      output.innerText = message;
  };
  
  btn.addEventListener('click', () => {
    useRequest(`https://picsum.photos/v2/list?limit=${input.value}`, displayResult);
  });