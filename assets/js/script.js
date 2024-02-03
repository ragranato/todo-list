const cardSection = document.getElementById("task-cards");
const taskName = document.getElementById("task-name");
const description = document.getElementById("description");
const dueDate = document.getElementById("due-date");
const urgency = document.getElementById("urgency");
const formSubmit = document.getElementById("form-submit");
const form = document.getElementById("form");
let current = 1;
const taskArray = [];

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
        <div class="task-card">
            <h3><span>${id}: </span> ${name.toUpperCase()}</h3>
            <p>${description}</p>
            <p class="due">Due: ${date}</p>
            <h4 class="urgency-text"><strong>${urgency.toUpperCase()}</strong></h4>
            <div>
                <button class='delete' >Delete</button>
                
            </div>        
        </div>     
    `;

  return cardHTML;
};



const createCard = (e) => {
  e.preventDefault();   
  const currentObj = newTask() 
  const tasksHTMLlist = []
  
  taskArray.forEach((task) =>{
    let html = createHTML(task);
    tasksHTMLlist.push(html)    
  })
  cardSection.innerHTML += tasksHTMLlist.join("\n");
  cardSection.style.display = "flex";
  current++;
};

const deleteBtn = () => {};
const editBtn = () => {};

formSubmit.addEventListener("click", createCard);
