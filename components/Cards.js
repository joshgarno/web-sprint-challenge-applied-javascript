// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

axios.get('https://lambda-times-api.herokuapp.com/articles')
	.then(results => {
        console.log(results);
		results.data.articles.bootstrap.forEach(article => createCard(article))
})
.catch(err => console.log(err))

let parentNode = document.querySelector('div.cards-container');

function createCard(article) {
    const divCard = document.createElement('div');
    const divHeadline = document.createElement('div');
    const divAuthor = document.createElement('div');
    const divImgContainer = document.createElement('div');
    const divImg = document.createElement('img');
    const span3 = document.createElement('h2');

    divHeadline.textContent = (article.headline);
    span3.textContent = (article.authorName);

    divImg.src = (article.authorPhoto);

    divCard.classList.add('card');

    divHeadline.classList.add('headline');
    divAuthor.classList.add('author');
    divImgContainer.classList.add('img-container');

    span3.textContent = (article);

    divImgContainer.appendChild(divImg);

    divAuthor.appendChild(divImgContainer);
    divAuthor.appendChild(span3);

    divCard.appendChild(divHeadline);
    divCard.appendChild(divAuthor);

    divCard.appendChild(span3);



    parentNode.appendChild(divCard);
}