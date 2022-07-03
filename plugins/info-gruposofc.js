let media = './Menu2.jpg'
let handler = async (m, { conn, command }) => conn.sendButton(m.chat, `
*Hola 👋🏻, unete a los grupos oficiales para pasar un rato agradable usando el Bot o platicando con la familia de The Shadow Borkers - Bot*

*➤ Grupos oficiales del Bot:*
*1.-* https://chat.whatsapp.com/JlomZPEgo3bLmzjGUYPfy

*2.-* https://chat.whatsapp.com/DbXBmsydWBE1ZN3EoY0hs

*3.-* https://chat.whatsapp.com/BW0P22xx7EGBTdH5IM81F

*4.-* https://chat.whatsapp.com/CjexkGVr37J6GuSdDVAzC

*5.-* https://chat.whatsapp.com/H7NUXdrGlFg20ae3bqgwl

*6.-* https://chat.whatsapp.com/GvrLSUSzVuT9P17CKfdxD

*7.-* https://chat.whatsapp.com/EpzuymKm6lG08k6J2Dwx7

*8.-* https://chat.whatsapp.com/IW12dLVoyWGHreGpX7rQI

*9.-* https://chat.whatsapp.com/Ef89aIuOLeD3Fa2sYmKwp

*10.-* https://chat.whatsapp.com/C2WYb1hiiijCI13QSUZL

*11.-* https://chat.whatsapp.com/GKdDtQKWP5LCgpbzucz6

*12.-* https://chat.whatsapp.com/DZA9djOzBn51ZpsCBj6a

*13.-* https://chat.whatsapp.com/EIczvnvVZtTKRgxEbWti

*14.-* https://chat.whatsapp.com/IR0NQSDFD6UBMT5q30QI

*15.-* https://chat.whatsapp.com/CMd00ZYfwXZHEoEIswHp
`.trim(), wm, media, [['𝙸𝚁 𝙰𝙻 𝙼𝙴𝙽𝚄 𝙿𝚁𝙸𝙽𝙲𝙸𝙿𝙰𝙻', '.menu']], m)
handler.command = /^linkgc|grupos$/i
export default handler
