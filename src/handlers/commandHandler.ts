import { Client } from 'discord.js'
import { readdirSync } from 'fs'
import { join, resolve } from 'path'
import { REST, Routes } from 'discord.js'
import { SlashCommand } from '../types'

module.exports = async (client: Client) => {
    const slashCommandsDir = resolve(__dirname, '../commands')
    const body = []

    readdirSync(slashCommandsDir).forEach((folder) => {
        const categoryFolder = resolve(slashCommandsDir, folder)

        readdirSync(categoryFolder).forEach((file) => {
            if (!file.endsWith('.js')) return

            const command: SlashCommand = require(`${categoryFolder}/${file}`).command

            client.slashCommands.set(command.name, command)
            body.push(command.data.toJSON())
        })
    })

    const rest = new REST({ version: '10' }).setToken(process.env.TOKEN)

    try {
        await rest.put(Routes.applicationCommands(process.env.CLIENT_ID), { body: body })
        console.log('Successfully reloaded application (/) commands.')
    } catch (error) {
        console.error(error)
    }
}

