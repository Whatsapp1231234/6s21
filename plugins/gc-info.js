let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { antiToxic, antiTraba, antiviewonce, isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `_*「Информация о группе」*_\n
_*Груповая идентификация:*_ 
${groupMetadata.id}

_*Имя:*_ 
${groupMetadata.subject}

_*Описание:*_ 
${groupMetadata.desc?.toString() || 'НЕТ ОПИСАНИЯ'}

_*Всего участников:*_
${participants.length} _*Человек*_

_*Создатель группы:*_ 
@${owner.split('@')[0]}

_*Администраторы Групп:*_
${listAdmin}

_*Автоматические Опции:*_
—◉ Приветствие: ${welcome ? '✅' : '❌'}
—◉ Обнаружение: ${detect ? '✅' : '❌'} 
—◉ Антиссылка: ${antiLink ? '✅' : '❌'} 
—◉ Антиссылка𝟸: ${antiLink2 ? '✅' : '❌'} 
—◉ Аудио: ${audios ? '✅' : '❌'}  
—◉ Антимат: ${antiToxic ? '✅' : '❌'}  
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['инфогрупп']
handler.tags = ['группа']
handler.command = /^(инфогрупп|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
