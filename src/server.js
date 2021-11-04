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

app.get("/login", (req, res) => {
    console.log(req.user);
    
})

app.post('/api/signup', (req, res) => {
    const email = req.user.email;
    const username = req.user.username
    const firstName = req.user.firstName;
    const lastName = req.user.lastName;
    const phoneNumber = req.user.phoneNumber;
        
    (async () => {
        try {
          await db.collection('items').doc('/' + req.body.id + '/')
              .create({item: req.body.item});
          return res.status(200).send();
        } catch (error) {
          console.log(error);
          return res.status(500).send(error);
        }
      })();
  });

app.listen(port, () => {
    console.log(`listening on port ${port}`)
})