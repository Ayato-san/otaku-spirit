import { BotEvent } from '../types'
import { ActivityType, Client, Events } from 'discord.js'

const event: BotEvent = {
    name: Events.ClientReady,
    once: true,
    execute: (client: Client) => {
        client.user.setPresence({
            activities: [
                { name: 'https://ayato-san.fr', type: ActivityType.Watching, url: 'https://www.twitch.tv/ayat0_san_' },
            ],
            status: 'online',
        })
        console.log(`💪 Logged in as ${client.user?.tag}`)
    },
}

export default event

