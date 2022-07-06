let handler = async (m) => {
	db.data.chats[m.chat].isBanned = false
	m.reply('Done!')
}
handler.help = ['unbanchat']
handler.tags = ['Владелец']
handler.command = /^unbanchat$/i
handler.Владелец = true

module.exports = handler