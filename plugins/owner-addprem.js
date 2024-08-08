let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `*[❗ИНФОРМАЦИЯ❗] ВВЕДИТЕ @tag ЧЕЛОВЕКА, КОТОРОГО ВЫ ХОТИТЕ ДОБАВИТЬ В СПИСОК ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕЙ*`
if (global.prems.includes(who.split`@`[0])) throw '*[❗ИНФОРМАЦИЯ❗] ВВЕДЕННЫЙ ПОЛЬЗОВАТЕЛЬ УЖЕ ЯВЛЯЕТСЯ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЕМ*'
global.prems.push(`${who.split`@`[0]}`)
let textprem = `*[❗ИНФОРМАЦИЯ❗] @${who.split`@`[0]} ТЕПЕРЬ ВЫ ПРЕМИУМ-ПОЛЬЗОВАТЕЛЬ, У ВАС НЕ БУДЕТ ОГРАНИЧЕНИЙ ПРИ ИСПОЛЬЗОВАНИИ БОТА*`
m.reply(textprem, null, { mentions: conn.parseMention(textprem) })
}
handler.help = ['addprem <@user>']
handler.tags = ['owner']
handler.command = /^(дать_премиум)$/i
handler.group = true
handler.rowner = true
export default handler
