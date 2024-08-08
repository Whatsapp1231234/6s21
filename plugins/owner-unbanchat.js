let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply('*[❗ИНФОРМАЦИЯ ❗] ЭТОТ ЧАТ БЫЛ УСПЕШНО РАЗБЛОКИРОВАН*')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^антибан$/i
handler.rowner = true
export default handler
