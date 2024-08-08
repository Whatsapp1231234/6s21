let handler = async (m, { conn, text }) => {
let who
if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
else who = m.chat
if (!who) throw `_*[❗ИНФОРМАЦИЯ❗] Введите @tag человека, которого вы хотите удалить из списка премиум-пользователей.*_`
if (!global.prems.includes(who.split`@`[0])) throw '_*[❗ИНФОРМАЦИЯ❗] Введённый пользователь не является премиум-пользователем.*_'
let index = global.prems.findIndex(v => (v.replace(/[^0-9]/g, '') + '@s.whatsapp.net') === (who.replace(/[^0-9]/g, '') + '@s.whatsapp.net'))
global.prems.splice(index, 1)
let textdelprem = `_*[❗ИНФОРМАЦИЯ❗] @${who.split`@`[0]} Теперь он больше не является частью премиум-пользователей.*_`
m.reply(textdelprem, null, { mentions: conn.parseMention(textdelprem) })
}
handler.help = ['delprem <@user>']
handler.tags = ['owner']
handler.command = /^(снять_премиум)$/i
handler.group = true
handler.rowner = true
export default handler
