import { SlashCommandBuilder, AttachmentBuilder, CommandInteraction } from 'discord.js'
import { SlashCommand } from '../../types'
import { sendMessage } from '../../functions'

const escapeString =
    '||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||||​||'

export const command: SlashCommand = {
    name: 'gostmention',
    data: new SlashCommandBuilder()
        .setName('gostmention')
        .setDescription('Ping un rôle sans afficher sa mention')
        .addRoleOption((option) => {
            return option.setName('mention').setDescription('Role a ping').setRequired(true)
        })
        .addStringOption((option) => {
            return option
                .setName('message')
                .setDescription('Message à afficher (replacez les sauts de ligne par : "\\n")')
                .setMaxLength(1000)
                .setRequired(true)
        })
        .addAttachmentOption((option) => {
            return option.setName('image').setDescription("ajout d'une image")
        }),
    execute: async (interaction: CommandInteraction) => {
        const mention = interaction.options.get('mention').value
        const message: string = interaction.options.get('message').value.toString().split('\\n').join('\n')
        const image = interaction.options.get('image')
        const attachment: AttachmentBuilder[] = []
        if (image !== null) {
            attachment.push(
                new AttachmentBuilder(image.attachment.url, {
                    name: image.attachment.name,
                    description: image.attachment.description,
                })
            )
        }
        await sendMessage(interaction, {
            allowedMentions: { roles: [`${mention}`] },
            content: `${message}${escapeString}<@&${mention}>`,
            files: attachment,
        })
    },
}
