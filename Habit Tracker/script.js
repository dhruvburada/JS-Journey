function updateHabitStatus(index,status) {
        
    console.log(typeof status)
    if(status == 1)
    {
        habits[index].status = "Completed";
        let container = document.getElementsByClassName("completed-habits")[0];
        const completedhabit = document.createElement("li");
        completedhabit.innerHTML = habits[index].name;
        container.appendChild(completedhabit);
    }
    else
    {
        habits[index].status = "Skipped";
        let container = document.getElementsByClassName("pending-habits")[0];
        const skippedhabit = document.createElement("li");
        skippedhabit.innerHTML = habits[index].name;
        container.appendChild(skippedhabit);

    }
    
    loadData();
}

function loadData()
{
    const habitsContainer = document.getElementsByClassName("habit-container")[0];
    habitsContainer.innerHTML ="";

    // const compltedContainer = document.getElementsByClassName("completed-habits-list")[0];
    // compltedContainer.innerHTML ="";


habits.forEach(element => {
    if(element.status == "Pending")
{
    const habitDiv = document.createElement("div");
    habitDiv.id = "habit";

    habitDiv.innerHTML = 

        `<div>
            <h4>${element.name}</h4>
            <p>${element.description}</p> 
        </div>
        <div class="habitcenter">
            <p>${element.duration}</p>
            <i class="fa fa-edit"></i>
            <button class="secondary-button"><i class="fa fa-trash"></i></button>
        </div>
        <span class="listofhabits"></span>
        <div style="display: flex;flex-direction:column; align-items: center;">
            <input type="checkbox" class="habit-status-completed" onclick="updateHabitStatus(${habits.indexOf(element)},1)">
            <p>Completed</p>
        </div>
        <div style="display: flex;flex-direction:column; align-items: center;">
            <input type="checkbox" class="habit-status-skipped" onclick="updateHabitStatus(${habits.indexOf(element)},2)">
            <p>Skipped</p>
        </div>`

        habitsContainer.appendChild(habitDiv);
    }
    });


    



}

function Addhabits()
{
    console.log("Preparing data");
    let habit = document.getElementById("habit-text").value;
    let description = document.getElementById("description").value;
    let duration = document.getElementById("duration").value;

    console.log("Adding data...");
    habits.push({"name":habit,"description":description,"duration":duration,"status":"pending"})
    loadData();

    console.log("Data added");

}

