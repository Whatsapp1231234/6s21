let handler = async (m, { command, text }) => m.reply(`
*⁉️ ВОПРОСЫ ⁉️*
  
*ВОПРОС:* ${text}
*ОТВЕТ:* ${['Да' , 'Может быть да' , 'Возможно' , 'Вероятно, нет' , 'Нет' , 'Невозможно'].getRandom()}
`.trim(), null, m.mentionedJid ? {
mentions: m.mentionedJid
} : {})
handler.help = ['вопрос <СМС>?']
handler.tags = ['kerang']
handler.command = /^вопрос$/i
export default handler
