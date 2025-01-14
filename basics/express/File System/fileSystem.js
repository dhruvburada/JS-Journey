const fs = require('fs');
const express = require('express');

const app = express();

app.get('/files/', (req, res) => { 


    let filesList;
    fs.readdir("./Files/", (error,files) =>
    {
        if (error)
        {
            console.error(error);
            res.status(100).send(error);
        }

        console.log(files);
        filesList = files;
        res.send(filesList);
    });

    
});

app.get("/files/:filename", (req, res) => {
    const filename = req.params.filename;
    fs.readFile(`./Files/${filename}`,"utf8", (error,data) => {
        if(error)
        {
            res.status(404).send("File not found  "+error);
            
        }

        if(data == "")
        {
            res.send("This is empty file");
        }
        res.send(data);
    })

})

app.listen(3000, () => console.log('Server is running on port 3000'));