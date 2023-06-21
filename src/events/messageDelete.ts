import { logServerEvent } from '../functions'
import { BotEvent } from '../types'
import { Events, Message } from 'discord.js'

const INGORED_CHANNEL = ['1120693965864304711']

const event: BotEvent = {
    name: Events.MessageDelete,
    execute: (message: Message) => {
        if (INGORED_CHANNEL.includes(message.channelId)) {
            return
        }

        logServerEvent(
            message.guild,
            message.author,
            'Message Delete',
            `${message.author.username}'s message has been deleted in the channel <#${message.channelId}>\n---------\n${message.content}`
        )
    },
}

export default event
