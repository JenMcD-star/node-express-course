const express = require("express");
const app = express();
const path = require('path')


app.get("/", (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, './new-public/index.html'))
});

app.get("/sample", (req, res) => {
    res.status(200).send("this is working")
})

app.all('*', (req, res)=> {
    res.status(404).send('<h1> page not found</h1>')
  })

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
