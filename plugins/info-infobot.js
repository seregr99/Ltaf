import os from 'os'
import util from 'util'
import sizeFormatter from 'human-readable'
import MessageType from '@adiwajshing/baileys'
import fs from 'fs'
import { performance } from 'perf_hooks'
let handler = async (m, { conn, usedPrefix }) => {
let _uptime = process.uptime() * 1000
let uptime = clockString(_uptime) 
let totalreg = Object.keys(global.db.data.users).length
const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
const groups = chats.filter(([id]) => id.endsWith('@g.us'))
const used = process.memoryUsage()
const { restrict } = global.db.data.settings[conn.user.jid] || {}
const { autoread } = global.opts
let old = performance.now()
let neww = performance.now()
let speed = neww - old
let info = `
╠═〘 БОТ ИНФО 〙 ═
╠
╠➥ [🤴🏻] СОЗДАТЕЛЬ: *ЦАРЬ*
╠➥ [#️⃣] НОМЕР СОЗДАТЕЛЯ: *+79054731060*
╠➥ [🎳] ПРЕФИКС: *${usedPrefix}*
╠➥ [🔐] ПРИВАТНЫЕ ЧАТЫ: *${chats.length - groups.length}*
╠➥ [🦜] ГРУППОВЫЕ ЧАТЫ: *${groups.length}* 
╠➥ [💡] ВСЕГО ЧАТОВ: *${chats.length}* 
╠➥ [🚀] АКТИВНОСТЬ: *${uptime}*
╠➥ [🎩] ПОЛЬЗОВАТЕЛИ: *${totalreg} 𝚗𝚞𝚖𝚎𝚛𝚘𝚜*
╠➥ [👨‍🦯] СКОРОСТЬ: 
╠  *${speed}* 
╠  *Милисекунды*
╠➥ [☑️] АВТОЧИТАНИЕ: ${autoread ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'}
╠➥ [❗] 𝚁𝙴𝚂𝚃𝚁𝙸𝙲𝚃: ${restrict ? '*𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*' : '*𝚍𝚎𝚜𝚊𝚌𝚝𝚒𝚟𝚊𝚍𝚘*'} 
╠
╠═〘 Бот Царя 〙 ═
`.trim() 
conn.reply(m.chat, info, m, {
contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, 
title: 'ИНФО БОТ',
body: 'БОТ ЦАРЯ',         
previewType: 0, thumbnail: fs.readFileSync("./Menu2.jpg"),
sourceUrl: `ХРЕН ВАМ ХА ХА ХА`}}})
}
handler.help = ['infobot', 'speed']
handler.tags = ['info', 'tools']
handler.command = /^(ping|speed|infobot)$/i
export default handler

function clockString(ms) {
let h = Math.floor(ms / 3600000)
let m = Math.floor(ms / 60000) % 60
let s = Math.floor(ms / 1000) % 60
console.log({ms,h,m,s})
return [h, m, s].map(v => v.toString().padStart(2, 0) ).join(':')}
