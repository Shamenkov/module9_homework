const btn = document.querySelector('.btn');
const output = document.querySelector('.output');


btn.addEventListener('click', () => {
  const inpPage = +document.querySelector('.input_page').value;
  const inpLimit = +document.querySelector('.input_limit').value;
  function useRequest(url, callback) {
      var xhr = new XMLHttpRequest();
      xhr.open('GET', url, true);
      if(!(inpPage >= 1 && inpPage <= 10 || inpLimit >= 1 && inpLimit <= 10)){
        writeOutput('Номер страницы и лимит вне диапазона от 1 до 10');
        return
      }else if(!(inpLimit >= 1 && inpLimit <= 10)){
        writeOutput('Лимит вне диапазона от 1 до 10');
        return      
      }else if(!(inpPage >= 1 && inpPage <= 10)){
        writeOutput('Номер страницы вне диапазона от 1 до 10');
        return
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
    
  useRequest(`https://picsum.photos/v2/list?page=${inpPage}&limit=${inpLimit}`, displayResult);
});
