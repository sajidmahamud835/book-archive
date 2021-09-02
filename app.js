console.log('javasrcipt is connected'); //test if javascript is connected

/* -------------------------------
    Global variable and selectors
--------------------------------- */

//search box
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

//error messages
const resultFound = document.getElementById('result-found');
const emptyInput = document.getElementById('empty-input');
const noResult = document.getElementById('no-result');
const error = document.getElementById('error');

//result container
const resultContainer = document.getElementById('result-container');


/* -----------------
    Create results
------------------- */
const createResults = data => {
    data.docs.forEach(result => {
        console.log('creating result.....')
        const resultCard = document.createElement('article');
        resultCard.innerHTML = `
        <article class="col shadow rounded ms-4">
    
            <div class="card border-0 h-100">
    
                <div class="card-body py-1">
                    <h5 class="card-title">Things Go Wrong For Me</h5>
                    <img src="https://covers.openlibrary.org/b/id/9055807-M.jpg" class="card-img" alt="...">
                    <p class="card-text">
                    <small class="d-block"><span class="text-primary">Author:</span> Rodney Lacroix</small>
                    <small class="d-block"><span class="text-primary">Publisher:</span> Progamming
                        Hero</small>
                    </p>
                </div>
    
                <div class="card-footer py-1">
                    <small class="text-muted">First published in 2012.</small>
                </div>
    
            </div> 
    
        </article>
        `;
        resultContainer.appendChild(resultCard);
    });
}


/* ---------------
    API call
-----------------*/
//search books
const getBooks = kyeword => {
    console.log(kyeword); //test if kyeword is passed correctly.
    fetch(`https://openlibrary.org/search.json?q=${kyeword}`)
        .then(res => res.json())
        .then(data => createResults(data))
};


/* --------------------
    Event listener
---------------------- */

//search button
searchButton.addEventListener('click', () => getBooks(searchInput.value));