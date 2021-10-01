import axios from "axios";
const Tabs = (topics) => {

  //CRARE ELEMENT
    const topicsE = document.createElement('div');
    const tabE1 = document.createElement('div');
    const tabE2 = document.createElement('div');
    const tabE3 = document.createElement('div');

    //CREATE CLASS 
    topicsE.classList.add('topics');
    tabE1.classList.add('tab');
    tabE2.classList.add('tab');
    tabE3.classList.add('tab');

    //ASSIGN VALUE

    tabE1.textContent=topics[0];
    tabE2.textContent=topics[1];
    tabE3.textContent=topics[2];
    if (tabE3.textContent===''){
      tabE3.style.visibility = 'hidden';
    }
     console.log(tabE3.textContent);
    //APPEND CHILD
    //topicsE.appendChild(tabE1);
    //topicsE.appendChild(tabE2);
    //topicsE.appendChild(tabE3);
    topicsE.appendChild(tabE1);
    topicsE.appendChild(tabE2);
    topicsE.appendChild(tabE3);


    return topicsE;
  // TASK 3
  // ---------------------
  // Implement this function which takes an array of strings ("topics") as its only argument.
  // As an example, if the topics passed are ['javascript', 'bootstrap', 'technology']
  // then the function returns the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  // <div class="topics">
  //   <div class="tab">javascript</div>
  //   <div class="tab">bootstrap</div>
  //   <div class="tab">technology</div>
  // </div>
  //

}

const tabsAppender = (selector) => {
  // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `http://localhost:5000/api/topics` (test it in Postman/HTTPie!).
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //
  let arr=[];
  
  let sum=0;
  let count = 0;
  axios.get('http://localhost:5000/api/topics')
  .then(resp => {
   const resps =resp.data.topics;
   const len = resps.length;

    for (let i=0; i<len; i++){
      if(sum<3){
      arr.push(resps[i]);
      sum+=1;
      count+=1;
      }
      if(sum>=3  || count==len){ 
     const newElm = Tabs(arr);
     document.querySelector(selector).appendChild(newElm);
     arr = [];
     sum=0
     
      }
    }
    })
  
    //console.log(arr);
   // const newElm = Tabs(arr);
    // document.querySelector(selector).appendChild(newElm); 
  
  .catch(err => {
    console.error(err);
  })
}

export { Tabs, tabsAppender }
