let handler = m => m
handler.all = async function (m) {
let chat = global.db.data.chats[m.chat]
let name = conn.getName(m.sender)

if (/^цена|Аренда$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `🍒 АРЕНДА НА МЕСЯЦ 🍒 
*┏ ┅ ━━━━━━━━━━ ┅ ━*
*┇「🇷🇺АНУБИС🇷🇺」*
*┣ ┅ ━━━━━━━━━━ ┅ ━*
*┃ ПРИВЕТ  ✧${name}✧*
*┃✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧*
*┃👉🏻Здраствуйте. Все вопрсы*
*┃    по размещению бота у*
*┃    себя в группе.* 
*┃    Писать в л/с* 
*┃    Аренда Бота:*
*┃    600 РУБЛЕЙ АРЕНДА.* 
*┃✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧✧*
*┃wa.me/79011033947*
*┗ ┅ ━━━━━━━━━━ ┅ ━*`, m) //wm, null, [['Меню', '#меню']], m) botones :V

}

if (/^Что такое бот?|Что такое бот$/i.test(m.text) ) { //sem prefixo
    conn.reply(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆ ——————«•»——————
┆ ☆::Что такое бот WhatsApp?::☆*
┆——————«•»——————
┆ Бот — это полу искусственный интеллект, который выполняет задачи
┆ для указания с помощью команд, в случае WhatsApp 
┆ Вы можете создавать стикеры, скачивать музыку, видео, 
┆ создавать пользовательские логотипы и многое другое, 
┆ Это автоматизированным способом, то есть человеком 
┆ не мешает процессу 
┆ Чтобы увидеть меню команд, вы можете использовать #меню
┆ 
┆ 「 ☆АНУБИС☆ 」
╰━━━⊰ ${vs} ⊱━━━━დ*`, m) //wm, null, [['Меню', '#меню']], m) botones :V

}  
return !0 
}
export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}