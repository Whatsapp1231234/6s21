
let handler = async function (m, { conn, text, usedPrefix }) {
  
let m2 = `
≡ Use estos comandos sin el prefijo: *${usedPrefix}*
╭═══〘 ✯✯✯✯✯✯✯✯✯ 〙══╮
║    ◉— *Хулиган* —◉
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
║➤ *Привет*
║≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡║
╰═══╡✯✯✯✯✯✯✯✯✯╞═══╯



┏━━━━━━━━━━━━━━━━┓
┃ *<𝐌𝐄𝐍𝐔/>*
┃≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡≡┃
┣*
┣ ඬ⃟сброситьссылку
┣ ඬ⃟прощание
┣ ඬ⃟описание
┣ ඬ⃟название
┣ ඬ⃟предупреждения
┣ ඬ⃟снести
┣ ඬ⃟админ
┣ ඬ⃟внимание
┣ ඬ⃟удалить
┣ ඬ⃟группу открыть 
┣ ඬ⃟группу закрыть
┣ ඬ⃟снятьадмина
┣ ඬ⃟молчуны
┣ ඬ⃟вызов
┣ ඬ⃟инфогруппы
┣ ඬ⃟ссылка
┣ ඬ⃟датьадмина
┣ ඬ⃟создатель
┣ ඬ⃟сбросАренды
┗━━━━━━━━━━━━━━━━┛
`
    let pp = './src/fg_logo.jpg' 
    /*conn.sendButton(m.chat, m2, mssg.ig, pp, [
      ['⏍ Info', `${usedPrefix}botinfo`],
      ['⌬ Grupos', `${usedPrefix}gpdylux`]
    ],m, rpyt)*/
    conn.sendFile(m.chat, pp, 'menu.jpg', m2, m, null, rpl)
   
}

handler.help = ['menu2']
handler.tags = ['main']
handler.command = ['меню2', 'audios'] 

export default handler
