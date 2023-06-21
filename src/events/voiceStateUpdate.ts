import { BotEvent } from '../types'
import { ChannelType, Events, Guild, GuildMember, PermissionFlagsBits, VoiceBasedChannel, VoiceState } from 'discord.js'
import { toSmallCaps, getRandom, logServerEvent } from '../functions'

const emotes = ['🎲', '🎮', '⚽', '💎', '🔈', '🎼']

const ADD_CHANNEL_ID = '1086716705293746317'

const createdChannel: string[] = []

const event: BotEvent = {
    name: Events.VoiceStateUpdate,
    execute: async (oldState: VoiceState, newState: VoiceState) => {
        if (newState.member.user.bot || oldState.member.user.bot) return
        const user: GuildMember = newState.member
        const guild: Guild = newState.guild
        const newChannel: VoiceBasedChannel = newState.channel
        const oldChannel: VoiceBasedChannel = oldState.channel

        if (oldChannel) {
            if (oldChannel.id !== ADD_CHANNEL_ID && newChannel?.id !== oldChannel.id) {
                logServerEvent(
                    guild,
                    user.user,
                    'Voice Update',
                    `${user.user.username} leave the voice channel \`${oldChannel.name}\``
                )
            }

            if (createdChannel.includes(oldChannel.id) && oldChannel.members.size === 0) {
                const index = createdChannel.indexOf(oldChannel.id)
                await oldChannel.delete()
                if (index !== -1) {
                    createdChannel.splice(index, 1)
                }
            }
        }

        if (newChannel) {
            if (newChannel.id !== ADD_CHANNEL_ID && newChannel.id !== oldChannel?.id) {
                logServerEvent(
                    guild,
                    user.user,
                    'Voice Update',
                    `${user.user.username} joined the voice channel \`${newChannel.name}\``
                )
            }

            if (newChannel.id === ADD_CHANNEL_ID) {
                const customChannel = await guild.channels.create({
                    name: `${getRandom(emotes)}᲼᲼᲼᲼᲼${toSmallCaps(user.displayName)}`,
                    type: ChannelType.GuildVoice,
                    permissionOverwrites: [
                        {
                            id: guild.roles.everyone.id,
                            allow: [PermissionFlagsBits.Connect, PermissionFlagsBits.Speak],
                        },
                    ],
                })
                user.voice.setChannel(customChannel)
                createdChannel.push(customChannel.id)
            }
        }
    },
}

export default event
