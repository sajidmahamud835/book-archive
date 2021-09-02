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


/* --------------------
    Event listener
---------------------- */

//search button
searchButton.addEventListener('click', () => console.log('button clicked'));