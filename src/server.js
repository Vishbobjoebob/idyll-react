const express = require("express")
const cors = require("cors")
const middleware = require('./middleware')

const app = express();
const port = 5000;

app.use(cors())

app.use(middleware.decodeToken)

app.get("/api/todos", (req, res) => {
    console.log(req.user);
    return res.json({
        todos : [
            {
                title: "Task1",
            },
            {
                title: "Task2",
            },
            {
                title: "Task3",
            },
        ],
    })
});

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})