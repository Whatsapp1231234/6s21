/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/
let handler = async (m, { conn, text, usedPrefix, command }) => {
let regex = /х/g
if (!text) throw '⚠️ Номер отсутствовал.'
if (!text.match(regex)) throw `*Пример использования: ${usedPrefix + command} 79011033947x*`
let random = text.match(regex).length, total = Math.pow(10, random), array = []
for (let i = 0; i < total; i++) {
let list = [...i.toString().padStart(random, '0')]
let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
let info = await conn.fetchStatus(result).catch(_ => {})
array.push({ exists: true, jid: result, ...info })
} else {
array.push({ exists: false, jid: result })
}}
let txt = '_Зарегистрирован в WhatsApp_\n\n' + array.filter(v => v.exists).map(v => `_• Номер:_ wa.me/${v.jid.split('@')[0]}\n_*• Статус:*_ ${v.status || '_Нет описания_'}\n_*• Дата:*_ ${formatDate(v.setAt)}`).join('\n\n') + '\n\n_*Незарегистрирован*_\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
m.reply(txt)
}
handler.command = /^WhatsApp|whatsapp$/i
export default handler
function formatDate(n, locale = 'id') {
let d = new Date(n)
return d.toLocaleDateString(locale, { timeZone: 'Asia/Jakarta' })}
