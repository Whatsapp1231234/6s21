let linkRegex = /https:/i
export async function before(m, {conn, isAdmin, isBotAdmin, text }) {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
let bot = global.db.data.bot[this.user.jid]
let chats = global.db.data.bot[this.user.jid].chats || {}
let chat = chats.groups[m.chat] || {}
let settings = bot.settings || {}

let delet = m.key.participant
let bang = m.key.id
const isGroupLink = linkRegex.exec(m.text)
if (chat.antiLink2 && isGroupLink && !isAdmin) {
if (isBotAdmin) {
const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`
const linkThisGroup2 = `https://www.youtube.com/`
const linkThisGroup3 = `https://youtu.be/`
if (m.text.includes(linkThisGroup)) return !0
if (m.text.includes(linkThisGroup2)) return !0
if (m.text.includes(linkThisGroup3)) return !0
}    
await conn.sendMessage(m.chat, { text: `*「 АНТИССЫЛКА 2 」*\n*ДО ВСТРЕЧИ, ДЕТКА 👋, ${await this.getName(m.sender)} ТЫ НАРУШИЛ ПРАВИЛА ГРУППЫ, ТЫ БУДЕШЬ УНИЧТОЖЕН...!!*${isBotAdmin ? '' : '\n\n*[❗INFO❗] БОТ НЕ ЯВЛЯЕТСЯ АДМИНИСТРАТОРОМ, ОН НЕ МОЖЕТ УНИЧТОЖАТЬ ЛЮДЕЙ*'}`}, wm, ['выключить антиссылка2', '/Выключить антиссылка2'], m)    
if (isBotAdmin && settings.restrict) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
} else if (!bot.restrict) return m.reply('*[❗INFO❗] У ВЛАДЕЛЬЦА БОТА ОГРАНИЧЕНИЯ НЕ ВКЛЮЧЕНЫ (#_включить ограничить_) СВЯЖИТЕСЬ С НИМ, ЧТОБЫ ОН ВКЛЮЧИЛ ЕГО*')
}
return !0
}
