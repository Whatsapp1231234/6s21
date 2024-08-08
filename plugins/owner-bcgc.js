import fs from 'fs'
let handler = async (m, { conn, text } ) => {  
let groups = Object.entries(conn.chats).filter(([jid, chat]) => jid.endsWith('@g.us') && chat.isChats && !chat.metadata?.read_only && !chat.metadata?.announce).map(v => v[0])
let cc = text ? m : m.quoted ? await m.getQuotedObj() : false || m
let teks = text ? text : cc.text
for (let id of groups) { 
conn.sendButton(id, `*╔══❰ 𝐂𝐎𝐌𝐔𝐍𝐈𝐂𝐀𝐃𝐎 ❱══╗*\n*║*\n*╠❧* ${text}\n*║*\n*╚══════════════╝*`, '𝙀𝙎𝙏𝙀 𝙀𝙎 𝙐𝙉 𝘾𝙊𝙈𝙐𝙉𝙄𝘾𝘼𝘿𝙊 𝙊𝙁𝙄𝘾𝙄𝘼𝙇\n' + wm, fs.readFileSync('./src/avatar_contact.png'), [['🤖 𝙾𝚆𝙽𝙴𝚁 🤖', '.owner'],['💎 𝙳𝙾𝙽𝙰𝚁 💎', '.donasi']], false, { 
contextInfo: { externalAdReply: {
title: 'ᴄᴏᴍᴜɴɪᴄᴀᴅᴏ ᴏғɪᴄɪᴀʟ ᴀ ɢʀᴜᴘᴏs',
body: 'ʙʏ ᴛʜᴇ ᴍʏsᴛɪᴄ ﹣ ʙᴏᴛ', 
sourceUrl: `https://github.com/BrunoSobrino/TheMystic-Bot-MD`, 
thumbnail: fs.readFileSync('./Menu2.jpg') }}})}
m.reply(`*[❗ИНФОРМАЦИЯ ❗] СООБЩЕНИЕ, ОТПРАВЛЕННОЕ НА ${groups.length} ГРУППА/Ы*\n\n*ЗАМЕТКА: ЭТА КОМАНДА МОЖЕТ ГЛЮЧИТЬ И ОТПРАВЛЯТЬСЯ НЕ ВО ВСЕ ЧАТЫ, ИЗВИНИТЕ ПОКА*`)
}
handler.help = ['broadcastgroup', 'bcgc'].map(v => v + ' <teks>')
handler.tags = ['owner']
handler.command = /^(репост)$/i
handler.rowner = true
export default handler
