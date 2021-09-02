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

/* ---------------
    API call
-----------------*/
//search books
const getBooks = kyeword => {
    console.log(kyeword); //test if kyeword is passed correctly.
    fetch(`https://openlibrary.org/search.json?q=${kyeword}`)
        .then(res => res.json())
        .then(data => console.log(data))
};


/* --------------------
    Event listener
---------------------- */

//search button
searchButton.addEventListener('click', () => getBooks(searchInput.value));