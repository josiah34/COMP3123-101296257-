const express = require('express');
const app = express();
const router = express.Router();
const path = require('path');
const SERVER_PORT = 3001
const fs = require('fs')
let jsonUser = require('./user.json')

/*
- Create new html file name home.html 
- add <h1> tag with message "Welcome to ExpressJs Tutorial"
- Return home.html page to client
*/
router.get('/home', (req,res) => {
  res.sendFile(path.join(__dirname+'/home.html'));
});

/*
- Return all details from user.json file to client as JSON format
*/
// router.get('/profile', (req,res) => {
//   res.send('This is profile router');
// });

router.get('/profile', (req, res) => {

  fs.readFile('./user.json', (err, json) => {
      let obj = JSON.parse(json);
      res.json(obj);
  });

})

/*
- Modify /login router to accept username and password as query string parameter
- Read data from user.json file
- If username and  passsword is valid then send resonse as below 
    {
        status: true,
        message: "User Is valid"
    }
- If username is invalid then send response as below 
    {
        status: false,
        message: "User Name is invalid"
    }
- If passsword is invalid then send response as below 
    {
        status: false,
        message: "Password is invalid"
    }
*/
router.get('/login', (req,res) => {
  let username = req.query.username;
  let password = req.query.password;
  if (username == jsonUser.username && password == jsonUser.password)

  res.status(200).json({
  
  status: true,
  
  message: "User Is valid"
  
  });
  
  else if (username === jsonUser.username)
  
  res.status(401).json({
  
  status: false,
  
  message: "Password is invalid"
  
  })
  
  else
  
  res.status(401).json({
  
  status: false,
  
  message: "User Name is invalid"
  
  })
})

/*
- Modify /logout route to accept username as parameter and display message
    in HTML format like <b>${username} successfully logout.<b>
*/
router.get('/logout/:un', (req,res) => {
  let usernameLogout = req.params.un
  console.log(usernameLogout)
  res.send(`<b>${usernameLogout} successfully logout.<b>`)
});

app.use('/', router);

app.listen(SERVER_PORT, () => {
  console.log(`Listening on port ${SERVER_PORT}`)}
  )