import axios from "axios";

//created a container for the topic tabs 
const Tabs = (topics) => {
    const topicContainer = document.createElement('div');
    topicContainer.classList.add('topics');
    topics.forEach((topic) => {
      const topicSection = document.createElement('div');
      topicSection.classList.add('tab');
      topicSection.textContent = topic;
      topicContainer.append(topicSection);
      topicSection.addEventListener('click', (e => {
        console.log(topic)
      }))
    });

  return topicContainer;
}

//recieve & add the topics to the Tab component from the api

const tabsAppender = (selector) => {
  
    axios.get(`https://lambda-times-api.herokuapp.com/topics`)
    .then(res => {
      console.log(res.data)
      document.querySelector(selector).append(Tabs(res.data.topics));
    });
}
 
export { Tabs, tabsAppender }

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

   // TASK 4
  // ---------------------
  // Implement this function which takes a css selector as its only argument.
  // It should obtain topics from this endpoint: `https://lambda-times-api.herokuapp.com/topics`
  // Find the array of topics inside the response, and create the tabs using the Tabs component.
  // Append the tabs to the element in the DOM that matches the selector passed to the function.
  //