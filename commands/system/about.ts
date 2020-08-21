import { MessageContent as MessageOptions } from 'eris'
import { Bot } from '../../utils/types'
import fetch from 'node-fetch'

export async function run (this: Bot): Promise<MessageOptions> {
  const timestamp = process.uptime()

  // hours
  const hours = Math.floor(timestamp / 60 / 60)

  delete require.cache[require.resolve('../../package.json')] // Always get the latest package.json

  const owner = this.users.get(process.env.OWNER as string)

  if (!(this.user && owner)) return {
    content: 'oops the owner or the bot user does not exist some how'
  }

  const esmBotMessages: string[] = await fetch('https://raw.githubusercontent.com/TheEssem/esmBot/master/messages.json').then(res => res.json())
  const messages = (await import('../../messages')).all
  const linesFromEsmBot = messages.filter(line => esmBotMessages.includes(line)).length
  const percentOfLines = (linesFromEsmBot * 100) / messages.length
  return {
    embed: {
      author: {
        name: `About ${this.user.username}`,
        icon_url: this.user.avatarURL,
        url: require('../../package.json').homepage
      },
      color: 0x454545,
      footer: {
        text: `Owned by ${owner.discriminator}`,
        icon_url: owner.avatarURL
      },
      fields: [{
        name: '✏ Credits',
        value: `
        URL for the -achievement command from esmBot by Essem#9261
        [${percentOfLines.toFixed(5)}% of the "Playing" messages from esmBot](https://github.com/TheEssem/esmBot/blob/master/messages.json)`,
        inline: false
      }, {
        name: '💬 Server Count',
        value: this.guilds.size,
        inline: true
        },{
        name: '🧑🏻 User Count',
        value: this.users.size,
        inline: true
      }, {
        name: 'ℹ Bot Version',
        value: require('../../package.json').version,
        inline: true
      }, {
        name: '⏰ Uptime',
        value: [hours, Math.floor(timestamp / 60) - (hours * 60), Math.floor(timestamp % 60)].join(':'),
        inline: true
      }, {
        name: '🖥 OS',
        value: process.platform,
        inline: true
      }, {
        name: '🙋🏻‍♂️ Support',
        value: process.env.SUPPORT,
        inline: false
      }, {
        name: '>_ Command Count',
        value: this.commands.size,
        inline: true
      }].filter(field => field.value) // Remove any fields without values (like support if it isn't in env)
    }
  }
}

export const help = 'Statistics about the bot.'
export const aliases = ['list', 'stats']
