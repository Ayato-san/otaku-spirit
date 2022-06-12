const { Client, Collection } = require('discord.js')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config()

const client = new Client({ intents: 513 })

client.commands = new Collection()

const HANDLERS = ['CommandUtil', 'EventUtil']
HANDLERS.forEach(handler => {
    require(`./utils/handlers/${handler}`)(client)
})

process.on('exit', code => {
    console.log(`The process stopped with a code : ${code}`)
})
process.on('uncaughtException', (err, origin) => {
    console.log(`UNCAUGHT_EXCEPTION : ${err}`, `Origin : ${origin}`)
})
process.on('unhandledRejection', (reason, promise) => {
    console.log(`UNHANDLED_REJECTION : ${reason}\n-----\n`, promise)
})
process.on('warning', (...args) => {
    console.log(...args)
})

mongoose
    .connect(process.env.DATABASE_URI, {
        autoIndex: false,
        maxPoolSize: 10,
        serverSelectionTimeoutMS: 5000,
        socketTimeoutMS: 45000,
        family: 4
    })
    .then(() => {
        console.log('\nMongoose est connecter')
    })
    .catch(err => {
        console.error(err)
    })

client.login(process.env.DISCORD_TOKEN)
