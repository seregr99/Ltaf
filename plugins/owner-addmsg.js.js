let handler = async (m, { command, usedPrefix, text }) => {
    let M = m.constructor
    let which = command.replace(/agregar/i, '')
    if (!m.quoted) throw '*[❗𝐈𝐍𝐅𝐎❗] 𝚁𝙴𝚂𝙿𝙾𝙽𝙳𝙴 𝙰 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾, 𝙼𝙴𝙽𝚂𝙰𝙹𝙴, 𝙸𝙼𝙰𝙶𝙴𝙽, 𝙴𝚃𝙲. 𝚈 𝙰𝙽̃𝙰𝙳𝙴 𝚄𝙽 𝚃𝙴𝚇𝚃𝙾 𝙲𝙾𝙼𝙾 𝙿𝙰𝙻𝙰𝙱𝚁𝙰 𝙲𝙻𝙰𝚅𝙴*'
    if (!text) throw `*[❗𝐈𝐍𝐅𝐎❗] 𝚄𝚃𝙸𝙻𝙸𝚉𝙰𝚁 *${usedPrefix}list${which}* 𝙿𝙰𝚁𝙰 𝚅𝙴𝚁 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂`
    let msgs = global.db.data.msgs
    if (text in msgs) throw `*[❗𝐈𝐍𝐅𝐎❗] '${text}' 𝚂𝙴 𝙰𝙷 𝚁𝙴𝙶𝙸𝚂𝚃𝚁𝙰𝙳𝙾 𝙴𝙽 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂`
    msgs[text] = M.toObject(await m.getQuotedObj())
    m.reply(`*[❗𝐈𝐍𝐅𝐎❗] 𝙼𝙴𝙽𝚂𝙰𝙹𝙴 𝙰𝙶𝚁𝙴𝙶𝙰𝙳𝙾 𝙴𝚇𝙸𝚃𝙾𝚂𝙰𝙼𝙴𝙽𝚃𝙴 𝙰 𝙻𝙰 𝙻𝙸𝚂𝚃𝙰 𝙳𝙴 𝙼𝙴𝙽𝚂𝙰𝙹𝙴𝚂 𝙲𝙾𝙼𝙾 '${text}'*\n*𝙰𝙲𝙲𝙴𝙳𝙴 𝙲𝙾𝙽 ${usedPrefix}ver${which} ${text}*`)
}
handler.help = ['vn', 'msg', 'video', 'audio', 'img', 'sticker'].map(v => 'добавить' + v + ' <text>')
handler.tags = ['database']
handler.command = /^agregar(vn|msg|video|audio|img|sticker)$/
handler.rowner = true
export default handler