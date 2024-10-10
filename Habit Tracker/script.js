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

function deleteHabit(index)
{
    habits.splice(index,1); 
    console.log("Habit deleted");
    loadData();
 
}

function Updatehabit()
{

    if(currentHabitIndex != -1)
    {

        let habit = document.getElementById("habit-text").value;
        let description = document.getElementById("description").value;
        let duration = document.getElementById("duration").value;
        habits[currentHabitIndex].name = habit;
        habits[currentHabitIndex].description = description;
        habits[currentHabitIndex].duration = duration;
        loadData();
        document.getElementsByClassName("primary-button")[0].style.display = "inline-block";
        document.getElementsByClassName("update-button")[0].style.display = "none";
        document.getElementById("habit-text").value = "";
        document.getElementById("description").value = "";
        document.getElementById("duration").value = "";
    }

}

function editHabit(index)
{
    currentHabitIndex = index;
    document.getElementsByClassName("primary-button")[0].style.display = "none";
    document.getElementsByClassName("update-button")[0].style.display = "inline-block";
    
    document.getElementById("habit-text").value = (String)(habits[index].name);
    document.getElementById("description").value = habits[index].description;
    document.getElementById("duration").value = habits[index].duration;


}

function loadData()
{
    const habitsContainer = document.getElementsByClassName("habit-container")[0];
    habitsContainer.innerHTML ="";


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
            <i class="fa fa-edit" onclick="editHabit(${habits.indexOf(element)})"></i>
            <button class="secondary-button" onclick="deleteHabit(${habits.indexOf(element)})"><i class="fa fa-trash"></i></button>
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
    let habit = document.getElementById("habit-text").value;
    let description = document.getElementById("description").value;
    let duration = document.getElementById("duration").value;

    habits.push({"name":habit,"description":description,"duration":duration,"status":"Pending"})
    loadData();

    console.log(habits);

}

