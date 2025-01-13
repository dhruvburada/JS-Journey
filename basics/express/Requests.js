const express =  require('express');

const app = express();

app.use(express.json());

let items = [{
    name : "Dhruv",
    age : 20,
    city : "Gondal"
}];

app.get('/', (req, res) => {
    res.json(items);
});


//add a item thorugh post request
app.post('/add', (req, res) => {
    const item = req.body;
    items.push(item);
    res.send(items);
});


//update an item through put request 

//update name with new name

app.put('/update/', (req, res) => {
    let name = req.body.name;
    let newName = req.body.newName;
    items.map((item,index) => {if(item.name == name) items[index].name = newName; return item;});

    res.send(items);
});


//delete an item in list through name using delete request
app.delete("/delete/",(req,res)=>
{
    let name = req.body.name;

    //if there is no name sent in the request then send status code 406 

    if (name == '') {res.status(406).send("No name parameter sent")}

    let newItems = items.filter((item) => {return item.name != name});
    
    res.send(newItems);
    
})


app.listen(3000,()=>{console.log('listening on port 3000')})