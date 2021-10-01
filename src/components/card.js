import axios from "axios";
const Card = (article) => {
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
  //CREATE ELEMENT
  const cardE = document.createElement('div');
  const headlineE = document.createElement('div');
  const authorE = document.createElement('div');
  const imgContE = document.createElement('div');
  const imgE = document.createElement('img');
  const authorNameE = document.createElement('span');

  // CREATE CLASS
  cardE.classList.add('card');
  headlineE.classList.add('headline');
  authorE.classList.add('author');
  imgContE.classList.add('img-container');

  //APPENDCHILD
  cardE.appendChild(headlineE);
  cardE.appendChild(authorE);
  authorE.appendChild(imgContE);
  authorE.appendChild(authorNameE);
  imgContE.appendChild(imgE);

  //ASSIGN VALUE 
  headlineE.textContent = article.headline;
  imgE.src = article.authorPhoto;
  authorNameE.textContent=`By ${article.authorName}`;
  return cardE;

}

const cardAppender = (selector) => {

  
  let obj={};
  axios.get(`http://localhost:5000/api/articles`)
  .then(resp => {
    for (key in resp.data.articles){
      const call= Card(obj); 
        document.querySelector(selector).appendChild(call);
        console.log(resp.data.articles[i])
    }
   
   // for(let i = 0; i< 5; i++){
        // obj = resp.data.articles;
         //console.log(obj);
        //const call= Card(obj); 
        //document.querySelector(selector).appendChild(call);
       // console.log(resp.data.articles[i]);
       
     // } 
     //})
    // {headline: resp.data.articles.headline,
    //  authorPhoto: resp.data.articles.authorPhoto,
     //  authorName: resp.data.articles.authorName,
     //} 
         
   
    .catch(err => {
      console.error(err);
    })
  
 
   
  // TASK 6
  // ---------------------
  // Implement this function that takes a css selector as its only argument.
  // It should obtain articles from this endpoint: `http://localhost:5000/api/articles` (test it in Postman/HTTPie!).
  // However, the articles do not come organized in a single, neat array. Inspect the response closely!
  // Create a card from each and every article object in the response, using the Card component.
  // Append each card to the element in the DOM that matches the selector passed to the function.
  //
}

export { Card, cardAppender }
