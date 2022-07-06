let handler = async (m, {
	conn
}) => {
	await m.reply(await tiny('selamat tinggal semuanya 😊'))
	db.data.chats[m.chat] = {}
	await delay(1500)
	await conn.groupLeave(m.chat)
}
handler.help = ['exit']
handler.tags = ['Владелец']
handler.command = /^(exit|out|leave|metu)$/i
handler.Владелец = true
handler.group = true
module.exports = handler