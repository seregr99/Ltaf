let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The Shadow Borkers - Bot*

*➤ Номер моего создателя:*
*1.-* Wa.me/+79054731060

*2.-* Wa.me/+79054731060

*3.-* Wa.me/+79054731060

*4.-* Wa.me/+79054731060

*5.-* Wa.me/+79054731060

*6.-* Wa.me/+79054731060

*7.-* Wa.me/+79054731060

*8.-* Wa.me/+79054731060

*9.-* Wa.me/+79054731060

*10.-* Wa.me/+79054731060

*11.-* Wa.me/+79054731060

*12.-* Wa.me/+79054731060

*13.-* Wa.me/+79054731060

*14.-* Wa.me/+79054731060

*15.-* Wa.me/+79054731060
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
