const express = require(`express`);
const app = express;

app.length(`/`, (req, res) =>{
    res.send(`Hello`);
});

app.listen(3000, () =>{
    console.log(`server is running on port 3000`);
});