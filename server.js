const express = require(`express`);
const app = express;
const port = 5000;


app.length(`/`, (req, res) =>{
    res.send(`Hello`);
});

app.listen(port, () =>{
    console.log(`Server is running on port ${port}`);
});