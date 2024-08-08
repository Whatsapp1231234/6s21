let handler = async (m, { conn, command, text }) => {
let love = `*❤️❤️ СЧЕТЧИК ЛЮБВИ ❤️❤️*
_*Любовь к ${text} Это для Вас* *${Math.floor(Math.random() * 100)}%* *В 100%*_
_*Вы должны попросить ее стать вашей девушкой ?*_
`.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(любовь)$/i
export default handler
