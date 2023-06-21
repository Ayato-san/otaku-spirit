import { Guild, GuildMember, User } from 'discord.js'

/**
 * reatrive all users from a guild
 * @param guild the guild where we reatrive members
 * @returns return a promise who contains the users
 */
const getMembers = async (guild: Guild): Promise<User[]> => {
    const memberList = await guild.members.fetch()
    return memberList.map((member: GuildMember) => {
        return member.user
    })
}

/**
 * reatrive all bots from a guild
 * @param guild the guild where we reatrive bots
 * @returns return a promise who contains the bots
 */
const getBotMembers = async (guild: Guild): Promise<User[]> => {
    const botList: User[] = (await getMembers(guild)).filter((user: User) => {
        return user.bot
    })
    return botList
}

/**
 * reatrive all non bots users from a guild
 * @param guild the guild where we reatrive non bots users
 * @returns return a promise who contains the non bots users
 */
const getUserMembers = async (guild: Guild): Promise<User[]> => {
    const nonBotList: User[] = (await getMembers(guild)).filter((user: User) => {
        return !user.bot
    })
    return nonBotList
}

export { getMembers, getBotMembers, getUserMembers }
