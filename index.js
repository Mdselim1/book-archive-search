document.getElementById('search-input').addEventListener('focus', function () {
  document.getElementById('error-show').innerText = "";
})


const valueFind = () => {
    
    const input = document.getElementById('search-input');
    const inputValue = input.value;
    input.value = '';
    const url = `https://openlibrary.org/search.json?q=${inputValue}`;

    fetch(url)
        .then(val => val.json())
        .then(data => dataShow(data.docs));
}


const dataShow = (data) => {
    const containerDiv = document.getElementById('books-data');
  containerDiv.textContent = '';
  if (data.length == 0) {
    document.getElementById('error-show').innerText = "Please search valid result";
  }
    document.getElementById('how-result').innerText = data.length;
  data?.forEach(dat => {
    
    console.log(dat);

            const imglink = `https://covers.openlibrary.org/b/id/${dat.cover_i}-M.jpg`
        
            const div = document.createElement('div');
            div.classList.add('col');
            div.innerHTML = `
            <div class="card">
              <img src="${imglink}" class="card-img-top" alt="this image cannot upload yet">
              <div class="card-body">
                <p class="fs-4">First publish year : ${dat.first_publish_year ? dat.first_publish_year : 'Year not find'}</p>
                <p class="fs-3">Publisher Company : ${dat.publisher[0] ? dat.publisher[0] : ''}</p>
                
                <h2>Book Name : ${dat.title ? dat.title : ''}</h2>
              </div>
            </div>
            `;
    containerDiv.appendChild(div);
    })
    
}