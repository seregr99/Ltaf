let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola ๐๐ป, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The Shadow Borkers - Bot*

*โค ะะพะผะตั ะผะพะตะณะพ ัะพะทะดะฐัะตะปั:*
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
`.trim(), wm, media, [['๐ธ๐ ๐ฐ๐ป ๐ผ๐ด๐ฝ๐ ๐ฟ๐๐ธ๐ฝ๐ฒ๐ธ๐ฟ๐ฐ๐ป', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
