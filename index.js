const express = require("express");
const routes = require("./routes")

const PORT = 3000;
const app = express();



app.use(express.json())

// Default
app.get('/', (req, res) => {   
    return res.status(200).send("hello world");
});

// Task Manger API
app.use('/api/v1', routes);

app.listen(PORT,(err)=>{
    console.log(`Express Server running on PORT:${PORT}`);
})