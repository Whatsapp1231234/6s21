let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = true
m.reply('_*[❗ИНФОРМАЦИЯ ❗] Этот чат был успешно заблокирован.*_\n_*—◉ Бот не будет реагировать ни на одну команду, пока этот чат не будет разблокирован.*_')
}
handler.help = ['banchat']
handler.tags = ['owner']
handler.command = /^банчат$/i
handler.rowner = true
export default handler
