const express = require('express')
const app = express()
const path = require ("path")
app.set('view engine', 'hbs');   

  const viewsDirectory = path.join (__dirname , "temp1/views" ) 
  app.set( "views" , viewsDirectory)
  const x =  path.join(__dirname , 'public')
    app.use (express.static (x))

  var hbs = require ('hbs')

  const partialsPath = path.join (__dirname , 'temp1/partials') 
  hbs.registerPartials(partialsPath)

  app.get('/' , (req , res) => {
    res.render('index' , {
        title: "HOME",
        desc : "this is home page"
    })
})
app.get('/about' , (req , res) => {
    res.render('about' , {
        title : "about",
        name : "nesrine ben romdhane",
        city: "tunis",
        age: 23,
       
    })
})
app.get('/contact' , (req , res) => {
    res.render('contact' , {
        title : "contact",
        instagrame : "nesrine ben romdhane",
        phone : 51434140,
        facebook:"nesrine ben romdhane",
        whatsapp:+21651434140,
             
    })
})

app.get('/service' , (req , res) => {
    res.render('service' , {
        title : "SERVICE",
        name : "ahmed",
        city: "tunis",
        age: 24,
        img1 : "images/trainer-3.jpg"
    })
})

app.get('/team' , (req , res) => {
    res.render('team' , {
        title : "TEAM",
        name : "abir",
        city: "sfax",
        age: 27,
        img2 : "images/trainer-2.jpg"
    })
})


const port = process.env.PORT || 3000
app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
    })