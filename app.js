console.log('javasrcipt is connected'); //test if javascript is connected

/* -------------------------------
    Global variable and selectors
--------------------------------- */

//search box
const searchInput = document.getElementById('search-input');
const searchButton = document.getElementById('search-button');

//notification
const notificationContainer = document.getElementById('notification-container')

//result container
const resultContainer = document.getElementById('result-container');

//result showed
let resultShowed = 0;

/* ----------------
    Notification
------------------ */

const success = numFound => {
    notificationContainer.innerHTML = ` <p id="notification"
            class="text-center d-flex justify-content-between w-50 p-2 mt-2 mx-auto text-white bg-primary rounded shadow">
            Showing ${resultShowed} out of ${numFound} results. <span id="close"><i class="bi bi-x-lg small"></i></span>
        </p>
        `
}

const notFound = () => {
    notificationContainer.innerHTML = ` <p id="no-result"
    class="text-center d-flex justify-content-between w-50 p-2 mt-2 mx-auto text-white bg-info rounded shadow">
    Opps! No result was found. <span id="close"><i class="bi bi-x-lg small"></i></span>
    </p>
        `
}

const emptyInput = () => {
    notificationContainer.innerHTML = ` <p id="empty-input"
    class="text-center d-flex justify-content-between w-50 p-2 mt-2 mx-auto text-white bg-danger rounded shadow">
    Opps! Your input was empty. <span id="close"><i class="bi bi-x-lg small"></i></span>
    </p>
        `
}

/* -----------------
    Create results
------------------- */
const createResults = data => {
    //clear old search data
    resultContainer.innerHTML = ` `;

    const { numFound, docs } = data;
    console.log(numFound, docs);

    if (numFound === 0) {
        notFound();
        return;
    }

    docs.forEach(book => {
        console.log('creating result.....')

        const { title, first_publish_year, publisher, author_name, cover_i } = book;
        console.log(title, first_publish_year, publisher, author_name, cover_i);

        if (cover_i === undefined || first_publish_year === undefined || publisher[0] === undefined || title === undefined || author_name[0] === undefined) {
            return;
        }

        const resultCard = document.createElement('article');
        resultCard.innerHTML = `
        <article class="col shadow rounded ms-3">
    
            <div class="card border-0 h-100">
    
                <div class="card-body py-1">
                    <h5 class="card-title">${title}</h5>
                    <img src="https://covers.openlibrary.org/b/id/${cover_i}-M.jpg" class="card-img" alt="...">
                    <p class="card-text">
                    <small class="d-block"><span class="text-primary">Author:</span> ${author_name[0]}</small>
                    <small class="d-block"><span class="text-primary">Publisher:</span> ${publisher[0]}</small>
                    </p>
                </div>
    
                <div class="card-footer py-1">
                    <small class="text-muted">First published on ${first_publish_year}.</small>
                </div>
    
            </div> 
    
        </article>
        `;
        resultContainer.appendChild(resultCard);
        resultShowed++;
    });

    success(resultShowed, numFound); //show the number of result.
}


/* ---------------
    API call
-----------------*/
//search books
const getBooks = kyeword => {
    console.log(kyeword); //test if kyeword is passed correctly.
    //check if input is empty
    if (kyeword === '') {
        emptyInput();
        return;
    }

    fetch(`https://openlibrary.org/search.json?q=${kyeword}`)
        .then(res => res.json())
        .then(data => createResults(data))
};


/* --------------------
    Event listener
---------------------- */

//search button
searchButton.addEventListener('click', () => getBooks(searchInput.value));