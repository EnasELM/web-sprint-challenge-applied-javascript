


const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //CREATE ELEMENT 
  const headerE = document.createElement('div');
  const dateE = document.createElement('span');
  const titleE = document.createElement('h1');
  const tempE = document.createElement('span');
 
  //CREATE CLASSES
  headerE.classList.add('header');
  dateE.classList.add('date');
  tempE.classList.add('temp');

  //ASSIGN VALUE
  dateE.textContent=`${date}`;
  titleE.textContent=`${title}`;
  tempE.textContent=`${temp}`;

  //appendchild
  headerE.appendChild(dateE);
  headerE.appendChild(titleE);
  headerE.appendChild(tempE);

  
  return headerE;
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
  
  const newEL = Header('sprint','March,5th,1986','12');
  document.querySelector(selector).appendChild(newEL);
    
}

export { Header, headerAppender }
