let handler = async (m, { conn, participants, groupMetadata }) => {
const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png'
const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, antiLink2, modohorny, autosticker, audios, delete: del } = global.db.data.chats[m.chat]
const groupAdmins = participants.filter(p => p.admin)
const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n')
const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net'
let text = `*γ πππππππππππ πππ πππππ γ*\n
*πΈπ³π΄π½ππΈπ΅πΈπ²π°π²πΈπΎπ½ π³π΄π» πΆπππΏπΎ:* 
${groupMetadata.id}

*π½πΎπΌπ±ππ΄:* 
${groupMetadata.subject}

*π³π΄ππ²ππΈπΏπ²πΈπΎπ½:* 
${groupMetadata.desc?.toString() || 'ππΈπ½ π³π΄ππ²ππΈπΏπ²πΈπΎπ½'}

*ππΎππ°π» π³π΄ πΏπ°πππΈπ²πΈπΏπ°π½ππ΄π:*
${participants.length} Participantes

*π²ππ΄π°π³πΎπ π³π΄π» πΆπππΏπΎ:* 
@${owner.split('@')[0]}

*π°π³πΌπΈπ½π π³π΄π» πΆπππΏπΎ:*
${listAdmin}

*πΎπΏπ²πΈπΎπ½π΄π π°πππΎπΌπ°ππΈπ²π°π:*
ββ ΠΡΠΈΠ²Π΅ΡΡΡΠ²ΠΈΠ΅: ${welcome ? 'β' : 'β'}
ββ Π’Π΅ΡΡ: ${detect ? 'β' : 'β'} 
ββ ΠΠ½ΡΠΈΡΡΡΠ»ΠΊΠ°: ${antiLink ? 'β' : 'β'} 
ββ ΠΠ°Π½ΡΠΈΡΡΡΠ»ΠΊΠ° πΈ: ${antiLink2 ? 'β' : 'β'} 
ββ πΌπΎπ³πΎ π·πΎππ½π: ${modohorny ? 'β' : 'β'} 
ββ ΠΠ²ΡΠΎ ΡΡΠΈΠΊΠ΅Ρ: ${autosticker ? 'β' : 'β'} 
ββ ΠΡΠ΄ΠΈΠ΅: ${audios ? 'β' : 'β'} 
`.trim()
conn.sendFile(m.chat, pp, 'error.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] })
}
handler.help = ['infogrup']
handler.tags = ['group']
handler.command = /^(infogrupo|gro?upinfo|info(gro?up|gc))$/i
handler.group = true
export default handler
