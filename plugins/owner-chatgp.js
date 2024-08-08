/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Альберто и Эшли⚘
-----------------------------------------------------------------------------------------*/

import { randomBytes } from 'crypto'
let link = /chat.whatsapp.com/
let handler = async (m, { conn, text, groupMetadata }) => {
if (m.isBaileys && m.fromMe)
return !0
if (!m.isGroup) return !1
if (!text) throw '*_⚠ • ️Введите -text-, чтобы отправить сообщение всем группам._*'
const linkThisGroup = `${link}`
if (m.text.includes(linkThisGroup)) return conn.reply(m.chat, '❌ *_Вы не можете спамить ссылки на другие группы._*', m)
let time = global.db.data.users[m.sender].msgwait + 300000
if (new Date - db.data.users[m.sender].msgwait < 300000) throw `*_⚠️ • Вы должны подождать ${msToTime(time - new Date())} Повторная отправка сообщения._*`
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = await conn.getName(m.sender)
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let fakegif = { key: {participant: `0@s.whatsapp.net`, ...("6289643739077-1613049930@g.us" ? { remoteJid: "6289643739077-1613049930@g.us" } : {})},message: {"videoMessage": { "title": '🐱⸽⃕NʏᴀɴCᴀᴛBᴏᴛ - MD🍁⃨፝⃕✰', "h": `Hmm`,'seconds': '99999', 'gifPlayback': 'true', 'caption': '🧿 𝚃𝚑𝚎 🇷🇺АНУБИС🇷🇺 🔮', 'jpegThumbnail': false }}}
let teks = `*🌺 • Группа:* ${groupMetadata.subject}\n*🍀 • Из:* ${name}\n*🍁 • Номер:* wa.me/${who.split`@`[0]}\n*📧 • Сообщение:* ${text}`
for (let id of groups) {
await conn.sendMessage(id, { text: teks }, { quoted: fakegif })
global.db.data.users[m.sender].msgwait = new Date * 1
}}
handler.command = /^(репост1)$/i
handler.owner = true
handler.group = true
export default handler
function msToTime(duration) {
var milliseconds = parseInt((duration % 1000) / 100),
секунда = Math.floor((duration / 1000) % 60),
минута = Math.floor((duration / (1000 * 60)) % 60),
час = Math.floor((duration / (1000 * 60 * 60)) % 24)
час = (час < 10) ? "0" + час : час
минута = (минут < 10) ? "0" + минута : минута
секунда = (секунд < 10) ? "0" + секунда : секунда
return минут + " m " + секунд + " s " }
const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
const randomID = length => randomBytes(Math.ceil(length * .5)).toString('hex').slice(0, length)
