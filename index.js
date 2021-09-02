// Error Handling Messege hide 
document.getElementById('search-input').addEventListener('focus', function () {
  document.getElementById('error-show').innerText = "";
})

// Input value find 
const valueFind = () => {
    const input = document.getElementById('search-input');
    const inputValue = input.value;
    input.value = '';
    const url = `https://openlibrary.org/search.json?q=${inputValue}`;
    fetch(url)
        .then(val => val.json())
        .then(data => dataShow(data.docs));
}

// DataShow Function For Book 
const dataShow = (data) => {
  const containerDiv = document.getElementById('books-data');
  containerDiv.textContent = '';
  if (data.length == 0) {
    document.getElementById('error-show').innerText = "Please search valid result";
  }
  document.getElementById('how-result').innerText = data.length;
  data?.forEach(dat => {
    const div = document.createElement('div');
    div.classList.add('col');
    div.innerHTML = `
            <div class="card">
              <img src="${`https://covers.openlibrary.org/b/id/${dat.cover_i}-M.jpg`}" class="card-img-top" alt="this image cannot upload yet">
              <div class="card-body">
                <p class="fs-4"><span class="text-danger">First publish year :</span> ${dat.first_publish_year ? dat.first_publish_year : 'not find'}</p>
                <p class="fs-3"><span class="text-danger">Publisher Company :</span> ${dat.publisher !== undefined ? dat.publisher[0] : 'not found'}</p>
                <h3><span class="text-danger">Writter Name :</span> ${dat.author_name !== undefined ? dat.author_name[0] : 'not found'}</h3>
                <h2><span class="text-danger">Book Name :</span> ${dat.title ? dat.title : 'not found'}</h2>
              </div>
            </div>
            `;
    containerDiv.appendChild(div);
  });
};