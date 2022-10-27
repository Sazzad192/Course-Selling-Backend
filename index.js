const express = require('express')
const app = express()
var cors = require('cors')
const port = process.env.PORT || 5000;

app.use(cors())

const categories= require('./data/categories.json');
const courses = require('./data/courses.json')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/categories', (req, res)=>{
    res.send(categories)
})

app.get('/categories/:id', (req, res) =>{
    const id = req.params.id;

    if(id === '03'){
      const fullstack = courses.filter(course => course.cat_id === "01" || course.cat_id === "02");
      res.send(fullstack);
    }
    else{
      const course = courses.filter(course => course.cat_id === id);
      
      res.send(course);
    }
    
})

app.get('/details', (req, res)=>{
  res.send(courses)
})

app.get('/details/:id', (req, res)=>{
    const id = req.params.id;
    const selected= courses.find(n => n.id === id);
    res.send(selected)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})