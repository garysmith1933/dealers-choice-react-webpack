const Sequelize = require("sequelize")
const sequelize = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/dealers_webpack')

const Show = sequelize.define('show', {
    name: Sequelize.STRING
})

// const express = require("express")


const init = async() => {
    await sequelize.sync({force: true})
    
    await Promise.all([
        Show.create({name: 'Attack on Titan'}),
        Show.create({name: 'This is Us'}),
        Show.create({name: 'Ranking Of Kings'}),
        Show.create({name: 'My Hero Academia'})
        ])
    
}

init()