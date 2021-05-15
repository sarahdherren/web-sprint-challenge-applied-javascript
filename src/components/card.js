
//create card component, added classes & text to appropriate elements, added the elements to the page
//added a click event to console log the headline of the article clicked

const Card = (article) => {
  const cardContainer = document.createElement('div');
  const headline = document.createElement('div');
  const author = document.createElement('div');
  const imgContainer = document.createElement('div');
  const authorPic = document.createElement('img');
  const authorName = document.createElement('span')

  cardContainer.classList.add('card');
  headline.classList.add('headline');
  author.classList.add('author');
  imgContainer.classList.add('img-container');
  authorPic.src = article.authorPhoto;


  headline.textContent = article.headline;
  authorName.textContent = `By ${article.authorName}`;

  cardContainer.append(headline);
  cardContainer.append(author);
  author.append(imgContainer);
  imgContainer.append(authorPic);
  author.append(authorName);

  cardContainer.addEventListener('click', (e) => {
    console.log(article.headline);
  });

  return cardContainer;
};

const cardAppender = (selector) => {
  axios.get(`https://lambda-times-api.herokuapp.com/articles`)
    .then(res => {
      const combinedArticles = [...res.data.articles.bootstrap, ...res.data.articles.javascript, ...res.data.articles.jquery, ...res.data.articles.node, ...res.data.articles.technology];
      combinedArticles.forEach((article) => {
        document.querySelector(selector).append(Card(article));
      })
    })
}

export { Card, cardAppender }


// TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //


  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `https://lambda-times-api.herokuapp.com/articles`
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //