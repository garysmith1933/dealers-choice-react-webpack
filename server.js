const Sequelize = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_webpack')

const Show = sequelize.define('show', {
    name: Sequelize.STRING
})

const express = require("express")
const app = express()
const path = require("path")
// app.use(express.json())

app.get('/', (req,res) => {
    res.sendFile(path.join(__dirname, 'index.html'))
})

app.get('/api/shows', async(req,res,next)=>{
    try {
        res.send(await Show.findAll())
    } catch(err) {
        next(err)
    }
})

app.post('/api/shows', async(req,res,next)=>{
    try {
        res.send(await Show.create({name:req.body}))
    } catch(err) {
        next(err)
    }
})



const init = async() => {
    await sequelize.sync({force: true})
    
    await Promise.all([
        Show.create({name: 'Attack on Titan'}),
        Show.create({name: 'This is Us'}),
        Show.create({name: 'Ranking Of Kings'}),
        Show.create({name: 'My Hero Academia'})
        ])
    
    const port = process.env.PORT || 8080;
    app.listen(port, ()=> console.log(`listening on port ${port}`))
}

init()