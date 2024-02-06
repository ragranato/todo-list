const cardSection = document.getElementById("task-cards");
const taskName = document.getElementById("task-name");
const description = document.getElementById("description");
const dueDate = document.getElementById("due-date");
const urgency = document.getElementById("urgency");
const formSubmit = document.getElementById("form-submit");
const form = document.getElementById("form");
const deleteButton = document.getElementsByClassName('delete')
let current = 1;
let taskArray = [];
let tasksHTMLlist = [];

const newTask = () => {
    const cardObj = {
      id: current,
      name: taskName.value,
      description: description.value,
      urgency: urgency.value,
      date: dueDate.value,
    };
    taskArray.push(cardObj)
    return cardObj
}

const createHTML = (obj) => {
  const { id, name, description, urgency, date } = obj;
  let cardHTML = `   
        <div class="task-card" id="${id}">
            <h3><span>${id}: </span> ${name.toUpperCase()}</h3>
            <p>${description}</p>
            <p class="due">Due: ${date}</p>
            <h4 class="urgency-text"><strong>${urgency.toUpperCase()}</strong></h4>            
            <button class='delete'  >Delete</button>                               
        </div>     
    `;
  return cardHTML;
};


const render = () => {
    const tasksHTML = tasksHTMLlist.join("\n");
    cardSection.innerHTML = tasksHTML;
}


const createCard = (e) => {
  e.preventDefault();   
  const currentObj = newTask()
  let html = createHTML(taskArray[currentObj.id-1]);
  tasksHTMLlist.push(html);   
  render() 
  cardSection.style.display = "flex";
  current++;
  document.getElementById("form").reset();
};

const deleteBtn = (id) => {
    
    
    render()    
};


formSubmit.addEventListener("click", createCard);
deleteButton.addEventListener('click', deleteBtn)