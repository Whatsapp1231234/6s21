 
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner }) => {

  let isEnable = /true|включить|(turn)?on|1/i.test(command)
  let chat = global.db.data.chats[m.chat]
  let user = global.db.data.users[m.sender]
  let bot = global.db.data.settings[conn.user.jid] || {}
  let type = (args[0] || '').toLowerCase()
  let isAll = false, isUser = false
  switch (type) {
    case 'приветствие':
    case 'bv':
    case 'bienvenida':
      if (!m.isGroup) {
        if (!isOwner) {
          global.dfail('group', m, conn)
          throw false
        }
      } else if (!isAdmin) {
        global.dfail('admin', m, conn)
        throw false
      }
      chat.welcome = isEnable
      break
      
      case 'detect':
      case 'detector':
        if (!m.isGroup) {
         if (!isOwner) {
           global.dfail('group', m, conn)
          throw false
        }
       } else if (!isAdmin) {
         global.dfail('admin', m, conn)
         throw false
       }
       chat.detect = isEnable
     break
    
    case 'антиудаление':
    case 'delete':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.delete = !isEnable
      break

    case 'document':
    case 'documento':
    if (m.isGroup) {
        if (!(isAdmin || isOwner)) return dfail('admin', m, conn)
      }
    chat.useDocument = isEnable
    break
    case 'public':
    case 'publico':
      isAll = true
      if (!isROwner) {
        global.dfail('rowner', m, conn)
        throw false
      }
      global.opts['self'] = !isEnable
      break
    case 'антиссылка':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLink = isEnable
      break
    case 'антиссылка2':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiLinki = isEnable
      break
      
      case 'captcha':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.captcha = isEnable
      break
      case 'антиклон':
      if (m.isGroup) {
        if (!(isAdmin || isOwner)) {
          global.dfail('admin', m, conn)
          throw false
        }
      }
      chat.antiBotClone = isEnable
      break
      
      case 'nsfw':
      case '+18':
       if (m.isGroup) {
         if (!(isAdmin || isOwner)) {
           global.dfail('admin', m, conn)
            throw false
           }}
    chat.nsfw = isEnable          
    break

    case 'уровень':
    isUser = true
     user.autolevelup = isEnable
     break
     
     case 'chatbot':
     case 'autosimi':
     case 'autosimsimi':
      isUser = true
      user.chatbot = isEnable
     break
     
    case 'ограничить':
    case 'restringir':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      bot.restrict = isEnable
      break
    
    case 'onlypv':
    case 'onlydm':
    case 'onlymd':
    case 'solopv':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      //global.opts['solopv'] = isEnable
      bot.solopv = isEnable
      break
      
    case 'группы':
    case 'onlygp':
    case 'grouponly':
    case 'sologp':
    case 'sologrupo':
      isAll = true
      if (!isOwner) {
        global.dfail('owner', m, conn)
        throw false
      }
      //global.opts['sologp'] = isEnable
      bot.sologp = isEnable
      break
      
    default:
      //if (!/[01]/.test(command)) return await conn.sendMessage(m.chat, listMessage, { quoted: m })
      if (!/[01]/.test(command)) return m.reply(`
≡ Lista de Opciones

┌─⊷ *ADMIN*
▢ приветствие
▢ антиссылка
▢ антиссылка
▢ антиссылка 
▢ антиудаление
▢ nsfw
└───────────── 
┌─⊷ *USERS*
▢ autolevelup
▢ chatbot 
└─────────────
┌─⊷ *OWNER*
▢ antibotclone
▢ public
▢ solopv
▢ sologp
└─────────────
*📌 Ejemplo :*
*${usedPrefix}on* welcome
*${usedPrefix}off* welcome
`)
      throw false
}

m.reply(`
✅ *${type.toUpperCase()}* *${isEnable ? `${mssg.nable}` : `${mssg.disable}`}* ${isAll ? `${mssg.toBot}` : isUser ? '' : `${mssg.toGp}`}
`.trim()) 

}
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['nable']
handler.command = /^((вк|вык)лючить|(tru|fals)e|(turn)?o(n|ff)|[01])$/i

export default handler
