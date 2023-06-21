import { Guild, User } from 'discord.js'
import { getMembers } from './'

/**
 * reatrive all non bots users from a guild
 * @param guild the guild where we reatrive non bots users
 * @returns return a promise who contains the non bots users
 */
export default async (guild: Guild): Promise<User[]> => {
    const nonBotList: User[] = (await getMembers(guild)).filter((user: User) => {
        return !user.bot
    })
    return nonBotList
}
