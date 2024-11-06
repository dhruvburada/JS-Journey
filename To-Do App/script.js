let todo = [{"do some work":false},{"Do some exercise":true}];
let tempIndex;
let tempValue;

console.log(todo.length);
function addTask()
{
    let task = document.getElementById("taskInput").value;

    todo.push({[task]:false});
    displayTasks(); 
    document.getElementById("taskInput").value = "";
}

function deleteTask(index)
{
    todo.splice(index, 1);
    displayTasks();  // to reflect the changes immediately in the UI
}

function editTask(index)
{
    let taskKey =Object.keys(todo[index])[0];
    console.log(taskKey);
    let taskValue = todo[index][taskKey];
    tempIndex = index;
    tempValue = taskValue;

    document.getElementById("taskInput").value = taskKey;
    document.getElementById("taskInput").focus();
    document.getElementById("UpdateButton").style.display = "block";
    document.getElementById("AddTask").style.display = "none";
}

function updateTask()
{
    taskValue = document.getElementById("taskInput").value;
    todo.splice(tempIndex,1);
    todo.push({[taskValue]:tempValue});  // Toggle the status of the task
    document.getElementById("taskInput").value = "";
    document.getElementById("AddTask").style.display = "block";
    document.getElementById("UpdateButton").style.display = "none";
    displayTasks(); 

}

function displayTasks()
{
    let taskList = document.getElementsByClassName("task-list")[0];
    taskList.innerHTML = "";
    for(let i = 0; i < todo.length; i++)
    {
        let taskCard = document.createElement("div");
        taskCard.className = "task";
        
        // Use [0] to correctly get the first and only key in each object
        let taskKey = Object.keys(todo[i])[0];
        let taskValue = todo[i][taskKey];
        
        // Modify task HTML creation
        let task = `
            <p ${taskValue ? 'class="line-through"' : ""}>${taskKey}</p>
            <div>
            <input type="checkbox" id="task${i}" ${taskValue ? "checked" : ""} onclick="updateStatus(${i})">
           <i class="fa-solid fa-trash" onclick="deleteTask(${i})"></i>
           <i class="fa-solid fa-pen-to-square" onclick="editTask(${i})"></i>
            </div>
            
        `;
        
        taskCard.innerHTML = task;
        taskList.appendChild(taskCard);
    }
}

function updateStatus(index)
{
    // Access the first and only key in the object
    let taskKey = Object.keys(todo[index]);
    todo[index][taskKey] = !todo[index][taskKey];
    displayTasks();
    console.log(todo);  // to reflect the changes immediately in the UI
}
