import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, usedPrefix: _p, __dirname, text, isPrems}) => {
  if (usedPrefix == 'a' || usedPrefix == 'A') return;
  try {
    const pp = imagen4;
    // let vn = './media/menu.mp3'
    const img = './Menu2.jpg';
    const d = new Date(new Date + 3600000);
    const locale = 'es';
    const week = d.toLocaleDateString(locale, {weekday: 'long'});
    const date = d.toLocaleDateString(locale, {day: 'numeric', month: 'long', year: 'numeric'});
    const _uptime = process.uptime() * 1000;
    const uptime = clockString(_uptime);
    const user = global.db.data.users[m.sender];
    const {money, joincount} = global.db.data.users[m.sender];
    const {exp, limit, level, role} = global.db.data.users[m.sender];
    const rtotalreg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
    const rtotal = Object.entries(global.db.data.users).length || '0'
    const more = String.fromCharCode(8206);
    const readMore = more.repeat(850);
    const taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    const doc = ['pdf', 'zip', 'vnd.openxmlformats-officedocument.presentationml.presentation', 'vnd.openxmlformats-officedocument.spreadsheetml.sheet', 'vnd.openxmlformats-officedocument.wordprocessingml.document'];
    const document = doc[Math.floor(Math.random() * doc.length)];
    const str = `╭═〘 ✯✯✯✯✯✯✯✯✯ 〙═╮
║◉— *«🇷🇺АНУБИС🇷🇺»* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Привет, ${taguser}*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ _*Владелец: Михаил*_ 
║➤ _*Номер: _wa.me/79011033947*_
║➤ _*Дата: ${date}*_
║➤ _*Активное время: ${uptime}*_
║➤ _*Зарегистрированные пользователи: ${rtotalreg}*_
║➤ _*Всего пользователей: ${rtotal}*_
╰═╡✯✯✯✯✯✯✯✯✯╞═╯
${readMore}

╭═〘 ✯✯✯✯✯✯✯✯✯ 〙═╮
┃ ➪*ИНФОРМАЦИЯ О БОТЕ*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💟._*группы*_
┣ ඬ⃟ 💟._*статус*_
┣ ඬ⃟ 💟._*владелец*_
┣ ඬ⃟ 💟._*соединять [ссылка]*_
┣ ඬ⃟ 💟._*аренда [аренда Бота]*_
╰═╡✯✯✯✯✯✯✯✯✯╞═╯


╭═〘 ✯✯✯✯✯✯✯✯✯ 〙═╮
┃            ➪  *ГРУППЫ* 
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 💎 ._*кик *[@Пльзователь]*_
┣ ඬ⃟ 💎 ._*дать_премиум*_ 
┣ ඬ⃟ 💎 ._*снять_премиум*_ 
┣ ඬ⃟ 💎 ._*листпрем*_
┣ ඬ⃟ 💎 ._*группа *<открыта / закрыта>*_
┣ ඬ⃟ 💎 ._*групптайм *<Выбор> <Время>*_
┣ ඬ⃟ 💎 ._*дать_админа *<@tag>*_
┣ ඬ⃟ 💎 ._*снять_админа *<@tag>*_
┣ ඬ⃟ 💎 ._*админы [вызов админов]*_ 
┣ ඬ⃟ 💎 ._*сбросить_ссылку*_
┣ ඬ⃟ 💎 ._*ссылка*_
┣ ඬ⃟ 💎 ._*Имя *[Название группы]*_
┣ ඬ⃟ 💎 ._*Описание *[Описание группы]*_
┣ ඬ⃟ 💎 ._*Приветствие *[Приветствие группы]*_
┣ ඬ⃟ 💎 ._*Прощание *[Прощание группы]*_
┣ ඬ⃟ 💎 ._*предупреждение*<@tag>*_
┣ ඬ⃟ 💎 ._*призраки*_
┣ ඬ⃟ 💎 ._*текст [текст стиль]*_
┣ ඬ⃟ 💎 ._*код [текст]*_
┣ ඬ⃟ 💎 ._*WhatsApp [номер 5219340434x]*_
╰═╡✯✯✯✯✯✯✯✯✯╞═╯


╭═〘 ✯✯✯✯✯✯✯✯✯ 〙═╮
┃    ➪  *Инструменты и Прикол*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 🛠️ ._*аудио [ответ на видео]*_ 
┣ ඬ⃟ 🛠️ ._*отчёт [отчёт об ошибке]*_
┣ ඬ⃟ 🛠️ ._*вопрос [текст]*_  
┣ ඬ⃟ 🛠️ ._*любовь [Имя]*_
┣ ඬ⃟ 🛠️ ._*пара [прикол]*_ 
┣ ඬ⃟ 🛠️ ._*закачать [картинка]*_
╰═╡✯✯✯✯✯✯✯✯✯╞═╯

╭═〘 ✯✯✯✯✯✯✯✯✯ 〙═╮
┃       ➪     *СТИКЕРЫ*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👽 ._*Стикер *[Картинка/Гифка]*_
┣ ඬ⃟ 👽 ._*с [делает стикер]*_
┣ ඬ⃟ 👽 ._*спиздил [переим-ть стикер]*_
╰═╡✯✯✯✯✯✯✯✯✯╞═╯

╭═〘 ✯✯✯✯✯✯✯✯✯ 〙═╮
┃ ➪ *ВЛАДЕЛЕЦ И МОДЕРАТОРЫ*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣ ඬ⃟ 👑 ._*включить приветствие*_
┣ ඬ⃟ 👑 ._*выключить приветствие*_
┣ ඬ⃟ 👑 ._*включить антиссылка*_
┣ ඬ⃟ 👑 ._*выключить антиссылка*_
┣ ඬ⃟ 👑 ._*включить антиссылка2*_
┣ ඬ⃟ 👑 ._*выключить антиссылка2*_
┣ ඬ⃟ 👑 ._*автоадмин*_ 
┣ ඬ⃟ 👑 ._*групплист*_ 
┣ ඬ⃟ 👑 ._*инфогрупп*_
┣ ඬ⃟ 👑 ._*включить ограничение*_
┣ ඬ⃟ 👑 ._*выключить ограничение*_
┣ ඬ⃟ 👑 ._*включить авточтение*_
┣ ඬ⃟ 👑 ._*выключить авточтение*_
┣ ඬ⃟ 👑 ._*включить аудио*_ 
┣ ඬ⃟ 👑 ._*выключить аудио*_ 
┣ ඬ⃟ 👑 ._*включить антиприват*_ 
┣ ඬ⃟ 👑 ._*выключить антиприват*_ 
┣ ඬ⃟ 👑 ._*включить модадмин*_ 
┣ ඬ⃟ 👑 ._*выключить модадмин*_
┣ ඬ⃟ 👑 ._*бан [@tag]*_ 
┣ ඬ⃟ 👑 ._*снять_бан [@tag]*_ 
┣ ඬ⃟ 👑 ._*банчат [блокировка чата]*_ 
┣ ඬ⃟ 👑 ._*антибан [разблок-ка]*_ 
┣ ඬ⃟ 👑 ._*репост [смс по всем группам]*_ 
┣ ඬ⃟ 👑 ._*вызов [вызов всей группы]*_ 
┣ ඬ⃟ 👑 ._*репост1 [смс по всем группам]*_ 
┣ ඬ⃟ 👑 ._*обновить*_ 
┣ ඬ⃟ 👑 ._*всем_пока*_ 
╰═╡✯✯✯✯✯✯✯✯✯╞═╯`.trim();
    if (m.isGroup) {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: m});
    } else {
      // await conn.sendFile(m.chat, vn, 'menu.mp3', null, m, true, { type: 'audioMessage', ptt: true})
      const fkontak2 = {'key': {'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': 'Halo'}, 'message': {'contactMessage': {'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`}}, 'participant': '0@s.whatsapp.net'};
      conn.sendMessage(m.chat, {image: pp, caption: str.trim(), mentions: [...str.matchAll(/@([0-9]{5,16}|0)/g)].map((v) => v[1] + '@s.whatsapp.net')}, {quoted: fkontak2});
    }
  } catch {
    conn.reply(m.chat, '*[❗ИНФОРМАЦИЯ❗] В МЕНЮ ЕСТЬ ОШИБКА И НЕ УДАЛОСЬ ЕЕ ОТПРАВИТЬ, ПОЖАЛУЙСТА, СООБЩИТЕ ОБ ЭТОМ ВЛАДЕЛЬЦУ БОТА*', m);
  }
};
handler.command = /^(меню)$/i;
handler.exp = 50;
handler.fail = null;
export default handler;
function clockString(ms) {
  const h = isNaN(ms) ? '--' : Math.floor(ms / 3600000);
  const m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60;
  const s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60;
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(':');
}
